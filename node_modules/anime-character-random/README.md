# anime-character-random  1.0.13V
## This Package Fetches Random Anime Character For You

`npm install anime-character-random`

#### Here is An Example Code
```js
const randomChar = require('anime-character-random');
(async () => {
  console.log(await randomChar.GetChar())
})()
```
#### Will Display This 
```js
{
    AnimeName: 'Hikaru no Go',
    CharacterName: 'Fujisaki, Akari',
    CharacterImage: 'https://cdn.myanimelist.net/images/characters/15/28057.jpg',
    CharacterTag: [ 'Fujisaki', ' Akari' ],
    CharacterJapaneseName: '(藤崎 あかり)',
    OtherCharacterList: [
      'Fujiwara no, Sai',
      'Shindou, Hikaru',
      'Touya, Akira',
      'Waya, Yoshitaka',
      'Isumi, Shinichiro',
      'Ogata, Seiji',
      'Mitani, Yuki',
      'Kaga, Tetsuo',
      'Touya, Kouyou'
    ]
  }
```
### If you Are Using Discord.js Then Heres An Example Code For Version 14
```js
const { setTimeout } = require('node:timers/promises')
const randomChar = require('anime-character-random')
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ComponentType } = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder().setName('animechar')
    .setDescription('Guess The Anime Character'),
  async execute (client, interaction) {
    const AnimeData = await randomChar.GetChar()
    const db = [AnimeData.OtherCharacterList[0], AnimeData.OtherCharacterList[1], AnimeData.OtherCharacterList[2], AnimeData.CharacterName]
    const list = db.sort(() => Math.random() - 0.5)
    await interaction.deferReply()
    const embed = new EmbedBuilder()
      .setTitle('Guess the anime character')
      .setAuthor({ name: interaction.user.username.toString(), iconURL: interaction.guild.iconURL() })
      .setDescription(`Anime Name : ${AnimeData.AnimeName}`)
      .setColor('#0763e3')
      .setFooter({ text: 'Reo || レオ Developed by Subarashi Studios', iconURL: client.user.avatarURL() })
      .setTimestamp()
      .setImage(AnimeData.CharacterImage)
      .setURL('https://reo-fernandes.herokuapp.com/')
    const row = new ActionRowBuilder()
      .addComponents(
        new SelectMenuBuilder()
          .setCustomId('select')
          .setPlaceholder('Select an Answer')
          .addOptions(
            {
              label: list[0],
              description: 'Choose The Correct Answer',
              value: list[0]
            },
            {
              label: list[1],
              description: 'Choose The Correct Answer',
              value: list[1]
            },
            {
              label: list[2],
              description: 'Choose The Correct Answer',
              value: list[2]
            },
            {
              label: list[3],
              description: 'Choose The Correct Answer',
              value: list[3]
            }
          )
      )
    await interaction.editReply({ content: 'You Have **30 Seconds** To answer', components: [row], embeds: [embed] })

    const filter = i => i.user.id === interaction.user.id

    const collector = interaction.channel.createMessageComponentCollector({ filter, componentType: ComponentType.SelectMenu, max: 1, time: 30000 })

    collector.on('collect', async i => {
      if (i.values[0] === AnimeData.CharacterName) {
        await interaction.editReply({ content: 'You have Answered **Correctly**', components: [] })
      } else {
        await interaction.editReply({ content: `You have Answered **Incorrectly**\n The correct answer is **${AnimeData.CharacterName}**`, components: [] })
      }
    })
    collector.on('end', async collected => {
      if (collected.size === 0) await interaction.editReply({ content: `Time's Up\n The correct answer is **${AnimeData.CharacterName}**`, components: [] })
    })
  }
}
```
## I Also Want To Thank 3ddelano For Helping Me Out
#### I created this package to use it for my personal projects You Are Free to Modify/Edit Its Source Code But You Cant Claim It To Be Yours

#### Support

[Discord](https://discord.gg/4ftQqQ6)
[github](https://github.com/gco360)



