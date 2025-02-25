import express from "express";
import indexRoutes from "./routes/index.routes";
import ItemRoutes from "/routes/items.routes.js"

const app = express();

app.use(indexRoutes);
app.use(ItemRoutes);

app.listen(5000);

console.log("hola mundo");