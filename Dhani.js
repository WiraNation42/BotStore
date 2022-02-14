/* ====[ INDONESIA ]====

Nah kali ini gw mau bagi²
Script bot WhatsApp bahasa English
Silakan di pakek asal nama 
Pembuat atau creator jangan di 
Hapus atau di ganti nama luh
Jika di ganti atau di hapus
Saya tidak bakalan update sc ini !!
Pliss jangan jual sc ini 
Kalau mau nyolong kasih sumber om
Gak di kasih ?, Sans gw doain biar luh sial !!

====[ ENGLISH ]====

Well this time I want to share
WhatsApp bot script in English
Please use the original name
Makers or creators don't
Delete or rename luh
If replaced or deleted
I will not update this sc !!
Pls don't sell this SC
If you want to help, give me the source
Isn't it given?, Sans I pray for bad luck!!
*/


const
{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { color, bgcolor } = require('./database/lib/color')
const { fetchJosn, kyun, fetchText } = require('./database/lib/fetcher')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./database/lib/functions')
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))

//━━━━[ Setting ]━━━━//

owner = setting.OwnerNumber
owner2 = `${owner}@s.whatsapp.net`
botname = setting.BotName
ownername = setting.OwnerName
const fakeimage = fs.readFileSync ('./database/image/dhani.jpg')
const thumb = fs.readFileSync ('./database/image/thumb.jpg')

//━━━━[ Database ]━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))

//━━━━[ Time ]━━━━//

let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })


if(waktu < "23:59:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🌌'
}
if(waktu < "19:00:00"){
var sayingtime = '𝘏𝘢𝘷𝘦 𝘢 𝘨𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🌆'
}
if(waktu < "18:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘢𝘧𝘵𝘦𝘳𝘯𝘰𝘰𝘯🌇'
}
if(waktu < "15:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘋𝘢𝘺🏞'
}
if(waktu < "11:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘮𝘰𝘳𝘯𝘪𝘯𝘨🌅'
}
if(waktu < "05:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🏙'
}

//━━━━[ Module Exports ]━━━━//

module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Dhani.chats.all()
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//━━━━[ Mess And Others ]━━━━//

		mess = {
		wait: 'process',
		eror: 'Sorry an error occurred !!',
		success: 'success',
		error: {
		stick: 'sorry it`s not a sticker !!',
		Iv: 'Invalid link !!'
		},
		only: {
		group: 'Group special features !!',
		owner: 'Owner`s special features !!',
		admin: 'Admin special features !!',
		Badmin: 'Please make bot admin first !!'
		}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Dhani.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Dhani.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Dhani.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
		seconds = Number(seconds);
		var d = Math.floor(seconds / (3600 * 24));
		var h = Math.floor((seconds % (3600 * 24)) / 3600);
		var m = Math.floor((seconds % 3600) / 60);
		var s = Math.floor(seconds % 60);
		var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
		var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
		var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
		var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
		return dDisplay + hDisplay + mDisplay + sDisplay;
		};
		
//━━━━[ Button ]━━━━//

		const sendButton = async (from, context, fortext, but, mek) => {
		buttonMessages = {
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 1
		}
		Dhani.sendMessage(from, buttonMessages, buttonsMessage, {
		quoted: ftrol
		})
		}
		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        Dhani.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
		jadinya = await Dhani.prepareMessage(from, img, image)
		buttonMessagesI = {
		imageMessage: jadinya.message.imageMessage,
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 4
		}
		Dhani.sendMessage(from, buttonMessagesI, buttonsMessage, {
		quoted: ftrol,
		contexInfo: ftrol
		})
        }
        const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
        kma = vid1
        mhan = await Dhani.prepareMessage(from, kma, video)
        const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5
        }
        Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━[ Gathering Fake ]━━━━//

        const fakeitem = (teks) => { Dhani.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./database/image/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${sayingtime} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
		const ftrol = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		orderMessage: {
		itemCount : 123,
		status: 1,
		surface : 1,
		message: `${sayingtime} ${pushname}`, 
		orderTitle: `${sayingtime} ${pushname}`,
		thumbnail: thumb, //Gambarnye
		sellerJid: '0@s.whatsapp.net' 
		}
		}
		}
		const ftok = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
		"productMessage": {
		"product": {
		"productImage":{
		"mimetype": "image/jpeg",
		"jpegThumbnail": thumb //Gambarnye
		},
		"title": `${sayingtime} ${pushname}`, //Kasih namalu 
		"description": `${botname}`, 
		"currencyCode": "USD",
		"priceAmount1000": "2000",
		"retailerId": `${sayingtime} ${pushname}`,
		"productImageCount": 1
		},
		"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
		}
		const floc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		liveLocationMessage: {
		caption: `${sayingtime} ${pushname}`,
		jpegThumbnail: thumb
		}
		}
		}
		const fdoc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		documentMessage: {
		title: `${sayingtime} ${pushname}`, 
		jpegThumbnail: thumb
		}
		}
		}
		const fvid = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${sayingtime} ${pushname}`,
		"h": `${sayingtime} ${pushname}`,
		'duration': '99999', 
		'caption': `${sayingtime} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fgi = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${sayingtime} ${pushname}`,
		"h": `${sayingtime} ${pushname}`,
		'duration': '99999', 
		'gifPlayback': 'true', 
		'caption': `${sayingtime} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fvoc = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"audioMessage": {
		"mimetype":"audio/ogg; codecs=opus",
		"seconds": "99999",
		"ptt": "true"
		}
		} 
		}
		const fonceimg = {
		key: {
		fromMe: false,
		participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },
		message: {
		imageMessage: {
		viewOnce: true
		},
		},
		};
		const foncevid = { 
		key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
		message: { 
		videoMessage: { 
		viewOnce: true
		},
		},
		};
        
