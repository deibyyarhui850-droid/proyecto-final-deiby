// Variables globales
let carrito = [];
let total = 0;
let currentSlide = 0;
const totalSlides = 4;

// Función para agregar pizza al carrito
function agregarPizza(nombre, precio) {
    const itemExistente = carrito.find(item => item.nombre === nombre);

    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    total += precio;
    actualizarCarrito();

    Swal.fire({
        icon: 'success',
        title: '¡Agregado!',
        text: `${nombre} agregado al carrito`,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });
}

// Función para actualizar el carrito visual
function actualizarCarrito() {
    const carritoBtn = document.querySelector('a[href="#carrito"]');
    if (carritoBtn) {
        const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        carritoBtn.innerHTML = `Carrito (${cantidadTotal})`;
    }
}

// Función para mostrar el modal del carrito
function mostrarCarrito() {
    let carritoHTML = `
                <div id="modalCarrito" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px;">
                    <div style="background: white; border-radius: 15px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
                        <div style="background: linear-gradient(135deg, #d32f2f, #f44336); color: white; padding: 20px; border-radius: 15px 15px 0 0; display: flex; justify-content: space-between; align-items: center;">
                            <h2 style="margin: 0;">🛒 Tu Carrito</h2>
                            <button onclick="cerrarCarrito()" style="background: transparent; border: none; color: white; font-size: 24px; cursor: pointer; width: 30px; height: 30px;">✕</button>
                        </div>
                        <div style="padding: 20px;">
            `;

    if (carrito.length === 0) {
        carritoHTML += `
                    <div style="text-align: center; padding: 40px 20px;">
                        <div style="font-size: 60px; margin-bottom: 20px;">🍕</div>
                        <p style="color: #666; font-size: 1.1rem;">Tu carrito está vacío</p>
                        <p style="color: #999; margin-top: 10px;">¡Agrega algunas pizzas deliciosas!</p>
                    </div>
                `;
    } else {
        carrito.forEach((item, index) => {
            const subtotal = item.precio * item.cantidad;
            carritoHTML += `
                        <div style="border-bottom: 1px solid #eee; padding: 15px 0; display: flex; justify-content: space-between; align-items: center;">
                            <div style="flex: 1;">
                                <h4 style="color: #d32f2f; margin-bottom: 5px;">${item.nombre}</h4>
                                <p style="color: #666; font-size: 0.9rem;">Bs ${item.precio.toFixed(2)} c/u</p>
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <button onclick="cambiarCantidad(${index}, -1)" style="background: #f44336; color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center;">−</button>
                                <span style="font-weight: bold; min-width: 30px; text-align: center;">${item.cantidad}</span>
                                <button onclick="cambiarCantidad(${index}, 1)" style="background: #4caf50; color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center;">+</button>
                                <span style="font-weight: bold; color: #ff9800; min-width: 70px; text-align: right;">Bs ${subtotal.toFixed(2)}</span>
                                <button onclick="eliminarDelCarrito(${index})" style="background: #f44336; color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 16px;">🗑️</button>
                            </div>
                        </div>
                    `;
        });

        carritoHTML += `
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #d32f2f;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <h3 style="color: #333;">Total:</h3>
                            <h3 style="color: #ff9800; font-size: 1.8rem;">Bs ${total.toFixed(2)}</h3>
                        </div>
                        <button onclick="enviarPedidoWhatsApp()" style="width: 100%; background: #25d366; color: white; border: none; padding: 15px; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.3s ease;">
                            <span style="font-size: 24px;">📱</span>
                            Enviar Pedido por WhatsApp
                        </button>
                        <button onclick="confirmarVaciarCarrito()" style="width: 100%; background: transparent; color: #f44336; border: 2px solid #f44336; padding: 12px; border-radius: 30px; font-size: 1rem; font-weight: bold; cursor: pointer; margin-top: 10px; transition: all 0.3s ease;">
                            Vaciar Carrito
                        </button>
                    </div>
                `;
    }

    carritoHTML += `
                        </div>
                    </div>
                </div>
            `;

    document.body.insertAdjacentHTML('beforeend', carritoHTML);
}

// Función para cambiar cantidad
function cambiarCantidad(index, cambio) {
    const item = carrito[index];
    const nuevaCantidad = item.cantidad + cambio;

    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(index);
    } else {
        total += item.precio * cambio;
        item.cantidad = nuevaCantidad;
        cerrarCarrito();
        mostrarCarrito();
    }
}

// Función para eliminar del carrito
function eliminarDelCarrito(index) {
    const item = carrito[index];
    total -= item.precio * item.cantidad;
    carrito.splice(index, 1);
    cerrarCarrito();
    if (carrito.length > 0) {
        mostrarCarrito();
    }
    actualizarCarrito();

    Swal.fire({
        icon: 'info',
        title: 'Eliminado',
        text: 'Producto eliminado del carrito',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });
}

// Función para vaciar el carrito
function confirmarVaciarCarrito() {
    vaciarCarrito();
}

function vaciarCarrito() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Se eliminarán todos los productos del carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d32f2f',
        cancelButtonColor: '#757575',
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'Cancelar',
        customClass: {
            container: 'swal-high-zindex'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            total = 0;
            cerrarCarrito();
            actualizarCarrito();

            Swal.fire({
                icon: 'success',
                title: '¡Carrito vaciado!',
                text: 'Todos los productos han sido eliminados',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                customClass: {
                    container: 'swal-high-zindex'
                }
            });
        }
    });
}

// Función para cerrar el carrito
function cerrarCarrito() {
    const modal = document.getElementById('modalCarrito');
    if (modal) {
        modal.remove();
    }
}

// Función para enviar pedido por WhatsApp
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Carrito vacío',
            text: 'Tu carrito está vacío. Agrega algunos productos primero.',
            confirmButtonColor: '#d32f2f'
        });
        return;
    }

    // Número de WhatsApp (cambia por tu número)
    const numeroWhatsApp = '59175667833';

    // Construir mensaje de forma simple
    let mensaje = 'PEDIDO PIZZA PREMIUM\n\n';
    mensaje += 'Detalle del pedido:\n';
    mensaje += '-------------------\n\n';

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        mensaje += (index + 1) + '. ' + item.nombre + '\n';
        mensaje += '   Cantidad: ' + item.cantidad + '\n';
        mensaje += '   Precio: Bs ' + item.precio.toFixed(2) + '\n';
        mensaje += '   Subtotal: Bs ' + subtotal.toFixed(2) + '\n\n';
    });

    mensaje += '-------------------\n';
    mensaje += 'TOTAL: Bs ' + total.toFixed(2) + '\n\n';
    mensaje += 'Por favor confirma tu direccion de entrega\n';
    mensaje += 'Tiempo estimado: 25-35 minutos';

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Crear URL de WhatsApp
    const urlWhatsApp = 'https://api.whatsapp.com/send?phone=' + 59167741268 + '&text=' + mensajeCodificado;

    // Abrir WhatsApp directamente
    window.open(urlWhatsApp, '_blank');
}

// Carousel Functions
function initCarousel() {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (i === 0 ? ' active' : '');
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }
    updateCarousel();
}

function moveCarousel(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const wrapper = document.getElementById('carouselWrapper');
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Auto-advance carousel
function startAutoCarousel() {
    setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    const carritoLink = document.querySelector('a[href="#carrito"]');
    if (carritoLink) {
        carritoLink.addEventListener('click', function (e) {
            e.preventDefault();
            mostrarCarrito();
        });
    }

    // Initialize carousel
    initCarousel();
    startAutoCarousel();
});