const consola = require("consola")
const {ApolloServer, gql} = require("apollo-server")
const typeDefs = require("./graphql/types")
const resolvers = require("./graphql/resolvers")

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
