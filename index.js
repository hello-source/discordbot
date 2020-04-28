const Discord = require('discord.js');

const bot = new Discord.Client(); 

const token = 'NzA0NjIwNzI4NzQxMzk2NDgy.XqfzOA._hcb6wvtPl2mzi3B4Ih28-fgiGo';

const PREFIX = '!';

const exampleEmbed = new Discord.MessageEmbed().setAuthor('Paul', 'https://dailygame.at/wp-content/uploads/2019/05/discord.jpg', 'https://www.youtube.com/channel/UC4b00atFiOxYLGbW4ghzzqA')


bot.on('ready', () =>{
  console.log('this bot is online!'); 
 })

  bot.on('message', message=>{
     
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
          message.channel.send('pong!');
            break;
               case 'www':
               if(args[1] === 'youtube'){
                message.channel.send('https://youtube.com/')
               }else 
               
               if(args[1] === 'instagram'){
                message.channel.send('https://instagram.com/')
               }else
               if(args[1] === 'twitter'){
                message.channel.send('https://twitter.com/')
               }else {
                
                message.channel.send('please add youtube, twitter or instagram')
               }
               break;

               case 'author':
                message.channel.send(exampleEmbed);
                break;
                
                case 'clear':
                if(!args[1]) return message.channel.send('Error please add a number after the !clear')
                message.channel.bulkDelete(args[1]);
                break;

                
        }
        

        if (!message.guild) return;

  
  if (message.content.startsWith('!kick')) {
    
    const user = message.mentions.users.first();
   
    if (user) {     
      const member = message.guild.member(user);      
      if (member) {      
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {          
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
           
            message.reply('I was unable to kick the member');            
            console.error(err);
          });
      } else {        
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
          }


       }
  
    }
)
  

bot.login(token);