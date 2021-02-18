const {Client, MessageEmbed} = require('discord.js');
const bot = new Client();
const fs = require('fs');
const Discord = require('discord.js');
const { execute } = require('./commands/country-codes');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const token = 'NzA3Mjg2ODg4MzYwMzEyODcz.XrGmPg.USr-ae4IegyxUG5LTEFAG3r9paI';
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// contest related constants and variables
const PREFIX = '?';
const GUILD = '654482539922063360';
const bottestingchannel = '654512471205478410';
const botcomchannel = '654510138170015764';
const joinchannel = '745025268137197691'
var Edition = 12;
var BasicLogoPink = 'https://media.discordapp.net/attachments/654678177771290645/784143996548546633/avsclogobasic.jpg';
var CurrentLogo = 'https://media.discordapp.net/attachments/654678177771290645/784144214028058664/image0.png';
var Phase = 'final voting phase';
var Version = '0.26.1';
var PatchDate = '9:15 PM (CST), January 5, 2021';
var PatchNote = 'Updated editions, changed current edition embed, added alternate commands to ?ongoing and ?patchnotes.'
var LastPatchDate = '10:40 AM (CST), June 5, 2020';
var LastPatchNote = 'Added Belize and Bosnia + Herzegovina.'
var LastVers = '0.26.0'
var CurrentEditionColor = '0xCC092f'

bot.on('ready', () =>{
    console.log('And... the bot is up!');   
})

// core commands
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
	} else if (command === 'bearly') {
		client.commands.get('bearly').execute(message, args);
	} else if (command === 'octo') {
		client.commands.get('octo').execute(message, args);
    } else if (command === 'stu') {
        client.commands.get('stu').execute(message, args)
    } else if (command === 'ongoing') {
		client.commands.get('ongoing').execute(message, args)
	} else if (command === 'current') {
		client.commands.get('ongoing').execute(message, args)
	} else if (command === 'help') {
		client.commands.get('help').execute(message, args)
	} else if (command === 'patch-notes') {
		client.commands.get('patch-notes').execute(message, args)
	} else if (command === 'version') {
		client.commands.get('patch-notes').execute(message, args)
	} else if (command === 'country codes') {
		client.commands.get('country-codes').execute(message, args)
	} else if (command === 'country-list') {
		client.commands.get('country-list').execute(message, args)
	} else if (command === 'faq') {
		client.commands.get('faq').execute(message, args)
	} else if (command === 'calendar') {
		client.commands.get('calendar').execute(message, args)
	}
});

// a country commands
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	//afghanistan
		//general
		if (command === 'afghanistan gen') {
			client.commands.get('afghangen').execute(message, args);
		} else if (command === 'afg gen') {
			client.commands.get('afghangen').execute(message, args)
		} else if (command === 'af gen') {
			client.commands.get('afghangen').execute(message, args)
		} else if (command === 'afghanistan general') {
			client.commands.get('afghangen').execute(message, args)
		} else if (command === 'afg general') {
			client.commands.get('afghangen').execute(message, args)
		} else if (command === 'af general') {
			client.commands.get('afghangen').execute(message, args)
		} else if (command === 'afghanistan') {
			client.commands.get('afghangen').execute(message, args)
		} else if (command === 'afg') {
			client.commands.get('afghangen').execute(message, args)
		} else if (command === 'af') {
			client.commands.get('afghangen').execute(message, args)
		//edition 6
		} else if (command === 'afghanistan ed6') {
			client.commands.get('afghan6').execute(message, args)
		} else if (command === 'afg ed6') {
			client.commands.get('afghan6').execute(message, args)
		} else if (command === 'af ed6') {
			client.commands.get('afghan6').execute(message, args)
		} else if (command === 'afghanistan 6') {
			client.commands.get('afghan6').execute(message, args)
		} else if (command === 'afg 6') {
			client.commands.get('afghan6').execute(message, args)
		} else if (command === 'af 6') {
			client.commands.get('afghan6').execute(message, args)
		//edition 9
		} else if (command === 'afghanistan ed9') {
			client.commands.get('afghan9').execute(message, args)
		} else if (command === 'afg ed9') {
			client.commands.get('afghan9').execute(message, args)
		} else if (command === 'af ed9') {
			client.commands.get('afghan9').execute(message, args)
		} else if (command === 'afghanistan 9') {
			client.commands.get('afghan9').execute(message, args)
		} else if (command === 'afg 9') {
			client.commands.get('afghan9').execute(message, args)
		} else if (command === 'af 9') {
			client.commands.get('afghan9').execute(message, args)
	//aland islands
		} 
});

///edition commands
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'edition1') {
		client.commands.get('ed1').execute(message, args)
	} else if (command === 'ed1') {
		client.commands.get('ed1').execute(message, args)
	} else if (command === 'edition 1') {
		client.commands.get('ed1').execute(message, args)
	} else if (command === 'edition one') {
		client.commands.get('ed1').execute(message, args)
	} else if (command === 'ed one') {
		client.commands.get('ed1').execute(message, args)
	} else if (command === 'ed 1') {
		client.commands.get('ed1').execute(message, args)
	}

});

bot.login(token)