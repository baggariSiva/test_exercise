export interface CountryStruct {
    country: {
        code: string;
        name: string;
        native: string;
        phone: string;
        continent: {
            code: string;
            name: string;
        };
        capital: string;
        currency: string;
        languages: [
            {
                code: string;
                name: string;
                native: string;
                rtl: boolean;
            }
        ];
        emoji: string;
        emojiU: string;
        states: [
            {
                code: string;
                name: string;
            }
        ];
    };
}
export interface continentStruct {
    continent: {
        name: string;
        code: string;
        countries: [
            {
                code: string;
                name: string;
                native: string;
                capital: string;
                currency: string;
                emoji: string;
                emojiU: string;
            }
        ];
    };
}
