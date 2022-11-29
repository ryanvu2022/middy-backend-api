import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name: String,
   price: Number,
   image: String,
   inStock: Boolean,
   fastDelivery: Boolean,
   ratings: Number,
   description: String,
   numberOfRatedPeople: Number,
})

const Product = mongoose.model("Product", productSchema);

export const getProducts = async (req, res) => {
   try {
      const products = await Product.find();
      res.status(200).json(products);
   } catch (error) {
      res.status(404).json({message: error});
   }
}

export const createProduct = async (req, res) => {
   const newProduct = new Product(req.body);
   try {
      await newProduct.save();
      res.status(201).json(newProduct);
   } catch (error) {
      res.status(409).json({message: error});
   }
}

export const deleteProduct = async (req, res) => {
   const { id: _id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No product with that id.");
   }
   await Product.findByIdAndRemove(_id);
   res.json({ message: "Product deleted successfully" });
}

