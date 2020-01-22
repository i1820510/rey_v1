'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pago = sequelize.define('Pago', {

    importe: DataTypes.DOUBLE,
    metodo: DataTypes.STRING,
    estado: DataTypes.STRING,
    idPedido: DataTypes.INTEGER,
    
  }, {schema: 'public'});
  Pago.associate = function(models) {
    Pago.belongsTo(models.Pedido);
  };
  return Pago;
};