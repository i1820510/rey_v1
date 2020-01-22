'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {

    nombre: DataTypes.STRING(50),
    descripcion: DataTypes.STRING,
    
  }, {schema: 'public'});
  Categoria.associate = function(models) {

    Categoria.hasMany(models.Producto, {
      foreignKey: 'CategoriaId',
    });
  };
  return Categoria;
};