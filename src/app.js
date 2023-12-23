import express from "express";
import morgan from "morgan";

const app = express();

//settings
app.set("appName", "Yachatec API Rest");
app.set("port", 3000);
app.set("case sensitive routing", true);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

export default app;