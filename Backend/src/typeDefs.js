import { gql } from 'apollo-server-core';


export const typeDefs  = gql `
    type Query{
        products: [Product!]!
    }
    type Mutation{
        createProduct(id: ID, name: String!, description: String, price: Float!, image: String): Product!
    }
    type Product  {
        id: ID
        name: String!
        description: String
        price: Float!
        image: String
    }
`;

