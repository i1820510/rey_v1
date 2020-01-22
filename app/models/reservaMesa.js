'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservaMesa = sequelize.define('ReservaMesa', {

    ReservaId: DataTypes.INTEGER,
    MesaId: DataTypes.INTEGER,

  }, {schema: 'public'});
  reservaMesa.associate = function(models) {

    reservaMesa.belongsTo(models.Mesa);
    reservaMesa.belongsTo(models.Reserva);

  };
  return reservaMesa;
};