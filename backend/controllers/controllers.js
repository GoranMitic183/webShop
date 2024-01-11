// import Product from '../models/products.js';
const Product = require("../models/products.js");

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        if(products.length === 0){
            return res.status(404).json({status:"error", message:"No data found!"})
        }
        return res.status(200).json({status: "ok", data: products})
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ status: "error", message: "Something went wrong!"})
    }
}