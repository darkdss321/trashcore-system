const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkEvR2xPazBiSjN2enl3cHdFckp5Q2YzTU85aDl1RmkwcFlubktWcXNVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnlBQmtzWmVHd1k1cTByMDEzMGlibWJaeE5LdlNJM2h3VTlSMXVSMzIyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSGdBVHhEUnlSTGJLd1AvcE1Menkzb3VQNStrb1V6UFNvY3dzYmZYdjE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFaWNCL2toVkNYeWxIWlFCaHlOanVCcUZmcHROZ29nQkRSbTd0UFQyTVNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEWUpIeGx0eEZMUEpKZW51TjcxVzVBY2RiSDU0anYrUFFlS3JWbXVJMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE5enFqc3IraFhVRUtYNEZBVFdMM0tvNGxpQVFZb2JDQWdMMlU3Q0Zta3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9UNFJBRnJBSVZxc204RlZvdzk1aVVZWkp6VHNVUDV5SDlwUm5aSVJtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR25DUWE5ak5vZVJyaVhSb0hOUUM1WGtDNXJsY25YdUsxU0JpQ29UVktCWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhIVDhaN2FvOW4wZzV3VHE5ZjFXSEY1cll1K21JTE1RVXRIN3l1ZlJDbnNIQUlHVXJDZUtCZ2YyRlozR0tCNUZsdzRTWDhmOXpZaUFWcGsxcWpxUEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6InNscEIzNGZ3WTFEM3M4TGdIaVZMcHZvRnp4MWtBSFAvdEJET0h4ZFpJaUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpPYVhoOGJMUWJ5ZkRjNVNjTlFQYUEiLCJwaG9uZUlkIjoiNTBjYTQ0MzctMGI1MS00MGFmLWI5YjMtNzc5OGI5ZWI0Njk1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI0ckpSanUwaHFuM2FiL3NWTSt3aXRKSHlYUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5cERMUGZncFVTY1pOTWdNOFNGSFk2K0JtMTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFJBU0hCT1QiLCJtZSI6eyJpZCI6Ijk0NzIyOTk4NTQ4OjEyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY2Mjc1NzI1MDEzMjExOjEyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1hNN01JRkVKdWg1OFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaC8wbTlhbjFtZmxkd3dBOFpBSy9ick1SUDNIWFU5TkhIS3Zac3JWS00wWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU0kvMzA5ZkNqdUlVYk5LWU4yaklxWkpkR2l3QkFQcE1WaDlPTnZrNlExSWZWdXFPeUlwVnl6UmFOVGp3Zmp1L2JXMVg4SjVpSHVTWW1yd2QvUFh0Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImZWOFZVSFpaUHJ1blk3R2NubExxUEh0MGhwemxDbllrWS9maDNBYlgxS1VlSnlCYklvMmxOcjMzUWQwRmlydjNQZHI0WElOVGM3RzJyYWF0NHBkQkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjI5OTg1NDg6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWY5SnZXcDlabjVYY01BUEdRQ3YyNnpFVDl4MTFQVFJ4eXIyYksxU2pORyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0OTEwODg3LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9' 
// Owner Setting
global.xprefix = process.env.BOT_PREFIX ||'.'
global.owner = ["254703726139",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'Trashcore'
global.antidelete = process.env.ANTI_DELETE || true
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "Trashcore"
global.botversion = "1.6.0"
global.typebot = "Plugin"
global.session = "trashsession"
global.connect = true
global.statusview = process.env.AUTO_STATUS || true
global.antilinkgc = process.env.ANTILINK_GROUP || true
global.autoTyping = process.env.AUTO_TYPE || false
global.autoRecord = process.env.AUTO_RECORD || false
global.thumb = "https://files.catbox.moe/4ryp6k.jpg"
global.wagc = "https://chat.whatsapp.com/BPyIptm3ZH68y4pSPrLMyq?mode=r_t"
global.caption = "Trashcore media"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Sticker Marker
global.packname = process.env.PACK_NAME ||'𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄'
global.packname = process.env.AUTHOR||'𝐏𝐀𝐂𝐊𝐒'
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Respon Message
global.mess = {
    success: '✅ Done.',
    admin: '🚨 Admin only.',
    premium: '🆘must be a premium user.',
    botAdmin: '🤖 Make me admin first.',
    owner: '👑 Owner only.',
    OnlyGrup: '👥 Group only.',
    private: '📩 Private chat only.',
    wait: '⏳ Processing...',
    error: '⚠️ Error occurred.',
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})
