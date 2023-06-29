window.addEventListener('DOMContentLoaded', function () {

    const userName = document.getElementById('username')
    const passWord = document.getElementById('password')
    const inputs = [userName, passWord]
    const logInButton = document.getElementById('logInButton')

    const warningUsername = document.getElementById('warningUsername')
    const warningPassword = document.getElementById('warningPassword')

    logInButton.addEventListener('click', function (event) {
        event.preventDefault()

        let isValid = true

        const inputValues = [userName.value, passWord.value]
        inputValues.forEach(function (emptyInputs, index) {
            if (emptyInputs == '') {
                if (index == 0 || index == 1) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Por favor, completa todos los campos.',
                        })
                    isValid = false
                    return
                }
            }
        })

    })

    inputs.forEach(function(blankInputs, index) {
        blankInputs.addEventListener('click', function() {
            if (index == 0) {
                warningUsername.innerHTML = ''
            } else if (index == 1) {
                warningPassword.innerHTML = ''
            }
        })
    })

})

