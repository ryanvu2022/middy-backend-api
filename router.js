import express from "express";
import { getProducts, createProduct, deleteProduct } from "./model.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;