//━━━━[ Storage ]━━━━//

        const hideTag = async function(from, text){
        let anu = await Dhani.groupMetadata(from)
        let members = anu.participants
        let ane = []
        for (let i of members){
        ane.push(i.jid)
        }
        Dhani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./database/image/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
        }
        const sendStickerFromUrl = async(to, url) => {
		var names = Date.now() / 10000;
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, './stik' + names + '.png', async function () {
		console.log('selesai');
		let filess = './stik' + names + '.png'
		let asw = './stik' + names + '.webp'
		exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
		let media = fs.readFileSync(asw)
		Dhani.sendMessage(to, media, MessageType.sticker,{quoted:mek})
		fs.unlinkSync(filess)
		fs.unlinkSync(asw)
		});
		});
		}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		mime = res.headers['content-type']
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, filename, async function () {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0]+"Message"
		if(mime === "image/gif"){
		type = MessageType.video
		mime = Mimetype.gif
		}
		if(mime.split("/")[0] === "audio"){
		mime = Mimetype.mp4Audio
		}
		Dhani.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
		fs.unlinkSync(filename)
		});
		}   
		if (budy.includes("https://chat.whatsapp.com/")) {
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(` *「 GROUP LINK DETECTOR 」*\nYou sent the group chat link, sorry you were kicked from the group`)
		setTimeout(() => {
		Dhani.groupRemove(from, [kic]).catch((e) => { reply(`BOTS MUST BE ADMIN`) })
		}, 0)
		}
		if (budy.length > 3500) {
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return
		reply('Mark read\n'.repeat(300))
		reply(`*「 VIRTEX DETECTOR 」*\n\nYou sent a virtex, sorry you were kicked from the group`)
		console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
		Dhani.groupRemove(from, [sender])
		}
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//━━━━[ All Feature ]━━━━//

case 'menu':
case 'help':
timestampe = speed();
latensie = speed() - timestampe
menu =`
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${waktu}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : "USER"}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername}
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())}
└─❏

╭─❒ 「 *MENU* 」 ❒
│◦➛ ${prefix}ownermenu
│◦➛ ${prefix}downloadmenu
│◦➛ ${prefix}stickermenu
│◦➛ ${prefix}groupmenu
│◦➛ ${prefix}infomenu
│◦➛ ${prefix}othermenu
│◦➛ ${prefix}storemenu
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'ALL MENU' }, type: 1 },{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'allmenu':
menu =`
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${waktu}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : "USER"}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername}
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())}
└─❏

╭─❒ 「 *OWNER MENU* 」 ❒
│◦➛ ${prefix}bc _text_
│◦➛ ${prefix}bc2 _text_
│◦➛ ${prefix}bctext _text_
│◦➛ ${prefix}bcgc _text_
│◦➛ ${prefix}setnamebot _text_
│◦➛ ${prefix}setbiobot _text_
│◦➛ ${prefix}setppbot _reply image_
│◦➛ ${prefix}leave 
└─❏

╭─❒ 「 *STICKER MENU* 」 ❒
│◦➛ ${prefix}sticker _Reply Image_
│◦➛ ${prefix}toimg _Reply Image_
└─❏

╭─❒ 「 *DOWNLOAD MENU* 」 ❒
│◦➛ ${prefix}ytmp3 _Link_
│◦➛ ${prefix}ytmp4 _Link_
│◦➛ ${prefix}tiktoknowm _Link_
│◦➛ ${prefix}tiktokwm _Link_
│◦➛ ${prefix}ssweb _Link_
└─❏

