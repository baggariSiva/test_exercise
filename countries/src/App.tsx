import React from "react";
import fetch from "cross-fetch";
import Countries from "./components/CountriesData";
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from "@apollo/client";
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: "https://countries.trevorblades.com", fetch})
});
const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Countries />
        </ApolloProvider>
    );
};
export default App;
