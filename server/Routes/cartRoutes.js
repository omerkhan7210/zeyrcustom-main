import express from 'express';
import { DeleteCartItem, GenerateUUID, GetCartItems, InsertCartItems } from "../Controllers/cartController.js";

const router = express.Router();

router.get('/',GenerateUUID);
router.post('/cart/add', InsertCartItems);
router.get('/cart/:userId',GetCartItems);
router.delete('/cart/delete/:id/:uuid',DeleteCartItem);


export default router;