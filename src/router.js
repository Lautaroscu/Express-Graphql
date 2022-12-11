import schema from './schema.js';
import express from 'express' ; 
const app =  express() ;//estilo router
const port = 3000;
import { graphqlHTTP } from 'express-graphql';
// import { buildSchema } from 'graphql';
app.use('/' , graphqlHTTP(
    {
        graphiql:true , 
        schema:schema ,
         
    }
   

))
app.listen(port, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port} `)   
  })  