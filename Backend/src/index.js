import { ApolloServer, } from 'apollo-server-express';
import { typeDefs} from './typeDefs';
import { resolvers} from './resolvers';
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


const startServer = async () =>{
    const app = express();
    

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
     
    server.applyMiddleware({ app });
    // app.use('/graphql')
    app.use(cors());
    await mongoose.connect("mongodb://localhost:27017/test2", {useNewUrlParser: true})


    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

startServer();