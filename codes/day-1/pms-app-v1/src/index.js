import ProductManager from "./services/productmanager";
import Product from './models/product'

const manager = new ProductManager()
const addedProduct = manager.add(new Product(6, 'dell xps 15', 'dell-1234', '11/12/2024', 'new 15 inch laptop from dell', 120000, 4.5, 'https://openclipart.org/image/800px/5012'))
console.log(addedProduct ? addedProduct : 'not added');
