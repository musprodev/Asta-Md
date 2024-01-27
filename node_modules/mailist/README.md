# MaiList
An Unofficial [Anilist](https://anilist.co/) API Wrapper And Strongly Typed

- [Documentation](soon) _not yet_

## Installing
[![Version](https://nodei.co/npm/mailist.png?compact=true)](https://nodei.co/npm/mailist)
```sh
#npm
npm install mailist

#yarn
yarn add mailist
```

## Example Usage

### Anime
###### Methods
- **anime**(query: string)
- **Mal**(id: string)
- **voiceActors**(query: string)


```js
const { Anime } = require("mailist");
const get = new Anime();

function getAnime() {
    get.anime("Majo No Tabi-Tabi")
        .then(res => {
            console.log(res)
        });
}
getAnime()
```
- **Getting voice actors from anime title**
```js
function voiceActors() {
    get.voiceActors("Aho Girl")
        .then(res => {
            console.log(res)
        });
}
voiceActors()
```

### Manga
###### Methods
- **manga**(query: string)
- **Mal**(id: string)

```js
const { Manga } = require("mailist");
const get = new Manga();

function getManga() {
    get.manga("Quintessential Quintuplets")
        .then(res => {
            console.log(res)
        })
}
getManga()
```
### Character
###### Methods
- **character**(query: string)

```js
const { Character } = require("mailist");
const get = new Character();

function getChar() {
    get.character("Elaina")
        .then(res => {
            console.log(res)
        })
}
getChar()
```

## Nb
Actually i don't know how to write the docs, but i hope you understand, and if you have any questions, you can join my [Discord Server](https://discord.gg/YmJEcFR)

© [Aizuu](https://github.com/iseizuu)