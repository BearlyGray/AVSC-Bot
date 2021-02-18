const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes e',
	aliases: ['ecountrycodes', 'country codes e', 'country-codes e', 'e country codes', 'e countrycodes'],
	description: 'Country codes for E letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('E Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_eg: Egypt\n:flag_er: Eritrea\n:flag_ee: Estonia\n:flag_et: Ethiopia', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`eg`\n`er`\n`ee`\n`et`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`egy`\n`eri`\n`est`\n`eth`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};