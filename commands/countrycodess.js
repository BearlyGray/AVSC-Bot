const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes s',
	aliases: ['scountrycodes', 'country codes s', 'country-codes s', 's country codes', 's countrycodes'],
	description: 'Country codes for S letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('S Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_sm: San Marion\n:flag_sa: Saudi Arabia\n:flag_sn: Senegal\n:flag_sc: Seychelles\n:flag_za: South Africa\n:flag_kr: South Korea\n:flag_ss: South Sudan\n:flag_es: Spain\n:flag_lk: Sri Lanka\n:flag_sh: St. Helena\n:flag_sr: Suriname\n:flag_ch: Switzerland', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`sm`\n`sa`\n`sn`\n`sc`\n`za`\n`kr`\n`ss`\n`es`\n`lk`\n`sh`\n`sr`\n`ch`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`smr`\n`ksa`\n`sen`\n`sey`\n`rsa`\n`kor`\n`ssd`\n`esp`\n`sri`\n`she`\n`sur`\n`sui`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};