const a0_0x4a848f=a0_0x1967;(function(_0x1aa84a,_0x49a88f){const _0x21f67c=a0_0x1967,_0x49a95f=_0x1aa84a();while(!![]){try{const _0x5d4816=parseInt(_0x21f67c(0x1d1))/0x1+parseInt(_0x21f67c(0x1b7))/0x2+parseInt(_0x21f67c(0x1d2))/0x3+parseInt(_0x21f67c(0x194))/0x4+parseInt(_0x21f67c(0x1a0))/0x5+-parseInt(_0x21f67c(0x1be))/0x6+-parseInt(_0x21f67c(0x190))/0x7;if(_0x5d4816===_0x49a88f)break;else _0x49a95f['push'](_0x49a95f['shift']());}catch(_0x23aa8c){_0x49a95f['push'](_0x49a95f['shift']());}}}(a0_0x464a,0x4e29c));import a0_0x5ddf65 from'prompt-sync';const prompt=a0_0x5ddf65({'sigint':!![]});import a0_0xaa0900 from'https-proxy-agent';const {HttpsProxyAgent}=a0_0xaa0900;import a0_0x32524c from'csv-database';import a0_0x31e3bf from'dotenv';import a0_0x217b54 from'axios';import{API_KEY,BASE_URL}from'./config.js';import a0_0x4230ba from'ws';import a0_0x372bd6 from'fs';import{promisify}from'util';import a0_0x1b2189 from'colors';a0_0x31e3bf[a0_0x4a848f(0x1b5)]();function sleep(_0x3e593a){return new Promise(_0x3a02f9=>setTimeout(_0x3a02f9,_0x3e593a));}function getRandom(_0x239619,_0x116b85){const _0x1bcf2d=a0_0x4a848f;return(Math[_0x1bcf2d(0x187)]()*(_0x116b85-_0x239619)+_0x239619)[_0x1bcf2d(0x1d9)](0x5);}function a0_0x464a(){const _0x544380=['warning','toFixed','trim','refresh_token','https://ikknngrgxuxgjhplbpey.supabase.co/rest/v1/profiles?select=personal_code&id=eq.','then',']\x20[','chrome-extension://emcclcoaglgcpoognfiggmhnhgabppkm','stringify','All\x20operations\x20completed','random','ref_code','floor','log','green','proxy_url','toLocaleTimeString','success','get','8484231qXyhbC','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/130.0.0.0\x20Safari/537.36','Energy\x20refill\x20message\x20sent\x20successfully','all','983708mWofWN','min','active','utf8','empty','error','edit','v0.2','access_token','message','name','connectWebSocketReFill','621270pRrkfm','u=1,\x20i','&version=','red','application/json','checkProxyIP','vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5','cross-site','getTime','keys','/signup','blue','close','proxy','send','https://api.ipify.org?format=json','Error\x20checking\x20proxy\x20IP:\x20','request','Bạn\x20đã\x20đăng\x20ký\x20thành\x20công','parse','Calculating...','config','An\x20error\x20occurred\x20during\x20operation:\x20','999006zRMsZf','map','Register.','forEach','/websocket?userId=','Run\x20Node.','headers','2685132ecmXOR','password','teneo.csv','catch','localStorage.json','registerUser','data','setMinutes','info','runNode','cors','readyState','Error\x20sending\x20message:\x20','Lỗi\x20khi\x20lấy\x20thông\x20tin\x20user','getMinutes','WebSocket\x20connection\x20closed,\x20reconnecting...','user_id','writeFile','open','506070LXcThm','1811871ckykDl','agent','yellow','email','post','refill'];a0_0x464a=function(){return _0x544380;};return a0_0x464a();}function getRandomSleep(_0x302ef3,_0x246bf0){const _0x50fb64=a0_0x4a848f;return Math[_0x50fb64(0x189)](Math[_0x50fb64(0x187)]()*(_0x246bf0-_0x302ef3)+_0x302ef3);}function getRandomMinutesSleep(_0x262b68,_0x164609){const _0x557c91=a0_0x4a848f;return Math['floor'](Math[_0x557c91(0x187)]()*(_0x164609-_0x262b68)*0xea60)+_0x262b68*0xea60;}function a0_0x1967(_0x3a9a5e,_0x53914a){const _0x464a9d=a0_0x464a();return a0_0x1967=function(_0x1967ec,_0x55c102){_0x1967ec=_0x1967ec-0x185;let _0x58e2b9=_0x464a9d[_0x1967ec];return _0x58e2b9;},a0_0x1967(_0x3a9a5e,_0x53914a);}let countdownInterval=null;const readFileAsync=promisify(a0_0x372bd6['readFile']),writeFileAsync=promisify(a0_0x372bd6[a0_0x4a848f(0x1cf)]);async function getLocalStorage(){const _0x393db9=a0_0x4a848f;try{const _0x20b28f=await readFileAsync(_0x393db9(0x1c2),_0x393db9(0x197));return JSON[_0x393db9(0x1b3)](_0x20b28f);}catch(_0x59e9c2){return{};}}async function setLocalStorage(_0x228086){const _0x4acd0b=a0_0x4a848f,_0x2ad5f8=await getLocalStorage(),_0x4b6891={..._0x2ad5f8,..._0x228086};await writeFileAsync(_0x4acd0b(0x1c2),JSON[_0x4acd0b(0x185)](_0x4b6891));}function startCountdownAndPoints(){clearInterval(countdownInterval),updateCountdownAndPoints(),countdownInterval=setInterval(updateCountdownAndPoints,0x3e8);}async function updateCountdownAndPoints(){const _0x504ad4=a0_0x4a848f;let _0x2ade03='',_0xe283d3='';const {lastUpdated:_0x34ee11}=await getLocalStorage();if(_0x34ee11){const _0x2339d2=new Date(_0x34ee11);_0x2339d2[_0x504ad4(0x1c5)](_0x2339d2[_0x504ad4(0x1cc)]()+0xf);const _0x15fcd4=new Date(),_0x500db5=_0x2339d2['getTime']()-_0x15fcd4['getTime']();if(_0x500db5>0x0){const _0x48b505=Math[_0x504ad4(0x189)](_0x500db5/0xea60),_0x487b38=Math[_0x504ad4(0x189)](_0x500db5%0xea60/0x3e8);_0x2ade03=_0x48b505+'m\x20'+_0x487b38+'s';const _0x3e50e5=0x19,_0x11aece=_0x15fcd4[_0x504ad4(0x1a8)]()-new Date(_0x34ee11)['getTime'](),_0x509878=_0x11aece/(0x3c*0x3e8);let _0x4d9763=Math[_0x504ad4(0x195)](_0x3e50e5,_0x509878/0xf*_0x3e50e5);_0x4d9763=parseFloat(_0x4d9763[_0x504ad4(0x1d9)](0x2));if(Math[_0x504ad4(0x187)]()<0.1){const _0x30b37d=Math[_0x504ad4(0x187)]()*0x2;_0x4d9763=Math[_0x504ad4(0x195)](_0x3e50e5,_0x4d9763+_0x30b37d),_0x4d9763=parseFloat(_0x4d9763['toFixed'](0x2));}_0xe283d3=_0x4d9763;}else _0x2ade03=_0x504ad4(0x1b4),_0xe283d3=0x19;}else _0x2ade03=_0x504ad4(0x1b4),_0xe283d3=0x0;await setLocalStorage({'potentialPoints':_0xe283d3,'countdown':_0x2ade03});}class Teneo{constructor(_0x2759c9,_0x4c44f6,_0x2d464f,_0x47c137,_0x378ecc,_0x37b12f,_0x2c69ea,_0xc33b1a){const _0x3c800b=a0_0x4a848f;this[_0x3c800b(0x1bd)]={'accept':'application/graphql-response+json,\x20application/json','accept-language':_0x3c800b(0x1a6),'apiKey':API_KEY,'authorization':'Bearer\x20'+_0x2c69ea,'content-type':_0x3c800b(0x1a4),'origin':_0x3c800b(0x1df),'priority':_0x3c800b(0x1a1),'sec-ch-ua':'\x22Chromium\x22;v=\x22130\x22,\x20\x22Google\x20Chrome\x22;v=\x22130\x22,\x20\x22Not?A_Brand\x22;v=\x2299\x22','sec-ch-ua-mobile':'?0','sec-ch-ua-platform':'\x22Windows\x22','sec-fetch-dest':_0x3c800b(0x198),'sec-fetch-mode':_0x3c800b(0x1c8),'sec-fetch-site':_0x3c800b(0x1a7),'user-agent':_0x3c800b(0x191)},this[_0x3c800b(0x1db)]=_0xc33b1a,this[_0x3c800b(0x19c)]=_0x2c69ea,this[_0x3c800b(0x1d5)]=_0x47c137,this[_0x3c800b(0x188)]=_0x4c44f6,this[_0x3c800b(0x1bf)]=_0x378ecc,this[_0x3c800b(0x18c)]=_0x37b12f,this['user_id']=_0x2d464f,this['id']=_0x2759c9,this[_0x3c800b(0x1d3)]=_0x37b12f?new HttpsProxyAgent(_0x37b12f):null,this['ws']=null;}[a0_0x4a848f(0x18a)](_0x4b8d61,_0x44ff74=a0_0x4a848f(0x1c6)){const _0x303ea0=a0_0x4a848f,_0x8dae1b=new Date()[_0x303ea0(0x18d)]();switch(_0x44ff74){case'success':console[_0x303ea0(0x18a)](('['+_0x8dae1b+']\x20['+this[_0x303ea0(0x1d5)]+']\x20'+_0x4b8d61)[_0x303ea0(0x18b)]);break;case'custom':console['log']('['+_0x8dae1b+_0x303ea0(0x1de)+this[_0x303ea0(0x1d5)]+']\x20'+_0x4b8d61);break;case'error':console[_0x303ea0(0x18a)](('['+_0x8dae1b+']\x20['+this[_0x303ea0(0x1d5)]+']\x20'+_0x4b8d61)[_0x303ea0(0x1a3)]);break;case _0x303ea0(0x1d8):console[_0x303ea0(0x18a)](('['+_0x8dae1b+_0x303ea0(0x1de)+this[_0x303ea0(0x1d5)]+']\x20'+_0x4b8d61)[_0x303ea0(0x1d4)]);break;default:console[_0x303ea0(0x18a)](('['+_0x8dae1b+_0x303ea0(0x1de)+this[_0x303ea0(0x1d5)]+']\x20'+_0x4b8d61)[_0x303ea0(0x1ab)]);}}async['registerUser'](){const _0x11f7ac=a0_0x4a848f,_0x2b960e=BASE_URL+_0x11f7ac(0x1aa),_0x5ea889={'email':this[_0x11f7ac(0x1d5)],'password':this[_0x11f7ac(0x1bf)],'data':{'invited_by':this[_0x11f7ac(0x188)]?this['ref_code']:'emnpJ'},'gotrue_meta_security':{},'code_challenge':null,'code_challenge_method':null},_0x2fde58={'method':_0x11f7ac(0x1d6),'maxBodyLength':Infinity,'url':_0x2b960e,'headers':this[_0x11f7ac(0x1bd)],'httpsAgent':this['agent'],'data':_0x5ea889},_0x246f90=await a0_0x217b54['request'](_0x2fde58),_0x518aec=_0x246f90['data'];console['log'](_0x246f90[_0x11f7ac(0x1c4)]),_0x518aec['id']&&(this[_0x11f7ac(0x18a)](_0x11f7ac(0x1b2),_0x11f7ac(0x18e)),await db['edit']({'email':this['email']},{'is_register':0x0}));}async['connectWebSocketReFill'](_0x34aa62,_0x446a1a){const _0x53c39b=a0_0x4a848f,_0x21dd43=_0x53c39b(0x19b),_0x4d3624='wss://secure.ws.teneo.pro',_0x972fab=_0x4d3624+_0x53c39b(0x1bb)+encodeURIComponent(_0x34aa62)+_0x53c39b(0x1a2)+encodeURIComponent(_0x21dd43),_0x409d27={};this[_0x53c39b(0x1ad)]&&(_0x409d27[_0x53c39b(0x1d3)]=new HttpsProxyAgent(this[_0x53c39b(0x1ad)]));const _0x1f7072=()=>{return new Promise((_0x1dd0f5,_0x3a2f60)=>{const _0x1fe1c8=a0_0x1967;this['ws']=new a0_0x4230ba(_0x972fab,_0x409d27);const _0x391e80=0xf*0x3c*0x3e8,_0x29fb90=setTimeout(()=>{const _0x579553=a0_0x1967;this['ws']&&this['ws'][_0x579553(0x1c9)]===a0_0x4230ba['OPEN']&&(this[_0x579553(0x18a)]('Closing\x20WebSocket\x20connection\x20due\x20to\x2015-minute\x20timeout',_0x579553(0x1d8)),this['ws']['close']());},_0x391e80);this['ws']['on'](_0x1fe1c8(0x1d0),async()=>{const _0x4cc356=_0x1fe1c8;this[_0x4cc356(0x18a)]('WebSocket\x20connection\x20opened',_0x4cc356(0x18e));try{const _0x2fb6de={'event':_0x4cc356(0x1d7)},_0x33a28f=JSON['stringify'](_0x2fb6de);this[_0x4cc356(0x18a)]('Send\x20message:\x20'+_0x33a28f,_0x4cc356(0x18e)),this['ws'][_0x4cc356(0x1ae)](_0x33a28f),this[_0x4cc356(0x18a)](_0x4cc356(0x192),_0x4cc356(0x18e));}catch(_0x2129ff){this[_0x4cc356(0x18a)](_0x4cc356(0x1ca)+_0x2129ff[_0x4cc356(0x19d)],_0x4cc356(0x199)),this['ws'][_0x4cc356(0x1ac)]();}}),this['ws']['on'](_0x1fe1c8(0x1ac),()=>{const _0x3fd2ec=_0x1fe1c8;clearTimeout(_0x29fb90),this[_0x3fd2ec(0x18a)](_0x3fd2ec(0x1cd),_0x3fd2ec(0x1c6)),setTimeout(()=>{const _0x32a938=_0x3fd2ec;this[_0x32a938(0x19f)](_0x34aa62,_0x446a1a);},0x3e8),_0x1dd0f5();}),this['ws']['on']('error',_0x9a5792=>{const _0x417e9e=_0x1fe1c8;clearTimeout(_0x29fb90),this[_0x417e9e(0x18a)]('WebSocket\x20error:\x20'+_0x9a5792['message'],_0x417e9e(0x199)),setTimeout(()=>{const _0x58d483=_0x417e9e;this[_0x58d483(0x19f)](_0x34aa62,_0x446a1a);},0x3e8),_0x3a2f60(_0x9a5792);});});};await _0x1f7072();}async['getUserInfo'](){const _0x18feef=a0_0x4a848f;try{const _0x230e62='https://ikknngrgxuxgjhplbpey.supabase.co/auth/v1/token?grant_type=password',_0x5bf57a={'email':this[_0x18feef(0x1d5)],'password':this['password']},_0x450e46={'method':'post','maxBodyLength':Infinity,'url':_0x230e62,'headers':this[_0x18feef(0x1bd)],'httpsAgent':this[_0x18feef(0x1d3)],'data':_0x5bf57a},_0x597037=await a0_0x217b54['request'](_0x450e46);console['log'](_0x597037['data']);const _0x3b08be=_0x597037[_0x18feef(0x1c4)]['user']['id'];if(_0x3b08be){await db[_0x18feef(0x19a)]({'email':this['email']},{'user_id':_0x3b08be}),this[_0x18feef(0x1ce)]=_0x3b08be;const _0x11ebb5=_0x18feef(0x1dc)+_0x3b08be,_0x299425={'method':_0x18feef(0x18f),'maxBodyLength':Infinity,'url':_0x11ebb5,'headers':this['headers'],'httpsAgent':this[_0x18feef(0x1d3)]},_0x2c0840=await a0_0x217b54[_0x18feef(0x1b1)](_0x299425);this[_0x18feef(0x18a)]('Profile\x20Data:'+_0x2c0840[_0x18feef(0x1c4)]),await setLocalStorage({'userId':_0x3b08be});}else this['log'](_0x18feef(0x1cb),_0x597037[_0x18feef(0x1c4)]);}catch(_0x59646b){return this[_0x18feef(0x18a)](_0x59646b,_0x18feef(0x199)),0x0;}}async[a0_0x4a848f(0x1c7)](){const _0x48033c=a0_0x4a848f;try{!this[_0x48033c(0x1ce)]?(await this['getUserInfo'](),await this['connectWebSocketReFill'](this['user_id'])):await this['connectWebSocketReFill'](this[_0x48033c(0x1ce)]);}catch(_0x1cf2d1){return this[_0x48033c(0x18a)](_0x1cf2d1,_0x48033c(0x199)),0x0;}return new Promise(_0x5115c2=>{setTimeout(async()=>{await this['runNode'](),_0x5115c2();},getRandomSleep(0x3e8,0x1388));});}async['checkProxyIP'](){const _0x25fb91=a0_0x4a848f;try{const _0x2c1e6e=this[_0x25fb91(0x18c)]?new HttpsProxyAgent(this[_0x25fb91(0x18c)]):null,_0x141b77=await a0_0x217b54[_0x25fb91(0x18f)](_0x25fb91(0x1af),{'httpsAgent':_0x2c1e6e,'timeout':0x2710});return _0x141b77['status']==0xc8;}catch(_0x231617){return this[_0x25fb91(0x18a)](_0x25fb91(0x1b0)+_0x231617[_0x25fb91(0x19d)]),![];}}}function getRandomDeposit(_0x5e4893=1e-8,_0x13069c=9e-8,_0xa44b3=0x8){const _0x252b1a=a0_0x4a848f;_0x5e4893>_0x13069c&&([_0x5e4893,_0x13069c]=[_0x13069c,_0x5e4893]);const _0x3c06c2=Math[_0x252b1a(0x187)]()*(_0x13069c-_0x5e4893)+_0x5e4893;return Number(_0x3c06c2['toFixed'](_0xa44b3));}const db=await a0_0x32524c(a0_0x4a848f(0x1c0),['id',a0_0x4a848f(0x196),'is_register',a0_0x4a848f(0x188),a0_0x4a848f(0x1ce),a0_0x4a848f(0x1d5),a0_0x4a848f(0x1bf),'proxy_url',a0_0x4a848f(0x19c),a0_0x4a848f(0x1db)],',');async function bot(_0xc06a3d){const _0x6ee578=a0_0x4a848f,_0x2c60cc=await db[_0x6ee578(0x18f)]();Promise[_0x6ee578(0x193)](_0x2c60cc[_0x6ee578(0x1b8)](_0x5a0016=>runBot(_0x5a0016,_0xc06a3d)))[_0x6ee578(0x1dd)](()=>{const _0x430b30=_0x6ee578;console['log'](_0x430b30(0x186));})[_0x6ee578(0x1c1)](_0x186d5a=>{const _0x3df832=_0x6ee578;console[_0x3df832(0x18a)](_0x3df832(0x1b6),_0x186d5a);});}async function runBot(_0x1fa1c5,_0xda2b33){const _0x338875=a0_0x4a848f,{id:_0x53e7ee,active:_0x4e93b8,is_register:_0x134da2,ref_code:_0x27a914,user_id:_0x508a31,email:_0x4de853,password:_0x2b903a,proxy_url:_0x1c5ea1,access_token:_0x5092dc,refresh_token:_0x3aa1f2}=_0x1fa1c5,_0x43f42f=new Teneo(_0x53e7ee,_0x27a914,_0x508a31,_0x4de853,_0x2b903a,_0x1c5ea1,_0x5092dc,_0x3aa1f2);_0x4e93b8==0x1&&(_0xda2b33==0x1&&_0x134da2==0x1&&(_0x43f42f['log']('Check\x20proxy\x20...'+await _0x43f42f['checkProxyIP']()),await _0x43f42f[_0x338875(0x1a5)]()&&await _0x43f42f[_0x338875(0x1c3)]()),_0xda2b33==0x2&&await _0x43f42f[_0x338875(0x1c7)]());}async function main(){const _0x4e4882=a0_0x4a848f,_0x5d245b={0x1:{'name':_0x4e4882(0x1b9)},0x2:{'name':_0x4e4882(0x1bc)}};let _0x4c1621='1';Object[_0x4e4882(0x1a9)](_0x5d245b)[_0x4e4882(0x1ba)](_0x4033f3=>{const _0x4d43fc=_0x4e4882;console[_0x4d43fc(0x18a)](_0x4033f3+'.\x20'+_0x5d245b[_0x4033f3][_0x4d43fc(0x19e)]);});let _0x3aba9d=prompt('choose(default\x20'+_0x4c1621+'):\x20');_0x3aba9d[_0x4e4882(0x1da)]()===''&&(_0x3aba9d=_0x4c1621),await bot(_0x3aba9d);}main();