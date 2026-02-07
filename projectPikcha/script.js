const login = 'admin45'
const password = 'admin45'

const postButton = document.getElementById('buttonPost')
const resetButton = document.getElementById('buttonReset')
const inputLogin = document.getElementById('email')
const inputPassword = document.getElementById('password')
const formCaptcha = document.getElementById('formCaptcha')

postButton.addEventListener('click', () => {
    let valueLogin = inputLogin.value
    let valuePassword = inputPassword.value

    valueLogin === login && valuePassword === password
    ? window.location.href = 'page2.html'
    : formCaptcha.style.display = 'flex' 
})

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    inputLogin.value = ''
    inputPassword.value = ''
    }) 