import { connect, ConnectionPool, Request } from "mssql";
import { readData, writeData } from "../dao/filehandler";
import Product from "../models/product";
import { DB_CONFIG } from "../utils/constants";

class ProductManager {
    async getAll(): Promise<Product[]> {
        let pool: ConnectionPool | undefined;
        try {
            // pool = await connect('server=joydip-pc\\SQLEXPRESS,1433;user id=sa;password=sqlserver2024;Encrypt=False;TrustServerCertificate=True;database=appdb')
            pool = await connect(DB_CONFIG)
            const request: Request = pool.request()
            const results = await request.query('select * from products')
            return results.recordset as Product[]

        } catch (error) {
            throw error
        } finally {
            pool?.close()
        }
    }

    async get(id: number): Promise<Product> {
        let pool: ConnectionPool | undefined;
        try {
            pool = await connect(DB_CONFIG)
            let result = await pool
                .request()
                .input('id', id)
                .query('select * from products where productid=@id')

            const found: Product = result.recordset[0] as Product
            if (found)
                return found
            else
                throw new Error(`no product with id:${id} found...`)
        } catch (error) {
            throw error
        }
    }

    async add(product: Product): Promise<Product> {
        try {
            const products = await readData()
            const found = products.find(p => p.productId === product.productId)
            if (found)
                throw new Error(`a product with same id (${product.productId}) exists already...`)

            products.push(product)
            if (await writeData(products))
                return product
            else
                throw new Error('could not add data')
        } catch (error) {
            throw error
        }
    }

    async update(id: number, product: Product): Promise<Product> {
        try {
            const products = await readData()
            const foundIndex = products.findIndex(p => p.productId === id)
            if (foundIndex < 0)
                throw new Error(`a product with same id (${product.productId}) does not exist..`)

            var updatable = { ...product, productId: id }
            products.splice(foundIndex, 1, updatable)
            if (await writeData(products))
                return updatable
            else
                throw new Error('could not update data')
        } catch (err) {
            throw err
        }
    }

    async remove(id: number): Promise<Product> {
        try {
            const products = await readData()
            const foundIndex = products.findIndex(p => p.productId === id)
            if (foundIndex < 0)
                throw new Error(`a product with same id (${id}) does not exist..`)

            var found = products[foundIndex]
            products.splice(foundIndex, 1)
            if (await writeData(products))
                return found
            else
                throw new Error('could not delete data')
        } catch (error) {
            throw error
        }
    }
}
export default ProductManager