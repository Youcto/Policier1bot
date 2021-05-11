const Discord = require("discord.js");

const Client = new Discord.Client; 

const prefix = "&"; 

Client.on("ready", () => {
    console.log("bot opérationnel");
});


Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "&17"){
        message.channel.send("**☎️ Bonjour vous êtes en ligne avec la police que pui-je pour vous ?**");
 
    }

});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "&violage"){
        message.channel.send("**☎️ OK ne paniquer pas on vous envoi des médecin, Police NE BOUGER PAS ! **");
 
    }

});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "&attentat"){
        message.channel.send("** ☎️ OK on va ramener 15 voiture bleinder de la SSAMAT on vous geolocalise **");
 
    }

});


Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "&braquage"){
        message.channel.send("** ☎️ OK on intervient d'ici 5 minutes avec des patrouilles nécessaire , on vous géolocalise **");
 
    }

});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "&baguarre"){
        message.channel.send("** ☎️ OK on vous envoie une patrouille d'ici 5 minutes, essayer des les séparée si vous pouvez, mais si c'est trop violent attendez la patrouille, on vous géolocalise **");
 
    }

});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "&manifestation"){
        message.channel.send("** ☎️ OK on appel les SSAMAT, éloignez-vous en courant de la file svp, on vous géolocalise **");
 
    }

});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "&meurtes"){
        message.channel.send("** ☎️ OK, ne toucher a rien, on vous envoyer une patrouille de suite, on vous géolocalise  **");
 
    }

});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "&avis-de-recherhce"){
        message.channel.send("** ☎️ OK, vous avez trouvé le suspect, ne vous approcher pas attendez la patrouilles qui va arrivée d'une minutes à l'autre, on vous géolocalise  **");
 
    }

});

Client.login(process.env.TOKEN);