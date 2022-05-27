module.exports = async(client,MessageEmbed,chalk,config) =>{
process.on("unhandledRejection", (reason, p) => {
  console.log(
    chalk.red("[antiCrash]") +
      chalk.blackBright("::") +
      chalk.black("Unhandled Rejection/Catch")
  );
  console.log(reason,p)
  client.channels.cache.get(config.ERR_LOGS_CHANNEL).send({
    content: "Unhandled Rejection/Catch",
    embeds:[ new MessageEmbed()
      .setColor("RED")
      .addField(`Reason: `, `**${reason}**`)
      .addField(`Promise:`, `**${p}**`),
  ]});
});
process.on("uncaughtException", (err, origin) => {
  console.log(
    chalk.red("[antiCrash]") +
      chalk.blackBright("::") +
      chalk.black("Uncaught Exception/Catch")
  );
  console.log(err,origin)
  client.channels.cache.get(config.ERR_LOGS_CHANNEL).send({
    content: "Uncaught Exception/Catch",
    embeds:[ new MessageEmbed()
      .setColor("RED")
      .addField(`Err: `, `**${err}**`)
      .addField(`Origin: `, `**${origin}**`),
  ]});
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(
    chalk.red("[antiCrash]") +
      chalk.blackBright("::") +
      chalk.black("Uncaught Exception/Catch (MONITOR)")
  );
  console.log(err,origin)
  client.channels.cache.get(config.ERR_LOGS_CHANNEL).send({
    content: "Uncaught Exception/Catch (MONITOR)",
    embeds: [new MessageEmbed()
      .setColor("RED")
      .addField(`Err: `, `**${err}**`)
      .addField(`Origin: `, `**${origin}**`),
  ]});
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(
    chalk.red("[antiCrash]") +
      chalk.blackBright("::") +
      chalk.black("MultipleRelsoves")
  );
  console.log(type,promise,reason)
  client.channels.cache.get(config.ERR_LOGS_CHANNEL).send({
    content: "MultipleRelsoves",
    embeds: [new MessageEmbed()
      .setColor("RED")
      .addField(`Type: `, `**${type}**`)
      .addField(`Promise: `, `**${promise}**`)
      .addField(`Reason:`, `**${reason}**`),
  ]});
});
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on("warn", e => {
  console.log(chalk.yellow(e.replace(regToken, "that was redacted")));
});
client.on("error", e => {
  console.log(chalk.red(e.replace(regToken, "that was redacted")));
});
client.on("shardError", error => {
  console.log(
    chalk.red("[antiCrash]") +
      chalk.blackBright("::") +
      chalk.black("ShardError")
  );
  client.channels.cache.get(config.ERR_LOGS_CHANNEL).send({
    content: "ShardError",
    embeds: [new MessageEmbed()
      .setColor("RED")
      .addField(`Error: `, `**${error}**`),
  ]});
})
}
