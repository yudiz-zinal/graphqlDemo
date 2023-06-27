import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      emoji
      name
      phone
      states {
        name
        code
      }
    }
  }
`;
export const GET_CONTINENT = gql`
  query GetContinent($code: String) {
    continent(code: $code) {
      code
      name
    }
  }
`;
export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
