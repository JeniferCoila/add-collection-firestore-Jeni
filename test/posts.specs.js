import {addPost} from 'app.js'


describe('addPost', ()=>{
    it ('Debería poder agregar un post', () =>{
         return addPost('comprar pan').then(() =>{
          expect(data).toBe('comprar pan');
         })
    })
});