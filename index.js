const {Client, MessageEmbed} = require('discord.js');
const bot = new Client();
const fs = require('fs');
const Discord = require('discord.js');
const prefix = '?'
const token = 'TOKEN'
const client = new Discord.Client();

const GUILD = '654482539922063360'
const bottestingchannel = '654512471205478410';
const botcomchannel = '654510138170015764';
var Edition = 15;
var CurrentColor = '0xfdb913';
var AvscPink = '0xff33f9';
var BasicLogoPink = 'https://media.discordapp.net/attachments/654678177771290645/784143996548546633/avsclogobasic.jpg';
var CurrentLogo = 'https://media.discordapp.net/attachments/700340471351738478/804401810499698738/image0.png?width=861&height=670';
var Phase = 'Voting';
var Version = '0.27.6';
var PatchDate = '4:55 PM, February 2, 2021';
var PatchNote = 'Updated to Edition 15.'
var LastPatchDate = '4:55 PM CST, February 2, 2021';
var LastPatchNote = 'Fixed some errors in ?country-commands.'
var LastVers = '0.27.5'

client.on('ready', () =>{
    console.log('And... the bot is up!');   
})

Core_commands:
client.on('message', message=>{

    let args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    switch(args[0]){
        case 'ping':
            message.channel.send('Pong!');
            break;
        case 'bearly':
            message.channel.send('Ah yes, the best admin.')
            break;
        case 'stu':
            message.channel.send('Accepting charitable donations via card, cash, or check!')
            break;
        case 'octo':
            message.channel.send('Making recaps.')
            break;
            case 'ongoing':
                const ongoingembed = new MessageEmbed()
                .setTitle('**Ongoing edition of AVSC**')
                .addField('Current Edition', Edition)
                .addField('Host', 'Klaipeda, Lithuania')
                .addField('Current Contest Phase', Phase)
                .setColor(CurrentColor)
                .setThumbnail(CurrentLogo)
                .setFooter('Current Edition | AVSC | Requested by ' + message.author.username)
            message.channel.send(ongoingembed)
            break;
            case 'current':
                const currentembed = new MessageEmbed()
                .setTitle('**Ongoing edition of AVSC**')
                .addField('Current Edition', Edition)
                .addField('Host', 'Klaopeda, Lithuania')
                .addField('Current Contest Phase', Phase)
                .setColor(CurrentColor)
                .setThumbnail(CurrentLogo)
                .setFooter('Current Edition | AVSC | Requested by ' + message.author.username)
            message.channel.send(currentembed)
            break;
        case 'help':
            const helpembed = new MessageEmbed()
                .setTitle('Here is the help menu, ' + message.author.username)
                .addField('help', 'Sends this message.')
                .addField('ping', 'Pings the bot, which pings you back.')
                .addField('bearly', 'Sends a message about Bearly.')
                .addField('stu', 'Sends a message about Stu.')
                .addField('octo', 'Sends a message about Octo.')
                .addField('ongoing or current', 'Sends a message about what is currently going on in the contest.')
                .addField('patch-notes or version', 'Sends a message with the date, version, and notes of the last update. Also shows previous updates.')
                .addField('country-list', 'List of countries currently having statistics available.')
                .addField('faq', 'Frequently Asked Questions of the bot.')
                .addField('[edition]', '**This feature is not available yet, it is currently under development.**')
                .addField('[Country]', 'Tells you info about a country. **This feature will be available in Version 1.0.**')
                .addField('country-codes', 'List of country codes.')
                .addField('[Player]', '**This feature is not available yet, it is currently under development.**')
                .addField('ranking', '**This feature is not available yet, it is currently under development.**')
                .setColor(AvscPink)
                .setFooter('Help Message | AVSC Bot Version ' + Version + ' | Requested by ' + message.author.username)
            message.channel.send(helpembed);
            break;
        case 'patch-notes':
            const patchembed = new MessageEmbed()
                .setTitle('**Patch Notes**')
                .addField('Patch Date', PatchDate)
                .addField('Version', Version)
                .addField('Patch Note', PatchNote)
                .addField('Previous Patch Date', LastPatchDate)
                .addField('Previous Version', LastVers)
                .addField('Previous Patch Note', LastPatchNote)
                .setFooter('(Requested by ' + message.author.username + ')')
                .setColor(0x3fff33)
            message.channel.send(patchembed);
            break;
        case 'version':
            const versembed = new MessageEmbed()
                .setTitle('**Patch Notes**')
                .addField('Patch Date', PatchDate)
                .addField('Version', Version)
                .addField('Patch Note', PatchNote)
                .addField('Previous Patch Date', LastPatchDate)
                .addField('Previous Version', LastVers)
                .addField('Previous Patch Note', LastPatchNote)
                .setFooter('(Requested by ' + message.author.username + ')')
                .setColor(0x3fff33)
            message.channel.send(versembed);
            break;
        case 'country-codes':
            const codeembed = new MessageEmbed()
                .setTitle('**Country Codes**')
                .addField('__A Country Codes__', ':flag_af: Afghanistan `afg`\n :flag_ax: Aland Islands `ala`\n :flag_al: Albania `alb`\n :flag_ad: Andorra `and`\n :flag_ao: Angola `ang`\n :flag_aq: Antarctica `ana`\n :flag_am: Armenia `arm`\n :flag_az: Azerbaijan `aze`', inline = true)
                .addField('__B Country Codes__', ':flag_bd: Bangladesh `ban`\n :flag_by: Belarus `blr`\n :flag_be: Belgium `bel`\n :flag_bz: Belize `blz`\n :flag_ba: Bosnia and Herzegovina `bih`\n  :flag_bw: Botswana `bot`\n :flag_br: Brazil `bra`\n :flag_bf: Burkina Faso `bur`', inline = true)
                .addField('__C Country Codes__', ':flag_ca: Canada `can`\n :flag_cv: Cape Verde `cvd`\n :flag_cn: China `chn`\n :flag_cy: Cyprus `cyp`', inline = true)
                .addField('__D Country Codes__', ':flag_cd: Democratic Republic of the Congo `cod`', inline = true)
                .addField('__E Country Codes__', ':flag_eg: Egypt `egy`\n :flag_er: Eritrea `eri`\n :flag_ee: Estonia `est`\n :flag_et: Ethiopia `eth`', inline = true)
                .addField('__F Country Codes__', ':flag_fo: Faroe Islands `foe`\n :flag_fi: Finland `fin`\n :flag_fr: France `fra`', inline = true)
                .addField('__G Country Codes__', ':flag_ge: Georgia `geo`\n :flag_de: Germany `ger`\n :flag_gr: Greece `gre`\n :flag_gl: Greenland `gla`\n :flag_gd: Grenada `grn`\n :flag_gp: Guadaloupe `gdl`\n :flag_gw: Guinea Bissau `gbs`', inline = true)
                .addField('__H Country Codes__', ':flag_hu: Hungary `hun`', inline = true)
                .addField('__I Country Codes__', ':flag_is: Iceland `isl`\n :flag_in: India `ind`\n :flag_iq: Iraq `irq`\n :flag_ie: Ireland `irl`\n :flag_il: Israel `isr`\n :flag_it: Italy `ita`', inline = true)
                .addField('__J Country Codes__', ':flag_jm: Jamaica `jam`\n :flag_jp: Japan `jap`', inline = true)
                .addField('__K Country Codes__', ':flag_ki: Kiribati `kir`\n :flag_xk: Kosovo `kos`\n :flag_kg: Kyrgyzstan `kgz`', inline = true)
                .addField('__L Country Codes__', ':flag_ls: Lesotho `les`\n :flag_li: Liechtenstein `lie`\n :flag_lu: Luxembourg `lux`', inline = true)
                .addField('__M Country Codes__', ':flag_mg: Madagascar `mad`\n :flag_my: Malaysia `mas`\n :flag_mv: Maldives `mdv`\n :flag_mt: Malta `mlt`\n :flag_mu: Mauritius `mri`\n :flag_mx: Mexico `mex`\n :flag_mn: Mongolia `mgl`\n :flag_me: Montenegro `mne`\n :flag_mm: Myanmar `mya`', inline = true)
                .addField('__N Country Codes__', ':flag_np: Nepal `nep`\n :flag_nl: The Netherlands `ned`\n :flag_nz: New Zealand `nzl`\n :flag_ni: Nicaragua `nca`\n :flag_kp: North Korea `prk`\n :flag_no: Norway `nor`', inline = true)
                .addField('__O Country Codes__', ':flag_om: Oman `oma`', inline = true)
                .addField('__P Country Codes__', ':flag_pk: Pakistan `pak`\n :flag_pg: Papua New Guinea `png`\n :flag_py: Paraguay `par`\n :flag_pn: Pitcairn Islands `pit`', inline = true)
                .addField('__Q Country Codes__', ':flag_qa: Qatar `qat`', inline = true)
                .addField('__R Country Codes__', ':flag_ro: Romania `rou`\n :flag_ru: Russia `rus`', inline = true)
                .addField('__S Country Codes__', ':flag_sm: San Marino `smr`\n :flag_sa: Saudi Arabia `ksa`\n :flag_sn: Senegal `sen`\n :flag_sc: Seychelles `sey`\n :flag_za: South Africa `rsa`\n :flag_kr: South Korea `kor`\n :flag_ss: South Sudan `ssd`\n :flag_es: Spain `esp`\n :flag_lk: Sri Lanka `sri`\n :flag_sh: St. Helena `she`\n :flag_sr: Suriname `sur`\n :flag_ch: Switzerland `sui`', inline = true)
                .addField('__T Country Codes__', ':flag_tw: Taiwan `tpe`\n :flag_tk: Tokelau `tok`\n :flag_tm: Turkmenistan `tkm`\n :flag_tv: Tuvalu `tuv`', inline = true)
                .addField('__U Country Codes__', ':flag_ug: Uganda `uga`\n :flag_gb: United Kingdom `gbi`\n :flag_ua: Ukraine `ukr`\n :flag_us: United States of America `usa`', inline = true)
                .addField('__V Country Codes__', ':flag_va: Vatican City `vat`\n :flag_ve: Venezuela `ven`', inline = true)
                .addField('__W Country Codes__', ':flag_wf: Wallis and Futuna `waf`', inline = true)
                .addField('__Y Country Codes__', ':flag_ye: Yemen `yem`', inline = true)
                .addField('__Z Country Codes__', ':flag_zw: Zimbabwe `zim`', inline = true)
                .setFooter('Please use ?country-list to see the completed countries.')
                .setColor(0xff33f9)
                .setDescription('The country codes follow the [IOC 3-letter Codes](https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Wikipedia Article") when possible')
            message.channel.send(codeembed);
            break;
        case 'country-list':
            const listembed = new MessageEmbed()
                .setTitle('List of Countries with Statistics Released')
                .addField('A Countries', 'Afghanistan; Aland Islands; Albania; Andorra; Angola; Antarctica; Armenia; Azerbaijan')
                .addField('B Countries', 'Belarus; Belgium; Belize; Bosnia and Herzegovina; Botswana')
                .setDescription('For most of the countries, the statistics are being developed. Check back most days at 4:00 PM CST.')
                .setColor(AvscPink)
                .setFooter('Available countries | Requested by ' + message.author.username)
            message.channel.send(listembed)
            break;
        case 'faq':
            const faqembed = new MessageEmbed()
                .setTitle('AVSC Bot - Frequently Asked Questions')
                .addField('Why is my country not up?', 'The bot devs have busy schedules and do not get much time to work on country codes, thus many countries are not fully developed. Do "country-list" to see which countries are available.')
                .addField('When will all the countries be up?', 'Unknown. Currently they are all being developed and will be released as a big 1.0 update.')
                .addField('What about the players, editions, rankings, and others?', 'The other ways of finding out about entries are going to be developed after the countries.')
                .addField('Why does the help menu appear with all prefixes?', 'The devs have not figured out the prefix system to give it only one prefix. This will hopefully be released with the countries in the 1.0 update.')
                .addField('How often do bug updates come out?', 'Usually within a few hours of the discovery of the bugs.')
                .setDescription('Some of the Frequently Asked Questions about the bot.')
                .setColor(0xff33f9)
                .setFooter('Frequently Asked Questions | Requested by ' + message.author.username)
            message.channel.send(faqembed)
    }       
})


