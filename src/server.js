import app from "./app.js";
import { sequelize } from "./database/db.js";

//*INIT MODELS CREATION
// import './models/Achievement.js';
// import './models/AchievementStudent.js';
// import './models/Challenge.js';
// import './models/Course.js';
// import './models/Question.js';
// import './models/ScholarLevel.js';
// import './models/School.js';
// import './models/Store.js';
// import './models/StoreItem.js';
// import './models/Student.js';
// import './models/StudentCourse.js';
// import './models/Teacher.js';
// import { Chapter } from './models/Chapter.js';
// import { Question } from './models/Question.js';
// import { Course } from './models/Course.js';
// import { StudentCourse } from "./models/StudentCourse.js";

async function main() {

    try {
        await sequelize.authenticate();

        //* drop tables
        // Chapter.drop({}).then(() => {
        //     console.log('Table deleted successfully');
        // }).catch((error) => {
        //     console.error('Error deleting table', error);
        // });
        //* alter tables
        // await StudentCourse.sync({ alter: true })
        //* force , drop and create again the table
        // await Question.sync({ force: true })

        // await sequelize.sync({ force: true }); //! affect all tables
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