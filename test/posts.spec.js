import mockFirebase from '../_mocks_/firebase-mock.js'

global.firebase = mockFirebase();

import {addPost} from '../lib/app.js'

describe('addPost', ()=>{
    it ('Debería poder agregar un post', () =>{
         return addPost('comprar pan').then(() =>{
          expect(data).toBe('comprar pan');
         })
    })
});

