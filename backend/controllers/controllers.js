import Products from '../models/products';
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        if(products.length === 0){
            return res.json({status:"error", message:"Can't find any data!"})
        }
        return res.status(200).json({status: "ok", data: products})
    } catch (error) {
        res.status(404).json({ message: "Something went wrong!"})
    }
}