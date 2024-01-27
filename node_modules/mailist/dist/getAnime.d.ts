import { AnimeStruc, voiceActors } from "./typings";
export default class Anime {
    private client;
    anime(query: string): Promise<AnimeStruc>;
    Mal(id: string): Promise<string>;
    voiceActors(query: string): Promise<voiceActors>;
}
