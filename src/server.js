import app from "./app.js";
import { sequelize } from "./database/db.js";
// MODELS
// import './models/Achievement.js';
// import './models/AchievementStudent.js';
// import './models/Challenge.js';
// import './models/Chapter.js';
// import { Course } from './models/Course.js';
// import './models/Lesson.js';
// import './models/Question.js';
// import {ScholarLevel} from'./models/ScholarLevel.js';
// import './models/School.js';
// import './models/Store.js';
// import './models/StoreItem.js';
// import './models/Student.js';
// import {StudentCourse} from './models/StudentCourse.js';
// import {Teacher} from './models/Teacher.js';


async function main() {

    try {
        await sequelize.authenticate();

        // await Course.sync({ force: true})

        // await ScholarLevel.sync({ alter: true })
        // await Teacher.sync({ alter: true })
        // await StudentCourse.sync({ force: true})
        // await sequelize.sync({ alter: true });
        // await sequelize.sync({ force: true }); //* borra la tabla y la vuelve a CREAR
        // console.log("All models were synchronized successfully.");
        //¨* sin nada, soo la crea si es que no existe,
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server ${app.get("appName")} listening on port ${process.env.PORT || 3000}`);
        })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()