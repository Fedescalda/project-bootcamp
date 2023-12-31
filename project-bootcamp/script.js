<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>

window.addEventListener('DOMContentLoaded', function () {

    const userName = document.getElementById('username')
    const passWord = document.getElementById('password')
    const logInButton = document.getElementById('logInButton')
    const signUpButton = document.getElementById('signUpButton')
    const dataForm = document.getElementById('dataForm')


    logInButton.addEventListener('click', function (event) {
        event.preventDefault();

        let isValid = true

        if (userName.value === '' && passWord.value === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa el campo de usuario y contraseña.',
            })
            isValid = false
            return
        } else if (userName.value === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingresa el nombre de usuario.',
            })
            isValid = false
            return
        } else if (passWord.value === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingresa la contraseña.',
            })
            isValid = false
            return
        } else {
            console.log('Inicio de sesión exitoso')
        }
        if (!/^[a-zA-Z]+[0-9]{0,4}$/.test(userName.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese un usuario valido (lucho2001).',
            })
            isValid = false
            return
        }
        if (/^(?=.[A-Z])(?=.\d)(?=.*[^a-zA-Z0-9]).{6,12}$/.test(passWord.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese una contraseña valida (Estupi2#).',
            })
            isValid = false
            return
        }

        if (isValid) {
            dataForm.submit()
        }
    })

    signUpButton.addEventListener('click', function () {
        window.location.href = 'register.html'
    })

    userName.addEventListener('click', function () {
        userName.value = ''
    })
    passWord.addEventListener('click', function () {
        passWord.value = ''
    })


})
