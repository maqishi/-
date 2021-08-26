#!/bin/env python3
# -*- coding: utf-8 -*

# cron 0 0 0 * * *
#只做助力和领助力奖励
# export park_pins=["pt_pin1","pt_pin2"]

from urllib.parse import unquote, quote
import time, datetime, os, sys
import requests, json, re, random
import threading

UserAgent = ''
script_name = '汪汪乐园助力'

def printT(msg):
    print("[{}]: {}".format(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), msg))
    sys.stdout.flush()

def delEnvs(label):
    try:
        if label == 'True' or label == 'yes' or label == 'true' or label == 'Yes':
            return True
        elif label == 'False' or label == 'no' or label == 'false' or label == 'No':
            return False
    except:
        pass
    try:
        if '.' in label:
            return float(label)
        elif '&' in label:
            return label.split('&')
        elif '@' in label:
            return label.split('@')
        else:
            return int(label)
    except:
        return label

class getJDCookie():
    # 适配青龙平台环境ck
    def getckfile(self):
        ql_new = '/ql/config/env.sh'
        ql_old = '/ql/config/cookie.sh'
        if os.path.exists(ql_new):
            printT("当前环境青龙面板新版")
            return ql_new
        elif os.path.exists(ql_old):
            printT("当前环境青龙面板旧版")
            return ql_old

    # 获取cookie
    def getallCookie(self):
        cookies = ''
        ckfile = self.getckfile()
        try:
            if os.path.exists(ckfile):
                with open(ckfile, "r", encoding="utf-8") as f:
                    cks_text = f.read()
                if 'pt_key=' in cks_text and 'pt_pin=' in cks_text:
                    r = re.compile(r"pt_key=.*?pt_pin=.*?;", re.M | re.S | re.I)
                    cks_list = r.findall(cks_text)
                    if len(cks_list) > 0:
                        for ck in cks_list:
                            cookies += ck
            return cookies
        except Exception as e:
            printT(f"【getCookie Error】{e}")

    # 检测cookie格式是否正确
    def getUserInfo(self, ck, user_order, pinName):
        url = 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion?orgFlag=JD_PinGou_New&callSource=mainorder&channel=4&isHomewhite=0&sceneval=2&sceneval=2&callback='
        headers = {
            'Cookie': ck,
            'Accept': '*/*',
            'Connection': 'close',
            'Referer': 'https://home.m.jd.com/myJd/home.action',
            'Accept-Encoding': 'gzip, deflate, br',
            'Host': 'me-api.jd.com',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
            'Accept-Language': 'zh-cn'
        }
        try:
            resp = requests.get(url=url, headers=headers, timeout=60).json()
            if resp['retcode'] == "0":
                nickname = resp['data']['userInfo']['baseInfo']['nickname']
                return ck, nickname
            else:
                context = f"账号{user_order}【{pinName}】Cookie 已失效！请重新获取。"
                print(context)
                return ck, False
        except Exception:
            context = f"账号{user_order}【{pinName}】Cookie 已失效！请重新获取。"
            print(context)
            return ck, False

    def getcookies(self):
        """
        :return: cookiesList,userNameList,pinNameList
        """
        cookiesList = []
        pinNameList = []
        nickNameList = []
        cookies = self.getallCookie()
        if 'pt_key=' in cookies and 'pt_pin=' in cookies:
            r = re.compile(r"pt_key=.*?pt_pin=.*?;", re.M | re.S | re.I)
            result = r.findall(cookies)
            if len(result) >= 1:
                printT("您已配置{}个账号".format(len(result)))
                user_order = 1
                for ck in result:
                    r = re.compile(r"pt_pin=(.*?);")
                    pinName = r.findall(ck)
                    pinName = unquote(pinName[0])
                    # 获取账号名
                    ck, nickname = self.getUserInfo(ck, user_order, pinName)
                    if nickname != False:
                        cookiesList.append(ck)
                        pinNameList.append(pinName)
                        nickNameList.append(nickname)
                        user_order += 1
                    else:
                        user_order += 1
                        continue
                if len(cookiesList) > 0:
                    return cookiesList, pinNameList, nickNameList
                else:
                    printT("没有可用Cookie，已退出")
                    exit(4)
        else:
            printT("没有可用Cookie，已退出")
            exit(4)

def getPinEnvs():
    if "park_pins" in os.environ:
        if len(os.environ["park_pins"]) != 0:
            park_pins = os.environ["park_pins"]
            park_pins = park_pins.replace('[', '').replace(']', '').replace('\'', '').replace(' ', '').split(',')
            printT(f"已获取并使用Env环境 park_pins:{park_pins}")
            return park_pins
        else:
            printT('请先配置export park_pins=["pt_pin1","pt_pin2"]')
            exit(4)
    printT('请先配置export park_pins=["pt_pin1","pt_pin2"]')
    exit(4)

