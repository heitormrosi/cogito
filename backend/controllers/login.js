import express from "express";

import { loginPage } from "../views/login.js";

const router = express.Router();

router.get("/", (_, res) => {
    res.send(loginPage());
});

export default router;