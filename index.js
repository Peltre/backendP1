import express from 'express';
import 'dotenv/config';
import indexRoutes from './routes/index.routes.js';
import itemsRoutes from './routes/items.routes.js';
import loginroutes from './routes/login.routes.js';
import { login } from './controllers/login.controllers.js'; 

// const express = require('express');
const app = express();
// console.log("hola mundo");

app.use(express.json());
app.use(indexRoutes);

app.use(itemsRoutes);
app.use(loginroutes);

app.listen(3000,console.log('http:localhost:3000')); 
