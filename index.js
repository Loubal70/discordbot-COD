require('dotenv').config();
const { Client, GatewayIntentBits, Events, REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

// Définition de la commande slash
const commands = [
  {
    name: 'formules',
    description: 'Calcule trois formules avec les variables x, y et z',
    options: [
      {
        name: 'x',
        description: 'Première variable (x)',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: 'y',
        description: 'Deuxième variable (y)',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: 'z',
        description: 'Troisième variable (z)',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
];

// Événement de connexion
client.once(Events.ClientReady, async () => {
    console.log(`Bot connecté en tant que ${client.user.tag}!`);
    
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    
    try {
        console.log('Actualisation des commandes slash (/)...');
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands },
        );
        console.log('Commandes slash (/) enregistrées avec succès!');
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement des commandes:', error);
    }
});

// Gestionnaire pour les commandes slash
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'formules') {
        try {
            const x = interaction.options.getNumber('x');
            const y = interaction.options.getNumber('y');
            const z = interaction.options.getNumber('z');

            const formatNumber = (num) => {
                return Math.floor(num).toString().padStart(2, '0');
            };

            const calcul1 = formatNumber(2 * x + 11);
            const calcul2 = formatNumber((2 * z + y) - 5);
            const calcul3 = formatNumber(Math.abs((y + z) - x));

            const resultText = `${calcul1} ${calcul2} ${calcul3}`;

            await interaction.reply({
                content: resultText,
                ephemeral: false
            });

        } catch (error) {
            await interaction.reply({
                content: 'Une erreur est survenue lors du calcul.',
                ephemeral: true
            });
            console.error(error);
        }
    }
});

// Gestion des erreurs
client.on('error', error => {
    console.error('Erreur du client Discord:', error);
});

process.on('unhandledRejection', error => {
    console.error('Erreur non gérée:', error);
});

// Connexion
client.login(process.env.DISCORD_TOKEN)
    .then(() => {
        console.log('Tentative de connexion au serveur Discord...');
    })
    .catch(error => {
        console.error('Erreur de connexion:', error);
    });
