const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'countrycodes',
    aliases: ['countrycodes', 'country-codes', 'countrycodes', 'countrycodes', 'country-codes'],
    description: '3 letter country codes',
    guildOnly: false,
	execute(message, args) {
        const codeembed = new Discord.MessageEmbed()
            .setTitle('Country Codes')
            .setDescription('All country codes')
            .addField('[__Country__]("Countries that have participated at least once")', ':flag_af: Afghanistan\n :flag_ax: Aland Islands\n :flag_al: Albania\n :flag_ad: Andorra\n :flag_ao: Angola\n :flag_aq: Antarctica\n :flag_am: Armenia\n :flag_az: Azerbaijan\n:flag_bd: Bangladesh\n :flag_by: Belarus\n :flag_be: Belgium\n :flag_bz: Belize\n :flag_ba: Bosnia and Herzegovina\n :flag_bw: Botswana\n :flag_br: Brazil\n :flag_bf: Burkina Faso\n:flag_ca: Canada\n:flag_cv: Cape Verde\n:flag_cn: China\n:flag_cy: Cyprus\n', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`af`\n `ax`\n `al`\n `ad`\n `ao`\n `aq`\n `am`\n `az`\n`by`\n `be`\n `bz`\n `ba`\n `bw`\n `br`\n `bf`\n`ca`\n`cv`\n`cn`\n`cy`\n', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`afg`\n `ala`\n `alb`\n `and`\n `ang`\n `ana`\n `arm`\n `aze`\n`ban`\n `blr`\n `bel`\n `biz`\n `bih`\n `bot`\n `bra`\n `bur`\n`can`\n`cvd`\n`chn`\n`cyp`\n', inline = true)
            .addField('', ':flag_cd: Democratic Republic of the Congo\n:flag_fo: Faroe Islands\n:flag_fi: Finland\n :flag_fr: France\n', inline = true)
            .addField('', '`cd`\n\n`fo`\n`fi`\n`fr`\n', inline = true )
            .addField('', '`cod`\n\n`foe`\n`fin`\n`fra`\n', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(codeembed)
	},
};