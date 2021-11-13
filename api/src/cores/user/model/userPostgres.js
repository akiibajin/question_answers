const { DataTypes } = require("sequelize")

module.exports = (sequelize)=>{
    return sequelize.define("users",{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
}