def res_post(cookie, body,functionId):
    url = "https://api.m.jd.com/api"
    headers = {
        "Host": "api.m.jd.com",
        "content-length": "150",
        "accept": "application/json, text/plain, */*",
        "origin": "https://joypark.jd.com",
        "user-agent": "jdltapp;android;3.6.2;10;4636532323835366-1683336356836626;network/UNKNOWN;model/MI 8;addressid/4641763566;aid/dc52285fa836e8fb;oaid/a28cc4ac8bda0bf6;osVer/29;appBuild/1712;psn/EBvS mKMxShXC1KpTFsfyGxxRBQbhYHj|937;psq/14;adk/;ads/;pap/JA2020_3112531|3.6.2|ANDROID 10;osv/10;pv/573.14;installationId/5db09a34775c4da4a9a175bb42e48f94;jdv/0|kong|t_1001681071_|jingfen|e8c2366d1bad4ff48c9e382c0da7a81c|1629109520776|1629109528;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36",
        "content-type": "application/x-www-form-urlencoded",
        "referer": "https://joypark.jd.com/?activityId\u003dLsQNxL7iWDlXUs6cFl-AAg\u0026sid\u003dc2a66a2aeb6cbac967c1d3484e87bc9w\u0026un_area\u003d2_2830_51806_0",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,en-US;q\u003d0.9",
        "cookie": cookie,
        "x-requested-with": "com.jd.jdlite"
    }
    body = json.dumps(body)
    t = str(int(time.time() * 1000))
    data = {
        'functionId': functionId,
        'body': body,
        't': t,
        'appid': 'activities_platform'
    }
    res = requests.post(url=url, headers=headers, data=data).json()
    return res


def get_invitePin(cookie):
    body = {"taskId": "", "inviteType": "", "inviterPin": "", "linkId": "LsQNxL7iWDlXUs6cFl-AAg"}
    res = res_post(cookie, body,'joyBaseInfo')
    # print(res)
    try:
        if res['code'] == 0 and res['errMsg'] == 'success':
            # print(res['data']['invitePin'])
            return res['data']['invitePin']
    except:
        return '-1'

def get_reward(cookie,nickname):
    body = {"taskType": "SHARE_INVITE", "taskId": "167", "linkId": "LsQNxL7iWDlXUs6cFl-AAg"}
    while True:
        res = res_post(cookie, body, 'apTaskDrawAward')
        # print(res)
        if res['success'] == False and '领取次数不足' in res['errMsg']:
            print('---------------------'+nickname+'领取互助奖励完毕!')
            break

def help(mycookie, nickname, cookiesList, nickNameList):
    inviterPin = get_invitePin(mycookie)
    if inviterPin != '-1':
        body = {"taskId": "167", "inviteType": "1", "inviterPin": inviterPin, "linkId": "LsQNxL7iWDlXUs6cFl-AAg"}
        for i in range(len(cookiesList)):
            res = res_post(cookiesList[i],body,'joyBaseInfo')
            # print(res)
            try:
                if res['code'] == 0 and res['errMsg'] == 'success':
                    if res['data']['helpState'] == 1:
                        print('【'+nickNameList[i]+'助力'+nickname+'】：'+'助力成功！')
                    elif res['data']['helpState'] == 0:
                        print('【'+nickNameList[i]+'助力'+nickname+'】：'+'自己不能助力自己！')
                    elif res['data']['helpState'] == 2:
                        print('【'+nickNameList[i]+'助力'+nickname+'】：'+'已经助力过了！')
                    elif res['data']['helpState'] == 3:
                        print('【'+nickNameList[i]+'助力'+nickname+'】：'+'没有助力次数了！')
                    elif res['data']['helpState'] == 4:
                        print('----------------------------------'+nickname+'助力完成了！')
                        break
            except:
                pass
        get_reward(mycookie,nickname)


def use_thread(jd15_cookies, nicks, cookiesList, nickNameList):
    threads = []
    for i in range(len(jd15_cookies)):
        threads.append(
            threading.Thread(target=help, args=(jd15_cookies[i], nicks[i], cookiesList, nickNameList))
        )
    for t in threads:
        t.start()
    for t in threads:
        t.join()


def start():
    printT("############{}##########".format(script_name))
    park_pins = getPinEnvs()
    get_jd_cookie = getJDCookie()
    cookiesList, pinNameList, nickNameList = get_jd_cookie.getcookies()
    jd15_cookies = []
    nicks = []
    for ckname in park_pins:
        try:
            ckNum = pinNameList.index(ckname)
            jd15_cookies.append(cookiesList[ckNum])
            nicks.append(nickNameList[ckNum])
        except Exception as e:
            try:
                ckNum = pinNameList.index(unquote(ckname))
                jd15_cookies.append(cookiesList[ckNum])
                nicks.append(nickNameList[ckNum])
            except:
                print(f"请检查被助力账号【{ckname}】名称是否正确？ck是否存在？提示：助力名字可填pt_pin的值、也可以填账号名。")
                continue
    if len(jd15_cookies) == 0:
        exit(4)
    use_thread(jd15_cookies, nicks, cookiesList, nickNameList)


if __name__ == '__main__':
    start()
