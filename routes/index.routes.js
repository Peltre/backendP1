import { Router } from "express";
import { getIndex, getPing } from "../controllers/index.controllers";

const router = Router();

router.get("/", (req, res) => res.send("Hola mundo desde API"));
router.get("/ping", (req, res) => res.send("PONG"));

export default router;