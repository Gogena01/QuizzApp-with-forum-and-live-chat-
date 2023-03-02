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

const Answer = sequelize.define("answers", {
    answer: {
        type: DataTypes.JSON,
        allowNull: false
    },

    questionId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    hint: {
        type: DataTypes.STRING,
        allowNull: true
    }

});



sequelize.sync().then(() => {
    console.log('Answers table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});


Answer.findAll().then(res => {
    console.log(res)
}).catch((error) => {
    console.error('Failed to retrieve data : ', error);
});




module.exports = Answer;