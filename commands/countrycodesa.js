const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes a',
	aliases: ['acountrycodes', 'country codes a', 'country-codes a', 'a country codes', 'a countrycodes'],
	description: 'Country codes for A letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new Discord.MessageEmbed()
            .setTitle('A Country Codes')
            .addField('[__Country__]("Countries that have participated at least once")', ':flag_af: Afghanistan\n :flag_ax: Aland Islands\n :flag_al: Albania\n :flag_ad: Andorra\n :flag_ao: Angola\n :flag_aq: Antarctica\n :flag_am: Armenia\n :flag_az: Azerbaijan', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`af`\n `ax`\n `al`\n `ad`\n `ao`\n `aq`\n `am`\n `az`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`afg`\n `ala`\n `alb`\n `and`\n `ang`\n `ana`\n `arm`\n `aze`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};