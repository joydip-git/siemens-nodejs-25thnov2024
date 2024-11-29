import { connect, ConnectionPool, Request } from "mssql";
import Product from "../models/product";
import { DB_CONFIG } from "../utils/constants";
import { RepositoryContract } from "./repositorycontract";
import { injectable } from "inversify";

@injectable()
class ProductRepository implements RepositoryContract<Product, number> {

    constructor() {
        console.log('repo created...');
    }
    async getAll(): Promise<Product[]> {
        let pool: ConnectionPool | undefined;
        try {
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
        } finally {
            pool?.close()
        }
    }

    async add(product: Product): Promise<boolean> {
        let pool: ConnectionPool | undefined;
        try {
            pool = await connect(DB_CONFIG)
            const result = await pool
                .request()
                .input('name', product.productname)
                .input('price', product.price)
                .input('desc', product.description)
                .input('code', product.productcode)
                .input('date', product.releasedate)
                .input('rating', product.starrating)
                .input('image', product.imageurl)
                .query('insert into products(productname,productcode,releasedate,description,price,starrating,imageurl) values(@name,@code,@date,@desc,@price,@rating,@image)')
            if (result.rowsAffected[0] > 0)
                return true
            else
                throw new Error('could not add data')
        } catch (error) {
            throw error
        } finally {
            pool?.close()
        }
    }

    async update(id: number, product: Product): Promise<boolean> {
        let pool: ConnectionPool | undefined;
        try {
            pool = await connect(DB_CONFIG)
            const result = await pool
                .request()
                .input('id', id)
                .input('name', product.productname)
                .input('price', product.price)
                .input('desc', product.description)
                .input('code', product.productcode)
                .input('date', product.releasedate)
                .input('rating', product.starrating)
                .input('image', product.imageurl)
                .query('update products set productname=@name, productcode=@code, releasedate=@date, description=@desc, price=@price, starrating=@rating, imageurl=@image where productid=@id')
            if (result.rowsAffected[0] > 0)
                return true
            else
                throw new Error('product with ' + id + ' does not exist')
        } catch (err) {
            throw err
        } finally {
            pool?.close()
        }
    }

    async remove(id: number): Promise<Product> {
        let pool: ConnectionPool | undefined;
        try {
            pool = await connect(DB_CONFIG)
            const found = await this.get(id)

            pool = await connect(DB_CONFIG)
            let result = await pool
                .request()
                .input('id', id)
                .query('delete from products where productid=@id')
            if (result.rowsAffected[0] > 0)
                return found
            else
                throw new Error(`a product with same id (${id}) does not exist..`)
        } catch (error) {
            throw error
        } finally {
            pool?.close()
        }
    }
}
export default ProductRepository