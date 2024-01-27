import { AnimeStruc, CharStruc, MangaStruc } from "../typings";
import * as config from "../util/Constant";
interface ClientOpt {
    uri: string;
}
export default class Client {
    readonly baseURL: string;
    readonly config: typeof config;
    constructor(opt?: ClientOpt);
    getAnime(query: string, hqlRequest: string): Promise<AnimeStruc>;
    getManga(query: string, hqlRequest: string): Promise<MangaStruc>;
    getChar(query: string, hqlRequest: string): Promise<CharStruc>;
    fetchMal(id: string): Promise<string>;
}
export {};
