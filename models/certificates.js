'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Certificates.init({
    sname: DataTypes.STRING,
    cName: DataTypes.STRING,
    sid: DataTypes.INTEGER,
    cid: DataTypes.INTEGER,
    isVerified: DataTypes.BOOLEAN,
    score: DataTypes.INTEGER,
    doi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Certificates',
  });
  return Certificates;
};