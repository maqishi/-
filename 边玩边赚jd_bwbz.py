#!/usr/bin/python3
# -*- coding: utf8 -*-
"""
cron: 30 7 * * *
new Env('边玩边赚');
"""
# 是否开启通知，Ture：发送通知，False：不发送
isNotice = True
# UA 可自定义你的, 默认随机生成UA。
UserAgent = ''

import json
import os, re, sys
from urllib.parse import unquote

try:
    import requests
except Exception as e:
    print(e, "\n缺少requests 模块，请在青龙后台-依赖管理-Python3 搜索安装")
    exit(3)

try:
    import aiohttp
except Exception as e:
    print(e, "\n缺少aiohttp 模块，请在青龙后台-依赖管理-Python3 搜索安装")
    exit(3)

try:
    import asyncio
except Exception as e:
    print(e, "\n缺少asyncio 模块，请在青龙后台-依赖管理-Python3 搜索安装")
    exit(3)

try:
    import random
except Exception as e:
    print(e, "\n缺少random 模块，请在青龙后台-依赖管理-Python3 搜索安装")
    exit(3)

##############

requests.packages.urllib3.disable_warnings()
# host_api = 'https://api.m.jd.com/client.action'
pwd = os.path.dirname(os.path.abspath(__file__)) + os.sep


def getEnvs(label):
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


class getJDCookie(object):
    # 适配各种平台环境ck

    def getckfile(self):
        global v4f
        curf = pwd + 'JDCookies.txt'
        v4f = '/jd/config/config.sh'
        ql_new = '/ql/config/env.sh'
        ql_old = '/ql/config/cookie.sh'
        if os.path.exists(curf):
            with open(curf, "r", encoding="utf-8") as f:
                cks = f.read()
                f.close()
            r = re.compile(r"pt_key=.*?pt_pin=.*?;", re.M | re.S | re.I)
            cks = r.findall(cks)
            if len(cks) > 0:
                return curf
            else:
                pass
        if os.path.exists(ql_new):
            print("当前环境青龙面板新版")
            return ql_new
        elif os.path.exists(ql_old):
            print("当前环境青龙面板旧版")
            return ql_old
        elif os.path.exists(v4f):
            print("当前环境V4")
            return v4f
        return curf

    # 获取cookie
    def getCookie(self):
        global cookies
        ckfile = self.getckfile()
        try:
            if os.path.exists(ckfile):
                with open(ckfile, "r", encoding="utf-8") as f:
                    cks = f.read()
                    f.close()
                if 'pt_key=' in cks and 'pt_pin=' in cks:
                    r = re.compile(r"pt_key=.*?pt_pin=.*?;", re.M | re.S | re.I)
                    cks = r.findall(cks)
                    if len(cks) > 0:
                        if 'JDCookies.txt' in ckfile:
                            print("当前获取使用 JDCookies.txt 的cookie")
                        cookies = ''
                        for i in cks:
                            if 'pt_key=xxxx' in i:
                                pass
                            else:
                                cookies += i
                        return
            else:
                with open(pwd + 'JDCookies.txt', "w", encoding="utf-8") as f:
                    cks = "#多账号换行，以下示例：（通过正则获取此文件的ck，理论上可以自定义名字标记ck，也可以随意摆放ck）\n账号1【Curtinlv】cookie1;\n账号2【TopStyle】cookie2;"
                    f.write(cks)
                    f.close()
            if "JD_COOKIE" in os.environ:
                if len(os.environ["JD_COOKIE"]) > 10:
                    cookies = os.environ["JD_COOKIE"]
                    print("已获取并使用Env环境 Cookie")
        except Exception as e:
            print(f"【getCookie Error】{e}")

    # 检测cookie格式是否正确
    def getUserInfo(self, ck, pinName, userNum):
        url = 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion?orgFlag=JD_PinGou_New&callSource=mainorder&channel=4&isHomewhite=0&sceneval=2&sceneval=2&callback=GetJDUserInfoUnion'
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
            resp = requests.get(url=url, verify=False, headers=headers, timeout=60).text
            r = re.compile(r'GetJDUserInfoUnion.*?\((.*?)\)')
            result = r.findall(resp)
            userInfo = json.loads(result[0])
            nickname = userInfo['data']['userInfo']['baseInfo']['nickname']
            return ck, nickname
        except Exception:
            context = f"账号{userNum}【{pinName}】Cookie 已失效！请重新获取。"
            print(context)
            return ck, False

    def iscookie(self):
        """
        :return: cookiesList,userNameList,pinNameList
        """
        cookiesList = []
        userNameList = []
        pinNameList = []
        if 'pt_key=' in cookies and 'pt_pin=' in cookies:
            r = re.compile(r"pt_key=.*?pt_pin=.*?;", re.M | re.S | re.I)
            result = r.findall(cookies)
            if len(result) >= 1:
                print("您已配置{}个账号\n".format(len(result)))
                u = 1
                for i in result:
                    r = re.compile(r"pt_pin=(.*?);")
                    pinName = r.findall(i)
                    pinName = unquote(pinName[0])
                    # 获取账号名
                    ck, nickname = self.getUserInfo(i, pinName, u)
                    if nickname != False:
                        cookiesList.append(ck)
                        userNameList.append(nickname)
                        pinNameList.append(pinName)
                    else:
                        u += 1
                        continue
                    u += 1
                if len(cookiesList) > 0 and len(userNameList) > 0:
                    return cookiesList, userNameList, pinNameList
                else:
                    print("没有可用Cookie，已退出")
                    exit(3)
            else:
                print("cookie 格式错误！...本次操作已退出")
                exit(4)
        else:
            print("cookie 格式错误！...本次操作已退出")
            exit(4)


