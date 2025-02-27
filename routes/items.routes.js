import { Router } from "express";
import { getItems } from '../controllers/items.controllers.js';
import { getItem } from '../controllers/items.controllers.js';
import { postItem } from '../controllers/items.controllers.js';
import { putItem } from '../controllers/items.controllers.js';
import { deleteItem } from '../controllers/items.controllers.js';

const router = Router();

router.get('/items', getItems);
router.get('/items/:id', getItem);
router.post('/items', postItem);
router.put('/items/:id', putItem);
router.delete('/items/:id', deleteItem);


export default router;