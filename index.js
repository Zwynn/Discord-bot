require('dotenv').config();

const {Client, GatewayIntentBits} = require('discord.js')
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]

});


const TOKEN = process.env.TOKEN

const dain= process.env.dain

client.once('clientReady', async () => {

 try {
    const channel = await client.channels.fetch('1119686386845503630');
    await channel.send("Was geht Sofi");
    channel.send(`<@${dain}> der Bot ist online`)
    console.log("KGSP ist online");
}   
    catch (error) {
    console.error("Channel nicht gefunden");
}

});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // ***vllt Später ändern auf Sofi-Bot-Interaktivität 

    if (message.content.toLowerCase() === 'sd') {
        const user = message.author;

        await message.reply(`${user}, Sofi sammelt sich...`);

        setTimeout(()  =>{
            message.channel.send(`${user} Sofi sollte wieder ready sein.`);
        },480000 );
    }
});

client.login(TOKEN)