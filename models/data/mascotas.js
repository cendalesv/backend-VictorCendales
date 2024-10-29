import "dotenv/config.js"
import "../../config/database.js"
import Mascota from "../Mascota.js"

const mascotas = [
    {
      codigo: "M001",
      nombre: "Max",
      categoria: "Perro",
      descripcion: "Perro labrador amigable y energético, ideal para familias.",
      edad: 3,
      peso: 25.5,
      fechaIngreso: "2024-05-10",
      enAdopcion: true,
      vacunado: true,
      esterilizado: true,
      disponible: true
    },
    {
      codigo: "M002",
      nombre: "Luna",
      categoria: "Gato",
      descripcion: "Gata siamés tranquila y cariñosa, le gusta estar en interiores.",
      edad: 2,
      peso: 4.2,
      fechaIngreso: "2024-04-15",
      enAdopcion: true,
      vacunado: true,
      esterilizado: true,
      disponible: true
    },
    {
      codigo: "M003",
      nombre: "Rocky",
      categoria: "Perro",
      descripcion: "Perro pastor alemán, ideal como perro guardián y muy leal.",
      edad: 5,
      peso: 30.8,
      fechaIngreso: "2024-03-20",
      enAdopcion: false,
      vacunado: true,
      esterilizado: false,
      disponible: false
    },
    {
      codigo: "M004",
      nombre: "Nala",
      categoria: "Gato",
      descripcion: "Gata persa, elegante y juguetona, muy sociable.",
      edad: 1,
      peso: 3.5,
      fechaIngreso: "2024-02-18",
      enAdopcion: true,
      vacunado: true,
      esterilizado: false,
      disponible: true
    },
    {
      codigo: "M005",
      nombre: "Buddy",
      categoria: "Perro",
      descripcion: "Perro bulldog inglés, calmado y perfecto para vivir en apartamentos.",
      edad: 4,
      peso: 22.0,
      fechaIngreso: "2024-06-01",
      enAdopcion: false,
      vacunado: true,
      esterilizado: true,
      disponible: false
    },
    {
      codigo: "M006",
      nombre: "Simba",
      categoria: "Gato",
      descripcion: "Gato común europeo, curioso y ágil, le gusta explorar.",
      edad: 3,
      peso: 4.8,
      fechaIngreso: "2024-01-30",
      enAdopcion: true,
      vacunado: false,
      esterilizado: true,
      disponible: true
    },
    {
      codigo: "M007",
      nombre: "Bella",
      categoria: "Perro",
      descripcion: "Perro golden retriever, muy afectuosa y buena con niños.",
      edad: 2,
      peso: 28.0,
      fechaIngreso: "2024-03-10",
      enAdopcion: true,
      vacunado: true,
      esterilizado: true,
      disponible: true
    },
    {
      codigo: "M008",
      nombre: "Coco",
      categoria: "Conejo",
      descripcion: "Conejo mini rex, tierno y fácil de cuidar, ideal para apartamentos.",
      edad: 1,
      peso: 1.2,
      fechaIngreso: "2024-04-22",
      enAdopcion: true,
      vacunado: false,
      esterilizado: false,
      disponible: true
    },
    {
      codigo: "M009",
      nombre: "Kiara",
      categoria: "Gato",
      descripcion: "Gata bengal, muy activa y con un pelaje espectacular.",
      edad: 4,
      peso: 5.1,
      fechaIngreso: "2024-05-05",
      enAdopcion: false,
      vacunado: true,
      esterilizado: true,
      disponible: false
    },
    {
      codigo: "M010",
      nombre: "Charlie",
      categoria: "Perro",
      descripcion: "Perro beagle, curioso y juguetón, le gusta el aire libre.",
      edad: 3,
      peso: 12.5,
      fechaIngreso: "2024-01-18",
      enAdopcion: true,
      vacunado: true,
      esterilizado: false,
      disponible: true
    }
  ];
  




Mascota.insertMany(mascotas)