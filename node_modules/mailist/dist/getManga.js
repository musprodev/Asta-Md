"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./structures/Client"));
class Manga {
    constructor() {
        this.client = new Client_1.default();
    }
    manga(query) {
        return new Promise((resolve, reject) => {
            this.client.getManga(query, this.client.config.mangaGraphql)
                .then(result => {
                if (!result.data.anime.results.length) {
                    throw new TypeError(`Oh No, Manga with title ${query} is Not Found`);
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
}
exports.default = Manga;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWFuZ2EuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0TWFuZ2EudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRUFBMEM7QUFHMUMsTUFBcUIsS0FBSztJQUExQjtRQUNZLFdBQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztJQWtCbEMsQ0FBQztJQWpCVSxLQUFLLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7aUJBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDbkMsTUFBTSxJQUFJLFNBQVMsQ0FBQywyQkFBMkIsS0FBSyxlQUFlLENBQUMsQ0FBQTtpQkFDdkU7Z0JBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sR0FBRyxDQUFDLEVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekIsQ0FBQztDQUNKO0FBbkJELHdCQW1CQyJ9