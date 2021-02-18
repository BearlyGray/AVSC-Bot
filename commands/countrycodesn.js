const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes n',
	aliases: ['ncountrycodes', 'country codes n', 'country-codes n',  'n country codes', 'n countrycodes'],
	description: 'Country codes for N letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('N Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_np: Nepal\n:flag_nl: The Netherlands\n:flag_nz: New Zealand\n:flag_ni: Nicaragua\n:flag_kp: North Korea\n:flag_no: Norway', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`np`\n`nl`\n`nz`\n`ni`\n`kp`\n`no`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`nep`\n`ned`\n`nzl`\n`nca`\n`prk`\n`nor`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};