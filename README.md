# 🍕 Pizza Premium - Sistema de Pedidos Online

## 📋 Descripción del Proyecto

Pizza Premium es una aplicación web de comercio electrónico diseñada para una pizzería ubicada en Satélite Norte, Santa Cruz, Bolivia. La plataforma permite a los clientes explorar el menú completo de pizzas, bebidas y postres, gestionar su carrito de compras y realizar pedidos directamente vía WhatsApp.

## 🎯 Características Principales

- **Catálogo Completo**: Visualización de 21 tipos de pizzas, 9 bebidas diferentes
- **Carrito de Compras Interactivo**: Sistema completo de gestión de pedidos
- **Integración WhatsApp**: Envío directo de pedidos al número del negocio
- **Carrusel de Promociones**: Exhibición automática de ofertas especiales
- **Diseño Responsive**: Adaptable a dispositivos móviles, tablets y desktop
- **Interfaz Atractiva**: Diseño moderno con animaciones y efectos visuales

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio web
- **CSS3**: Estilos, animaciones y diseño responsive
- **JavaScript (ES6)**: Lógica del carrito y funcionalidades interactivas
- **SweetAlert2**: Alertas y notificaciones elegantes
- **WhatsApp Business API**: Integración para envío de pedidos

## 📁 Estructura del Proyecto
```
pizza-premium/
│
├── index.html                 # Página principal
├── style2.css                # Estilos personalizados
├── script2.js               # Lógica de la aplicación
│
├── pizzas/                  # Imágenes de pizzas
│   ├── napolitana.jpg
│   ├── margarita1.jpeg
│   ├── 4quesos.jpeg
│   └── ...
│
├── bebidas/                 # Imágenes de bebidas
│   ├── cocamini.jpg
│   ├── coca2ltrs.jpg
│   └── ...
│
└── apartados/              # Imágenes promocionales
    ├── baner1.jpeg
    ├── oferta1.jpg
    └── ...
```

## 📦 Instalación y Configuración

### Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional para desarrollo)
- Editor de código (VS Code recomendado)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
```bash
git clone https://github.com/tu-usuario/pizza-premium.git
cd pizza-premium
```

2. **Configurar el número de WhatsApp**

Editar el archivo `script2.js` en la línea 240:
```javascript
const numeroWhatsApp = '59167741268'; // Reemplazar con tu número
```

3. **Abrir el proyecto**
```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Con servidor local (recomendado)
# Usando Live Server de VS Code o Python
python -m http.server 8000
```

4. **Acceder a la aplicación**
```
http://localhost:8000
```

## ⚙️ Requerimientos Funcionales

### RF-001: Visualización del Catálogo
- **Descripción**: El sistema debe mostrar todas las pizzas, bebidas y postres disponibles con sus respectivos precios e imágenes.
- **Prioridad**: Alta
- **Estado**: ✅ Implementado

### RF-002: Gestión del Carrito de Compras
- **Descripción**: Los usuarios deben poder agregar, modificar cantidades y eliminar productos del carrito.
- **Funcionalidades**:
  - Agregar productos al carrito
  - Incrementar/decrementar cantidades
  - Eliminar productos individuales
  - Vaciar carrito completo
  - Visualizar subtotales y total
- **Prioridad**: Alta
- **Estado**: ✅ Implementado

### RF-003: Cálculo Automático de Precios
- **Descripción**: El sistema debe calcular automáticamente subtotales por producto y el total general del pedido.
- **Prioridad**: Alta
- **Estado**: ✅ Implementado

### RF-004: Envío de Pedidos por WhatsApp
- **Descripción**: Los usuarios deben poder enviar su pedido completo vía WhatsApp con formato estructurado.
- **Formato del mensaje**:
  - Título del pedido
  - Lista detallada de productos
  - Cantidades y precios
  - Total del pedido
  - Solicitud de dirección de entrega
  - Tiempo estimado
- **Prioridad**: Alta
- **Estado**: ✅ Implementado

### RF-005: Carrusel de Promociones
- **Descripción**: Mostrar automáticamente las ofertas especiales en formato de carrusel rotativo.
- **Funcionalidades**:
  - Rotación automática cada 5 segundos
  - Navegación manual con botones
  - Indicadores de posición
- **Prioridad**: Media
- **Estado**: ✅ Implementado

### RF-006: Navegación por Secciones
- **Descripción**: Permitir navegación fluida entre diferentes secciones del sitio (Inicio, Menú, Bebidas, Ofertas, Contacto).
- **Prioridad**: Alta
- **Estado**: ✅ Implementado

### RF-007: Contador Visual del Carrito
- **Descripción**: Mostrar en tiempo real la cantidad de productos agregados al carrito en el menú de navegación.
- **Prioridad**: Media
- **Estado**: ✅ Implementado

### RF-008: Notificaciones al Usuario
- **Descripción**: Mostrar alertas visuales cuando se agregan, eliminan o modifican productos.
- **Prioridad**: Media
- **Estado**: ✅ Implementado (SweetAlert2)

