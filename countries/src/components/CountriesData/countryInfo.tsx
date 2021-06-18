/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import {CountryStruct} from "./typeDeclaration";

export const CountryInfo = (props: {countryInfo: CountryStruct}) => {
    const {countryInfo} = props;
    return (
        <div>
            {countryInfo?.country ? (
                <p>
                    <div>
                        <div>Name: {countryInfo.country.name}</div>
                        <div>Capital: {countryInfo.country.capital}</div>
                        <div>Currency: {countryInfo.country.currency}</div>
                        <div>Native: {countryInfo.country.native}</div>
                        <div>Continent: {countryInfo.country.continent["name"]}</div>
                    </div>
                    <div>
                        <h2>Languages</h2>
                    </div>
                    <div>
                        {countryInfo.country.languages.map((languagedata) => {
                            return (
                                <div
                                    key={languagedata.code}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <p>Name:</p>
                                    <span style={{paddingTop: "12px"}}>{languagedata.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <h2>States</h2>
                    </div>
                    <div>
                        {countryInfo.country.states.map((stateData) => {
                            return (
                                <div
                                    key={stateData.code}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <p>Name:</p>
                                    <span style={{paddingTop: "12px"}}>{stateData.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </p>
            ) : (
                ""
            )}
        </div>
    );
};
