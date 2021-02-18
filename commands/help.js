var {Client, MessageEmbed} = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Help Message',
	execute(message, args) {
            const helpembed = new MessageEmbed()
                .setTitle('Here is the help menu, ' + message.author.username)
                .addField('help', 'Sends this message.')
                .addField('ping', 'Pings the bot, which pings you back.')
                .addField('bearly', 'Sends a message about Bearly.')
                .addField('stu', 'Sends a message about Stu.')
                .addField('octo', 'Sends a message about Octo.')
                .addField('ongoing or current', 'Sends a message about what is currently going on in the contest.')
                .addField('patch-notes or version', 'Sends a message with the date, version, and notes of the last update. Also shows previous updates.')
                .addField('country-list', 'List of countries currently having statistics available.')
                .addField('faq', 'Frequently Asked Questions of the bot.')
                .addField('[edition]', '**This feature is not available yet, it is currently under development.**')
                .addField('[Country]', 'Tells you info about a country. Usage: `Country/Alias` `ed[number]` or `country/alias` `gen`')
                .addField('country-codes', 'List of country codes.')
                .addField('[Player]', '**This feature is not available yet, it is currently under development.**')
                .addField('ranking', '**This feature is not available yet, it is currently under development.**')
                .setColor(0xff33f9)
                .setFooter('Help Message | AlyVision Bot Version ' + Version + ' | Requested by ' + message.author.username)
            message.channel.send(helpembed);
    },
};