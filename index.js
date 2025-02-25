import express from "express";
import indexRoutes from "./routes/index.routes";

const app = express();

app.use(indexRoutes);

app.listen(5000);

console.log("hola mundo");