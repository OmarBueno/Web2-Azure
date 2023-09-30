import express from "express";
import {
    peticionLogin,
    peticionRegister,
    peticionForgot,
    peticonPost,
} from "../controllers/credentialsControlles.mjs";
const credentials_router = express.Router();

//routing
credentials_router.get("/login", peticionLogin);

credentials_router.get("/register", peticionRegister);

credentials_router.post("/registerPost", peticonPost);

credentials_router.get("/forgot", peticionForgot);

export default credentials_router;
