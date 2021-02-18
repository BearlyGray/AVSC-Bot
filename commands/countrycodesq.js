const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes q',
	aliases: ['qcountrycodes', 'country codes q', 'country-codes q', 'q country codes', 'q countrycodes'],
	description: 'Country codes for Q letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('Q Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_qa: Qatar', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`qa`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`qat`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};