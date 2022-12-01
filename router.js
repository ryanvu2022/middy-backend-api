import express from "express";
import { getProducts, createProduct, deleteProduct, getSingleProduct } from "./model.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;