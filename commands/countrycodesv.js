const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes v',
	aliases: ['vcountrycodes', 'country codes v', 'country-codes v', 'v country codes', 'v countrycodes'],
	description: 'Country codes for V letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('V Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_va: Vatican City\n:flag_ve: Venezuela', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`va`\n`ve`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`vat`\n`ven`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};