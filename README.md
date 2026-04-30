# 🛒 Chutazoscraft 2.0 - Web Store

## 📖 Descripción de la Aplicación
La aplicación es una plataforma web e-commerce diseñada para el servidor de Minecraft **Chutazoscraft 2.0**. Su objetivo principal es permitir a los jugadores adquirir ítems virtuales (armas, cultivos, rangos) y gestionar servicios financieros dentro del juego (como solicitar préstamos bancarios) utilizando una interfaz web externa intuitiva y moderna.

## 🎭 Actores del Sistema y sus Funciones

### 1. Usuario (Jugador)
Es el cliente final. Sus interacciones principales son:
* Acceder al sistema mediante un inicio de sesión.
* Visualizar el catálogo completo de productos disponibles.
* Comprar ítems con dinero real para que se entreguen en su cuenta de Minecraft.
* Utilizar el sistema financiero para solicitar préstamos (cumpliendo la regla de negocio del 50% de garantía).

### 2. Administrador
Es el encargado de la tienda y la economía. Sus permisos incluyen:
* Gestionar el inventario (agregar o quitar productos del catálogo JSON).
* Visualizar las estadísticas de ventas del servidor.
* Aprobar o rechazar transacciones financieras de alto riesgo.

### 3. El Sistema Mismo
Actúa como el motor lógico automatizado. Se encarga de:
* Calcular automáticamente las garantías necesarias para los préstamos.
* Consumir y validar los datos desde el archivo `productos.json` para renderizarlos en el Front-end.
* Simular la conexión para la entrega automática de los ítems en el juego tras una compra exitosa.