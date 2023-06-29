window.addEventListener('DOMContentLoaded', function () {
    
    const userName = document.getElementById('username')
    const passWord = document.getElementById('password')
    const inputs = [userName.value, passWord.value]
    const logInButton = document.getElementById('logInButton')

    const displayWarning = document.getElementById('displayWarning')

    logInButton.addEventListener('click', function(event) {
        event.preventDefault()

        let isValid = true

        inputs.forEach(function(emptyInputs, index) {
            if(emptyInputs == '') {
                if (index == 0) {
                    userName.value = 'El nombre de usuario esta vacio'
                    isValid = false
                    return
                } else if (index == 1) {
                    passWord.value = 'La contraseña de usuario esta vacio'
                    isValid = false
                    return
                }
            }


        })


    })

})
