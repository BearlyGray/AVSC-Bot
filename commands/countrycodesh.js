const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes h',
	aliases: ['hcountrycodes', 'country codes h', 'country-codes h', 'h country codes', 'h countrycodes'],
	description: 'Country codes for H letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('H Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_hu: Hungary', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`hu`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`hun`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};