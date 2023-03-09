const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    'reactapp',
    'root',
    '760517Gg',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const LangQuestions = sequelize.define("langquestions", {
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },

    answers: {
        type: DataTypes.JSON,
        allowNull: false
    },

});



sequelize.sync().then(() => {
    console.log('Answers table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});


LangQuestions.findAll().then(res => {
    console.log(res)
}).catch((error) => {
    console.error('Failed to retrieve data : ', error);
});




module.exports = LangQuestions;