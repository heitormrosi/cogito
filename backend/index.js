import express from "express";

import db from "./db.js";

import "./passport.js";

import loginController from "./controllers/login.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/login", loginController);

app.get("/", (_, res) => {
    db("exemplo").select().then(data => {
        res.json(data);
    });
});

app.listen(8000, () => {
    console.log("> [SERVER - INFO] Ouvindo em http://localhost:8000/");
});
