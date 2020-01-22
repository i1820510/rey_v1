'use strict';
module.exports = (sequelize, DataTypes) => {
  const productoPedido = sequelize.define('ProductoPedido', {

    cantidad: DataTypes.INTEGER,
    subTotal: DataTypes.DOUBLE,
    ProductoId: DataTypes.INTEGER,
    PedidoId: DataTypes.INTEGER,

  }, {schema: 'public'});
  productoPedido.associate = function(models) {

    productoPedido.belongsTo(models.Producto);
    productoPedido.belongsTo(models.Pedido);

  };
  return productoPedido;
};