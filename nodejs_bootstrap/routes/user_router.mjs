import express from "express";
import { peticionsMain } from "../controllers/mainController.mjs";
const router = express.Router();

//routing
router.get("/",peticionsMain);

export default router;
