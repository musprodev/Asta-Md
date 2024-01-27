
const fetch = require('node-fetch')
const cheerio = require('cheerio')
let $
let CharacterJapaneseName
let animeCharacter
const GetChar = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const limitid = Math.floor(Math.random() * 700)
      const scrapingHeaders = {
        headers: {
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1'
        },
        referrer: `https://myanimelist.net/topanime.php?limit=${limitid}`,
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      }
      const body = await (await fetch(`https://myanimelist.net/topanime.php?limit=${limitid}`, scrapingHeaders)).text()
      $ = cheerio.load(body)
      const animeURL = $('a[class="hoverinfo_trigger fl-l ml12 mr8"]')[0].attribs.href
      const result = await (await fetch(animeURL, scrapingHeaders)).text()
      $ = cheerio.load(result)

      const charlength = $('h3[class="h3_characters_voice_actors"] > a').length
      if (charlength <= 3) {
        const refetchResult = await GetChar()
        return resolve(refetchResult)
      }

      const charid = Math.floor(Math.random() * charlength)
      const AnimeName = $('div[class="h1-title"] > div > h1')[0].children[0].children[0].data
      const CharacterName = $('h3[class="h3_characters_voice_actors"] > a')[charid].children[0].data
      const othernames = []
      for (let i = 0; i < charlength; i++) othernames.push($('h3[class="h3_characters_voice_actors"] > a')[i].children[0].data)
      const OtherCharacterList = othernames.filter((word) => word !== CharacterName)

      const voiceActor = await (await fetch($('h3[class="h3_characters_voice_actors"] > a')[charid].attribs.href)).text()
      $ = cheerio.load(voiceActor)
      const CharacterImage = $('td[class="borderClass"] > div > a')[0].children[0].attribs['data-src']
      if ($('h2[class="normal_header"] > span >small')[0].children[0].data !== undefined) {
        CharacterJapaneseName = $('h2[class="normal_header"] > span >small')[0].children[0].data
      } else {
        CharacterJapaneseName = null
      }
      const arraydata = [CharacterName.split(',')[0], CharacterName.split(',')[1]]
      if (arraydata[1] === undefined) arraydata[1] = arraydata[0]

      animeCharacter = {
        AnimeName,
        CharacterName,
        CharacterImage,
        CharacterTag: arraydata,
        CharacterJapaneseName,
        OtherCharacterList
      }
      return resolve(animeCharacter)
    } catch (err) {
      reject(err)
    }
  })
}
module.exports = {
  GetChar
}
