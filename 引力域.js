const $ = new Env('鏌犳寮曞姏鍩�');
var request = require("request");
var crypto = require("crypto");
var rrsa = require("./yinliyu");
let status;
status = (status = ($.getval("ylystatus") || "1") ) > 1 ? `${status}` : ""; // 璐﹀彿鎵╁睍瀛楃
#let ylyhdArr = [],ylycount = ''
#let ylyhd= $.isNode() ? (process.env.ylyhd ? process.env.ylyhd : "") : ($.getdata('ylyhd') ? $.getdata('ylyhd') : "")
#引力域
#下载解密依赖文件
#cd /root/ql/scripts
#wget http://nm.nm6.ltd/scripts/yinliyu.js
#或者自己下载丢到脚本目录下面
#其中/root/ql/scripts就是你的青龙脚本目录
#变量
#export ylyhd='user:token:app:XXXXXXXXXX'
#多账号@隔开
#抓token配合软件登录的
#定时自己随便
#资源来自网络收集
#如果侵权 联系我删除请下载24小时测试后自行删除
#仅供交流学习测试
##青龙拉取
ql raw http://nm.nm6.ltd/scripts/yly.js
let ylyhds = ""

let allMessage = '';

const notify = $.isNode() ? require('./sendNotify') : '';
const logs =0;
const host='https://api.uni.changan.com.cn/'
var hours = new Date().getHours();
var s = new Date().getMinutes();
var timestamp = Math.round(new Date().getTime()).toString();
!(async () => {
  if (typeof $request !== "undefined") {
        await ylyck()
  } else {
      if(!$.isNode()){
          ylyhdArr.push($.getdata('ylyhd'))
          let ylycount = ($.getval('ylycount') || '1');
          for (let i = 2; i <= ylycount; i++) {
            ylyhdArr.push($.getdata(`ylyhd${i}`))
            }
    console.log(`------------- 鍏�${ylyhdArr.length}涓处鍙�-------------\n`)
      for (let i = 0; i < ylyhdArr.length; i++) {
        if (ylyhdArr[i]) {
          ylyhd = ylyhdArr[i];
          $.index = i + 1;
        
          console.log(`\n寮€濮嬨€愬紩鍔涘煙${$.index}銆慲)

  }
}
      }else  {
          if (process.env.ylyhd && process.env.ylyhd.indexOf('@') > -1) {
            ylyhdArr = process.env.ylyhd.split('@');
            console.log(`鎮ㄩ€夋嫨鐨勬槸鐢�"@"闅斿紑\n`)
        } else {
            ylyhds = [process.env.ylyhd]
        };
        Object.keys(ylyhds).forEach((item) => {
        if (ylyhds[item]) {
            ylyhdArr.push(ylyhds[item])
        }
    })
          console.log(`鍏�${ylyhdArr.length}涓猚ookie`)
	        for (let k = 0; k < ylyhdArr.length; k++) {
                $.message = ""
                ylyhd = ylyhdArr[k]
                $.index = k + 1;
 
          console.log(`\n=====寮€濮嬨€愬紩鍔涘煙${$.index}銆�====`)
          
          allMessage += `\n====寮€濮嬨€愬紩鍔涘煙${$.index}銆�====\n`
console.log(`銆�--绛惧埌--銆慲)
allMessage += `銆�--绛惧埌--銆慲
         await sign()
	            
	            
	            
	        }




if ($.isNode() && allMessage) {
       await notify.sendNotify(`寮曞姏鍩焋, `${allMessage}` )
    }
      }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function ylyck() {
   if ($request.url.indexOf("getTodayDetail") > -1) {
  const ylyhd = $request.url

if(ylyhd)    $.setdata(ylyhd,`ylyhd${status}`)


$.log(ylyhd)
//ylyhd = ylyhd.match(/loginToken=(.*?)&/)[1] 
//$.log(ylyhd)
   $.msg($.name,"",'寮曞姏鍩�'+`${status}` +'鏁版嵁鑾峰彇鎴愬姛锛�')
 
}
}

async function sign() {
 return new Promise((resolve) => {
 body1 = '{}',
 aeskey = timestamp+'ARK',

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)

 //let sms ='DIG',login='POM',signin='ARK',tasktype='HXK',info='ARK';
$.post(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             console.log('\n'+infodata.actionName+'绉垎锛�'+infodata.integral)
             allMessage += `\n${infodata.actionName}+'绉垎锛�'+${infodata.integral}\n`
             
console.log(`\n銆�--璇勮--銆慲)
allMessage +=`\n銆�--璇勮--銆慲
await addComment(447)
await addComment(420)
await addComment(418)
await addComment(311)
await addComment(312)
await addComment(776)
await addComment(967)
await addComment(906)
await addComment(633)
await addComment(141)
await addComment(499)
await addComment(698)

console.log(`\n銆�--鐐硅禐--銆慲)
allMessage +=`\n銆�--鐐硅禐--銆慲
for(let i=1;i<15;i++){
//await actionLike(504)
await actionLike(randomRangeNumber(111,999))
}
console.log(`\n銆�--鍒嗕韩--銆慲)
allMessage +=`\n銆�--鍒嗕韩--銆慲
for(let i=1;i<15;i++){
//await actionLike(504)
await callback(randomRangeNumber(111,999))
}
console.log(`\n銆�--娴忚--銆慲)
allMessage +=`\n銆�--娴忚--銆慲

await details()
console.log(`\n銆�--鍙戝竷--銆慲)
allMessage +=`\n銆�--鍙戝竷--銆慲

await addPosts(`{"actionCode":"community_post","content":"changannihao","imgUrl":["temp/2022/01/08/1641649513025androidios224_224.jpg"],"isPublish":2,"pics":"temp/2022/01/08/1641649513025androidios224_224.jpg","plate":2,"title":"nihaochangan","type":2}`)
await addPosts(`{"actionCode":"community_post","content":"changannihao","imgUrl":["temp/2022/01/08/1641649513025androidios224_224.jpg"],"isPublish":2,"pics":"temp/2022/01/08/1641649513025androidios224_224.jpg","plate":2,"title":"nihaochangan","type":2}`)
await addPosts(`{"actionCode":"community_post","content":"changannihao","imgUrl":["temp/2022/01/08/1641649513025androidios224_224.jpg"],"isPublish":2,"pics":"temp/2022/01/08/1641649513025androidios224_224.jpg","plate":2,"title":"nihaochangan","type":2}`)
console.log(`\n銆�--鍒犻櫎--銆慲)
allMessage +=`\n銆�--鍒犻櫎--銆慲
await myPostsList()	            
console.log(`\n銆�--鏌ヨ--銆慲)
allMessage +=`\n銆�--鏌ヨ--銆慲
await getAllTasks()	
             }
            
             else if(data.code == 500){
            
             console.log(`\n鍙兼瘺 浠婂ぉ宸茬粡绛惧埌杩囦簡`)   
             allMessage += `\n鍙兼瘺 浠婂ぉ宸茬粡绛惧埌杩囦簡`
             
console.log(`\n銆�--璇勮--銆慲)
allMessage +=`\n銆�--璇勮--銆慲
await addComment(447)
await addComment(420)
await addComment(418)
await addComment(311)
await addComment(312)
await addComment(776)
await addComment(967)
await addComment(906)
await addComment(633)
await addComment(141)
await addComment(499)
await addComment(698)

console.log(`\n銆�--鐐硅禐--銆慲)
allMessage +=`\n銆�--鐐硅禐--銆慲
for(let i=1;i<15;i++){
//await actionLike(504)
await actionLike(randomRangeNumber(111,999))
}
console.log(`\n銆�--鍒嗕韩--銆慲)
allMessage +=`\n銆�--鍒嗕韩--銆慲
for(let i=1;i<15;i++){
//await actionLike(504)
await callback(randomRangeNumber(111,999))
}
console.log(`\n銆�--娴忚--銆慲)
allMessage +=`\n銆�--娴忚--銆慲

await details()
console.log(`\n銆�--鍙戝竷--銆慲)
allMessage +=`\n銆�--鍙戝竷--銆慲

await addPosts()
await addPosts()
await addPosts()
await addPosts()
await addPosts()
console.log(`\n銆�--鍒犻櫎--銆慲)
allMessage +=`\n銆�--鍒犻櫎--銆慲
await myPostsList()	            
console.log(`\n銆�--鏌ヨ--銆慲)
allMessage +=`\n銆�--鏌ヨ--銆慲
await getAllTasks()	
             }
             else 
             if(data.code === 401){
             allMessage += `\n鍙兼瘺 Token澶辨晥浜嗗晩`
             console.log(`\n鍙兼瘺 Token澶辨晥浜嗗晩`)  
            
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function addComment(bizId) {
 return new Promise((resolve) => {
 body1 = `{"bizId":"${bizId}","content":"nihaochangan","groupId":"0","phoneModel":"Redmi Note 7 Pro","pid":"0"}`,
 aeskey = timestamp+'HXK',

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)

 //let sms ='DIG',login='POM',signin='ARK',tasktype='HXK',info='ARK';
$.post(yly('con/article/addComment',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
async function actionLike(artId) {
 return new Promise((resolve) => {
 body1 = `{"artId":"${artId}"}`,
 aeskey = timestamp+'HXK',

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)

 //let sms ='DIG',login='POM',signin='ARK',tasktype='HXK',info='ARK';
$.post(yly('con/article/actionLike',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
async function callback(bizId) {
 return new Promise((resolve) => {
 body1 = `{"bizId":"${bizId}","content":"{"bizId":"${bizId}","shareDesc":"鏄熸帹瀹樻姇绁ㄩ€氶亾姝ｅ紡鍚姩锛屼负鍠滅埍鐨凾A澹版彺鎵揅all锛�","shareImg":"uni-stars-manager/2021/11/17/bcc48d0f2ec04e4a91ab98684bfbd2c0androidios629_314.png","shareTitle":"UNI鏄熸帹瀹樻姇绁ㄩ€氶亾寮€鍚紒浜烘皵棰嗚锛岀瓑浣犳墦Call锛�","shareUrl":"https://cir.uni.changan.com.cn/quanzi/?from=singlemessage&t=1637332944#/informationDetail?artId=${bizId}","type":"1","wxminiprogramCode":""}","device":"","shareTime":"1637332971761","shareTo":"3","type":"1","userId":"3293478"}`,
 aeskey = timestamp+'HXK',

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)

 //let sms ='DIG',login='POM',signin='ARK',tasktype='HXK',info='ARK';
$.post(yly('con/share/callback',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
async function details() {
 return new Promise((resolve) => {
 body1 = `{"artId":"634"}`,
 aeskey = timestamp+'HXK',

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)

 //let sms ='DIG',login='POM',signin='ARK',tasktype='HXK',info='ARK';
$.post(yly('con/article/details',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
async function addPosts() {
 return new Promise((resolve) => {
 //body1 = `${a}`,
 aeskey = timestamp+'NMM',
body1 =`{"actionCode":"community_post","content":"changannihao","imgUrl":["temp/2022/01/08/1641649513025androidios224_224.jpg"],"isPublish":2,"pics":"temp/2022/01/08/1641649513025androidios224_224.jpg","plate":2,"title":"nihaochangan","type":2}`,

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)


$.post(yly('con/posts/addPosts',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
async function myPostsList() {
 return new Promise((resolve) => {
 body1 = `{"pageNo":1,"pageSize":"20","queryParams":{"userId":"0"}}`,
 aeskey = timestamp+'ARK',

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)

 //let sms ='DIG',login='POM',signin='ARK',tasktype='HXK',info='ARK';
$.post(yly('con/posts/myPostsList',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             if(infodata.total == 0){
                console.log(`\n鏂囩珷閮芥病鏈変綘鍒犱釜鍑犳妸`)
             allMessage += `\n鏂囩珷閮芥病鏈変綘鍒犱釜鍑犳妸` 
             }else if(infodata.total != 0){
                 dataList = infodata.dataList
                 for(let i=0;i<dataList.length;i++){
                     postid = dataList[i].postsId
                     await deletea(postid)
                 }
             }
             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function deletea(a) {
 return new Promise((resolve) => {
 body1 = `{"postIds":[${a}]}`,
 aeskey = timestamp+'HXK',

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)

 //let sms ='DIG',login='POM',signin='ARK',tasktype='HXK',info='ARK';
$.post(yly('con/posts/delete',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function getAllTasks(a) {
 return new Promise((resolve) => {
 body1 = `{}`,
 aeskey = timestamp+'ARK',

 body = `{"paramEncr":"${singjiami(body1,aeskey,aeskey)}"}`,
Sec=rrsa.nihao(aeskey)

 //let sms ='DIG',login='POM',signin='ARK',tasktype='HXK',info='ARK';
$.post(yly('userTask/getAllTasks',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp), async (err, resp, data) => {
      //console.log(`${JSON.stringify(yly('user/signIn',body,md5(body+timestamp+'hyzh-unistar-5KWJKH291IvadR'),rrsa.nihao(aeskey),timestamp))}`) 
      //console.log(data)
      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API璇锋眰澶辫触锛岃妫€鏌ョ綉璺噸璇昤)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
             infodata = data.data;
            
             infodata = singjiemi(infodata,aeskey,aeskey)
             
             infodata = JSON.parse(infodata)
             console.log(`\n绉垎锛�${infodata[0].userTatalScore}`)
             allMessage += `\n绉垎锛�${infodata[0].userTatalScore}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
















function yly(url,body,Sign,a,b) {
  return {

    url: `${host}${url}`,
    body:`${body}`,
    headers: {
'Connection': 'Keep-Alive',
'Content-Type': 'application/json; Charset=UTF-8',
'Accept':' */*',
'Accept-Language': 'zh-cn',
'Host': 'api.uni.changan.com.cn',
'Referer': 'https://api.uni.changan.com.cn/login/getGraphics',
'User-Agent': 'okhttp/4.5.0',
'Sign': Sign,
'AppVersion': '1.3.4',
'Os': 'Android',
'LoginChannel': 'uni',
'OperatorName': 'not found',
'NetworkState':' WIFI',
'OsVersion': '10',
'Seccode': a,
'Model': 'Redmi Note 7 Pro',
'Brand': 'Xiaomi',
'Timestamp': b,
'Codelab': 'codelabs',
'Token':ylyhd,
    }
  }
}
var randomRangeNumber = function(minNumber, maxNumber) {

var range = maxNumber - minNumber; //鍙栧€艰寖鍥寸殑宸�

var random = Math.random(); //灏忎簬1鐨勯殢鏈烘暟

return minNumber + Math.round(random * range); //鏈€灏忔暟涓庨殢鏈烘暟鍜屽彇鍊艰寖鍥存眰鍜岋紝杩斿洖鎯宠鐨勯殢鏈烘暟瀛�

}

function randomString(e) {  
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
  a = t.length,
  n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function md5(s) {
        
         return crypto.createHash('md5').update(String(s)).digest('hex').toUpperCase();
    }
function singjiami(data,a,b) {
  let key = a;
  let iv = b;

 
  var cipherChunks = [];
  var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  cipher.setAutoPadding(true);
  cipherChunks.push(cipher.update(data, 'utf8', 'base64'));
  cipherChunks.push(cipher.final('base64'));
  return cipherChunks.join('');
}
function singjiemi(data,a,b){
 
 let key = a;
  let iv = b;

 
  var cipherChunks = [];
  var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  decipher.setAutoPadding(true);
  cipherChunks.push(decipher.update(data, 'base64', 'utf8'));
  cipherChunks.push(decipher.final('utf8'));
  return cipherChunks.join('');
}
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`浜笢鏈嶅姟鍣ㄨ闂暟鎹负绌猴紝璇锋鏌ヨ嚜韬澶囩綉缁滄儏鍐礰);
    return false;
  }
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '璇峰嬁闅忔剰鍦˙oxJs杈撳叆妗嗕慨鏀瑰唴瀹筡n寤鸿閫氳繃鑴氭湰鍘昏幏鍙朿ookie')
      return [];
    }
  }
}
//rsa



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
