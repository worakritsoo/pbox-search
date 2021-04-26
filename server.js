import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
	type User {
		username: String!
	}

	type Todo {
		title: String!
		completed: Boolean!
		list: List
	}

	type List {
		title: String!
		todos: [Todo]
	}

	type Query {
		allTodos: [Todo!]
		todosByCompletedFlag(completed: Boolean!): [Todo!]
		allLists: [List!]
		Users: [User!]
	}

	mutation CreateAList {
		createList(data: { title: "Development" }) {
			title
			_id
		}
	}
`;

const resolvers = {
	Query: {
		allTodos: () => [Todo]
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
