window.addEventListener('DOMContentLoaded', function () {
    
    const userName = document.getElementById('username')
    const passWord = document.getElementById('password')
    const inputs = [userName, passWord]
    const logInButton = document.getElementById('logInButton')

    const displayWarning = document.getElementById('displayWarning')

    logInButton.addEventListener('click', function(event) {
        event.preventDefault()

        let isValid = true

        inputs.forEach(function(emptyInputs) {
            if (emptyInputs == '') {
                displayWarning.innerHTML = 'El nombre de usuario esta vacio'
                isValid = false
                return
            }

        })


    })

})