getCk = getJDCookie()
getCk.getCookie()

# 获取v4环境 特殊处理
try:
    with open(v4f, 'r', encoding='utf-8') as v4f:
        v4Env = v4f.read()
    r = re.compile(r'^export\s(.*?)=[\'\"]?([\w\.\-@#&=_,\[\]\{\}\(\)]{1,})+[\'\"]{0,1}$',
                   re.M | re.S | re.I)
    r = r.findall(v4Env)
    curenv = locals()
    for i in r:
        if i[0] != 'JD_COOKIE':
            curenv[i[0]] = getEnvs(i[1])
except:
    pass


def userAgent():
    """
    随机生成一个UA
    :return: jdapp;iPhone;9.4.8;14.3;xxxx;network/wifi;ADID/201EDE7F-5111-49E8-9F0D-CCF9677CD6FE;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone13,4;addressid/2455696156;supportBestPay/0;appBuild/167629;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1
    """
    if not UserAgent:
        uuid = ''.join(random.sample('123456789abcdef123456789abcdef123456789abcdef123456789abcdef', 40))
        addressid = ''.join(random.sample('1234567898647', 10))
        iosVer = ''.join(
            random.sample(["14.5.1", "14.4", "14.3", "14.2", "14.1", "14.0.1", "13.7", "13.1.2", "13.1.1"], 1))
        iosV = iosVer.replace('.', '_')
        iPhone = ''.join(random.sample(["8", "9", "10", "11", "12", "13"], 1))
        ADID = ''.join(random.sample('0987654321ABCDEF', 8)) + '-' + ''.join(
            random.sample('0987654321ABCDEF', 4)) + '-' + ''.join(random.sample('0987654321ABCDEF', 4)) + '-' + ''.join(
            random.sample('0987654321ABCDEF', 4)) + '-' + ''.join(random.sample('0987654321ABCDEF', 12))
        return f'jdapp;iPhone;10.0.4;{iosVer};{uuid};network/wifi;ADID/{ADID};supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone{iPhone},1;addressid/{addressid};supportBestPay/0;appBuild/167629;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS {iosV} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    else:
        return UserAgent


## 获取通知服务
class msg(object):
    def __init__(self, m=''):
        self.str_msg = m
        self.message()

    def message(self):
        global msg_info
        print(self.str_msg)
        try:
            msg_info = "{}\n{}".format(msg_info, self.str_msg)
        except:
            msg_info = "{}".format(self.str_msg)
        sys.stdout.flush()

    def getsendNotify(self, a=0):
        if a == 0:
            a += 1
        try:
            url = 'https://gitee.com/curtinlv/Public/raw/master/sendNotify.py'
            response = requests.get(url)
            if 'curtinlv' in response.text:
                with open('sendNotify.py', "w+", encoding="utf-8") as f:
                    f.write(response.text)
            else:
                if a < 5:
                    a += 1
                    return self.getsendNotify(a)
                else:
                    pass
        except:
            if a < 5:
                a += 1
                return self.getsendNotify(a)
            else:
                pass

    def main(self):
        global send
        cur_path = os.path.abspath(os.path.dirname(__file__))
        sys.path.append(cur_path)
        if os.path.exists(cur_path + "/sendNotify.py"):
            try:
                from sendNotify import send
            except:
                self.getsendNotify()
                try:
                    from sendNotify import send
                except:
                    print("加载通知服务失败~")
        else:
            self.getsendNotify()
            try:
                from sendNotify import send
            except:
                print("加载通知服务失败~")
        ###################


