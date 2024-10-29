import "dotenv/config.js"
import "../../config/database.js"
import Producto from "../Producto.js"

const productos = [
    {
      codigo: "P001",
      nombre: "Camiseta Deportiva",
      categoria: "Ropa",
      descripcion: "Camiseta deportiva de alta calidad, ideal para entrenar.",
      precio: 29.99,
      stock: 50,
      fechaIngreso: "2024-01-15",
      enOferta: true,
      porcentajeDescuento: "10%",
      disponible: true
    },
    {
      codigo: "P002",
      nombre: "Auriculares Bluetooth",
      categoria: "Electrónica",
      descripcion: "Auriculares inalámbricos con cancelación de ruido.",
      precio: 99.99,
      stock: 30,
      fechaIngreso: "2024-02-20",
      enOferta: false,
      porcentajeDescuento: "0%",
      disponible: true
    },
    {
      codigo: "P003",
      nombre: "Zapatillas Running",
      categoria: "Calzado",
      descripcion: "Zapatillas ligeras para correr, con suela antideslizante.",
      precio: 75.00,
      stock: 20,
      fechaIngreso: "2024-03-01",
      enOferta: true,
      porcentajeDescuento: "15%",
      disponible: true
    },
    {
      codigo: "P004",
      nombre: "Laptop Gamer",
      categoria: "Tecnología",
      descripcion: "Laptop de alto rendimiento para gaming con tarjeta gráfica dedicada.",
      precio: 1500.00,
      stock: 5,
      fechaIngreso: "2023-11-30",
      enOferta: true,
      porcentajeDescuento: "5%",
      disponible: true
    },
    {
      codigo: "P005",
      nombre: "Mochila Impermeable",
      categoria: "Accesorios",
      descripcion: "Mochila resistente al agua con compartimientos múltiples.",
      precio: 45.50,
      stock: 100,
      fechaIngreso: "2024-04-10",
      enOferta: false,
      porcentajeDescuento: "0%",
      disponible: true
    },
    {
      codigo: "P006",
      nombre: "Smartwatch",
      categoria: "Tecnología",
      descripcion: "Reloj inteligente con monitoreo de salud y GPS integrado.",
      precio: 199.99,
      stock: 15,
      fechaIngreso: "2024-01-05",
      enOferta: true,
      porcentajeDescuento: "20%",
      disponible: true
    },
    {
      codigo: "P007",
      nombre: "Bicicleta de Montaña",
      categoria: "Deportes",
      descripcion: "Bicicleta de montaña con suspensión y frenos hidráulicos.",
      precio: 499.00,
      stock: 10,
      fechaIngreso: "2024-03-12",
      enOferta: false,
      porcentajeDescuento: "0%",
      disponible: true
    },
    {
      codigo: "P008",
      nombre: "Silla Ergonomica",
      categoria: "Muebles",
      descripcion: "Silla ergonómica ajustable con soporte lumbar.",
      precio: 120.00,
      stock: 25,
      fechaIngreso: "2024-02-01",
      enOferta: true,
      porcentajeDescuento: "10%",
      disponible: true
    },
    {
      codigo: "P009",
      nombre: "Monitor 4K",
      categoria: "Electrónica",
      descripcion: "Monitor de 27 pulgadas con resolución 4K UHD.",
      precio: 350.00,
      stock: 8,
      fechaIngreso: "2024-02-15",
      enOferta: false,
      porcentajeDescuento: "0%",
      disponible: true
    },
    {
      codigo: "P010",
      nombre: "Patinete Eléctrico",
      categoria: "Transporte",
      descripcion: "Patinete eléctrico plegable con batería de larga duración.",
      precio: 399.99,
      stock: 12,
      fechaIngreso: "2024-01-25",
      enOferta: true,
      porcentajeDescuento: "25%",
      disponible: true
    }
  ];
  


Producto.insertMany(productos)