/* Configuracion de proyecto */
const config = {
    apiKey: 'AIzaSyCNEPJkgbbz-oiIy2ioptcs6_c2ODTY5a4',
    authDomain: 'socialnetworking-d3f4e.firebaseapp.com',
    databaseURL: 'https://socialnetworking-d3f4e.firebaseio.com',
    projectId: 'socialnetworking-d3f4e',
    storageBucket: 'socialnetworking-d3f4e.appspot.com',
    messagingSenderId: '378504101194'
  };
  firebase.initializeApp(config);


const db = firebase.firestore();
let titulo = document.getElementById('tittle');
let contenido = document.getElementById('content-field');
let posteado = document.getElementById('posted');
const container = document.getElementById('container');

document.getElementById('add').addEventListener('click', () => {
    console.log('entro a mi funcion de click');
    db.collection("posts").add({
        content: contenido.value,
    })
    .then(docRef => {
        console.log('escritura exitosa');
        console.log("Document written with ID: ", docRef.id)
        if (contenido.value === '') {
        document.getElementById('add').disabled = true;
        } else {
        creacion(docRef.id);
        }
    })
    .catch(error => {
        console.log('hubo error');
        
        console.error("Error adding document: ", error);
    });
});


const creacion = (id) => {

    let newPost = document.createElement('p');
    newPost.setAttribute('id', id);
    newPost.innerHTML= contenido.value;
    container.appendChild(newPost);
    let button = document.createElement('input');
    button.setAttribute('type', 'button')
    button.setAttribute('value', 'Eliminar')
    button.setAttribute('id', id+'button')
    newPost.appendChild(button);
}

document.getElementById(id +'button').addEventListener('click', () => {
   
db.collection("post").doc(docref.id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch(error => {
    console.error("Error removing document: ", error);
});

})