## 🔒 Requerimientos No Funcionales

### RNF-001: Usabilidad
- **Interfaz intuitiva**: Navegación clara y botones bien identificados
- **Feedback visual**: Animaciones y efectos hover en elementos interactivos
- **Accesibilidad**: Textos legibles y contraste adecuado
- **Estado**: ✅ Cumplido

### RNF-002: Rendimiento
- **Tiempo de carga**: < 3 segundos en conexiones estándar
- **Imágenes optimizadas**: Formato JPG/JPEG para mejor compresión
- **Animaciones fluidas**: 60 FPS en dispositivos modernos
- **Estado**: ✅ Cumplido

### RNF-003: Compatibilidad
- **Navegadores soportados**:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+
- **Dispositivos**: Desktop, tablets, smartphones
- **Estado**: ✅ Cumplido

### RNF-004: Diseño Responsive
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Adaptación**: Grid flexible y elementos redimensionables
- **Estado**: ✅ Cumplido

### RNF-005: Mantenibilidad
- **Código limpio**: Comentarios y nomenclatura descriptiva
- **Separación de responsabilidades**: HTML, CSS y JS en archivos separados
- **Modularidad**: Funciones reutilizables y bien organizadas
- **Estado**: ✅ Cumplido

### RNF-006: Seguridad
- **Validación de entrada**: Prevención de inyección de código
- **URL WhatsApp**: Codificación correcta con `encodeURIComponent()`
- **Sin almacenamiento sensible**: No se guardan datos personales del cliente
- **Estado**: ✅ Cumplido

### RNF-007: Escalabilidad
- **Fácil adición de productos**: Estructura modular para agregar nuevos items
- **Configuración centralizada**: Variables globales para ajustes rápidos
- **Estado**: ✅ Cumplido

### RNF-008: Estética y Branding
- **Paleta de colores consistente**: Rojo (#d32f2f), Naranja (#ff9800)
- **Tipografía legible**: Arial, sans-serif
- **Diseño moderno**: Gradientes, sombras y efectos visuales
- **Estado**: ✅ Cumplido

## 🎨 Paleta de Colores
```css
/* Colores principales */
--rojo-primario: #d32f2f
--rojo-secundario: #f44336
--naranja-acento: #ff9800
--verde-whatsapp: #25d366
--gris-oscuro: #2c2c2c
--blanco: #ffffff
```

## 📱 Información de Contacto del Negocio

- **Nombre**: Pizza Premium
- **Dirección**: UV4 / Avenida Principal Satélite Norte, Santa Cruz, Bolivia
- **Teléfono**: +591 67741268
- **WhatsApp**: +591 67741268
- **Horarios**:
  - Lunes a Viernes: 17:00 - 23:00
  - Sábado y Domingo: 11:00 - 23:00

## 🛠️ Funciones JavaScript Principales

### `agregarPizza(nombre, precio)`
Agrega un producto al carrito o incrementa su cantidad si ya existe.

### `mostrarCarrito()`
Renderiza el modal del carrito con todos los productos agregados.

### `cambiarCantidad(index, cambio)`
Modifica la cantidad de un producto específico en el carrito.

### `enviarPedidoWhatsApp()`
Genera el mensaje formateado y abre WhatsApp con el pedido completo.

### `initCarousel()` / `moveCarousel(direction)`
Controlan la funcionalidad del carrusel de promociones.

## 🐛 Resolución de Problemas Comunes

### El pedido no se envía a WhatsApp
- Verificar que el número esté en formato correcto: `591XXXXXXXX` (sin +, espacios o guiones)
- Asegurar que WhatsApp esté instalado en el dispositivo

### Las imágenes no se cargan
- Verificar que las rutas de las imágenes sean correctas
- Confirmar que las carpetas `pizzas/`, `bebidas/` y `apartados/` existan

### El carrito no actualiza el contador
- Verificar que el enlace `<a href="#carrito">` exista en el HTML
- Revisar la consola del navegador para errores JavaScript

## 🔄 Actualizaciones Futuras

- [ ] Sistema de autenticación de usuarios
- [ ] Historial de pedidos
- [ ] Seguimiento de delivery en tiempo real
- [ ] Pasarela de pago online
- [ ] Sistema de cupones de descuento
- [ ] Programa de puntos de fidelidad
- [ ] Panel administrativo para gestión de productos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Pizza Premium Development Team**
- Email: @pizzapremium.com
- Ubicación: Santa Cruz, Bolivia

## 🙏 Agradecimientos

- SweetAlert2 por las notificaciones elegantes
- La comunidad de desarrolladores web por las mejores prácticas
- Los clientes de Pizza Premium por su preferencia

---

**© 2025 Pizza Premium. Todos los derechos reservados.**

*Desarrollado con ❤️ en Santa Cruz, Bolivia* 🇧🇴