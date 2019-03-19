const { GraphQLServer } = require('graphql-yoga');
Mutation = require('./resolvers/Mutation');
Query = require('./resolvers/Query');
const { Prisma } = require('prisma-binding');

// Get Prisma
const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
})

// Create Graphql yoga server
function createServer () {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({...req, db})
  })
}

module.exports = createServer;