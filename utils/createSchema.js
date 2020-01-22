// obtener modelos
const db1 = require('../app/models');

async function createSchema() {
  console.log('Iniciando la creacion de tablas');
  console.log('-----------------------------');
  try {
    // Definicion de modelos en orden de cracion
    await db1.Categoria.sync({force: true});
    await db1.Cliente.sync({force: true});
    await db1.Sede.sync({force: true});
    await db1.Producto.sync({force: true});
    await db1.ProductoSede.sync({force: true});
    await db1.Piso.sync({force: true});
    await db1.Mesa.sync({force: true});
    await db1.Pedido.sync({force: true});
    await db1.Reserva.sync({force: true});
    await db1.Entrega.sync({force: true});
    await db1.ReservaMesa.sync({force: true});
    await db1.ProductoPedido.sync({force: true});
    await db1.Pago.sync({force: true});


    console.log('-----------------------------');
    console.log('Creacion de tablas finalizado');
  } catch(err) {
    console.log('ERROR: ', err);
  }

}
// ejecucion de la funcion
createSchema();