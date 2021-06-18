import {gql} from "@apollo/client";

export const LIST_COUNTRIES = gql`
    query ($code: ID!) {
        country(code: $code) {
            code
            name
            native
            phone
            continent {
                code
                name
            }
            capital
            currency
            languages {
                code
                name
                native
                rtl
            }
            emoji
            emojiU
            states {
                code
                name
            }
        }
    }
`;

export const LIST_CONTINENTS = gql`
    query ($code: ID!) {
        continent(code: $code) {
            name
            code
            countries {
                code
                name
                native
                capital
                currency
                emoji
                emojiU
            }
        }
    }
`;
