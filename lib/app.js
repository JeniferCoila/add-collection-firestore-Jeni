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

/* Funcion para crear documentos en mi database */
document.getElementById('add').addEventListener('click', () => {
    console.log('entro a mi funcion de click');
    /*  Creo un documento en mi coleccion 'posts'*/
    db.collection("posts").add({
    /*  Le asigno el value de mi textarea*/
        content: contenido.value,
    })
    /*  Entonces mi promesa me dice*/
    .then(docRef => {
        console.log('escritura exitosa');
        console.log("Document written with ID: ", docRef.id)
        /*  Si el post está vacio le mando un alert*/
        if (contenido.value === '') {
        alert('Por favor publica algo');
        } else {
    /*  En su defecto invoco la funcion que está más abajo*/
        creacion(docRef.id);
        }
    })
    .catch(error => {
        console.log('hubo error');
        
        console.error("Error adding document: ", error);
    });
});


const creacion = (id) => {
    /*   Creo una nueva etiqueta p */
    let newPost = document.createElement('p');
    /*  Le asigno un aributo*/
    newPost.setAttribute('id', id);
    newPost.innerHTML= contenido.value;
    /*  Añado mi etiqueta p a mi container que está en mi HTML*/
    container.appendChild(newPost);
    /*   Creo mi boton para eliminar */
    let button = document.createElement('input');
     /*  Agrego atributos que quiero (aun no estoy segura que tan util sea 
        ponerle un id+button pero los puse porque se me ocurrio que seria util) */
    button.setAttribute('type', 'button')
    button.setAttribute('value', 'Eliminar')
    button.setAttribute('id', id+'button')
    /*   Añado mi boton Eliminar a mi container */
    newPost.appendChild(button);
}

/* Esto aun no está funcional*/
document.getElementById(id +'button').addEventListener('click', () => {
   
db.collection("post").doc(docref.id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch(error => {
    console.error("Error removing document: ", error);
});

})


export const addPost = () => {
    
}