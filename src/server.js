import app from "./app.js";
import { sequelize } from "./database/db.js";
// MODELS
import './models/Student.js';

//routes
import UserRoutes from "./routes/users.js";

//routes
app.use(UserRoutes)


async function main() {

    try {
        // await sequelize.authenticate();
        await sequelize.sync({force: true}); //* borra la tabla y la vuelve a CREAR
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