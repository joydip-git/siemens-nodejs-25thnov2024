//import { products } from "../repository/products";
import { readData, writeData } from "../dao/filehandler";
class ProductManager {
    getAll() {
        try {
            const products = readData()
            return products
        } catch (error) {
            throw error
        }
    }

    get(id) {
        try {
            const products = readData()
            const found = products.find(p => p.productId === id)
            if (found)
                return found
            else
                throw new Error(`no product with id:${id} found...`)
        } catch (error) {
            throw error
        }
    }

    add(product) {
        try {
            const products = readData()
            const found = products.find(p => p.productId === product.productId)
            if (found)
                throw new Error(`a product with same id (${product.productId}) exists already...`)

            products.push(product)
            if (writeData(products))
                return product
            else
                throw new Error('could not add data')
        } catch (error) {
            throw error
        }
    }

    update(id, product) {
        try {
            const products = readData()
            const foundIndex = products.findIndex(p => p.productId === id)
            if (foundIndex < 0)
                throw new Error(`a product with same id (${product.productId}) does not exist..`)

            var updatable = { ...product, productId: id }
            products.splice(foundIndex, 1, updatable)
            if (writeData(products))
                return updatable
            else
                throw new Error('could not update data')
        } catch (err) {
            throw err
        }
    }

    remove(id) {
        try {
            const products = readData()
            const foundIndex = products.findIndex(p => p.productId === id)
            if (foundIndex < 0)
                throw new Error(`a product with same id (${product.productId}) does not exist..`)

            var found = products[foundIndex]
            products.splice(foundIndex, 1)
            if (writeData(products))
                return found
            else
                throw new Error('could not delete data')
        } catch (error) {
            throw err
        }
    }
}
export default ProductManager