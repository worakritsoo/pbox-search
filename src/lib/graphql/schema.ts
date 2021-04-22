import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
	type User {
		name: String
		links: [Link]
	}

	type Link {
		title: String
		author: Author
		users_liked: [User]
		family_link: [Link]
	}

	type Author {
		name: String
		links: [Link]
	}

	type Query {
		links: [Link]
		authors: [Author]
	}
`;

module.exports = typeDefs;

const resolvers = {
	Query: {}
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);

type User = {
	name: String;
	links: [Link];
};

type Link = {
	title: String;
	author: User;
	users_liked: [User];
	family_link: [Link];
};
