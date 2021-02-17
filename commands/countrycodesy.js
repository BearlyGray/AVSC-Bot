const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes y',
	aliases: ['ycountrycodes', 'country codes y', 'country-codes y', 'y country codes', 'y countrycodes'],
	description: 'Country codes for Y letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('Y Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_ye: Yemen', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`ye`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`yem`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};