'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entrega = sequelize.define('Entrega', {

    cantidadPersonas: DataTypes.INTEGER,
    direccionEntrega: DataTypes.STRING(120),
    fechaEntrega: DataTypes.DATE,
    horaEntrega: DataTypes.DATE,
    SedeId: DataTypes.INTEGER,

  }, {schema: 'public'});
  Entrega.associate = function(models) {

    Entrega.belongsTo(models.Sede);
    Entrega.belongsTo(models.Pedido);
    
  };
  return Entrega;
};