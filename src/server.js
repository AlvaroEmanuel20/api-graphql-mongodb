import { ApolloServer } from "apollo-server";
const {
    ApolloServerPluginLandingPageGraphQLPlayground
} = require("apollo-server-core");
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default function startServer({ typeDefs, resolvers }) {
    mongoose.connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Database connected"));

    const server = new ApolloServer({ 
        typeDefs, 
        resolvers,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
    });
    server.listen().then(({ url }) => console.log(`Server started in ${url}`));
}