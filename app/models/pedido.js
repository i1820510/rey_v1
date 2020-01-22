'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {

    fechaRegistro: DataTypes.DATE,
    tipo: DataTypes.STRING,
    detalle: DataTypes.STRING,
    estado: DataTypes.STRING,
    ClienteId: DataTypes.INTEGER,

  }, {schema: 'public'});
  Pedido.associate = function(models) {
      Pedido.hasMany(models.ProductoPedido, {
        foreignKey: 'PedidoId',
      });
      Pedido.hasMany(models.Pago, {
        foreignKey: 'PedidoId',
      });
      Pedido.belongsTo(models.Cliente);
      Pedido.hasOne(models.Entrega);
      Pedido.hasOne(models.Reserva);
      
  };
  return Pedido;
};