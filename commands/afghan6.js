module.exports = {
    name: 'afghanistan ed6',
    aliases: ['afg ed6', 'af ed6', 'afghanistan 6', 'afg 6', 'af6'],
    description: 'Afghanistan edition 6',
    guildOnly: true,
    args: true,
	execute(message, args) {
        const afghan6 = new Discord.MessageEmbed()
                    .setTitle('Afghanistan | Edition 6')
                    .addField('Player', 'Babrie')
                    .addField('Song', '[MamaMoo - Egotistic](https://youtu.be/pHtxTSiPh5I)')
                    .addField('Semi Final Draw', 'Semi Final 1\nSpot 7', inline = true)
                    .addField('Semi Final Placement', '8th of 12', inline = true)
                    .addField('Points', '30', inline = true)
                    .addField('Final Draw', 'Did not qualify', inline = true)
                    .addField('Final Placement', 'Did not qualify', inline = true)
                    .addField('Points', 'Did not qualify', inline = true)
                    .addField('Overall Placement', '18th')
                    .setFooter('Edition 6 | Afghanistan | Requested by ' + message.author.username)
                    .setThumbnail(AfghanFlag)
                    .setColor(AfghanColor)
                message.channel.send(afghan6);
                message.channel.send('**Want to know more about Afghanistan in AVSC?**\n_Aliases for Afghanistan are: ?afghanistan, ?afg, and ?af._\n\nIn order to learn more, use ?afghanistan ed[edition] or ?afghanistan gen.')
	},
};