export declare type AnimeStruc = {
    "data": {
        "anime": {
            "results": [
                {
                    "id": number;
                    "idMal": number;
                    "title": {
                        "english": string | null;
                        "romaji": string | null;
                    };
                    "coverImage": {
                        "large": string;
                        "medium": string;
                    };
                    "startDate": {
                        "day": number;
                        "month": number;
                        "year": number;
                    };
                    "description": string;
                    "season": string;
                    "duration": number;
                    "genres": string[];
                    "format": string;
                    "type": string;
                    "siteUrl": string;
                    "status": string;
                    "trailer": {
                        "id": string | null;
                        "site": string | null;
                    } | null;
                    "episodes": number | null;
                    "isAdult": boolean;
                    "meanScore": number | null;
                    "averageScore": number | null;
                }
            ];
        };
    };
};
export declare type MangaStruc = {
    "data": {
        "anime": {
            "results": [
                {
                    "id": number;
                    "idMal": number;
                    "title": {
                        "english"?: string | null;
                        "romaji"?: string | null;
                    };
                    "coverImage": {
                        "large": string;
                        "medium": string;
                    };
                    "startDate": {
                        "day": number;
                        "month": number;
                        "year": number;
                    };
                    "description": string;
                    "genres": string[];
                    "format": string;
                    "type": string;
                    "siteUrl": string;
                    "status": string;
                    "trailer": {
                        "id": string | null;
                        "site": string | null;
                    } | null;
                    "chapters": number | null;
                    "volumes": number | null;
                    "isAdult": boolean;
                    "meanScore": number | null;
                    "averageScore": number | null;
                }
            ];
        };
    };
};
export declare type CharStruc = {
    "data": {
        "characters": {
            "results": [
                {
                    "id": number;
                    "name": {
                        "full": string | null;
                        "first": string | null;
                        "last": string | null;
                    };
                    "image": {
                        "large": string;
                        "medium": string;
                    };
                    "description": string;
                    "siteUrl": string;
                    "media": {
                        "edges": [
                            {
                                "node": {
                                    "title": {
                                        "english": string | null;
                                        "userPreferred": string | null;
                                    };
                                    "type": string;
                                    "siteUrl": string;
                                };
                            }
                        ];
                    };
                }
            ];
        };
    };
};
export declare type voiceActors = {
    "data": {
        "Media": {
            "characters": {
                "edges": [
                    {
                        "node": {
                            "siteUrl": string;
                            "name": {
                                "full": string;
                            };
                        };
                        "role": string;
                        "voiceActors": [
                            {
                                "siteUrl": string;
                                "name": {
                                    "full": string;
                                };
                            }
                        ] | null;
                    }
                ];
            };
        };
    };
};
