/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import {continentStruct} from "./typeDeclaration";

export const ContinentInfo = (props: {continentInfo: continentStruct}) => {
    const {continentInfo} = props;
    return (
        <div>
            {continentInfo?.continent ? (
                <>
                    <h2>{continentInfo.continent.name}</h2>
                    <h3>Countries</h3>
                    <div>
                        {continentInfo.continent.countries.map((countryData) => {
                            return (
                                <div
                                    key={countryData.code}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <p>{countryData.name}</p>
                                    <span style={{paddingTop: "12px"}}>{countryData.emoji}</span>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
};
