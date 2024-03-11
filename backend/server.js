const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "laksndsfoihLKHDSGGNOI@LK#J2o32jrnwesdajsnkvsd";

let Product = require("./models/products");
let ProductModel = require("./models/categories");
let User = require("./models/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3002;
const mongodbUri =
  process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/products";

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect(mongodbUri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/", async (req, res) => {
  try {
    const response = await Product.find({});
    if (response.length === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "No data found!" });
    }
    return res.status(200).json({ status: "ok", data: response });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ status: "error", message: "Something went wrong!" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const response = await ProductModel.find({});
    if (response.length === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "No data found!" });
    }
    return res.status(200).json({ status: "ok", data: response });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ status: "error", message: "Something went wrong!" });
  }
});

app.get("/categories/:categorie/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const response = await ProductModel.findById(id);
    if (response.length === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "No data found!" });
    }
    return res.status(200).json({ status: "ok", data: response });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ status: "error", message: "Something went wrong!" });
  }
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username) {
    return res.json({ status: "error", error: "Invalid username" });
  }
  if (!email) {
    return res.json({ status: "error", error: "Invalid email" });
  }
  if (password.length < 8) {
    return res.json({ status: "error", error: "Invalid password" });
  }

  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    const hpassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, hpassword, email });
    console.log("User is created: ", user);

    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ user: user, token: token, role: user.role });
  } catch (error) {
    res.status(500).json({ status: "error", error: "Failed to register!" });
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.hpassword);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
});

app.delete("/removeUser", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User removed successfully" });
  } catch (error) {
    console.error("Error removing user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/rating/:id", async (req, res) => {
  const { id } = req.params;
  const { text, stars, name, categoryID } = req.body;

  console.log(categoryID);

  let date = new Date();
  let month = date.getMonth() + 1; 
  let day = date.getDate();
  let year = date.getFullYear();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  let formattedDate = day + '/' + month + '/' + year;

  try {
    const product = await Product.findById(id);
    console.log(product);
    if (!product) {
      const categoryModel = await ProductModel.findById(categoryID);
      console.log(categoryModel);

      if (!categoryModel) {
        return res.status(404).json({ message: "Category not found" });
      }
      
      categoryModel[1].forEach(product => {
        if (Object.values(product)._id.toString() === id) {
          Object.values(product).rate.push({ name, stars, date: formattedDate, comments: text });
        }
      });

      // Save the updated ProductModel
      const updatedProductModel = await categoryModel.save();
      return res.status(200).json({ message: "Success", item: updatedProductModel });
    } else {
      // Update the rating of the product directly
      const updatedProduct = await Product.findByIdAndUpdate(id, {
        $push: { rate: { name, stars, date: formattedDate, comments: text } }
      });

      if (updatedProduct) {
        return res.status(200).json({ message: "Success", item: updatedProduct });
      }
    }

    return res.status(500).json({ message: "Error updating product" });
  } catch (error) {
    console.error("Error updating rating:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
