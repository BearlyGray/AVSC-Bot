const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes z',
	aliases: ['zcountrycodes', 'country codes z', 'country-codes z', 'z country codes', 'z countrycodes'],
	description: 'Country codes for Z letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('Z Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_zw: Zimbabwe', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`zw`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`zim`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};