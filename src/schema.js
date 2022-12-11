import { createSchema } from 'graphql-yoga'
import {resolver} from './resolvers.js' ;


const typeDefs =  `

type Chapters {
    id_capitulo: Int!
    titulo_cap: String! 
    descripcion : String! ,
    numero_cap: Int! ,
    id_temp_fk: Int!
}
type Comments {
    comentario:String! ,
    valoracion:Int! ,
    id_capitulo_fk: Int!
}

type Query {
    countChapters: Int!
    allChapters: [Chapters]!
    findChapter(id:Int!): Chapters
    getChapter(id:Int!) : Chapters  
}
type Mutation {
    addComment(
        comentario:String! ,
        valoracion:Int! ,
        id_capitulo_fk: Int!
    ) : Comments!

    updateComment(
        comentario:String! ,
        valoracion:Int! ,
        id:Int!
    ):Comments!
}

`
export default createSchema({
    typeDefs:typeDefs ,
    resolvers:resolver ,
        
    

})