module.exports = {
	name: 'afghan6',
    description: 'Afghanistan edition 6',
    guildOnly: true,
    args: true,
	execute(message, args) {
        const afghan9 = new Discord.MessageEmbed()
                    .setTitle('Afghanistan | Edition 9')
                    .addField('Player', 'Blade')
                    .addField('Song', '[Molly Kate Kestner - Prom Queen](https://youtu.be/0x03NDSGOTA)')
                    .addField('Semi Final Draw', 'No semi-finals', inline = true)
                    .addField('Semi Final Placement', 'No semi-finals', inline = true)
                    .addField('Points', 'No semi-finals', inline = true)
                    .addField('Final Draw', '01', inline = true)
                    .addField('Final Placement', '17 of 24', inline = true)
                    .addField('Points', '23', inline = true)
                    .addField('Overall Placement', '17')
                    .setFooter('Edition 9 | Afghanistan | Requested by ' + message.author.username)
                    .setThumbnail(AfghanFlag)
                    .setColor(AfghanColor)
                message.channel.send(afghan9);
                message.channel.send('**Want to know more about Afghanistan in AVSC?**\n_Aliases for Afghanistan are: ?afghanistan, ?afg, and ?af._\n\nIn order to learn more, use ?afghanistan ed[edition] or ?afghanistan gen.')
	},
};