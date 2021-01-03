import mongoose from 'mongoose'

export const Product = mongoose.model("Product", {
        name: String,
        description: String,
        price: Number,
        image: String
    });