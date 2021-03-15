module.exports = `type Query {
    search(tag: String!, limit: Int, score: Int, sort: String): [Post]
}`
