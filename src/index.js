import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";
import startServer from "./server";

startServer({ typeDefs, resolvers });