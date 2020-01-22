module.exports = (sequelize, DataTypes) => {
    const Sede = sequelize.define('Sede', {
      nombre: DataTypes.STRING(50),
      direccion: DataTypes.STRING(120),
      telefono: DataTypes.STRING(120),
    }, {schema: 'public'});
    Sede.associate = function(models) {
      Sede.hasMany(models.Piso, {
        foreignKey: 'SedeId',
      });
      Sede.hasMany(models.Reserva, {
        foreignKey: 'SedeId',
      });
      Sede.hasMany(models.ProductoSede, {
        foreignKey: 'SedeId',
      });
    };
    return Sede;
  };