╭─❒ 「 *GROUP MENU* 」 ❒
│◦➛ ${prefix}antilink _on/off_
│◦➛ ${prefix}welcome _on/off_
│◦➛ ${prefix}antivirtex _on/off_
│◦➛ ${prefix}promote _@tag_
│◦➛ ${prefix}demote _@tag_
│◦➛ ${prefix}add _628xxxx_
│◦➛ ${prefix}kick _@tag/reply_
│◦➛ ${prefix}setppgroup _Reply Image_
│◦➛ ${prefix}setdesc _text_
│◦➛ ${prefix}setname _text_
│◦➛ ${prefix}hidetag _text_
│◦➛ ${prefix}linkgroup
│◦➛ ${prefix}here
│◦➛ ${prefix}tagall
│◦➛ ${prefix}tagme
│◦➛ ${prefix}revoke _Reset Link Group_
│◦➛ ${prefix}open
│◦➛ ${prefix}close
│◦➛ ${prefix}infogroup
└─❏

╭─❒ 「 *OTHER MENU* 」 ❒
│◦➛ ${prefix}info
│◦➛ ${prefix}speed
│◦➛ ${prefix}runtime
│◦➛ ${prefix}rules
│◦➛ ${prefix}del _Reply To Bot Messages_
│◦➛ ${prefix}donasi
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'ownermenu':
case 'ownmenu':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${waktu}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name  :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername}
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())}
└─❏

╭─❒ 「 *OWNER MENU* 」 ❒
│◦➛ *${prefix}bc* _text_
│◦➛ *${prefix}bc2* _text_
│◦➛ *${prefix}bctext* _text_
│◦➛ *${prefix}bcgc* _text_
│◦➛ *${prefix}setnamebot* _text_
│◦➛ *${prefix}setppbot* _Reply Gambarnya_
│◦➛ *${prefix}setbiobot* _text_
│◦➛ *${prefix}leave*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'downloadmenu':
case 'dlmenu':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${waktu}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name  :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername}
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())}
└─❏

╭─❒ 「 *DOWNLOAD MENU* 」 ❒
│◦➛ ${prefix}ytmp3 _Link_
│◦➛ ${prefix}ytmp4 _Link_
│◦➛ ${prefix}tiktoknowm _Link_
│◦➛ ${prefix}tiktokwm _Link_
│◦➛ ${prefix}ssweb _Link_
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'stickermenu':
case 'stickmenu':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${waktu}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name  :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername}
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())}
└─❏

╭─❒ 「 *STICKER MENU* 」 ❒
│◦➛ ${prefix}sticker _Reply Image_
│◦➛ ${prefix}toimg _Reply Image_
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'groupmenu':
case 'gcmenu':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${waktu}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name  :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername}
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())}
└─❏

╭─❒ 「 *GROUP MENU* 」 ❒
│◦➛ ${prefix}antilink _on/off_
│◦➛ ${prefix}welcome _on/off_
│◦➛ ${prefix}antivirtex _on/off_
│◦➛ ${prefix}promote _@tag_
│◦➛ ${prefix}demote _@tag_
│◦➛ ${prefix}add _628xxxx_
│◦➛ ${prefix}kick _@tag/reply_
│◦➛ ${prefix}setppgroup _Reply Image_
│◦➛ ${prefix}setdesc _text_
│◦➛ ${prefix}setname _text_
│◦➛ ${prefix}hidetag _text_
│◦➛ ${prefix}linkgroup
│◦➛ ${prefix}here
│◦➛ ${prefix}tagall
│◦➛ ${prefix}tagme
│◦➛ ${prefix}revoke _Reset Link Group_
│◦➛ ${prefix}open
│◦➛ ${prefix}close
│◦➛ ${prefix}infogroup
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'othermenu':
case 'othmenu':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${waktu}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name  :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername}
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())}
└─❏