msg().main()


async def get_headers():
    """
    获取请求头
    :return:
    """
    headers = {
        'request-from': 'native',
        'Connection': 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://h5.m.jd.com',
        'User-Agent': userAgent(),
        'Host': 'api.m.jd.com',
        'Referer': 'https://h5.m.jd.com/',
        'Accept-Language': 'zh-cn',
        'Accept': 'application/json, text/plain, */*'
    }
    return headers



async def request(session, body=''):
    """
    请求数据
    :param session:
    :param fn:
    :param body:
    :return:
    """
    try:
        url = 'https://api.m.jd.com/client.action'
        if body:
            response = await session.post(url=url, data=body)
        else:
            response = await session.get(url)
        text = await response.text()
        data = json.loads(text)
        await asyncio.sleep(1)
        return data
    except Exception as e:
        println('{}, 请求服务器数据失败, {}'.format(e.args))


async def playUser(session):
    """
    查询用户信息
    :return:
    """
    body = 'functionId=playUser&body={"client": "app", "whImg": "", "nickName": ""}&client=wh5&clientVersion=1.0.0'
    data = await request(session, body)
    await asyncio.sleep(1)
    if data['code'] == '0':
        nickname = data['data']['nickname']
        achieve = data['data']['achieve']
    else:
        print(f"""查询签到情况异常{data}""")
    return achieve


async def playTaskCenter(session):
    """
    获取任务列表
    :return:
    """
    body = 'functionId=playTaskCenter&body={"client": "app"}&client=wh5&clientVersion=1.0.0'
    data = await request(session, body)
    await asyncio.sleep(1)
    task_list = data['data']
    print(f"""开始执行-每日任务""")
    for task in task_list:
        if task['status'] == 2:  # 助力任务
            print('任务《{}》【已做过】!'.format(task["name"]))
        elif task['status'] == 0:  # 助力任务
            print('任务《{}》【开始做】!'.format(task["name"]))
            await playAction(session, task)
        else:
            print('任务《{}》暂未实现!'.format(task['status']))



async def playAction(session, task):
    """
    查询用户信息
    :return:
    """
    playId = str(task['playId'])
    body = 'functionId=playAction&body={"client":"app","playId":"' + playId + '","type":"1"}&client=wh5&clientVersion=1.0.0'
    data = await request(session, body)
    await asyncio.sleep(1)
    if data:
        achieve = task['achieve']
        name = task["name"]
        print(f"""{name}获得成就值：{achieve}""")


async def run():
    """
    程序入口
    :return:
    """
    global cookiesList, userNameList, pinNameList, cookies, qgendtime, tthbadvertId, ppladvertId, taskList
    scriptName = '### 边玩边赚 ###'
    print(scriptName)
    cookiesList, userNameList, pinNameList = getCk.iscookie()
    user_num = 1
    for ck, userName in zip(cookiesList, userNameList):
        ck = ck.rstrip(';')
        ck = dict(item.split("=") for item in ck.split(";"))
        print(f"""账号{user_num}:{userName}""")
        headers = await get_headers()
        async with aiohttp.ClientSession(headers=headers, cookies=ck) as session:
            achieve1 = await playUser(session)
            await asyncio.sleep(0.5)
            await playTaskCenter(session)
            await asyncio.sleep(0.5)
            achieve2 = await playUser(session)
            await asyncio.sleep(0.5)
            achieve = achieve2 - achieve1
            msg(f"""账号{user_num}:{userName}当前成就值：{achieve2}本次获得：{achieve}\n""")
        user_num += 1
    if isNotice:
        send(scriptName, msg_info)
    else:
        print("\n", scriptName, "\n", msg_info)


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run())

