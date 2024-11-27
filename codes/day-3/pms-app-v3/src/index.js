import ProductManager from "./services/productmanager";
import Product from './models/product'

(
    async function () {
        const manager = new ProductManager()
        try {
            const addedProduct = await manager.add(new Product(6, 'dell xps 15', 'dell-1234', '11/12/2024', 'new 15 inch laptop from dell', 120000, 4.5, 'https://openclipart.org/image/800px/5012'))

            console.log(addedProduct ? addedProduct : 'not added');

            manager
                .getAll()
                .then((products) => products.forEach(p => console.log(p)))
                .catch(e => console.log(e))

        } catch (error) {
            console.log(error);
        }
    }
)()



