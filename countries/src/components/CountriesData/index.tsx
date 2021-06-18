import React, {useEffect, useState} from "react";
import {Main, Left, Right, Input} from "./Styles";
import {useQuery} from "@apollo/client";
import {LIST_COUNTRIES, LIST_CONTINENTS} from "./graphql";
import {CountryStruct, continentStruct} from "./typeDeclaration";
import {CountryInfo} from "./countryInfo";
import {ContinentInfo} from "./continentInfo";

const Countries: React.FC = () => {
    const [country, setCountry] = useState<string>();
    const [countryInfo, setCountryInfo] = useState<CountryStruct>();

    const [continent, setContinent] = useState<string>();
    const [continentInfo, setContinentInfo] = useState<continentStruct>();

    const {data, refetch} = useQuery(LIST_COUNTRIES, {variables: {code: country}});
    const {data: data1, refetch: refetch1} = useQuery(LIST_CONTINENTS, {
        variables: {code: continent}
    });
    const getCountry = (e) => {
        setCountry(e.target.value.toUpperCase());
        refetch;
    };
    const getContinent = (e) => {
        setContinent(e.target.value.toUpperCase());
        refetch1;
    };
    useEffect(() => {
        setCountryInfo(data);
    }, [data]);
    useEffect(() => {
        setContinentInfo(data1);
    }, [data1]);
    return (
        <>
            <Main>
                <Left>
                    <Input value={country} onChange={getCountry} placeholder="Country Code" />
                    <CountryInfo countryInfo={countryInfo} />
                </Left>
                <Right>
                    <Input value={continent} onChange={getContinent} placeholder="Continent Code" />
                    <ContinentInfo continentInfo={continentInfo} />
                </Right>
            </Main>
        </>
    );
};

export default Countries;
