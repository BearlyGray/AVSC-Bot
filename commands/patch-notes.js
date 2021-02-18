module.exports = {
    name: 'patch-notes',
    aliases: ['patchnotes'],
	description: 'Ongoing edition of AVSC',
	execute(message, args) {
		const patchembed = new MessageEmbed()
                .setTitle('**Patch Notes**')
                .addField('Patch Date', PatchDate)
                .addField('Version', Version)
                .addField('Patch Note', PatchNote)
                .addField('Previous Patch Date', LastPatchDate)
                .addField('Previous Version', LastVers)
                .addField('Previous Patch Note', LastPatchNote)
                .setFooter('Requested by ' + message.author.username)
                .setColor(0x3fff33)
            message.channel.send(patchembed);
	},
};