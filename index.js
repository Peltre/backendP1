import express from 'express';
import 'dotenv/config';
import cors from "cors";
import indexRoutes from './routes/index.routes.js';
import itemsRoutes from './routes/items.routes.js';
import loginroutes from './routes/login.routes.js';
import morgan from "morgan";
import { login } from './controllers/login.controllers.js'; 
import { connectDB } from './utils/mongodb.js';

// const express = require('express');
const app = express();
// console.log("hola mundo");

connectDB();

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(indexRoutes);

app.use(itemsRoutes);
app.use(loginroutes);

app.listen(3000,console.log('http:localhost:3000')); 
