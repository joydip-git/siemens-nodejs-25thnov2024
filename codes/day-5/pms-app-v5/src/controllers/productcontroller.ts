import Product from "../models/product";
import ProductManager from "../services/productmanager";

class ProductController {
    manager: ProductManager;

    constructor() {
        this.manager = new ProductManager()
    }

    async addData(product: Product) {

        try {
            const addedProduct = await this.manager.add(product)
            console.log(addedProduct ? addedProduct : 'not added');
        } catch (error) {
            console.log(error);
        }
    }

    async fetchAll() {
        try {
            this.manager
                .getAll()
                .then((products) => products.forEach(p => console.log(p)))
                .catch(e => console.log(e))
        } catch (error) {
            console.log(error);
        }
    }
    async fetchById(id: number): Promise<void> {
        try {
            console.log(await this.manager.get(id))
        } catch (error) {
            console.log(error);
        }
    }
}

export default ProductController