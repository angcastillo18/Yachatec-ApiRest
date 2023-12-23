import { Router } from "express";

const UserRoutes = Router();

UserRoutes.get("/users", (req, res) => {
    res.send("Hello World!");
});

export default UserRoutes