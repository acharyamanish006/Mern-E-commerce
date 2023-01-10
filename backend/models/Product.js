const mongoose = require("mongoose");

const product_Schema = new mongoose.Schema({
  name: {
    type: String,
    Required: [true, "plz enter the product name"],
  },
  img: {
    public_id: String,
    url: String,
  },
  price: {
    type: Number,
    Required: [true, "plz enter the product price"],
  },
  disPrice: {
    type: Number,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", product_Schema);
