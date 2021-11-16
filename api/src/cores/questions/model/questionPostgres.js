const { DataTypes } = require("sequelize")

module.exports=(sequelize)=>{
    return sequelize.define("questions",{
        questionName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        questionCategory:{
            type:DataTypes.ENUM("Computer_Science","History","General_Knowledge"),
            allowNull:false
        },
        questionDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    })
}