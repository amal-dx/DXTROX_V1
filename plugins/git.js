const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "http://telegra.ph/file/68809ff84d7cd4447a76e.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Amal*
*owner number Wa.me/917736308760*

*bot setting video : loading soon*

*githublink : https://github.com/amal-dx/DXTROX_V1*

*audio commads : https://github.com/amal-dx/DXTROX_V1/tree/master/uploads*
`}) 

}));
