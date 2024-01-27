import { CharStruc } from "./typings";
export default class Character {
    private client;
    character(query: string): Promise<CharStruc>;
}
