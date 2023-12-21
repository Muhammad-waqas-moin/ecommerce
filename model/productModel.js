const mongoose = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "plz provides product name "],
  },
  description: {
    type: String,
    required: [true, "plz provides product description"],
  },
  category: {
    type: String,
    required: [true, "plz Enter your product category"],
  },
  originalPrice: {
    tyep: Number,
    required: [true, "please enter your original price"],
  },
  discountedPrice: {
    type: Number,
  },
  stock: {
    type: Number,
    required: [true, "please enter your stock number"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      type: String,
      required: true,
    },
  ],
  reviews: [
    {
      name: {
        type: Object,
      },
      comment: {
        type: String,
      },
      productID: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: new Date.now(),
      },
    },
  ],
  rating: {
    type: Number,
  },
  shopId: {
    type: Object,
    required: true,
  },
  soldOut: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Product", ProductSchema);
