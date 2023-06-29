window.addEventListener('DOMContentLoaded', function () {
    const userName = document.getElementById('username');
    const passWord = document.getElementById('password');
    const logInButton = document.getElementById('logInButton');
  
    logInButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      if (userName.value === '' && passWord.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, completa el campo de usuario y contraseña.',
        });
      } else if (userName.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, ingresa el nombre de usuario.',
        });
      } else if (passWord.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, ingresa la contraseña.',
        });
      } else {
        console.log('Inicio de sesión exitoso');
      }
    });
  });
  