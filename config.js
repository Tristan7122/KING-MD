const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("27660169525,27634624586")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Tristany:Smith7122@cluster0.vxbospi.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'smith712233@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'south Africa/Johannesburg'
global.gurl = 'https://chat.whatsapp.com/J0ThzSpa4yc1zJ6jCxRNDl' // add your username
global.sudo = process.env.SUDO || '27660169525'
global.devs = '27660169525';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Tristan' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJTcVRzcU82bUlFdnBKU2VRM3JGSVdpUTRrRVkyNTlUTVI3aFpqd2NGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWlLamp1UXo0U3llcmt2YUovMjB4VjMzYlNLUEN6eXFZb0padmxKL3FtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySUJRRFQweUJzSVNDTjVyN1U2MGVsQnNrc1dGL3EyWDIyUU90UWMyRDJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4U0lvSXlJMzVPOEhEWkIrSjQzaGx2TmNVOEQzUVJZbk9LVTdSdzBzZ0JrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QQnMzVitnWlJndW9pc3JncVV0d0ZPb2FLMkZPY1IzR1BPVDM0a3pKbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt6NW5GUkd6TmR0ckd3TVhiN2R2VnNLdnJ3MFQ4TVRMZnBNS2I4THArMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05iYnAxQWJ5L25PdnJFTG54ZHdxemVrMVFzbG8xajN2YXI5V0liMERYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXIxQ1lnMUZjMzgyQUhQemxPK1ZGbmFsWHB3Tk13dUFrdUpIUlJVWk9tbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZqNG0vanJnMFZMMWNCTk9iakZrdWkwdVFHNlFCamUxby80a1ducDNicVROTWliWDByZ29vak9RWU1vc1Z3QTN2Y3N5Nll4MVNialpQclFtdHVMU0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6Ikw4SEtIc3pjRkJCWllqRHlBK3puK2FoVDYxVHZ5N241aXY3SXlBd1hkVGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxCTmhKZ0ZHVGVtWUNBRkIwU21kalEiLCJwaG9uZUlkIjoiZWEyODBmMjAtNTk3Zi00NTk5LTkxZjgtMzZiNjRmNTkyYmM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBiY3o4SE5KSlJTK2NEWDFVV3ZRTk5IU0NXYz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3VrOUVlNjl1WS9lbm55b3kxa0E3YzBZTEh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW1VMFBJSEVQamtvYlFHR0RRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK2dXdU9lL2pRREhVMXlZMFFTaDlCdjhZSHF0TXF4eWhQeGFaWlJKS0FRZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiakpsUjRubnFhRjYxMEx3Uk9sZzkzTEMrTkw3Z0Uxa0loaFNSYkJzaGFvUFZodUVOZ3d5d2Fod3JBcTNkN2l3YTJtKzlwdCtuTWFadWMvaUxrajZKZ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkM0RGdHcDlzU2hjUU1QUTdUd2lUa1Y1eVBEdjlSeWcvTWtaaUc2ZUVPTkwra3lSaFR1SVdYMDFlYXpkR05GZjVTUHlPS25objNVRUIwN1drUDY4Q0NnPT0ifSwibWUiOnsiaWQiOiIyNzY2MDE2OTUyNTo2OEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY2MDE2OTUyNTo2OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmb0Zyam52NDBBeDFOY21ORUVvZlFiL0dCNnJUS3Njb1Q4V21XVVNTZ0VJIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyMTgyNDQsIm15QXBwU3RhdGVLZXlJZCI6IkFDOEFBTnFaIn0=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Tristan®' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'false' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'false' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? true : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com,whatsapp.com/channel' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'hey I'm alive👋join https://chat.whatsapp.com/J0ThzSpa4yc1zJ6jCxRNDl' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
