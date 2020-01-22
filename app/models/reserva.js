'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reserva = sequelize.define('Reserva', {

    cantidadPersonas: DataTypes.INTEGER,
    fechaReserva: DataTypes.DATE,
    horaReserva: DataTypes.DATE,
    SedeId: DataTypes.INTEGER,

  }, {schema: 'public'});
  Reserva.associate = function(models) {

    Reserva.belongsTo(models.Sede);
    Reserva.hasMany(models.ReservaMesa, {
        foreignKey: 'ReservaId',
      });
     Reserva.belongsTo(models.Pedido);

  };
  return Reserva;
};