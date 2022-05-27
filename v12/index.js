const discord = require("discord.js"); //v12 -_-
const chalk = require("chalk"); // @3.0.0
const config = require("./config.json")
//client
/* example:
const client = new discord.client();
*/
require("./antiCrash.js")(client,discord,config)
