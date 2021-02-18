const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes m',
	aliases: ['mcountrycodes', 'country codes m', 'country-codes m', 'm country codes', 'm countrycodes'],
	description: 'Country codes for M letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('M Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_md: Madagascar\n:flag_my: Malaysia\n:flag_mv: Maldives\n:flag_mt: Malta\n:flag_mu: Mauritius\n:flag_mx: Mexico\n:flag_mn: Mongolia\n:flag_me: Montenegro\n:flag_mm: Myanmar', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`md`\n`my`\m`mv`\m`mt`\m`mu`\m`mx`\n`mn`\n`me`\n`mm`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`mad`\n`mas`\n`mdv`\n`mlt`\m`mri`\n`mex`\n`mgl`\n`mne`\n`mya`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};