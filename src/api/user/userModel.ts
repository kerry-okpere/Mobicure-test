import { connection } from './../../shared/db';
import Sequelize from "sequelize";

const Model = Sequelize.Model;

export class User extends Model {}
    User.init({
        firstName: {
            type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {
    sequelize : connection,
    modelName: 'user'
});

User.sync({ force: true })
.then( () => {
    console.log("Table has been created")
})
.catch(err => {
    throw err;
});
