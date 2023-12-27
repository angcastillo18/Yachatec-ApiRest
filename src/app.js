import express from "express";
import morgan from "morgan";

import schoolRoutes from "./routes/schools.routes.js";

const app = express();

//settings
app.set("appName", "Yachatec API Rest");
app.set("port", 3000);
app.set("case sensitive routing", true);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use('/api', schoolRoutes);


export default app;