import React from "react";
import Countries from "components/CountriesData";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com"
});
const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Countries />
        </ApolloProvider>
    );
};
export default App;
