import { Router } from "express";
import { getItems } from '../controllers/items2.controllers.js';
import { getItem } from '../controllers/items2.controllers.js';
import { postItem } from '../controllers/items2.controllers.js';
import { putItem } from '../controllers/items2.controllers.js';
import { deleteItem } from '../controllers/items2.controllers.js';

const router = Router();

router.get('/items2', getItems);
router.get('/items2/:id', getItem);
router.post('/items2', postItem);
router.put('/items2/:id', putItem);
router.delete('/items2/:id', deleteItem);


export default router;