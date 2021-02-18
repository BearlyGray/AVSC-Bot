const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes k',
	aliases: ['kcountrycodes', 'country codes k', 'country-codes k', 'k country codes', 'k countrycodes'],
	description: 'Country codes for K letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('K Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_ki: Kiribati\n:flag_xk: Kosovo\n:flag_kg: Kyrgyzstan', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`ki`\n`xk`\n`kg`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`kir`\n`kos`\n`kgz`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};