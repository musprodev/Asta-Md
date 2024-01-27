"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voiceActors = exports.charGraphql = exports.mangaGraphql = exports.animeGraphql = void 0;
exports.animeGraphql = `
    query ($search: String, $type: MediaType, $isAdult: Boolean) {
        anime: Page (perPage: 5) {
            results: media (type: $type, isAdult: $isAdult, search: $search) {
                id
                    idMal
                title {
                    english
                    romaji
                }
                coverImage {
                large
                medium
            }
            startDate { day month year }
            description(asHtml: false)
            season
            duration
            genres
            format
            type
            siteUrl
            status
            trailer {
                id
                site
            }
            episodes
            isAdult
            meanScore
            averageScore
            }
        }
    }
`;
exports.mangaGraphql = `
query ($search: String, $type: MediaType, $isAdult: Boolean) {
    anime: Page (perPage: 5) {
        results: media (type: $type, isAdult: $isAdult, search: $search) {
            id
      			idMal
            title {
                english
                romaji
            }
            coverImage {
            large
            medium
        }
        startDate { day month year }
        description(asHtml: false)        
      	genres
        format
        type
        siteUrl
        status
        trailer {
            id
            site
        }
        chapters
      	volumes
        isAdult
        meanScore
      	averageScore
        }
    }
}
`;
exports.charGraphql = `
query ($search: String) {
    characters: Page (perPage: 5) {
        results: characters (search: $search) {
            id
            name {
                full
                first
                last
            }
            image {
                large
                medium
            }
            description(asHtml: false)
            siteUrl
            media(page: 1, perPage: 5) {
                edges {
                    node {
                        title {
                            english
                            userPreferred
                        }
                        type
                        siteUrl
                    }
                }
            }
        }
    }
}
`;
exports.voiceActors = `
query($id : Int){
    Media(id: $id) {
      characters(page: 1) {
        edges {
          node {
            siteUrl
            name {
              full
            }
          }
          role
          voiceActors (language: JAPANESE) {
            siteUrl
            name {
              full
            }
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9Db25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtDM0IsQ0FBQTtBQUVZLFFBQUEsWUFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQzNCLENBQUE7QUFFWSxRQUFBLFdBQVcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStCMUIsQ0FBQTtBQUVZLFFBQUEsV0FBVyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0IxQixDQUFBIn0=