╭─❒ 「 *OTHER MENU* 」 ❒
│◦➛ ${prefix}speed
│◦➛ ${prefix}runtime
│◦➛ ${prefix}rules
│◦➛ ${prefix}del _Reply To Bot Messages_
│◦➛ ${prefix}donasi
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//━━━━[ Feature Group ]━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Type :\n${prefix}welcome on to enable\n${prefix}welcome off to disable`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('```welcome is enable !!```')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Successfully enable the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('```welcome has been off before !!```')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Successfully disable the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Type :\n${prefix}antilink on to enable\n${prefix}antilink off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply('```Antilink is enable !!```')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully enable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Type :\n${prefix}antivirtex on to enable\n${prefix}antivirtex off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply('```Antivirtex is enable !!```')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully enable the antivirtex feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'groupopen':
case 'open':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`Successful opening group\`\`\` *${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'groupclose':
case 'close':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`Successfully closing the group\`\`\` *${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgroup':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Dhani.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Dhani.sendMessage(from, yeh, text, { quoted: mek })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you become admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
} else {
mentions(`Order received, @${mentioned[0].split('@')[0]} You become admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to not be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you are not an admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Order received, Lower : @${mentioned[0].split('@')[0]} Become a member`, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Who wants to add ??')
if (args[0].startsWith('08')) return reply('Use country code bro')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Dhani.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Failed to add target, maybe because in private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag the target you want to kick !");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Dhani.groupRemove(from, [anu]);
reply(mess.success);
} else {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateSubject(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Success in Changing the Group Name to\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateDescription(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Successfully Changed Group Description\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setppgroup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Dhani.downloadMediaMessage(encmedia)
Dhani.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Send or tag an image with the caption ${prefix}setpp`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogroup':
case 'groupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Dhani.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${from}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Group :* @${groupMetadata.owner.split('@')[0]}\n*Number of admins :* ${groupAdmins.length}\n*Number of participants :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Enable' : 'Disable'}\n*AntiLink :* ${isAntiLink ? 'Enable' : 'Disable'}\n*Desc :* \n\n${groupMetadata.desc}`
Dhani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgroup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Dhani.query({json, expect200: true})
reply('Successfully reset group link')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Dhani.chats.get(ido).presences), Dhani.user.jid]
Dhani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'tagme':
if (!isGroup) return reply(mess.only.group)
mentions(`Tag : @${sender.split("@")[0]}`, [sender], true)
break
case 'leave':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
setTimeout( () => {
Dhani.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Byee... , the bot will leave the group')
}, 0)
break

//━━━━[ Feature Downloader ]━━━━//

case 'ytmp3':
if (args.length < 1) return reply("Enter youtube url !!")
url = args.join(' ')
reply(`_audio is being processed, please wait a while longer_`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=NisaaCantik`)
ytmp3 = await getBuffer(anu.result.url)
Dhani.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':
if (args.length < 1) return reply("Enter youtube url !!")
url = args.join(' ')
reply(`_video is being processed, please wait a while longer_`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=NisaaCantik`)
ytmp4 = await getBuffer(anu.result.url)
Dhani.sendMessage(from, ytmp4, video, {caption:`Done`, thumbnail:Buffer.alloc(0), quoted:mek})
break
case 'tiktoknowm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktoknowm?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.result.nowatermark)
Dhani.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break
case 'tiktokwm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktokwm?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.video_URL.vid_wm)
Dhani.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break

//━━━━[ Feature Sticker ]━━━━//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply sticker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Failed, when converting sticker to image')
buffer = fs.readFileSync(ran)
Dhani.sendMessage(from, buffer, image, {quoted: mek, caption: 'here'})
fs.unlinkSync(ran)
})
break

//━━━━[ Feature Owner ]━━━━//

case 'bc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('The text?')
anu = await Dhani.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '𝙈𝙀𝙉𝙐'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: '𝙊𝙒𝙉𝙀𝙍'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '𝘉 𝘳 𝘰 𝘢 𝘥 𝘤 𝘢 𝘴 𝘵',
buttons: buttonss,
headerType: 1
}
await Dhani.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fgi})
}
reply(`Broadcast Success`)
break
case 'bc2':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
if (args.length < 1) return reply('text?')
anu100 = await Dhani.chats.all()
if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc100 = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu100) {
Dhani.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
}
reply('Broadcast Success')
} else {
for (let _ of anu100) {
Dhani.sendMessage(_.jid, 
{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
"footerText": `*_© ${ownername} || 2022_*\n*_${waktu}_*`,
"buttons": [
{"buttonId": `${prefix}menu`,
"buttonText": {"displayText": "𝙈𝙀𝙉𝙐"
},"type": "RESPONSE"}
], "headerType": 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fakeimage,
}}, MessageType.buttonsMessage )
}
reply('Broadcast Success')
}
break
case 'bctext':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await Dhani.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, bc, image, { caption: `[ BROADCAST IMAGE ]\n\n${body.slice(4)}` })
}
reply('Broadcast Success')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(7)}\n\n*_BROADCAST_*`)
}
reply('Broadcast Success')
}
break
case 'bcgc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await Dhani.downloadMediaMessage(encmedia)
for (let _ of groupMembers) {
Dhani.sendMessage(_.jid, bcgc, image, { caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
}
reply('Success broadcast group')
}
break
case 'clearall':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anu = await Dhani.chats.all()
Dhani.setMaxListeners(25)
for (let _ of anu) {
Dhani.deleteChat(_.jid)
}
reply('Successfully delete all chat')
break
case 'setnamebot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Text?')
namebot = body.slice(11)
Dhani.updateProfileName(namebot)
reply(`Success in changing the name to *${body.slice(11)}*`)
break
case 'setbiobot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('text?')
bio = body.slice(10)
Dhani.setStatus(`${bio}`)
reply(`Success changing bio to *${body.slice(10)}*`)
break
case 'setppbot':
if (!isQuotedImage) return reply('Reply imagenya!')
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await Dhani.downloadAndSaveMediaMessage(enmediau)
await Dhani.updateProfilePicture(botNumber, mediau)
reply('_Successfully changing bot profile photo')
break

//━━━━[ Feature Other ]━━━━//

