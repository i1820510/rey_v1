'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {

    dni: { type: DataTypes.STRING(12), unique: true },
    nombres: DataTypes.STRING(50),
    apPaterno: DataTypes.STRING(50),
    apMaterno: DataTypes.STRING(50),
    usuario: DataTypes.STRING(50),
    contrasenia: DataTypes.STRING,
    direccion: DataTypes.STRING(120),
    telefono: DataTypes.STRING(120),
    correo: { type: DataTypes.STRING(60), unique: true },
    
  }, {schema: 'public'});
  Cliente.associate = function(models) {
    Cliente.hasMany(models.Pedido, {
      foreignKey: 'ClienteId',
    });
  };
  return Cliente;
};