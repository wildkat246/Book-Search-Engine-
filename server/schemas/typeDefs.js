const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        bookId: ID!
        authers: [String]
        description: String
        title: String! 
        image: String
        link: String 
    
    }

    Auth {

    }

    User type {
        
    }
`;