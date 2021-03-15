const consola = require("consola")
const {ApolloServer, gql} = require("apollo-server")

const typeDefs = gql`
	type Post {
		title: String
		author: String
	}

	type Query {
		search: [Post]
	}
`
const resolvers = {
	Query: {
		search: () => {
			const searches = [
				{
					title: "default post",
					author: "default author"
				},
				{
					title: "default post 2",
					author: "default author 2"
				}
			]

			return searches
		}
	}
}

const server = new ApolloServer({
	typeDefs,
	resolvers
})

const startApp = async () => {
	try {
		server.listen().then(({url}) => {
			consola.success({
				message: `Apollo server started on \n${url}`,
				badge: true
			})
		})
	} catch (e) {
		consola.error({
			message: `error: ${e.message}`,
			badge: true
		})
	}
}

startApp()
