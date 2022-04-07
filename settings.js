/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6282145203493','6282145203493','6282145203493']
global.premium = ['6282145203493']
global.ownername = 'Sabo'
global.botname = 'Sabo Botz'
global.footer = 'Sabo'
global.ig = 'https://instagram.com/dsycassano'
global.email = 'sabo@gmail.com'
global.region = 'Indonesia'
global.sc = '-'
global.myweb = '-'
global.packname = 'Created By'
global.author = 'Sabo'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Berhasil',
    admin: 'Fitur Ini Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Ini Khusus Owner Bot',
    group: 'Fitur Ini Hanya Bisa Digunakan Di Dalam Group!',
    private: 'Fitur Ini Hanya Bisa Digunakan Di Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Loading..._',
    endLimit: 'Limit Anda Sudah Habis, Limit Akan Di Reset Setiap Jam 9',
}
global.limitawal = {
    premium: "Infinity",
    free: 30
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
