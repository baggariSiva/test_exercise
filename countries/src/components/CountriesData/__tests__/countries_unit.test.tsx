import React from 'react';
import { shallow } from 'enzyme';
import {CountryInfo} from '../countryInfo';
import {ContinentInfo} from "../continentInfo";

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
      const data ={country: { 
        code: "string",
        name: "string",
        native: "string",
        phone: "string",
        continent: {
            code: "string",
            name: "string",
        },
        capital: "string",
        currency: "string",
        languages: [
            {
                code: "string",
                name: "string",
                native: "string",
                rtl: "boolean",
            }
        ],
        emoji: "string",
        emojiU: "string",
        states: [
            {
                code: "string",
                name: "string",
            }
        ]
    }}
   // const wrapper = shallow(<CountryInfo countryStruct={data} />);
   // expect(wrapper).toBeTruthy;
  });
  describe('<MyComponent />', () => {
    it('renders three <Foo /> components', () => {
        const data ={continent: {
            name: "string",
            code: "string",
            countries: [
                {
                    code: "string",
                    name: "string",
                    native: "string",
                    capital: "string",
                    currency: "string",
                    emoji: "string",
                    emojiU: "string",
                }
            ]
        }
    }
})
});
});