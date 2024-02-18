const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        productName: { type: String, required: true },
        type: { type: String, required: true },
        weight: { type: Number, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true},
        img: { type: Array, required: true },
        rate: { type: Array, required: true },
        // comments: { type: Array, required: true }
    },
    { collection: "supplements"}
);

const Product = mongoose.model("productSchema", productSchema);

module.exports = Product;