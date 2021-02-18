const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes d',
	aliases: ['dcountrycodes', 'country codes d', 'country-codes d', 'd country codes', 'd countrycodes'],
	description: 'Country codes for D letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new Discord.MessageEmbed()
            .setTitle('D Country Codes')
            .addField('[__Country__]("Countries that have participated at least once")', ':flag_cd: Democratic Republic of the Congo', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`cd`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`cod`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};