Countries:
client.on('message', message=>{

    let args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    switch(args[0]){
        case 'afghanistan':
            switch(args[1]){
                case 'ed6':
                const afed6 = new MessageEmbed()
                    .setTitle('**Afghanistan | Edition 6**')
                    .addField('Player', 'Babrie')
                    .addField('Song', 'MamaMoo - Egotistic')
                    .addField('Semi Final Draw', '7')
                    .addField('Semi Final Placement', '8th of 12 with 30 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', 'Did not qualify')
                    .setFooter('Afghanistan Edition 6 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Afghanistan_Flag.jpg/1200px-Afghanistan_Flag.jpg')
                    .setColor(0x007a36)
                message.channel.send(afed6);
                break;
            case 'gen':
                const afg = new MessageEmbed()
                    .setTitle('**Afghanistan in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 6')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'Babrie - edition 6;')
                    .addField('Best Placement', '8th (Semi Final)')
                    .addField('Worst Placement', '8th (Semi Final)')
                    .addField('Qualifications', '0')
                    .addField('Qualification Percentage', '0%')
                    .setFooter('Use ?afghanistan ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Afghanistan_Flag.jpg/1200px-Afghanistan_Flag.jpg')
                    .setColor(0x007a36)
                message.channel.send(afg);
            }
        break;
        case 'afg':
            switch(args[1]){
                case 'ed6':
                const afged6 = new MessageEmbed()
                    .setTitle('**Afghanistan | Edition 6**')
                    .addField('Player', 'Babrie')
                    .addField('Song', 'MamaMoo - Egotistic')
                    .addField('Semi Final Draw', '7')
                    .addField('Semi Final Placement', '8th of 12 with 30 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', 'Did not qualify')
                    .setFooter('Afghanistan Edition 6 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Afghanistan_Flag.jpg/1200px-Afghanistan_Flag.jpg')
                    .setColor(0x007a36)
                message.channel.send(afged6);
                break;
            case 'gen':
                const af = new MessageEmbed()
                    .setTitle('**Afghanistan in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 6')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'Babrie - edition 6;')
                    .addField('Best Placement', '8th (Semi Final)')
                    .addField('Worst Placement', '8th (Semi Final)')
                    .addField('Qualifications', '0')
                    .addField('Qualification Percentage', '0%')
                    .setFooter('Use ?afg ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Afghanistan_Flag.jpg/1200px-Afghanistan_Flag.jpg')
                    .setColor(0x007a36)
                message.channel.send(af);
            }
        break;
            }
    switch(args[0]){
        case 'aland_islands':
            switch(args[1]){
                case 'ed6':
                const alaed3 = new MessageEmbed()
                    .setTitle('**Åland | Edition 6**')
                    .addField('Player', 'Ashley')
                    .addField('Song', 'Venues - We Are One')
                    .addField('Semi Final Draw', 'Semi 1, Spot 3')
                    .addField('Semi Final Placement', '10th of 12 with 22 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', '10th of 15 with 51 points')
                    .setFooter('Åland Islands Edition 3 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/1200px-Flag_of_%C3%85land.svg.png')
                    .setColor(0x0053a5)
                message.channel.send(alaed3);
                break;
            case 'gen':
                const aland = new MessageEmbed()
                    .setTitle('**Åland Islands in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 6')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'Ashley - edition 6')
                    .addField('Best Placement', '10th (Semi Finals)')
                    .addField('Worst Placement', '10th (Semi Finals)')
                    .addField('Qualifications', '0')
                    .addField('Qualification Percentage', '0%')
                    .setFooter('Use ?aland_islands ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/1200px-Flag_of_%C3%85land.svg.png')
                    .setColor(0x0053a5)
                message.channel.send(aland);
            }
        break;
        case 'aland':
            switch(args[1]){
                case 'ed6':
                const alaned3 = new MessageEmbed()
                    .setTitle('**Åland | Edition 6**')
                    .addField('Player', 'Ashley')
                    .addField('Song', 'Venues - We Are One')
                    .addField('Semi Final Draw', 'Semi 1, Spot 3')
                    .addField('Semi Final Placement', '10th of 12 with 22 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', '10th of 15 with 51 points')
                    .setFooter('Åland Islands Edition 3 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/1200px-Flag_of_%C3%85land.svg.png')
                    .setColor(0x0053a5)
                message.channel.send(alaned3);
                break;
            case 'gen':
                const alan = new MessageEmbed()
                    .setTitle('**Åland Islands in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 6')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'Ashley - edition 6')
                    .addField('Best Placement', '10th (Semi Finals)')
                    .addField('Worst Placement', '10th (Semi Finals)')
                    .addField('Qualifications', '0')
                    .addField('Qualification Percentage', '0%')
                    .setFooter('Use ?aland ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/1200px-Flag_of_%C3%85land.svg.png')
                    .setColor(0x0053a5)
                message.channel.send(alan);
            }
            break;
            case 'ala':
                switch(args[1]){
                    case 'ed6':
                    const aled3 = new MessageEmbed()
                        .setTitle('**Åland | Edition 6**')
                        .addField('Player', 'Ashley')
                        .addField('Song', 'Venues - We Are One')
                        .addField('Semi Final Draw', 'Semi 1, Spot 3')
                        .addField('Semi Final Placement', '10th of 12 with 22 points')
                        .addField('Final Draw', 'Did not qualify')
                        .addField('Final Placement', '10th of 15 with 51 points')
                        .setFooter('Åland Islands Edition 3 | Requested by ' + message.author.username)
                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/1200px-Flag_of_%C3%85land.svg.png')
                        .setColor(0x0053a5)
                    message.channel.send(aled3);
                        break;
                    case 'gen':
                        const ala = new MessageEmbed()
                            .setTitle('**Åland Islands in AVSC**')
                            .addField('Participations', '1')
                            .addField('First Appearance', 'Edition 6')
                            .addField('Last Appearance', 'Edition 6')
                            .addField('Players', 'Ashley - edition 6')
                            .addField('Best Placement', '10th (Semi Finals)')
                            .addField('Worst Placement', '10th (Semi Finals)')
                            .addField('Qualifications', '0')
                            .addField('Qualification Percentage', '0%')
                            .setFooter('Use ?ala ed[edition] to learn about that specific song')
                            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/1200px-Flag_of_%C3%85land.svg.png')
                            .setColor(0x0053a5)
                        message.channel.send(ala);
            }
        break;
            }
    switch(args[0]){
        case 'albania':
            switch(args[1]){
                case 'ed5':
                const aled5 = new MessageEmbed()
                    .setTitle('**Albania | Edition 5**')
                    .addField('Player', 'Adam')
                    .addField('Song', 'Suzane - SLT')
                    .addField('Semi Final Draw', 'Automatically qualified')
                    .addField('Semi Final Placement', 'Automatically qualified')
                    .addField('Final Draw', '3')
                    .addField('Final Placement', '9th of 14 with 81 points')
                    .setFooter('Albania Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png')
                    .setColor(0xe41e20)
                message.channel.send(aled5);
                break;
                case 'ed6':
                const aled6 = new MessageEmbed()
                    .setTitle('**Albania | Edition 6**')
                    .addField('Player', 'Adam')
                    .addField('Song', 'Bea Miller - song like you')
                    .addField('Semi Final Draw', 'Semi 1, spot 10')
                    .addField('Semi Final Placement', '6th of 12 with 34 points')
                    .addField('Final Draw', '7')
                    .addField('Final Placement', '6th of 15 with 106 points')
                    .setFooter('Albania Edition 6 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png')
                    .setColor(0xe41e20)
                message.channel.send(aled6);
                break;
            case 'gen':
                const alb = new MessageEmbed()
                    .setTitle('**Albania in AVSC**')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 5')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'Adam - editions 5 and 6;')
                    .addField('Best Placement', '6th')
                    .addField('Worst Placement', '9th')
                    .addField('Qualifications', '2')
                    .addField('Qualification Percentage', '100%')
                    .setFooter('Use ?albania ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png')
                    .setColor(0xe41e20)
                message.channel.send(alb);
            }
        break;
        case 'alb':
            switch(args[1]){
                case 'ed5':
                const albed5 = new MessageEmbed()
                    .setTitle('**Albania | Edition 5**')
                    .addField('Player', 'Adam')
                    .addField('Song', 'Suzane - SLT')
                    .addField('Semi Final Draw', 'Automatically qualified')
                    .addField('Semi Final Placement', 'Automatically qualified')
                    .addField('Final Draw', '3')
                    .addField('Final Placement', '9th of 14 with 81 points')
                    .setFooter('Albania Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png')
                    .setColor(0xe41e20)
                message.channel.send(albed5);
                break;
                case 'ed6':
                const albed6 = new MessageEmbed()
                    .setTitle('**Albania | Edition 6**')
                    .addField('Player', 'Adam')
                    .addField('Song', 'Bea Miller - song like you')
                    .addField('Semi Final Draw', 'Semi 1, spot 10')
                    .addField('Semi Final Placement', '6th of 12 with 34 points')
                    .addField('Final Draw', '7')
                    .addField('Final Placement', '6th of 15 with 106 points')
                    .setFooter('Albania Edition 6 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png')
                    .setColor(0xe41e20)
                message.channel.send(albed6);
                break;
            case 'gen':
                const afg = new MessageEmbed()
                    .setTitle('**Albania in AVSC**')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 5')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'Adam - editions 5 and 6;')
                    .addField('Best Placement', '6th')
                    .addField('Worst Placement', '9th')
                    .addField('Qualifications', '2')
                    .addField('Qualification Percentage', '100%')
                    .setFooter('Use ?alb ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png')
                    .setColor(0xe41e20)
                message.channel.send(afg);
            }
        break;
            }
    switch(args[0]){
        case 'andorra':
            switch(args[1]){
                case 'ed3':
                const anded3 = new MessageEmbed()
                    .setTitle('**Andorra | Edition 3**')
                    .addField('Player', 'Fuerte')
                    .addField('Song', 'Everglow - Dun Dun')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '14')
                    .addField('Final Placement', '10th of 15 with 51 points')
                    .setFooter('Andorra Edition 3 | Requested by ' + message.author.username)
                    .setThumbnail('https://flagpolefarm.com/wp-content/uploads/2018/01/andorra-flag-2.jpg')
                    .setColor(0xd52b1e)
                message.channel.send(anded3);
                break;
            case 'gen':
                const and = new MessageEmbed()
                    .setTitle('**Andorra in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 3')
                    .addField('Last Appearance', 'Edition 3')
                    .addField('Players', 'Fuerte - edition 3;')
                    .addField('Best Placement', '10th')
                    .addField('Worst Placement', '10th')
                    .addField('Qualifications', 'Has not participated in semis')
                    .addField('Qualification Percentage', 'Has not participated in semis')
                    .setFooter('Use ?andorra ed[edition] to learn about that specific song')
                    .setThumbnail('https://flagpolefarm.com/wp-content/uploads/2018/01/andorra-flag-2.jpg')
                    .setColor(0xd52b1e)
                message.channel.send(and);
            }
        break;
        case 'and':
            switch(args[1]){
                case 'ed3':
                const and0ed3 = new MessageEmbed()
                    .setTitle('**Andorra | Edition 3**')
                    .addField('Player', 'Fuerte')
                    .addField('Song', 'Everglow - Dun Dun')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '14')
                    .addField('Final Placement', '10th of 15 with 51 points')
                    .setFooter('Andorra Edition 3 | Requested by ' + message.author.username)
                    .setThumbnail('https://flagpolefarm.com/wp-content/uploads/2018/01/andorra-flag-2.jpg')
                    .setColor(0xd52b1e)
                message.channel.send(andoed3);
                break;
            case 'gen':
                const ando = new MessageEmbed()
                    .setTitle('**Andorra in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 3')
                    .addField('Last Appearance', 'Edition 3')
                    .addField('Players', 'Fuerte - edition 3;')
                    .addField('Best Placement', '10th')
                    .addField('Worst Placement', '10th')
                    .addField('Qualifications', 'Has not participated in semis')
                    .addField('Qualification Percentage', 'Has not participated in semis')
                    .setFooter('Use ?and ed[edition] to learn about that specific song')
                    .setThumbnail('https://flagpolefarm.com/wp-content/uploads/2018/01/andorra-flag-2.jpg')
                    .setColor(0xd52b1e)
                message.channel.send(ando);
            }
        break;
            }
    switch(args[0]){
        case 'angola':
            switch(args[1]){
                case 'ed5':
                const anged5 = new MessageEmbed()
                    .setTitle('**Angola | Edition 5**')
                    .addField('Player', 'Puffle')
                    .addField('Song', 'Gergő Rácz, Orsovai Reni - Mostantol')
                    .addField('Semi Final Draw', '3')
                    .addField('Semi Final Placement', '6th of 9 with 25 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', 'Did not qualify')
                    .setFooter('Angola Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1200px-Flag_of_Angola.svg.png')
                    .setColor(0xcc092f)
                message.channel.send(anged5);
                break;
            case 'gen':
                const ang = new MessageEmbed()
                    .setTitle('**Angola in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 5')
                    .addField('Last Appearance', 'Edition 5')
                    .addField('Players', 'Puffle - edition 5;')
                    .addField('Best Placement', '6th (Semi Final)')
                    .addField('Worst Placement', '6th (Semi Final)')
                    .addField('Qualifications', '0')
                    .addField('Qualification Percentage', '0%')
                    .setFooter('Use ?angola ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1200px-Flag_of_Angola.svg.png')
                    .setColor(0xcc092f)
                message.channel.send(ang);
            }
        break;
        case 'ang':
            switch(args[1]){
                case 'ed5':
                const angoed5 = new MessageEmbed()
                    .setTitle('**Angola | Edition 5**')
                    .addField('Player', 'Puffle')
                    .addField('Song', 'Gergő Rácz, Orsovai Reni - Mostantol')
                    .addField('Semi Final Draw', '3')
                    .addField('Semi Final Placement', '6th of 9 with 25 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', 'Did not qualify')
                    .setFooter('Angola Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1200px-Flag_of_Angola.svg.png')
                    .setColor(0xcc092f)
                message.channel.send(angoed5);
                break;
            case 'gen':
                const ango = new MessageEmbed()
                    .setTitle('**Angola in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 5')
                    .addField('Last Appearance', 'Edition 5')
                    .addField('Players', 'Puffle - edition 5;')
                    .addField('Best Placement', '6th (Semi Final)')
                    .addField('Worst Placement', '6th (Semi Final)')
                    .addField('Qualifications', '0')
                    .addField('Qualification Percentage', '0%')
                    .setFooter('Use ?ang ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1200px-Flag_of_Angola.svg.png')
                    .setColor(0xcc092f)
                message.channel.send(ango);
            }
        break;
            }
    switch(args[0]){
        case 'antarctica':
            switch(args[1]){
                case 'ed5':
                const anted5 = new MessageEmbed()
                    .setTitle('**Antarctica | Edition 5**')
                    .addField('Player', 'Blade')
                    .addField('Song', 'Jordin Sparks - Battlefield')
                    .addField('Semi Final Draw', 'Automatically qualified')
                    .addField('Semi Final Placement', 'Automatically qualified')
                    .addField('Final Draw', '6')
                    .addField('Final Placement', '10th of 14 with 80 points')
                    .setFooter('Antarctica Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('http://www.symondsflags.com/wp-content/uploads/2014/09/antarctica-flag.jpg')
                    .setColor(0x3a7dce)
                message.channel.send(anted5);
                break;
            case 'gen':
                const ant = new MessageEmbed()
                    .setTitle('**Antarctica in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 5')
                    .addField('Last Appearance', 'Edition 5')
                    .addField('Players', 'Blade - edition 5;')
                    .addField('Best Placement', '10th')
                    .addField('Worst Placement', '10th')
                    .addField('Qualifications', '1')
                    .addField('Qualification Percentage', '100%')
                    .setFooter('Use ?antarctica ed[edition] to learn about that specific song')
                    .setThumbnail('http://www.symondsflags.com/wp-content/uploads/2014/09/antarctica-flag.jpg')
                    .setColor(0x3a7dce)
                message.channel.send(ant);
            }
        break;
        case 'ant':
            switch(args[1]){
                case 'ed5':
                const antaed5 = new MessageEmbed()
                    .setTitle('**Antarctica | Edition 5**')
                    .addField('Player', 'Blade')
                    .addField('Song', 'Jordin Sparks - Battlefield')
                    .addField('Semi Final Draw', 'Automatically qualified')
                    .addField('Semi Final Placement', 'Automatically qualified')
                    .addField('Final Draw', '6')
                    .addField('Final Placement', '10th of 14 with 80 points')
                    .setFooter('Antarctica Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('http://www.symondsflags.com/wp-content/uploads/2014/09/antarctica-flag.jpg')
                    .setColor(0x3a7dce)
                message.channel.send(antaed5);
                break;
            case 'gen':
                const anta = new MessageEmbed()
                    .setTitle('**Antarctica in AVSC**')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 5')
                    .addField('Last Appearance', 'Edition 5')
                    .addField('Players', 'Blade - edition 5;')
                    .addField('Best Placement', '10th')
                    .addField('Worst Placement', '10th')
                    .addField('Qualifications', '1')
                    .addField('Qualification Percentage', '100%')
                    .setFooter('Use ?ant ed[edition] to learn about that specific song')
                    .setThumbnail('http://www.symondsflags.com/wp-content/uploads/2014/09/antarctica-flag.jpg')
                    .setColor(0x3a7dce)
                message.channel.send(anta);
            }
        break;
            }
    switch(args[0]){
        case 'armenia':
            switch(args[1]){
                case 'ed3':
                const armed3 = new MessageEmbed()
                    .setTitle('**Armenia | Edition 3**')
                    .addField('Player', 'RedX')
                    .addField('Song', 'Teen Titans - Teen Titans')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '15')
                    .addField('Final Placement', '14th of 15 with 23 points')
                    .setFooter('Armenia Edition 3 | Requested by ' + message.author.username)
                    .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v3eYXHcSApHnuq4ckZW9zAHaE7%26pid%3DApi&f=1')
                    .setColor(0xf2a800)
                message.channel.send(armed3);
                break;
                case 'ed5':
                    const armed5 = new MessageEmbed()
                        .setTitle('**Armenia | Edition 5**')
                        .addField('Player', 'Jack')
                        .addField('Song', 'Lenni-Kim - Minuit')
                        .addField('Semi Final Draw', 'Semi 2, Spot 9')
                        .addField('Semi Final Placement', '1st of 9 with 40 points')
                        .addField('Final Draw', '8')
                        .addField('Final Placement', '4th of 14 with 98 points')
                        .setFooter('Armenia Edition 5 | Requested by ' + message.author.username)
                        .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v3eYXHcSApHnuq4ckZW9zAHaE7%26pid%3DApi&f=1')
                        .setColor(0xf2a800)
                    message.channel.send(armed5);
                break;
                case 'ed6':
                    const armed6 = new MessageEmbed()
                        .setTitle('**Armenia | Edition 6**')
                        .addField('Player', 'Jack')
                        .addField('Song', 'Kristian Kostov - Глубина')
                        .addField('Semi Final Draw', 'Semi 2, Spot 8')
                        .addField('Semi Final Placement', '2nd of 11 with 56 points')
                        .addField('Final Draw', '14')
                        .addField('Final Placement', '9th of 15 with 89 points')
                        .setFooter('Armenia Edition 6 | Requested by ' + message.author.username)
                        .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v3eYXHcSApHnuq4ckZW9zAHaE7%26pid%3DApi&f=1')
                        .setColor(0xf2a800)
                    message.channel.send(armed6);
                break;
            case 'gen':
                const arm = new MessageEmbed()
                    .setTitle('**Armenia in AVSC**')
                    .addField('Participations', '3')
                    .addField('First Appearance', 'Edition 3')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'RedX - Edition 3; Jack - Editions 5 and 6;')
                    .addField('Best Placement', '4th')
                    .addField('Worst Placement', '14th')
                    .addField('Qualifications', '2')
                    .addField('Qualification Percentage', '100%')
                    .setFooter('Use ?armenia ed[edition] to learn about that specific song')
                    .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v3eYXHcSApHnuq4ckZW9zAHaE7%26pid%3DApi&f=1')
                    .setColor(0xf2a800)
                message.channel.send(arm);
            }
        break;
        case 'arm':
            switch(args[1]){
                case 'ed3':
                const armeed3 = new MessageEmbed()
                    .setTitle('**Armenia | Edition 3**')
                    .addField('Player', 'RedX')
                    .addField('Song', 'Teen Titans - Teen Titans')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '15')
                    .addField('Final Placement', '14th of 15 with 23 points')
                    .setFooter('Armenia Edition 3 | Requested by ' + message.author.username)
                    .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v3eYXHcSApHnuq4ckZW9zAHaE7%26pid%3DApi&f=1')
                    .setColor(0xf2a800)
                message.channel.send(armeed3);
                break;
                case 'ed5':
                    const armeed5 = new MessageEmbed()
                        .setTitle('**Armenia | Edition 5**')
                        .addField('Player', 'Jack')
                        .addField('Song', 'Lenni-Kim - Minuit')
                        .addField('Semi Final Draw', 'Semi 2, Spot 9')
                        .addField('Semi Final Placement', '1st of 9 with 40 points')
                        .addField('Final Draw', '8')
                        .addField('Final Placement', '4th of 14 with 98 points')
                        .setFooter('Armenia Edition 5 | Requested by ' + message.author.username)
                        .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v3eYXHcSApHnuq4ckZW9zAHaE7%26pid%3DApi&f=1')
                        .setColor(0xf2a800)
                    message.channel.send(armeed5);
                break;
                case 'ed6':
                    const armed6 = new MessageEmbed()
                        .setTitle('**Armenia | Edition 6**')
                        .addField('Player', 'Jack')
                        .addField('Song', 'Kristian Kostov - Глубина')
                        .addField('Semi Final Draw', 'Semi 2, Spot 8')
                        .addField('Semi Final Placement', '2nd of 11 with 56 points')
                        .addField('Final Draw', '14')
                        .addField('Final Placement', '9th of 15 with 89 points')
                        .setFooter('Armenia Edition 6 | Requested by ' + message.author.username)
                        .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v3eYXHcSApHnuq4ckZW9zAHaE7%26pid%3DApi&f=1')
                        .setColor(0xf2a800)
                    message.channel.send(armed6);
                break;
            case 'gen':
                const arm = new MessageEmbed()
                    .setTitle('**Armenia in AVSC**')
                    .addField('Participations', '3')
                    .addField('First Appearance', 'Edition 3')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'RedX - Edition 3; Jack - Editions 5 and 6;')
                    .addField('Best Placement', '4th')
                    .addField('Worst Placement', '14th')
                    .addField('Qualifications', '2')
                    .addField('Qualification Percentage', '100%')
                    .setFooter('Use ?arm ed[edition] to learn about that specific song')
                    .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v3eYXHcSApHnuq4ckZW9zAHaE7%26pid%3DApi&f=1')
                    .setColor(0xf2a800)
                message.channel.send(arm);
            }
        break;
            }
    switch(args[0]){
        case 'azerbaijan':
            switch(args[1]){
                case 'ed4':
                const azed4 = new MessageEmbed()
                    .setTitle('**Azerbaijan | Edition 4**')
                    .addField('Player', 'RedX')
                    .addField('Song', 'Evanescence - My Heart is Broken')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '13')
                    .addField('Final Placement', '7th of 16 with 54 points')
                    .setFooter('Azerbaijan Edition 4 | Requested by ' + message.author.username)
                    .setThumbnail('http://www.world-free-printable-flags.com/images/azerbaijan.jpg')
                    .setColor(0x00b9e4)
                message.channel.send(azed4);
                break;
                case 'ed5':
                const azed5 = new MessageEmbed()
                    .setTitle('**Azerbaijan | Edition 5**')
                    .addField('Player', 'RedX')
                    .addField('Song', 'Athena Manoukian - I Surrender')
                    .addField('Semi Final Draw', '8th')
                    .addField('Semi Final Placement', '2nd of 9 with 49 points')
                    .addField('Final Draw', '11')
                    .addField('Final Placement', '5th of 14 with 97 points')
                    .setFooter('Azerbaijan Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('http://www.world-free-printable-flags.com/images/azerbaijan.jpg')
                    .setColor(0x00b9e4)
                message.channel.send(azed5);
                break;
            case 'gen':
                const az = new MessageEmbed()
                    .setTitle('**Azerbaijan in AVSC**')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 4')
                    .addField('Last Appearance', 'Edition 5')
                    .addField('Players', 'RedX - editions 4 and 5;')
                    .addField('Best Placement', '5th')
                    .addField('Worst Placement', '7th')
                    .addField('Qualifications', '1')
                    .addField('Qualification Percentage', '100%')
                    .setFooter('Use ?azerbaijan ed[edition] to learn about that specific song')
                    .setThumbnail('http://www.world-free-printable-flags.com/images/azerbaijan.jpg')
                    .setColor(0x00b9e4)
                message.channel.send(az);
            }
        break;
        case 'aze':
            switch(args[1]){
                case 'ed4':
                const azeed4 = new MessageEmbed()
                    .setTitle('**Azerbaijan | Edition 4**')
                    .addField('Player', 'RedX')
                    .addField('Song', 'Evanescence - My Heart is Broken')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '13')
                    .addField('Final Placement', '7th of 16 with 54 points')
                    .setFooter('Azerbaijan Edition 4 | Requested by ' + message.author.username)
                    .setThumbnail('http://www.world-free-printable-flags.com/images/azerbaijan.jpg')
                    .setColor(0x00b9e4)
                message.channel.send(azeed4);
                break;
                case 'ed5':
                const azeed5 = new MessageEmbed()
                    .setTitle('**Azerbaijan | Edition 5**')
                    .addField('Player', 'RedX')
                    .addField('Song', 'Athena Manoukian - I Surrender')
                    .addField('Semi Final Draw', '8th')
                    .addField('Semi Final Placement', '2nd of 9 with 49 points')
                    .addField('Final Draw', '11')
                    .addField('Final Placement', '5th of 14 with 97 points')
                    .setFooter('Azerbaijan Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('http://www.world-free-printable-flags.com/images/azerbaijan.jpg')
                    .setColor(0x00b9e4)
                message.channel.send(azeed5);
                break;
            case 'gen':
                const aze = new MessageEmbed()
                    .setTitle('**Azerbaijan in AVSC**')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 4')
                    .addField('Last Appearance', 'Edition 5')
                    .addField('Players', 'RedX - editions 4 and 5;')
                    .addField('Best Placement', '5th')
                    .addField('Worst Placement', '7th')
                    .addField('Qualifications', '1')
                    .addField('Qualification Percentage', '100%')
                    .setFooter('Use ?aze ed[edition] to learn about that specific song')
                    .setThumbnail('http://www.world-free-printable-flags.com/images/azerbaijan.jpg')
                    .setColor(0x00b9e4)
                message.channel.send(aze);
            }
        break;
            }
    switch(args[0]){
        case 'botswana':
            switch(args[1]){
                case 'ed5':
                const botsed5 = new MessageEmbed()
                    .setTitle('**Botswana | Edition 5**')
                    .addField('Player', 'Philip (banana juice)')
                    .addField('Song', 'Senhit - Dark Room')
                    .addField('Semi Final Draw', 'Semi 1, Spot 5')
                    .addField('Semi Final Placement', '7th of 9 with 17 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', 'Did not qualify')
                    .setFooter('Botswana Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/255px-Flag_of_Botswana.svg.png')
                    .setColor(0x75aadb)
                message.channel.send(botsed5);
                break;
                case 'ed6':
                const botsed6 = new MessageEmbed()
                    .setTitle('**Botswana | Edition 6**')
                    .addField('Player', 'Philip (banana juice)')
                    .addField('Song', 'Skan and Krale (ft. M.I.M.E, Drama B.) - No Glory')
                    .addField('Semi Final Draw', 'Semi 1, Spot 5')
                    .addField('Semi Final Placement', '7th of 11 with 32 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', 'Did not qualify')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/255px-Flag_of_Botswana.svg.png')
                    .setColor(0x75aadb)
                message.channel.send(botsed6);
                break;
            case 'gen':
                const bots = new MessageEmbed()
                    .setTitle('**Botswana in AVSC**')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 5')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'Philip (banana juice) - editions 5 and 6;')
                    .addField('Best Placement', '7th (Semi Final)')
                    .addField('Worst Placement', '7th (Semi Final)')
                    .addField('Qualifications', '0')
                    .addField('Qualification Percentage', '0%')
                    .setFooter('Use ?botswana ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/255px-Flag_of_Botswana.svg.png')
                    .setColor(0x75aadb)
                message.channel.send(bots);
            }
        break;
        case 'bot':
            switch(args[1]){
                case 'ed5':
                const boted5 = new MessageEmbed()
                    .setTitle('**Botswana | Edition 5**')
                    .addField('Player', 'Philip (banana juice)')
                    .addField('Song', 'Senhit - Dark Room')
                    .addField('Semi Final Draw', 'Semi 1, Spot 5')
                    .addField('Semi Final Placement', '7th of 9 with 17 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', 'Did not qualify')
                    .setFooter('Botswana Edition 5 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/255px-Flag_of_Botswana.svg.png')
                    .setColor(0x75aadb)
                message.channel.send(boted5);
                break;
                case 'ed6':
                const boted6 = new MessageEmbed()
                    .setTitle('**Botswana | Edition 6**')
                    .addField('Player', 'Philip (banana juice)')
                    .addField('Song', 'Skan and Krale (ft. M.I.M.E, Drama B.) - No Glory')
                    .addField('Semi Final Draw', 'Semi 1, Spot 5')
                    .addField('Semi Final Placement', '7th of 11 with 32 points')
                    .addField('Final Draw', 'Did not qualify')
                    .addField('Final Placement', 'Did not qualify')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/255px-Flag_of_Botswana.svg.png')
                    .setColor(0x75aadb)
                message.channel.send(boted6);
                break;
            case 'gen':
                const bot = new MessageEmbed()
                    .setTitle('**Botswana in AVSC**')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 5')
                    .addField('Last Appearance', 'Edition 6')
                    .addField('Players', 'Philip (banana juice) - editions 5 and 6;')
                    .addField('Best Placement', '7th (Semi Final)')
                    .addField('Worst Placement', '7th (Semi Final)')
                    .addField('Qualifications', '0')
                    .addField('Qualification Percentage', '0%')
                    .setFooter('Use ?bot ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/255px-Flag_of_Botswana.svg.png')
                    .setColor(0x75aadb)
                message.channel.send(bot);
            }
        break;
            }
    switch(args[0]){
        case 'belarus':
            switch(args[1]){
                case 'ed3':
                const byed3 = new MessageEmbed()
                    .setTitle('**Belarus | Edition 3**')
                    .addField('Player', 'Kita')
                    .addField('Song', 'BØRNS - American Money')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '6')
                    .addField('Final Placement', '1st of 15 with 87 points')
                    .setFooter('Belarus Edition 3 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1200px-Flag_of_Belarus.svg.png')
                    .setColor(0x4aa657)
                message.channel.send(byed3);
                break;
                case 'ed4':
                const byed4 = new MessageEmbed()
                    .setTitle('**Belarus | Edition 4**')
                    .addField('Player', 'Kita')
                    .addField('Song', 'Nukoleta Radulovic - Kada Setim Se Nas')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '10')
                    .addField('Final Placement', '16th of 16 with 41 points')
                    .setFooter('Belarus Edition 4 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1200px-Flag_of_Belarus.svg.png')
                    .setColor(0x4aa657)
                message.channel.send(byed4);
                break;
            case 'gen':
                const by = new MessageEmbed()
                    .setTitle('**Belarus in AVSC**')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 3')
                    .addField('Last Appearance', 'Edition 4')
                    .addField('Players', 'Kita - editions 3 and 4;')
                    .addField('Best Placement', '1st')
                    .addField('Worst Placement', '16th (last)')
                    .addField('Qualifications', 'Has not participated in semis')
                    .addField('Qualification Percentage', 'Has not participated in semis')
                    .setFooter('Use ?belarus ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1200px-Flag_of_Belarus.svg.png')
                    .setColor(0x4aa657)
                message.channel.send(by);
            }
        break;
        case 'blr':
            switch(args[1]){
                case 'ed3':
                const byed3 = new MessageEmbed()
                    .setTitle('**Belarus | Edition 3**')
                    .addField('Player', 'Kita')
                    .addField('Song', 'BØRNS - American Money')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '6')
                    .addField('Final Placement', '1st of 15 with 87 points')
                    .setFooter('Belarus Edition 3 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1200px-Flag_of_Belarus.svg.png')
                    .setColor(0x4aa657)
                message.channel.send(byed3);
                break;
                case 'ed4':
                const blyed4 = new MessageEmbed()
                    .setTitle('**Belarus | Edition 4**')
                    .addField('Player', 'Kita')
                    .addField('Song', 'Nukoleta Radulovic - Kada Setim Se Nas')
                    .addField('Semi Final Draw', 'No semis')
                    .addField('Semi Final Placement', 'No semis')
                    .addField('Final Draw', '10')
                    .addField('Final Placement', '16th of 16 with 41 points')
                    .setFooter('Belarus Edition 4 | Requested by ' + message.author.username)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1200px-Flag_of_Belarus.svg.png')
                    .setColor(0x4aa657)
                message.channel.send(blyed4);
                break;
            case 'gen':
                const bly = new MessageEmbed()
                    .setTitle('**Belarus in AVSC**')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 3')
                    .addField('Last Appearance', 'Edition 4')
                    .addField('Players', 'Kita - editions 3 and 4;')
                    .addField('Best Placement', '1st')
                    .addField('Worst Placement', '16th (last)')
                    .addField('Qualifications', 'Has not participated in semis')
                    .addField('Qualification Percentage', 'Has not participated in semis')
                    .setFooter('Use ?blr ed[edition] to learn about that specific song')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1200px-Flag_of_Belarus.svg.png')
                    .setColor(0x4aa657)
                message.channel.send(bly);
            }
        break;
            }
            switch(args[0]){
                case 'belgium':
                    switch(args[1]){
                        case 'ed3':
                        const belged3 = new MessageEmbed()
                            .setTitle('**Belgium | Edition 3**')
                            .addField('Player', 'Adil')
                            .addField('Song', 'OrelSan - Basique')
                            .addField('Semi Final Draw', 'No semis')
                            .addField('Semi Final Placement', 'No semis')
                            .addField('Final Draw', '2')
                            .addField('Final Placement', '12th of 15 with 41 points')
                            .setFooter('Belgium Edition 3 | Requested by ' + message.author.username)
                            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.graphicmaps.com%2Fr%2Fw1047%2Fimages%2Fflags%2Fbe-flag.jpg&f=1&nofb=1')
                            .setColor(0xfdda24)
                        message.channel.send(belged3);
                        break;
                    case 'gen':
                        const belg = new MessageEmbed()
                            .setTitle('**Belgium in AVSC**')
                            .addField('Participations', '1')
                            .addField('First Appearance', 'Edition 3')
                            .addField('Last Appearance', 'Edition 3')
                            .addField('Players', 'Adil - edition 3;')
                            .addField('Best Placement', '12th')
                            .addField('Worst Placement', '12th')
                            .addField('Qualifications', 'Has not participated in semis')
                            .addField('Qualification Percentage', 'Has not participated in semis')
                            .setFooter('Use ?belgium ed[edition] to learn about that specific song')
                            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.graphicmaps.com%2Fr%2Fw1047%2Fimages%2Fflags%2Fbe-flag.jpg&f=1&nofb=1')
                            .setColor(0xfdda24)
                        message.channel.send(belg);
                    }
                break;
                case 'bel':
                    switch(args[1]){
                        case 'ed3':
                        const beled3 = new MessageEmbed()
                            .setTitle('**Belgium | Edition 3**')
                            .addField('Player', 'Adil')
                            .addField('Song', 'OrelSan - Basique')
                            .addField('Semi Final Draw', 'No semis')
                            .addField('Semi Final Placement', 'No semis')
                            .addField('Final Draw', '2')
                            .addField('Final Placement', '12th of 15 with 41 points')
                            .setFooter('Belgium Edition 3 | Requested by ' + message.author.username)
                            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.graphicmaps.com%2Fr%2Fw1047%2Fimages%2Fflags%2Fbe-flag.jpg&f=1&nofb=1')
                            .setColor(0xfdda24)
                        message.channel.send(beled3);
                        break;
                    case 'gen':
                        const bel = new MessageEmbed()
                            .setTitle('**Belgium in AVSC**')
                            .addField('Participations', '1')
                            .addField('First Appearance', 'Edition 3')
                            .addField('Last Appearance', 'Edition 3')
                            .addField('Players', 'Adil - edition 3;')
                            .addField('Best Placement', '12th')
                            .addField('Worst Placement', '12th')
                            .addField('Qualifications', 'Has not participated in semis')
                            .addField('Qualification Percentage', 'Has not participated in semis')
                            .setFooter('Use ?bel ed[edition] to learn about that specific song')
                            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.graphicmaps.com%2Fr%2Fw1047%2Fimages%2Fflags%2Fbe-flag.jpg&f=1&nofb=1')
                            .setColor(0xfdda24)
                        message.channel.send(bel);
                    }
                break;
            }
                switch(args[0]){
                    case 'belize':
                        switch(args[1]){
                            case 'ed5':
                            const belied5 = new MessageEmbed()
                                .setTitle('**Belize | Edition 5**')
                                .addField('Player', 'Bearly')
                                .addField('Song', 'Paty Cantú - Mariposas')
                                .addField('Semi Final Draw', 'Semi 1, Spot 9')
                                .addField('Semi Final Placement', '3rd of 9 with 27 points')
                                .addField('Final Draw', '4')
                                .addField('Final Placement', '6th of 14 with 96 points')
                                .setFooter('Belize Edition 5 | Requested by ' + message.author.username)
                                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1200px-Flag_of_Belize.svg.png')
                                .setColor(0x003f87)
                            message.channel.send(belied5);
                            break;
                        case 'gen':
                            const beli = new MessageEmbed()
                                .setTitle('**Belize in AVSC**')
                                .addField('Participations', '1')
                                .addField('First Appearance', 'Edition 5')
                                .addField('Last Appearance', 'Edition 5')
                                .addField('Players', 'Bearly - edition 5;')
                                .addField('Best Placement', '6th')
                                .addField('Worst Placement', '6th')
                                .addField('Qualifications', '1')
                                .addField('Qualification Percentage', '100%')
                                .setFooter('Use ?belize ed[edition] to learn about that specific song')
                                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1200px-Flag_of_Belize.svg.png')
                                .setColor(0x003f87)
                            message.channel.send(beli);
                        }
                    break;
                    case 'blz':
                        switch(args[1]){
                            case 'ed5':
                            const belzed5 = new MessageEmbed()
                                .setTitle('**Belize | Edition 5**')
                                .addField('Player', 'Bearly')
                                .addField('Song', 'Paty Cantú - Mariposas')
                                .addField('Semi Final Draw', 'Semi 1, Spot 9')
                                .addField('Semi Final Placement', '3rd of 9 with 27 points')
                                .addField('Final Draw', '4')
                                .addField('Final Placement', '6th of 14 with 96 points')
                                .setFooter('Belize Edition 5 | Requested by ' + message.author.username)
                                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1200px-Flag_of_Belize.svg.png')
                                .setColor(0x003f87)
                            message.channel.send(belzed5);
                            break;
                        case 'gen':
                            const belz = new MessageEmbed()
                                .setTitle('**Belize in AVSC**')
                                .addField('Participations', '1')
                                .addField('First Appearance', 'Edition 5')
                                .addField('Last Appearance', 'Edition 5')
                                .addField('Players', 'Bearly - edition 5;')
                                .addField('Best Placement', '6th')
                                .addField('Worst Placement', '6th')
                                .addField('Qualifications', '1')
                                .addField('Qualification Percentage', '100%')
                                .setFooter('Use ?blz ed[edition] to learn about that specific song')
                                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1200px-Flag_of_Belize.svg.png')
                                .setColor(0x003f87)
                            message.channel.send(belz);
                        }
                    break;
                        }
                        switch(args[0]){
                            case 'bosnia':
                                switch(args[1]){
                                    case 'ed5':
                                    const bosed5 = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina | Edition 5**')
                                        .addField('Player', 'Harper')
                                        .addField('Song', 'Montaigne - What You Mean To Me')
                                        .addField('Semi Final Draw', 'Semi 1, Spot 4')
                                        .addField('Semi Final Placement', '6th of 9 with 19 points')
                                        .addField('Final Draw', 'Did not qualify')
                                        .addField('Final Placement', 'Did not qualify')
                                        .setFooter('Bosnia and Herzegovina Edition 5 | Requested by ' + message.author.username)
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(bosed5);
                                    break;
                                case 'gen':
                                    const bosn = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina in AVSC**')
                                        .addField('Participations', '1')
                                        .addField('First Appearance', 'Edition 5')
                                        .addField('Last Appearance', 'Edition 5')
                                        .addField('Players', 'Harper - edition 5;')
                                        .addField('Best Placement', '6th (Semi Finals)')
                                        .addField('Worst Placement', '6th (Semi Finals)')
                                        .addField('Qualifications', '0')
                                        .addField('Qualification Percentage', '0%')
                                        .setFooter('Use ?bosnia ed[edition] to learn about that specific song')
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(bosn);
                                }
                            break;
                            case 'bosnia_herzegovina':
                                switch(args[1]){
                                    case 'ed5':
                                    const boshed5 = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina | Edition 5**')
                                        .addField('Player', 'Harper')
                                        .addField('Song', 'Montaigne - What You Mean To Me')
                                        .addField('Semi Final Draw', 'Semi 1, Spot 4')
                                        .addField('Semi Final Placement', '6th of 9 with 19 points')
                                        .addField('Final Draw', 'Did not qualify')
                                        .addField('Final Placement', 'Did not qualify')
                                        .setFooter('Bosnia and Herzegovina Edition 5 | Requested by ' + message.author.username)
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(boshed5);
                                    break;
                                case 'gen':
                                    const bosn = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina in AVSC**')
                                        .addField('Participations', '1')
                                        .addField('First Appearance', 'Edition 5')
                                        .addField('Last Appearance', 'Edition 5')
                                        .addField('Players', 'Harper - edition 5;')
                                        .addField('Best Placement', '6th (Semi Finals)')
                                        .addField('Worst Placement', '6th (Semi Finals)')
                                        .addField('Qualifications', '0')
                                        .addField('Qualification Percentage', '0%')
                                        .setFooter('Use ?bosnia_herzegovina ed[edition] to learn about that specific song')
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(bosn);
                                }
                            break;
                            case 'bosnia_and_herzegovina':
                                switch(args[1]){
                                    case 'ed5':
                                    const bosandhed5 = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina | Edition 5**')
                                        .addField('Player', 'Harper')
                                        .addField('Song', 'Montaigne - What You Mean To Me')
                                        .addField('Semi Final Draw', 'Semi 1, Spot 4')
                                        .addField('Semi Final Placement', '6th of 9 with 19 points')
                                        .addField('Final Draw', 'Did not qualify')
                                        .addField('Final Placement', 'Did not qualify')
                                        .setFooter('Bosnia and Herzegovina Edition 5 | Requested by ' + message.author.username)
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(bosandhed5);
                                    break;
                                case 'gen':
                                    const bosnh = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina in AVSC**')
                                        .addField('Participations', '1')
                                        .addField('First Appearance', 'Edition 5')
                                        .addField('Last Appearance', 'Edition 5')
                                        .addField('Players', 'Harper - edition 5;')
                                        .addField('Best Placement', '6th (Semi Finals)')
                                        .addField('Worst Placement', '6th (Semi Finals)')
                                        .addField('Qualifications', '0')
                                        .addField('Qualification Percentage', '0%')
                                        .setFooter('Use ?bosnia_and_herzegovina ed[edition] to learn about that specific song')
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(bosnh);
                                }
                            break;
                            case 'herzegovina':
                                switch(args[1]){
                                    case 'ed5':
                                    const herzed5 = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina | Edition 5**')
                                        .addField('Player', 'Harper')
                                        .addField('Song', 'Montaigne - What You Mean To Me')
                                        .addField('Semi Final Draw', 'Semi 1, Spot 4')
                                        .addField('Semi Final Placement', '6th of 9 with 19 points')
                                        .addField('Final Draw', 'Did not qualify')
                                        .addField('Final Placement', 'Did not qualify')
                                        .setFooter('Bosnia and Herzegovina Edition 5 | Requested by ' + message.author.username)
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(herzed5);
                                    break;
                                case 'gen':
                                    const herz = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina in AVSC**')
                                        .addField('Participations', '1')
                                        .addField('First Appearance', 'Edition 5')
                                        .addField('Last Appearance', 'Edition 5')
                                        .addField('Players', 'Harper - edition 5;')
                                        .addField('Best Placement', '6th (Semi Finals)')
                                        .addField('Worst Placement', '6th (Semi Finals)')
                                        .addField('Qualifications', '0')
                                        .addField('Qualification Percentage', '0%')
                                        .setFooter('Use ?herzegovina ed[edition] to learn about that specific song')
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(herz);
                                }
                            break;
                            case 'bos':
                                switch(args[1]){
                                    case 'ed5':
                                    const bosniaed5 = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina | Edition 5**')
                                        .addField('Player', 'Harper')
                                        .addField('Song', 'Montaigne - What You Mean To Me')
                                        .addField('Semi Final Draw', 'Semi 1, Spot 4')
                                        .addField('Semi Final Placement', '6th of 9 with 19 points')
                                        .addField('Final Draw', 'Did not qualify')
                                        .addField('Final Placement', 'Did not qualify')
                                        .setFooter('Bosnia and Herzegovina Edition 5 | Requested by ' + message.author.username)
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(bosniaed5);
                                    break;
                                case 'gen':
                                    const bosnia = new MessageEmbed()
                                        .setTitle('**Bosnia and Herzegovina in AVSC**')
                                        .addField('Participations', '1')
                                        .addField('First Appearance', 'Edition 5')
                                        .addField('Last Appearance', 'Edition 5')
                                        .addField('Players', 'Harper - edition 5;')
                                        .addField('Best Placement', '6th (Semi Finals)')
                                        .addField('Worst Placement', '6th (Semi Finals)')
                                        .addField('Qualifications', '0')
                                        .addField('Qualification Percentage', '0%')
                                        .setFooter('Use ?bosnia ed[edition] to learn about that specific song')
                                        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png')
                                        .setColor(0x002395)
                                    message.channel.send(bosnia);
                                }
                            break;
                                }
})

client.login(token);
