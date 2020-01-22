'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductoSede = sequelize.define('ProductoSede', {

    precio: DataTypes.DOUBLE,
    ProductoId: DataTypes.INTEGER,
    SedeId: DataTypes.INTEGER,

  }, {schema: 'public'});
  ProductoSede.associate = function(models) {

    ProductoSede.belongsTo(models.Producto);
    ProductoSede.belongsTo(models.Sede);

  };
  return ProductoSede;
};