case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break;
case 'ping':
case 'speed':
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *𝙎𝙋𝙀𝙀𝘿* 」\nRespond in ${latensie.toFixed(4)} Second 💬`)
break
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Ownernya ${botname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('*_that`s my owner_*')
break
case 'ssweb':
case 'ss':
if (args.length < 1) return reply(`Where's the url bro?`)
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Dhani.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break
case 'd':
case 'del':
case 'delete':
Dhani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'rules':
menu = `*_RULES BOT_*

1. Don't spam bots.
Sanctions: *Block*

2. Don't call bots.
Sanctions: *Block*

3. Don't exploit bots.
Sanctions: *Permanen Block*

If you understand the rules, please type *${prefix}menu* to get started!

──「 *${botname}* 」──`
fakeitem(menu)
break
//━━━━[ Feature Other's ]━━━━//
case 'store':
timestampe = speed();
latensie = speed() - timestampe
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${waktu} 
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'} 
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername}
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())}
└─❏

╭─❒ 「 *STORE MENU* 」 ❒
│◦➛ ${prefix}cvcstore
│◦➛ ${prefix}joystore
│◦➛ ${prefix}molystore
│◦➛ ${prefix}xerastore
│◦➛ ${prefix}scrlndstore
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//==============[ STORE MENU ]==============//
case 'cvcstore':
menu =`
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CVC CLOUD* 」 ❒
│◦➛ ${prefix}cvcdomain
│◦➛ ${prefix}cvctopup
│◦➛ ${prefix}cvcvpsrdp
│◦➛ ${prefix}cvchost
│◦➛ ${prefix}cvcrealms
│◦➛ ${prefix}mcpeori
│◦➛ ${prefix}cvcpayment
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'contactcvc':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:Ilham\n`
+ `ORG: Seller CVC CLOUD STORE ;\n`
+ `TEL;type=CELL;type=VOICE;waid=6282122451070:6282122451070\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `Seller CVC CLOUD STORE`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('╭─❒ 「 *CONTACT & PAYMENT* 」 ❒\n│ *ALL PAYMENT:*\n│◦➛ *OVO*\n│◦➛ *DANA*\n│◦➛ *GOPAY*\n│◦➛ *SAWERIA*\n│◦➛ *QRIS*\n│◦➛ *SHOPEE PAY*\n│◦➛ *PAYPAL*\n│◦➛====================\n│ *Testimoni? Check In Discord :*\n│  *1.* _https://discord.gg/gXuaDpPm_\n│  *2.* _https://discord.gg/DYqA3JgP_\n│◦➛====================\n│ *GROUP LINK :*\n│ _https://bit.ly/3goQZyc_\n└─❏\n')
break
//================[ FEATURE CVC STORE ]=================//
case 'project':
if (!isOwner) return reply('Belum Selesai')
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${owner2 ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CONTACT & PAYMENT* 」 ❒
│ *ALL PAYMENT:*
│◦➛ *OVO*
│◦➛ *DANA*
│◦➛ *GOPAY*
│◦➛ *SAWERIA*
│◦➛ *QRIS*
│◦➛ *SHOPEE PAY*
│◦➛ *PAYPAL
│◦➛====================
│ *Testimoni? Check In Discord :*
│  *1.* _https://discord.gg/gXuaDpPm_
│  *2.* _https://discord.gg/DYqA3JgP_
│◦➛====================
│ *GROUP LINK :*
│ _https://bit.ly/3goQZyc_
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'cvctopup':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CVC CLOUD STORE* 」 ❒
│ *INFORMATION*
│ *TOP UP ALL GAMES*
│◦➛==================
│◦➛ ${prefix}genshincvc
│◦➛ ${prefix}pubgcvc
│◦➛ ${prefix}ffcvc
│◦➛ ${prefix}mlcvc
│◦➛ ${prefix}robloxcvc
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'genshincvc':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CVC CLOUD STORE* 」 ❒
│ *INFORMATION*
│ *TOP UP GENSHIN IMPACT*
│ *JIKA SALAH KIRIM UID DAN*
│ *SERVER TANGGUNG JAWAB SENDIRI*
│◦➛==================
│ *LIST HARGA :*
│◦➛ *60/17k*
│◦➛ *330/80k*
│◦➛ *1090/250K*
│◦➛ *2240/470K*
│◦➛==================
│ *ALL PAYMENT :*
│◦➛ *OVO*
│◦➛ *DANA*
│◦➛ *GOPAY*
│◦➛ *SAWERIA*
│◦➛ *QRIS*
│◦➛ *SHOPEE PAY*
│◦➛ *PAYPAL*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'pubgcvc':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CVC CLOUD STORE* 」 ❒
│ *INFORMATION*
│ *TOP UP UC PUBG*
│ *SALAH KIRIM ID? TANGGUNG*
│ *JAWAB SENDIRI*
│◦➛==================
│ *LIST HARGA :*
│◦➛ *50 UC :* 10K
│◦➛ *70 UC :* 14K
│◦➛ *100 UC :* 20K
│◦➛ *125 UC :* 25K
│◦➛ *150 UC :* 30K
│◦➛ *250 UC :* 48K
│◦➛ *500 UC :* 95K
│◦➛ *700 UC :* 136K
│◦➛ *1250 UC :* 230K
│◦➛ *1750 UC :* 340K
│◦➛================== 
│ *ALL PAYMENT :*
│◦➛ *OVO*
│◦➛ *DANA*
│◦➛ *GOPAY
│◦➛ *QRIS*
│◦➛ *SAWERIA*
│◦➛ *SHOPEE PAY*
│◦➛ *PAYPAL*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'robloxcvc':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CVC CLOUD STORE* 」 ❒
│ *INFORMATION*
│ *TOP UP ROBUX/ROBLOX*
│ *PEMBELIAN ROBUX VIA GAMEPASS*
│ *ROBLOX MEMPUNYAI KEMUNGKINAN*
│ *UNTUK DI BAN DALAM JUMLAH*
│ *PEMBELIAN BESAR. ADMIN TIDAK*
│ *BERTANGGUNG JAWAB JIKA AKUN*
│ *TERBANNED, MEMBELI BERARTI*
│ *SETUJU*
│◦➛==================
│ *HARGA :*
│◦➛ *15k per 105 Robux*
│◦ *MINIMAL PEMBELIAN ADALAH*
│  *100 ROBUX*
│◦ *PENGIRIMAN MELALUI GAMEPASS
│  *(FEE DI TANGGUNG SAYA)
│◦ *PROSES 3-5 HARI SETELAH*
│  *GAMEPASS DIBUAT*
│◦➛==================
│ *ALL PAYMENT :*
│◦➛ *OVO*
│◦➛ *DANA*
│◦➛ *GOPAY*
│◦➛ *QRIS*
│◦➛ *SAWERIA*
│◦➛ *SHOPEE PAY*
│◦➛ *PAYPAL*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'ffcvc':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 ** 」 ❒
│ *INFORMATION*
│ *SALAH KIRIM ID?*
│ *TANGGUNG JAWAB SENDIRI*
│ *UNTUK PEMBELIAN 100K+ AKAN*
│ *MENDAPATKAN DM TAMBAHAN +5*
│◦➛==================
│◦➛ *10 DM :* 2K
│◦➛ *50 DM :* 7K
│◦➛ *70 DM :* 10K
│◦➛ *100 DM :* 15K
│◦➛ *150 DM :* 20K
│◦➛ *200 DM :* 28K
│◦➛ *355 DM :* 50K
│◦➛ *500 DM :* 68K
│◦➛ *770 DM :* 100K
│◦➛ *1450 DM :* 195K
│◦➛ *2720+5 DM :* 350K
│◦➛ *4000 DM :* 500K
│◦➛==================
│ *ALL PAYMENT :*
│◦➛ *OVO*
│◦➛ *DANA*
│◦➛ *GOPAY
│◦➛ *QRIS*
│◦➛ *SAWERIA*
│◦➛ *SHOPEE PAY*
│◦➛ *PAYPAL*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'mlcvc':
if (!isOwner) return reply('Gak Ada List Nya')
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'cvcdomain':
if (!isOwner) return reply('Belum Ada')
menu = `
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'cvcvpsrdp':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CVC CLOUD STORE* 」 ❒
│ *VPS/RDP*
│ *INFORMATION*
│ *PING :* 20-60
│ *OS :* COSTUM
│ *ACTIVE :* 30 HR
│ *GARANSI :* 15 HR
│◦➛==================
│◦➛ *RAM 2GB :* 15K
│◦➛ *RAM 3.5GB :* 20K
│◦➛ *RAM 4GB :* 30K
│◦➛ *RAM 8GB :* 40K
│◦➛ *RAM 16GB :* 70K
│◦➛ *RAM 32GB :* 150K
│◦➛==================
│ *ALL PAYMENT :*
│◦➛ *OVO*
│◦➛ *DANA*
│◦➛ *GOPAY*
│◦➛ *SAWERIA
│◦➛ *QRIS*
│◦➛ *SHOPEE PAY*
│◦➛ *PAYPAL*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'cvcrealms':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CVC CLOUD STORE* 」 ❒
│ *Realms Plus*
│◦➛==================
│ *Harga = Rp15.000
│ *Untuk Pembelian 15k Memakai
│  Akun Xbox Sendiri*
│◦➛==================
│ *Harga = Rp20.000
│ *Untuk Pembelian 20k Memakai
│  Akun Pihak Seller*
│◦➛==================
│ *Keuntungan :*
│◦➛ *ON 24/7*
│◦➛ *Slot 10 Pemain
│◦➛ *Buat Mabar*
│◦➛ *Aktif Selama 1 Bulan*
│◦➛ *Bisa Ditambahkan Fitur*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'cvchost':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *CVC CLOUD STORE* 」 ❒
│ *HOSTING MINECRAFT*
│ *INFORMATION*
│ *REGION :* SINGAPORE
│ *CORE :* INTEL XEON @3.2Hz
│ *ANTI LAG TPS STABIL*
│ *PING 20-60*
│ *GARANSI 15 HR*
│ *ACTIVE :* 30 HR
│ *SOFTWARE :* COSTUM
│◦➛====================
│◦➛ *RAM :* 2 GB
│◦➛ *CPU :* 150%
│◦➛ *DISK :* 20 GB
│◦➛ *PRICE :* 10K
│◦➛====================
│◦➛ *RAM :* 4 GB
│◦➛ *CPU :* 200%
│◦➛ *DISK :* 40 GB
│◦➛ *PRICE :* 30K
│◦➛====================
│◦➛ *RAM :* 8 GB
│◦➛ *CPU :* 300%
│◦➛ *DISK :* 80 GB
│◦➛ *PRICE :* 70K
│◦➛====================
│◦➛ *RAM :* 12 GB
│◦➛ *CPU :* 400%
│◦➛ *DISK :* 120 GB
│◦➛ *PRICE :* 100K
│◦➛====================
│◦➛ *RAM :* 17 GB
│◦➛ *CPU :* 500%
│◦➛ *DISK :* 170 GB
│◦➛ *PRICE :* 150K
│◦➛====================
│◦➛ *RAM :* 32 GB
│◦➛ *CPU :* 999%
│◦➛ *DISK :* 320 GB
│◦➛ *PRICE :* 260K
│◦➛====================
│ *SOFTWARE :*
│◦➛ *BEDROCK* 
│◦➛ *POCKETMINE*
│◦➛ *JAVA EDITION* 
│ *(SPIGOT, PAPER, BUKKIT, BUNGGEECORD)*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}contactcvc`, buttonText: { displayText: 'CONTACT ME' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//================[ JOY STORE ]==============//
case 'joystore':
if (!isOwner) return reply('Belum Ada')
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}joyvps`, buttonText: { displayText: 'JOY CLOUD VPS' }, type: 1 },{ buttonId: `${prefix}joyhost`, buttonText: { displayText: 'JOY CLOUD HOST' }, type: 1 },{ buttonId: `${prefix}joydomain`, buttonText: { displayText: 'JOY CLOUD DOMAIN' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'contactjoy':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:JOY KECE\n`
+ `ORG:JOY CLOUD STORE;\n`
+ `TEL;type=CELL;type=VOICE;waid=6283188259036:6283188259036\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `JOY KECE`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('╭─❒ 「 *CONTACT & PAYMENT* 」 ❒\n│ *ALL PAYMENT:*\n│◦➛ *OVO*\n│◦➛ *DANA*\n│◦➛ *GOPAY*\n│◦➛ *SAWERIA*\n│◦➛ *QRIS*\n│◦➛ *SHOPEE PAY*\n│◦➛ *PAYPAL*\n│◦➛====================\n│ *Testimoni? Check In Discord :*\n│  *1.* _https://discord.gg/gXuaDpPm_\n│  *2.* _https://discord.gg/DYqA3JgP_\n│◦➛====================\n│ *GROUP LINK :*\n│ _https://bit.ly/3goQZyc_\n└─❏\n')
break
//===============[ FEATURE JOY STORE ]===========//
case 'joyhost':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *JOY CLOUD HOST* 」 ❒
│ *INFORMATION*
│ *REGION :* SINGAPORE
│ *ANTI LAG*
│ *ANTI ERROR*
│ *PING 20-60*
│◦➛====================
│◦➛ *RAM 1GB :* 10K
│◦➛ *RAM 2GB :* 20K
│◦➛ *RAM 3GB :* 30K
│◦➛ *RAM 4GB :* 40K
│◦➛ *RAM 5GB :* 50K
│◦➛ *RAM 6GB :* 60K
│◦➛ *RAM 7GB :* 70K
│◦➛ *RAM 8GB :* 80K
│◦➛====================
│ *GROUP LINK :*
│ https://bit.ly/3ss7WgP
│◦➛====================
│ *Minat? Chat Me:*
│ https://wa.me/6283188259036
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'joyvps':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *JOY CLOUD VPS* 」 ❒
│ *INFORMATION*
│ *REGION :* SINGAPORE
│◦➛====================
│◦➛ *RAM 2GB :* 20K
│◦➛ *RAM 3GB :* 30K
│◦➛ *RAM 4GB :* 40K
│◦➛ *RAM 5GB :* 50K
│◦➛ *RAM 6GB :* 60K
│◦➛ *RAM 7GB :* 70K
│◦➛ *RAM 8GB :* 80K
│◦➛====================
│ *GROUP LINK :*
│ https://bit.ly/3ss7WgP
│◦➛====================
│ *Minat? Chat Me :*
│ https://wa.me/6283188259036
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'joydomain':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *JOY CLOUD STORE* 」 ❒
│ *INFORMATION*
│ *DOMAIN .com .net .uno*
│ *.site .xyz*
│◦➛====================
│ *DOMAIN .com :* 50K
│ *DOMAIN .net :* 50K
│ *DOMAIN .uno :* 25K
│ *DOMAIN .site :* 20K
│ *DOMAIN .xyz :* 20K
│◦➛====================
│ *GROUP LINK :*
│ https://bit.ly/3ss7WgP
│◦➛====================
│ *Minat? Chat Me :*
│ https://wa.me/6283188259036
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//===============[ MOLY STORE ]============//
case 'molystore':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *MOLY STORE* 」 ❒
│ *PRODUK YANG DI JUAL OLEH*
│ *MolyStore_ID*
│◦➛===================
│ *INFORMATION*
│◦➛ *MINECRAFT ORI :* 15K
│◦➛ *TOP UP*
│◦➛ *YTPREMIUM :* 5K
│◦➛ *QRIS :* 6K
│◦➛ *AKUN FF/ML*
│◦➛ *TOPUP ALL GAME*
│◦➛===================
│ *GROUP LINK :*
│ https://bit.ly/3shQ884
│◦➛===================
│ *Minat? Chat Me :*
│ https://wa.me/62855007862
│◦➛===================
│ *ALL PAYMENT :*
│◦➛ *OVO*
│◦➛ *DANA*
│◦➛ *GOPAY*
│◦➛ *QRIS*
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//==============[ FOXY STORE ]==============//
case 'foxystore':
if (!isOwner) return reply('Error')
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//================[ SCRLND STORE ]=============//
case 'scrlndstore':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}scrlndvps`, buttonText: { displayText: 'SCRLND VPS' }, type: 1 },{ buttonId: `${prefix}scrlndhost`, buttonText: { displayText: 'SCRLND HOST' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//=====[ FEATURE SCRLND STORE ]==========//
case 'scrlndvps':
if (!isOwner) return reply('Belum Ada :v')
menu = `
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'scrlndhost':
if (!isOwner) return reply('Belum Ada :v')
menu = `
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//=====[ DONASI ]=========//
case 'donasi':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *DONATION FOR ME* 」 ❒
│◦➛ *Pulsa :* 085271588014
│◦➛ *Dana :* 085271588014
│◦➛ *Gopay :* 085271588014
│◦➛ *Saweria :* https://saweria.co/YTMGTWIRA420
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'sampah':
case 'tolong':
menu = `
TOLONG VIRTEX IN NOMER DIBAWAH INI!!!
https://wa.me/6288279560165
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//====[ INFO MENU ]====//
case 'info':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *INFO MENU* 」 ❒
│◦➛ ${prefix}ytowner
│◦➛ ${prefix}igowner
│◦➛ ${prefix}infobot
│◦➛ ${prefix}infoown
│◦➛ ${prefix}prefix
│◦➛ ${prefix}
│◦➛ ${prefix}
│◦➛ ${prefix}
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'infobot':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'infoown':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO OWNER* 」 ❒
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
└─❏`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'ytowner':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *INFO YOUTUBE* 」 ❒
│ *INFORMATION*
│ *SUBSCRIBE CHANNEL OWNER :*
│ https://youtube.com/c/YTMGTWIRA420
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'igowner':
menu = `
╭─❒ 「 *${sayingtime}* 」 ❒
│◦➛ *Date :* ${date}
│◦➛ *Time :* ${time}
└─❏

╭─❒ 「 *INFO USER* 」 ❒
│◦➛ *Name :* ${pushname}
│◦➛ *Number :* @${senderr.split("@")[0]}
│◦➛ *Status :* ${isOwner ? 'OWNER' : 'USER'}
└─❏

╭─❒ 「 *INFO BOT* 」 ❒
│◦➛ *Bot Name :* ${botname}
│◦➛ *Owner Name :* ${ownername} 
│◦➛ *Owner Number :* @${owner2.split("@")[0]}
│◦➛ *Speed :* ${latensie.toFixed(4)} _Sec_
│◦➛ *Prefix :* 『> *${prefix}* <』
│◦➛ *Runtime :* ${runtime(process.uptime())} 
└─❏

╭─❒ 「 *INFO INSTAGRAM* 」 ❒
│ *INFORMATION*
│ *FOLLOW INSTAGRAM OWNER :*
│ https://instagram.com/wiranation_420
└─❏
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
case 'prefix':
menu = `
*PREFIX :* 『> *${prefix}* <』
`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${botname} || 2022_*`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'STORE' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONATION' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break
//━━━━[ End of Features ]━━━━//

default:
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}


	
    
