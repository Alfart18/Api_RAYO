const faker = require("faker")
const boom = require("@hapi/boom");

class AccesorioService{
  constructor(){
    this.accesorios=[{
      id: faker.datatype.uuid(),
      nombre: "Reproductor",
      imagen: "https://cdn.autoteiledirekt.de/thumb?id=15750846&m=0&n=0&lng=es&rev=94077826",
      precio: 2100
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Tapabucos",
      imagen: "https://media.autoteiledirekt.de/360_photos/16368508/preview.jpg",
    precio: 2680
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Cubre Asientos",
      imagen: "https://cdn.autoteiledirekt.de/thumb?id=13626718&m=0&n=0&lng=es&rev=94077826",
      precio: 280
    }
  ]
    //this.GenerarDatos();
  }

  GenerarDatos() {
    const size = 10;
    for (let index = 0; index < size; index++) {
      this.accesorios.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price()),
        imagen: faker.image.imageUrl()
      });
    }
  }

  create(accesorio) {
    accesorio.id = faker.datatype.uuid();
    this.accesorios.push(accesorio);
  }

  update(id, accesorio) {
    const posicion = this.accesorios.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Accesorio no encontrado");
    }
    this.accesorios[posicion] = accesorio;
    return this.accesorios[posicion];
  }

  delete(id) {
    const posicion = this.accesorios.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Accesorio no encontrado");
    }
    this.accesorios.splice(posicion, 1);
    return {
      mensaje: "Accesorio Eliminado",
      id
    };
  }

  findAll() {
    return this.accesorios;
  }

  findBy(id){
    const accesorio = this.accesorios.find(item =>item.id == id);
    if (!accesorio){
      throw boom.notFound("Accesorio no encontrado");
    }
    if (!accesorio.id){
      throw boom.forbidden("Accesorio no encontrado");
    }
    return accesorio;
  }
}

module.exports = AccesorioService;
