const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes w',
	aliases: ['wcountrycodes', 'country codes w', 'country-codes w', 'w country codes', 'w countrycodes'],
	description: 'Country codes for W letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('W Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_wf: Wallis and Futuna', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`wf`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`waf`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};