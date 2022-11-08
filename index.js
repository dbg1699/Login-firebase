import {saveTasks} from './firebase.js'

window.addEventListener('DOMContentLoaded', () =>{

})

const login = document.getElementById('login')

//Guardar los datos: correo y contraseña
login.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log('enviado')
    const correo = login['correo']
    const contraseña = login['contraseña']
    //console.log(correo.value, contraseña.value)

    saveTasks(correo.value, contraseña.value)
    login.reset()// carguen los campos para que queden en blanco 

})