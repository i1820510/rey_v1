'use strict';
module.exports = (sequelize, DataTypes) => {
  const Piso = sequelize.define('Piso', {

    numeroPiso: DataTypes.INTEGER,
    SedeId: DataTypes.INTEGER,

  }, {schema: 'public'});
  Piso.associate = function(models) {  

    Piso.hasMany(models.Mesa, {
      foreignKey: 'PisoId',
    });
    Piso.belongsTo(models.Sede);
    
  };
  return Piso;
};