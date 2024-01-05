const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        productName: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true},
        img: { type: String, required: true },
        rating: { type:Number, required: true },
    },
    { collection: "products"}
);

const Product = mongoose.model("productSchema", productSchema);

module.exports = Product;