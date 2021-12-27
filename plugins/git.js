


/*  
RE CODE - KTB 
*/

const Ktb = require('../events');
const {WAConnection , MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const config = require('../config');
const util = require('util')
const parseInt = require('parse-int');
const chalk = require('chalk');
const conn = new WAConnection();

const White = require('../white');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

var SYSDTXT =  '😇 ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ *ᴡʜɪᴛᴇᴅᴇᴠɪʟ ʙᴏᴛ* 😇'

var VER = '😍 *꧁•⊹٭𝙰𝚛𝚎 𝚈𝚘𝚞 𝚑𝚊𝚙𝚙𝚢٭⊹•꧂* 😍'
var MSG = '*bot setting video : loading soon*\n\n*githublink : https://github.com/amal-dx/DXTROX_V1*\n\n\n*audio commads : https://github.com/amal-dx/DXTROX_V1/tree/master/uploads*'

  Ktb.addCommand({pattern: 'git', fromMe: wk, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    
    var logo = await axios.get ('https://raw.githubusercontent.com/amal-dx/DXTROX_V1/master/photo/amalser.png', {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: White.tm_b })

    
        
    const buttons = [
        {buttonId: VER, buttonText: {displayText: VER }, type: 1},
        {buttonId: SYSDTXT, buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: '© *creater Amal* © \n\n owner- type owner \n\n',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))


     
     
   
