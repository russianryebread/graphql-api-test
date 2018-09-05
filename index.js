const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const app = express()

// User Vars
const PORT = 8080
const DEBUG = true

// Schema
const schema = buildSchema(`
    type Query {
        add(a: Int!, b:Int!): Int
        sqrt(num: Float!): Float!
    }
`);

// Handlers
const root = {
    add: (args) => args.a + args.b,
    sqrt: (args) => Math.sqrt(args.num)
}

// Let'er Rip!
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: DEBUG,
}))
app.listen(PORT, () => console.log(`http://localhost:${PORT}/graphql`))