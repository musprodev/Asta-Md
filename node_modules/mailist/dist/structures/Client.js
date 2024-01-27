"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_superfetch_1 = __importDefault(require("node-superfetch"));
const cheerio_1 = __importDefault(require("cheerio"));
const config = __importStar(require("../util/Constant"));
class Client {
    constructor(opt = {
        uri: "https://graphql.anilist.co/"
    }) {
        this.config = config;
        this.baseURL = opt.uri;
    }
    getAnime(query, hqlRequest) {
        return new Promise((resolve, reject) => {
            void node_superfetch_1.default.post(this.baseURL)
                .send(Object.assign({
                variables: {
                    search: query,
                    type: "ANIME"
                },
                query: hqlRequest
            }))
                .then(data => {
                return resolve(data.body);
            })
                .catch(reject);
        });
    }
    getManga(query, hqlRequest) {
        return new Promise((resolve, reject) => {
            void node_superfetch_1.default.post(this.baseURL)
                .send(Object.assign({
                variables: {
                    search: query,
                    type: "MANGA"
                },
                query: hqlRequest
            }))
                .then(data => {
                return resolve(data.body);
            })
                .catch(reject);
        });
    }
    getChar(query, hqlRequest) {
        return new Promise((resolve, reject) => {
            void node_superfetch_1.default.post(this.baseURL)
                .send(Object.assign({
                variables: {
                    search: query
                },
                query: hqlRequest
            }))
                .then(data => {
                return resolve(data.body);
            })
                .catch(reject);
        });
    }
    fetchMal(id) {
        return new Promise((resolve, reject) => {
            node_superfetch_1.default.get(`https://myanimelist.net/anime/${parseInt(id)}`)
                .then(text => {
                resolve(cheerio_1.default.load(text.text)("span[itemprop=\"ratingValue\"]").first().text());
            })
                .catch(reject);
        });
    }
}
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cnVjdHVyZXMvQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFzQztBQUN0QyxzREFBOEI7QUFFOUIseURBQTBDO0FBTTFDLE1BQXFCLE1BQU07SUFHdkIsWUFBbUIsTUFBaUI7UUFDaEMsR0FBRyxFQUFFLDZCQUE2QjtLQUNyQztRQUhlLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFLNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBYSxFQUFFLFVBQWtCO1FBQzdDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsS0FBSyx5QkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUMxQixJQUFJLENBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDVixTQUFTLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsSUFBSSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELEtBQUssRUFBRSxVQUFVO2FBQ3BCLENBQUMsQ0FDTDtpQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxPQUFPLENBQUUsSUFBSSxDQUFDLElBQW1CLENBQUMsQ0FBQTtZQUM3QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFhLEVBQUUsVUFBa0I7UUFDN0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxLQUFLLHlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzFCLElBQUksQ0FDRCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNWLFNBQVMsRUFBRTtvQkFDUCxNQUFNLEVBQUUsS0FBSztvQkFDYixJQUFJLEVBQUUsT0FBTztpQkFDaEI7Z0JBQ0QsS0FBSyxFQUFFLFVBQVU7YUFDcEIsQ0FBQyxDQUNMO2lCQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVCxPQUFPLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBbUIsQ0FBQyxDQUFBO1lBQzdDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQWEsRUFBRSxVQUFrQjtRQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLEtBQUsseUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDMUIsSUFBSSxDQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ1YsU0FBUyxFQUFFO29CQUNQLE1BQU0sRUFBRSxLQUFLO2lCQUNoQjtnQkFDRCxLQUFLLEVBQUUsVUFBVTthQUNwQixDQUFDLENBQ0w7aUJBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNULE9BQU8sT0FBTyxDQUFFLElBQUksQ0FBQyxJQUFrQixDQUFDLENBQUE7WUFDNUMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxRQUFRLENBQUMsRUFBVztRQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLHlCQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNULE9BQU8sQ0FDSCxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQTtZQUNMLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBQ0o7QUE5RUQseUJBOEVDIn0=