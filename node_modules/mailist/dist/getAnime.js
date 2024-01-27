"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_superfetch_1 = __importDefault(require("node-superfetch"));
const Client_1 = __importDefault(require("./structures/Client"));
class Anime {
    constructor() {
        this.client = new Client_1.default();
    }
    anime(query) {
        return new Promise((resolve, reject) => {
            this.client.getAnime(query, this.client.config.animeGraphql)
                .then(result => {
                if (!result.data.anime.results.length) {
                    throw new TypeError("Oh No, Anime Not Found");
                }
                resolve(result);
            })
                .catch(reject);
        });
    }
    Mal(id) {
        return this.client.fetchMal(id)
            .then(mal => mal);
    }
    voiceActors(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const animeID = yield this.anime(query);
            if (!animeID.data.anime.results.length)
                throw new TypeError("Sorry, can't find that anime");
            return new Promise((resolve, reject) => {
                void node_superfetch_1.default.post(this.client.baseURL)
                    .send(Object.assign({
                    variables: {
                        id: animeID.data.anime.results[0].id
                    },
                    query: this.client.config.voiceActors
                }))
                    .then(data => {
                    return resolve(data.body);
                })
                    .catch(reject);
            });
        });
    }
}
exports.default = Anime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QW5pbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0QW5pbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBc0M7QUFDdEMsaUVBQTBDO0FBRzFDLE1BQXFCLEtBQUs7SUFBMUI7UUFDWSxXQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7SUF1Q2xDLENBQUM7SUF0Q1UsS0FBSyxDQUFDLEtBQWE7UUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2lCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ25DLE1BQU0sSUFBSSxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtpQkFDaEQ7Z0JBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sR0FBRyxDQUFDLEVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVZLFdBQVcsQ0FBQyxLQUFhOztZQUNsQyxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO2dCQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUU1RixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNuQyxLQUFLLHlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO3FCQUNqQyxJQUFJLENBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDVixTQUFTLEVBQUU7d0JBQ1AsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3FCQUN2QztvQkFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVztpQkFDeEMsQ0FBQyxDQUNMO3FCQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDVCxPQUFPLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBb0IsQ0FBQyxDQUFBO2dCQUM5QyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBQ0o7QUF4Q0Qsd0JBd0NDIn0=