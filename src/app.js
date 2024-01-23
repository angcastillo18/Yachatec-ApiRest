import express from "express";
import morgan from "morgan";

import 'dotenv/config'

import cors from "cors";
import { corsCallback } from "./helpers/index.js"
import compression from "compression";
import cookieParser from "cookie-parser";
//*routes imports
import schoolRoutes from "./routes/schools.routes.js";
import scholarLevelRoutes from "./routes/scholarlevels.routes.js";
import storeRoutes from "./routes/stores.routes.js";
import storeItems from "./routes/storeitems.routes.js";
import teachers from "./routes/teachers.routes.js";
import courses from "./routes/courses.routes.js";
import students from "./routes/students.routes.js";
import authentication from "./routes/authentication.routes.js";

const app = express();

//settings
app.set("appName", "Yachatec API Rest");
app.set("case sensitive routing", true);


//CORS configurations middleware
app.use(cors({
    credentials: true, //Allow credentials (cookies)
    origin: corsCallback()
}));

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(compression());


// routes
app.use('/api', schoolRoutes);
app.use('/api', scholarLevelRoutes);
app.use('/api', storeRoutes);
app.use('/api', storeItems);
app.use('/api', teachers);
app.use('/api', courses);
app.use('/api', students);
app.use('/api', authentication);
app.get('/api', (req, res) => res.json('My API Rest Yachatec running with pipeline !!! 😇😇⚽ ')); // to test in aws.

export default app;