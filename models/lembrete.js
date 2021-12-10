const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lembrete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Lembrete.init({
    nome: DataTypes.STRING,
    rua: DataTypes.STRING,
    bairro: DataTypes.STRING,
    ref: DataTypes.STRING,
    horarioChegada: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Lembrete',
  });
  return Lembrete;
};
