const firestore = () =>{
  return {
      collection: (nameCollection) =>{
        return {
            add : (objData) =>{
             return new Promise ((resolve) =>{
                resolve('La nota fue agregada')
                })
          }
        }            
      }
    }
  }


const firebase = {
    firestore: firestore
}

/* Jest mockea nuestro firebase*/

export default jest.fn(()=>{
   return firebase;
})