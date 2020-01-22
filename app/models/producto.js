'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {

    nombre: DataTypes.STRING(50),
    imagen: DataTypes.STRING(50),
    descripcion: DataTypes.STRING,
    CategoriaId: DataTypes.INTEGER,

  }, {schema: 'public'});
  
  Producto.associate = function(models) {
    Producto.hasMany(models.ProductoPedido, {
      foreignKey: 'ProductoId',
    });
    Producto.hasMany(models.ProductoSede, {
        foreignKey: 'ProductoId',
      });
    Producto.belongsTo(models.Categoria);
  };
  return Producto;
};