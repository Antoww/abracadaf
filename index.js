//Bienvenue sur ton Bot\\
//Lis ces quelques lignes:
//Changement à effectuer: 
//Ligne 14  met ton token
//Ligne 12 met le préfix souhaité
//Les message entre "" peuvent être changés



const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = "w!"
const talkedRecently = new Set();
bot.login("NDkxNjU2MTM5MjQzNTIwMDAw.Dpaeig.Zu4gf0NaS1Z5fT5oCBb9Gt0m03k");

bot.on("ready", () => {
    console.log("Bot ON")
    bot.user.setGame('Pub-O-Matic')
})



bot.on("guildMemberAdd", member => {
//465918902254436364
    bot.channels.get("465918902254436364").send(`Bienvenue **${member.user.username}** sur le serveur **${member.guild.name}**.`)
});

bot.on("guildMemberRemove", member => {
    //465918902254436364
        bot.channels.get("465918902254436364").send(`A bientôt **${member.user.username}** sur **${member.guild.name}**.`)
    });

bot.on("message", async message => {

    //PAS TOUCHE

    if(message.content.indexOf(prefix) !== 0) return;
  
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //Pour pas que le bot ne réponde aux autres bot
    if (message.author.bot) return;

    //Voir si le bot est on

    if(command === "help"){
        const embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        embed.setTitle("Page d'aide Wellbot")
        embed.addField("Commandes d'aide", "w!help : Affiche ce menu. \n w!twitter : Vous donne le twitter de l'owner. \n w!staff : Liste du staff. \n w!youtube : Vous donne la chaine YouTube de l'owner.\n w!anti-raid : Lien vers FTNL.")
        embed.addField("Commandes Utilitaires", "w!j-sondage <Question> : Sondage joueur avec un cooldown de 15 minutes. \n w!report <Report> : Report un problème/joueur au staff.")
        embed.addField("Commandes Modération", "w!sondage : Sondage admin sans cooldown.\n w!mute : Mute un joueur. \n w!unmute : Unmute un joueur.\n w!kick : Kick un joueur. \n w!ban : Ban un joueur.\n w!clear 1-100 : Clear le chat.")
        message.channel.send(embed)
    }


    //TWITTER

    if (command ===  "twitter"){
        var embed = new Discord.RichEmbed()
        .setColor("#2D09E6")
        .setTitle("Twitter")
        .addField("Voici le twitter de l'owner du serveur","[Twitter](https://twitter.com/Antow__)")
        message.channel.send(embed)
    }

    //STAFF

    if (command ===  "staff"){
        var embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .setTitle("Le staff")
        .addField("Admin", "Antow#8113 | Huasita#2030")
        message.channel.send(embed)
    }

    //Youtube

    if (command ===  "youtube"){
        var embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .setTitle("Youtube")
        .addField("Voici la chaîne youtube de l'owner", "[YouTube](https://youtube.com/c/toninbloodwars)")
        message.channel.send(embed)
    }

    //Anti-Raid

    if (command ===  "anti-raid"){
        var embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .setTitle("Anti-Raid")
        .addField("N'hésitez pas à ajouter le bot Ftnl", "[FTNL](https://ftnl.fr/bot)")
        message.channel.send(embed)
    }

    //Banhammer

    if(command ===  "banhammer"){
        var embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .setImage("https://cdn.discordapp.com/attachments/486905932606078979/494577004222611477/BlurpleBanHammer.png")
        message.channel.send(embed)
    }

    if(command === "creator"){
        var embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .addField("Mon créateur est Thebycop !", "Il est gentil hein ?")
        message.channel.send(embed)
    }

    //sondage joueur cooldown de 15 minutes

    if (command ===  "j-sondage") {
        const suggestMessage = args.join(" ");
        var suggest_embed = new Discord.RichEmbed()
        if(args.length === 0){
            message.delete().catch(O_o=>{}); 
            message.reply("Veuillez utilisez le /sondage + [Question]")
        }
        else{
            if (talkedRecently.has(message.author.id)) {
                message.channel.send("Veuillez attendre 15 minutes entre chaque sondage joueur " + message.author);
        } else {
            talkedRecently.add(message.author.id);
            setTimeout(() => {
              talkedRecently.delete(message.author.id);
            }, 300000);
        const suggestMessage = args.join(" ");
        var suggest_embed = new Discord.RichEmbed()
        .setColor('#00FB11')
        .setTitle('Nouveau sondage ')
        .addField("Question:", (suggestMessage))
        .setFooter(`Sondage de ${message.author.username}`)
        .setTimestamp()
        message.delete().catch(O_o=>{}); 
        message.reply('Sondage créer. ')
        message.channel.send(suggest_embed)
        .then(function (message) {
            message.react("✅")
            message.react("🤔")
            message.react("❌")});
        
    
        }}}

    //SONDAGE ADMIN

        if (command ===  "sondage") {
            if(!message.member.permissions.has("ADMINISTRATOR")) {
                return message.reply("Tu n'as pas la permission d'Administrateur."); }
            const suggestMessage = args.join(" ");
            var suggest_embed = new Discord.RichEmbed()
            if(args.length === 0){
                message.delete().catch(O_o=>{}); 
                message.reply("Veuillez utilisez le /sondage + [Question]")
            }
            else{
               
            const suggestMessage = args.join(" ");
            var suggest_embed = new Discord.RichEmbed()
            .setColor('#00FB11')
            .setTitle('Nouveau sondage ')
            .addField("Question:", (suggestMessage))
            .setFooter(`Sondage de ${message.author.username}`)
            .setTimestamp()
            message.delete().catch(O_o=>{}); 
            message.reply('Sondage créer. ')
            message.channel.send(suggest_embed)
            .then(function (message) {
                message.react("✅")
                message.react("🤔")
                message.react("❌")});
            
        
            }}

    //BAN
        
    if (command ===  "ban") {
        let has_ban = message.member.hasPermission("BAN_MEMBERS");
    if(!message.member.permissions.has("BAN_MEMBERS")) {
          message.delete().catch(O_o=>{});
          return message.reply("Permission requise: bannir des membres.").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
          message.delete().catch(O_o=>{});
          return message.reply("Aucun utilisateur détecté.").catch(console.error);
        }
        let banMember = message.guild.member(message.mentions.users.first());
        if(!banMember) {
          message.delete().catch(O_o=>{});
          return message.reply("Utilisateur inconnu.");
        }
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
          message.delete().catch(O_o=>{});
          return message.reply("J'ai besoin de la permission 'Bannir des membres'").catch(console.error);
        }
        banMember.ban().then(member => {
          message.delete().catch(O_o=>{});
          message.reply(`${member.user.username} à été banni.`).catch(console.error);
        }).catch(console.error)
      }

      //KICK

      if (command ===  "kick") {
      
          let has_kick = message.member.hasPermission("KICK_MEMBERS");
          if(!message.member.permissions.has("KICK_MEMBERS")) {
            message.delete().catch(O_o=>{});
            return message.reply("Permission requise: exclure des membres.").catch(console.error);
          }
          if(message.mentions.users.size === 0) {
            message.delete().catch(O_o=>{});
            return message.reply("Aucun utilisateur détecté.").catch(console.error);
          }
          let kickMember = message.guild.member(message.mentions.users.first());
          if(!kickMember) {
            message.delete().catch(O_o=>{});
            return message.reply("Utilisateur inconnu.");
          }
          if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            message.delete().catch(O_o=>{});
            return message.reply("J'ai besoin de la permission 'Expluser les membres'").catch(console.error);
          }
          kickMember.kick().then(member => {
            message.delete().catch(O_o=>{});
            message.reply(`${member.user.username} à été exclu.`).catch(console.error);
          }).catch(console.error)
        }

        //CLEAR

        if(command ===  "purge") {
            const deleteCount = parseInt(args[0], 10);
            
            if(!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.reply("Tu n'as pas la permission de gérer les messages.").catch(console.error);
          }
            if(!deleteCount || deleteCount < 1 || deleteCount > 101)
              
              return message.reply("Veuillez renseigner un nombre entre 1 et 100.");
              
            const fetched = await message.channel.fetchMessages({limit: deleteCount + 1});
            const nfetch = fetched + 1
            message.channel.bulkDelete(fetched)
            message.channel.send(`${deleteCount} messages supprimés ! 🗑️`)
              .catch(error => message.reply(`Je ne peux pas supprimer de message car: ${error}`));
          }

          //Mute

          var msgauthour = message.author.id;

            
          if(command ===  'mute'){ 
      
              if(!message.member.permissions.has("MANAGE_MESSAGES")) {
                  return message.reply("Permission requise: Gérer les messages  .").catch(console.error);
                }
      
          let target = message.mentions.members.first() || message.guild.members.get(args[0]);
          if(!target) return message.channel.send("Utilisateur non détecté.");
      
          let role = message.guild.roles.find(r => r.name === "muted");
          if(!role) {
              try {
                  role = await message.guild.createRole({
                      name: "muted",
                      color: "#354856",
                      permissions: []
                  });
              } catch(e) {
                  message.channel.send("Error: Je ne peut pas créer de role.");
              }
          }
      
          if(target.roles.has(role.id)) return message.channel.send("Utilisateur déjà mute.");
      
          try {
              await Promise.all(message.guild.channels.map(async c => {
                  await c.overwritePermissions(role, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                  });
              }));
      
              let time = parseInt(args[1]);
              if(time) {
                  con.run("INSERT INTO mutes (snowflake, guild, unmutedAt) VALUES (?, ?, ?)", target.id, message.guild.id, Date.now() + time * 1000, (err) => {
                      if(err) throw err;
                  });
              }
      
              await target.addRole(role);
              return message.channel.send("Utilisateur muted."), target.send(`Vous avez été mute sur le serveur ${message.guild.name}`);
          } catch(e) {
              message.channel.send(`Erreur: Le grade muted n'est pas créer ou je ne suis pas au dessus de lui.`);
          }
          
       }
       if(command ===  'unmute'){
      
       if(!message.member.permissions.has("MANAGE_MESSAGES")) {
       return message.reply("Permission requise: Gérer les messages.").catch(console.error);
       }
          let target = message.mentions.members.first() || message.guild.members.get(args[0]);
          if(!target) return message.channel.send("Utilisateur non détecté.");
      
          let role = message.guild.roles.find(r => r.name === 'muted');
          if(!role || !target.roles.has(role.id)) return message.channel.send("Cet utilisateur n'est pas mute.");
      
          try {
              await target.removeRole(role);
              message.channel.send("User unmuted."), target.send(`Vous avez été unmute sur le serveur ${message.guild.name}`);
          } catch(e) {
              message.channel.send(`Erreur: Le grade muted n'est pas créer ou je ne suis pas au dessus de lui.`);
          }
      }

      //REPORT

      if(command ===  "report") {
        const reportMessage = args.join(" ");
        var report_embed = new Discord.RichEmbed()
        if(args.length === 0){
            message.delete().catch(O_o=>{}); 
            message.reply("Utilise w!report + [Report]")
        }
        else{
        const reportMessage = args.join(" ");
        var report_embed = new Discord.RichEmbed()
        .setColor('#00FB11')
        .setTitle('Nouveau report ')
        .setDescription('La commande /report à été utilisée')
        .addField(`report de ${message.author.username}`, (reportMessage))
        .setTimestamp()
        message.delete().catch(O_o=>{}); 
        message.reply('Report envoyée. ')
        //484733956395237376
        bot.channels.get("484733956395237376").send(report_embed)
    }}
});