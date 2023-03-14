const form = document.querySelector('form');
const username = document.querySelector('#user');
const password = document.querySelector('#pass');
const loginButton = document.querySelector('#acc');

const createUserForm = document.querySelectorAll('form')[1];
const newUsername = document.querySelector('#new_user');
const newPassword = document.querySelector('#new_pass');
const createUserButton = document.querySelector('#logi');

const messageModal = document.querySelector('#mensaje_modal');
const messageText = document.querySelector('#mensaje_texto');
const closeButton = document.querySelector('.ok_boton');
const messageOverlay = document.getElementById("mensaje_modal");

let users = [
    { username: 'nestorchumania@gmail.com', password: 'nestor', isAdmin: true },
    { username: 'dannyvinueza@gmail.com', password: 'danny', isAdmin: false },
    { username: 'danielquishpe.com', password: 'daniel', isAdmin: false }
];

function reiniciar() {
    username.value = 'Usuario';
    password.value = 'Contraseña';
    newUsername.value = 'Correo Electrónico';
    newPassword.value = 'Contraseña';
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const enteredUsername = username.value;
    const enteredPassword = password.value;

    const foundUser = users.find(function (user) {
        return user.username === enteredUsername && user.password === enteredPassword;
    });

    if (foundUser) {
        if (foundUser.isAdmin) {
            messageText.textContent = '¡Haz iniciado sesion! como administrador';
        } else {
            messageText.textContent = '¡Haz iniciado sesion!';
        }
    } else {
        messageText.textContent = '¡Error al ingresar! Crea una cuenta';
    }

    // Mostrar el mensaje en el modal
    messageModal.style.display = 'block';
});

createUserForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newUsernameValue = newUsername.value;
    const newPasswordValue = newPassword.value;
    const isAdminValue = false;

    // Verificar si el usuario ya existe
    const userExists = users.some(function (user) {
        return user.username === newUsernameValue;
    });

    if (userExists) {
        messageText.textContent = '¡Error al registrar! Usuario ya existe';
    } else {
        // Agregar el nuevo usuario al arreglo
        users.push({ username: newUsernameValue, password: newPasswordValue, isAdmin: isAdminValue });
        messageText.textContent = '¡Registrado exitosamente!';
    }

    // Mostrar el mensaje en el modal
    messageModal.style.display = 'block';
});

// Cerrar el modal al hacer clic en el botón de "ok" o afuera
function hideModal() {
    messageOverlay.style.display = "none";
    messageModal.style.display = "none";
}

closeButton.addEventListener("click", hideModal);
messageOverlay.addEventListener("click", hideModal);