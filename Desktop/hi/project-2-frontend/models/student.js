const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Student extends Model {}

Student.init( 
    {
    name: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      instrument : {
        type: DataTypes.STRING,
        allowNull: false
      },
      musicStyle: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
       }
    },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
    },
        contactInfo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [4]
            }, 
        },
    },
            {
            sequelize:sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student'
    })

 

        
        
module.exports = Student;