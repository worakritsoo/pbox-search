import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
	type User {
		name: String
		links: [Link]
	}

	type Link {
		title: String
		prefix: String
		url: String
		user: User
		users_liked: [User]
		family_link: [Link]
	}

	type Query {
		links: [Link]
		users: [User]
	}
	type Mutation {
		addlink(title: String, user: String): Link
	}
`;

const links = [
	{
		title: 'การไฟฟ้าส่วนภูมิภาค',
		url: 'www.pea.co.th',
		prefix: 'กฟภ.',
		user: 'Worakrit Soontornthamniti',
		content: 'some contnet'
	},
	{
		title: 'อินทราเน็ต การไฟฟ้าส่วนภูมิภาค',
		url: 'http://intranet.pea.co.th',
		prefix: 'กฟภ.',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'อินทราเน็ต กฟต.3',
		url: 'http://intra.pea.co.th/peas3',
		prefix: 'กฟต.3',
		user: 'Worakrit Soontornthamniti'
	}
];

const resolvers = {
	Query: {
		links: () => links
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
