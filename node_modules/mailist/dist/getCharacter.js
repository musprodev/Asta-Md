"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./structures/Client"));
class Character {
    constructor() {
        this.client = new Client_1.default();
    }
    character(query) {
        return new Promise((resolve, reject) => {
            this.client.getChar(query, this.client.config.charGraphql)
                .then(result => {
                if (!result.data.characters.results.length) {
                    throw new TypeError(`Oh No, Character ${query} is Not Found`);
                }
                resolve(result);
            })
                .catch(reject);
        });
    }
}
exports.default = Character;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2hhcmFjdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dldENoYXJhY3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUEwQztBQUcxQyxNQUFxQixTQUFTO0lBQTlCO1FBQ1ksV0FBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO0lBYWxDLENBQUM7SUFaVSxTQUFTLENBQUMsS0FBYTtRQUMxQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7aUJBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDeEMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxvQkFBb0IsS0FBSyxlQUFlLENBQUMsQ0FBQTtpQkFDaEU7Z0JBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUFkRCw0QkFjQyJ9