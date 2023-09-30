import express from "express";
import user_router from "./routes/user_router.mjs";
import credentials_router from "./routes/credentials_router.mjs";
import hotel_router from "./routes/hotel_router.mjs";
import db from "./db/config/db.mjs";

const app = express();

//pug
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routing

app.use("/", user_router);
app.use("/cred", credentials_router);
app.use("/hotel", hotel_router);

const port = process.env.PORT || 2800;

app.listen(port, () => {
    console.log(`Esperando coneccion al puerto${port}`);
});

try {
    await db.authenticate();
    await db.sync();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
