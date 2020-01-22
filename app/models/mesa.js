'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mesa = sequelize.define('Mesa', {

    numeroMesa: DataTypes.STRING(50),
    descripcion: DataTypes.STRING,

  }, {schema: 'public'});
  Mesa.associate = function(models) {
    Mesa.belongsTo(models.Piso);
    Mesa.hasMany(models.ReservaMesa, {
      foreignKey: 'MesaId',
    });
  };
  return Mesa;
};