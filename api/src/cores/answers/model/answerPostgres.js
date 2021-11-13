const {DataTypes} = require("sequelize")

module.exports = (sequelize)=>{
    return sequelize.define("answers",{
        answerContent:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    })
}