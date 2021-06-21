import React from "react";
import renderer, {act} from "react-test-renderer";
import {waitFor} from "@testing-library/react";
import Countries from "..";
import {LIST_CONTINENTS, LIST_COUNTRIES} from "../graphql";
import fetch from "cross-fetch";
import App from "../../../App";
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from "@apollo/client";
import {MockedProvider} from "@apollo/react-testing";
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: "https://countries.trevorblades.com", fetch})
});

const mocks = [
    {
        request: {
            query: LIST_CONTINENTS,
            variables: {
                code: "ASIA"
            }
        },
        result: () => {
            console.log("CONTINENTS");
            return {
                data: {
                    continent: {
                        name: "ASIA",
                        code: "ASIA",
                        countries: [
                            {
                                code: "INDIA",
                                name: "INDIA",
                                native: "",
                                capital: "",
                                currency: "",
                                emoji: "",
                                emojiU: ""
                            }
                        ]
                    }
                }
            };
        }
    },
    {
        request: {
            query: LIST_COUNTRIES,
            variables: {
                code: "INDIA"
            }
        },
        result: () => {
            console.log("COUNTRIES");
            return {
                data: {
                    country: {
                        code: "INDIA",
                        name: "INDIA",
                        native: "",
                        phone: "",
                        continent: {
                            code: "ASIA",
                            name: "ASIA"
                        },
                        capital: "",
                        currency: "",
                        languages: [
                            {
                                code: "",
                                name: "",
                                native: "",
                                rtl: ""
                            }
                        ],
                        emoji: "",
                        emojiU: "",
                        states: [
                            {
                                code: "",
                                name: ""
                            }
                        ]
                    }
                }
            };
        }
    }
];

it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="sc-bdnxRM gVOLAA"
        >
          <div
            className="sc-gtsrHT jYyyRE"
          >
            <input
              className="sc-hKFxyN cUJA-dz"
              onChange={[Function]}
              placeholder="Country Code"
            />
            <div>
              
            </div>
          </div>
          <div
            className="sc-dlnjwi kBCOAv"
          >
            <input
              className="sc-hKFxyN cUJA-dz"
              onChange={[Function]}
              placeholder="Continent Code"
            />
            <div>
              
            </div>
          </div>
        </div>
    `);
});
