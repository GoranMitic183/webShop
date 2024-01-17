const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  productName: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  boja: { type: String, required: true },
  velicina: { type: [String], required: true },
  kolicina: { type: Number, required: true },
  img: [{ type: String, required: true }],
  rate: { type: Number, required: true },
},
{collection: "categories"});

// const categorySchema = new Schema({
//   men: [productsSchema],
//   women: [productsSchema],
//   accessories: [productsSchema],
// },
// {collection: "categories"}
// );

const ProductModel = mongoose.model("Category", productsSchema);

module.exports = ProductModel;
