const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  id: { type: String, required: true },
  productName: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  boja: { type: String, required: true },
  velicina: { type: [String], required: true },
  kolicina: { type: Number, required: true },
  img: [{ type: String, required: true }],
  rate: [{ type: Array, required: true }],
  // comments: { type: Array, required: true }
},
{collection: "categories"});

const ProductModel = mongoose.model("Category", productsSchema);

module.exports = ProductModel;
