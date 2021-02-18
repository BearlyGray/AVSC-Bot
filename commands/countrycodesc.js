const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes c',
	aliases: ['ccountrycodes', 'country codes c', 'country-codes c', 'c country codes', 'c countrycodes'],
	description: 'Country codes for C letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new Discord.MessageEmbed()
            .setTitle('C Country Codes')
            .addField('[__Country__]("Countries that have participated at least once")', ':flag_ca: Canada\n:flag_cv: Cape Verde\n:flag_cn: China\n:flag_cy: Cyprus', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`ca`\n`cv`\n`cn`\n`cy`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`can`\n`cvd`\n`chn`\n`cyp`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};