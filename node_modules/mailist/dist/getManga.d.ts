import { MangaStruc } from "./typings";
export default class Manga {
    private client;
    manga(query: string): Promise<MangaStruc>;
    Mal(id: string): Promise<string>;
}
