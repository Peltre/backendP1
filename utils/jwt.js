import jwt from "jsonwebtoken";
import { Router } from "express";

export const validateJWT = Router();

validateJWT.use((req, res, next) => {
    var token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ msg: "se requiere un token" });
        return;
    }
    if (token.startsWith("Bearer")) {
        token = token.split(" ");
    }
    

})