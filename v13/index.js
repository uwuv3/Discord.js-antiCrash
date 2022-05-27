const { MessageEmbed } = require("discord.js") //v13 -_-
const chalk = require("chalk"); //@3.0.0
const config = require("./config.json")
//client 
/* example :
const client = new Client({intents: ["GUILDS","GUILD_MEMBERS","GUILD_BANS","GUILD_EMOJIS_AND_STICKERS","GUILD_INTEGRATIONS","GUILD_WEBHOOKS","GUILD_INVITES","GUILD_VOICE_STATES","GUILD_PRESENCES","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","GUILD_MESSAGE_TYPING","DIRECT_MESSAGES","DIRECT_MESSAGE_REACTIONS","DIRECT_MESSAGE_TYPING","GUILD_SCHEDULED_EVENTS"],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
all intents 
*/
require("./antiCrash.js")(client,MessageEmbed,chalk,config);
