// Obtenemos el elemento de la información personal
const personalInfo = document.querySelector('.personal-info p');

// Función para cambiar la información personal
function cambiarInfoPersonal() {
    personalInfo.textContent = "Nueva información personal aquí.";
}

// Asociamos la función al evento 'mouseover' del elemento de la foto
const miFoto = document.getElementById('mi-foto');
miFoto.addEventListener('mouseover', cambiarInfoPersonal);
