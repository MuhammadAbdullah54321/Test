
import {Product} from './models/Products'

export const resolvers = {
    Query:{
        products : () => Product.find(),
        // create more queries here
    },
    Mutation:{
        createProduct: async (_, { name, description, price, image}) =>{
            const newProduct = new Product({ name, description, price, image});
            await newProduct.save();
            return newProduct
        }
        //create more mutations here 
        
    }
}