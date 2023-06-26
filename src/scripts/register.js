import { auth } from '../firebase/config.js'
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { switchToPage } from './pagehandler.js';

const writeErrorMsg = (msg) => {
    const area = document.getElementById("alertMsg")
    area.innerText = msg
}

const handleSubmit = () => {
    const nome = document.getElementById('nome').value;
    const nasc = document.getElementById('nasc').value;
    const email = document.getElementById('email').value;
    const pw = document.getElementById('pw').value;
    let genderOption;
    const selectedOption = document.querySelector('input[name="genderInput"]:checked');
    if (selectedOption) {
        genderOption = (selectedOption.value);
        console.log(genderOption);
    } else {
        console.log('Gênero não selecionado');
    }
    const user = { nome, nasc, email, pw, genderOption };
    console.log(user)
    createUserWithEmailAndPassword(auth, user.email, user.pw).then((r) => {
        switchToPage('homepage.html')
    }).catch((err) => {
        if (err.code == 'auth/weak-password'){
            writeErrorMsg('Erro: Senha muito simples')
        } else if (err.code == 'auth/email-already-in-use'){
            writeErrorMsg('Erro: Email em uso')
        } else if (err.code == 'auth/invalid-email'){
            writeErrorMsg('Erro: Email Inválido')
        }
    })
}

document.getElementById("register").addEventListener('click', () => {
    writeErrorMsg('')
    handleSubmit()
})