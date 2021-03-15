const {gql} = require("apollo-server")
const Owner = require("./Owner")
const Post = require("./Post")
const Query = require("./Query")

module.exports = gql`
	${Owner}
	${Post}
	${Query}
`
