



const Discord = require("discord.js")
const client = new Discord.Client()
client.on('ready', () => {
  console.log("Online!")
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: "At D&D Cafe",
            type: "PLAYING",
            url: "https://twitch.tv/scribblehounts"
        }
    });
});
client.on("message", message => {
    //Here you can put banned words and swearwords in the quotation marks "here"
    const swearWords = ["fuck", "bitch", "cunt", "dick", "fuck off", "boobs", "FUCK OFF", "TYTEDDY0", "nigga", "FUCK", "Fuck", "FCK", "fck", "fack", "f@ck", "Fzk", "BITCH", "Bitch", "Fucking", "bitch","fcking","WTF", "sex", "ass", "PORN", "asshole", "wTf", "shit", "fhbvzuck you bxcvitch", "ugxly axssx", "fhbvzuck you bxcvitch"];
    if( swearWords.some(word => message.content.includes(word)) ) {
      message.reply("This word is banned by the server owner");
      
    }} )


client.on('message', message => {
   if (message.content.startsWith("||say ")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send(message.content.slice(5, message.content.length));
   }
});
client.on("message", msg => {
  if (msg.content === "Lagtest") {
    msg.reply("Checking lag!")
    msg.reply("Lagging")
    }
})

client.on("message", msg => {
  if (msg.content === "Restart") {
    msg.reply("Restating now")
    msg.reply("Restarted")
    }
})

client.on("message", (message) => {
if (message.content.startsWith("///Warn")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first()
            message.channel.send(":white_check_mark:" + member.displayName + " has been Warned");
      
      
    }
});

client.on("message", msg => {
  if (msg.content === "!grp") {
    msg.reply(" tiny.cc/cafe1233 code = MR123")
    }
})

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});

client.login("NTQ5MTY5NjY3NjE3NTg3MjEy.Xo8-oQ.exq9_-JrCUDXGGLXeEhHcai9p2s");
