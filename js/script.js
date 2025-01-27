// Funcionalidad para el formulario de cotización
document.getElementById('quote-form')?.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('quote-name').value.trim();
    const email = document.getElementById('quote-email').value.trim();
    const details = document.getElementById('quote-details').value.trim();

    // Validar campos
    if (!name || !email || !details) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    try {
        // Enviar datos al servidor
        const response = await axios.post('https://your-api-endpoint.com/quotes', {
            name,
            email,
            details,
        });

        if (response.status === 200) {
            alert('¡Gracias! Hemos recibido tu solicitud de cotización.');
            document.getElementById('quote-form').reset(); // Reiniciar el formulario
        } else {
            throw new Error('No se pudo procesar la solicitud');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        alert('Hubo un error al enviar tu solicitud. Intenta nuevamente más tarde.');
    }
});

// Validar formato del correo electrónico
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Funcionalidad para el menú responsivo
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar el menú
});
