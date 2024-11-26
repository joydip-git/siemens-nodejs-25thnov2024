import { products } from "../repository/products";

class ProductManager {
    getAll() {
        return [...products]
    }

    get(id) {
        const found = products.find(p => p.productId === id)
        if (found)
            return found
        else
            throw new Error(`no product with id:${id} found...`)
    }

    add(product) {
        const found = products.find(p => p.productId === product.productId)
        if (found)
            throw new Error(`a product with same id (${product.productId}) exists already...`)

        products.push(product)
        return product
    }

    update(id, product) {
        const foundIndex = products.findIndex(p => p.productId === id)
        if (foundIndex < 0)
            throw new Error(`a product with same id (${product.productId}) does not exist..`)

        products.splice(foundIndex, 1, product)
        return { ...product, productId: id }
    }

    remove(id) {
        const foundIndex = products.findIndex(p => p.productId === id)
        if (foundIndex < 0)
            throw new Error(`a product with same id (${product.productId}) does not exist..`)

        var found = products[foundIndex]
        products.splice(foundIndex, 1)
        return found
    }
}
export default ProductManager