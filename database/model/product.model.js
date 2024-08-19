import mongoose, { Types } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: [true, "name is already taken"],
      trim: true,
      required: true,
      minlength: [3, "too short"],
    },
    description: {
      type: String,
      trim: true,
      required: true,
      minlength: [3, "too short"],
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
    },
    imageCover: string,
    images: [String],
    price: { type: number, required: true, min: 1 },
    priceAfterDiscount: { type: number, min: 1 },
    sold: { type: number },
    stock: { type: number, min: 0 },
    category: {
      type: Types.ObjectId,
      ref: "category",
    },
    subcategory: {
      type: Types.ObjectId,
      ref: "subCategory",
    },
    brand: {
      type: Types.ObjectId,
      ref: "brand",
    },
    rateCount: Number,

    rateAverage: Number,

    rate: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;
