import fetch from "node-fetch";
let chapters = [] ;
//chapters = await  getAll()
const url = 'http://localhost/API-RESTFULL/api/chapters' ;


export const resolver = {
    Query: {
        countChapters:  () =>  chapters.length ,
        allChapters:  async ()  => {
          const data = await fetch(url) ;
          if(data.ok) {
            return await data.json() ;
          }
        } ,
        findChapter:async (root , args) => {
            const {id} = args ;
          const data = await fetch(`${url}/${id}`) ;
          if(data.ok) {
            return data.json() ;
          }
        } ,
       
     } ,

    Mutation: {
        addComment:async (root , args) => {
            const data = {
                "comentario" : args.comentario ,
                "valoracion" : args.valoracion ,
                "id_capitulo_fk" : args.id_capitulo_fk
            }
            
        const promise = await fetch(`${url}/comments` , {
            method: 'POST' ,
            headers: {'ContentType' : 'application/json'} ,
            body : JSON.stringify(data)
        })
    return await promise.json()
           
        
        } ,
        updateComment: async (root , args ) => {
            const data = {
                "comentario" : args['comentario'] ,
                "valoracion" : args['valoracion'] 
            }
             console.log( JSON.stringify(data))
            
            let id = args.id;
        const promise = await fetch(`${url}/comments/${id}` , {
            method: 'PUT' ,
            headers: {'ContentType' : 'application/json'} ,
            body : JSON.stringify(data)
        })
          
        console.log(await promise.json())
           
        }
     }
}