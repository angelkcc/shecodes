import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  url:{
    type:String
    
  }
},{
    timestamps: true
});

const Product = mongoose.models.Product || new mongoose.model("Product", productSchema);

export default Product;
