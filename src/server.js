import app from "./app.js";
import { sequelize } from "./database/db.js";
// MODELS
// import './models/Achievement.js';
// import './models/AchievementStudent.js';
// import './models/Challenge.js';
// import './models/Chapter.js';
// import './models/Course.js';
// import './models/Lesson.js';
// import './models/Question.js';
// import './models/ScholarLevel.js';
// import './models/School.js';
// import './models/Store.js';
// import './models/StoreItem.js';
// import './models/Student.js';
// import './models/StudentCourse.js';
// import './models/Teacher.js';

//routes
// import UserRoutes from "./routes/users.js";

// app.use('/api', routerProgramation);
// //routes
// app.use(UserRoutes)


async function main() {

    try {
        // await sequelize.authenticate();
        // await sequelize.sync({ force: true }); //* borra la tabla y la vuelve a CREAR
        // console.log("All models were synchronized successfully.");
        //¨* sin nada, soo la crea si es que no existe,
        app.listen(app.get("port"), () => {
            console.log(`Server ${app.get("appName")} listening on port ${app.get("port")}`);
        })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()