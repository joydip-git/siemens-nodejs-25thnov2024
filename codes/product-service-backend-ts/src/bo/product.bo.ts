import { inject, injectable } from "inversify";
import { Product } from "../models/product";
import { ProductBoContract } from "./product-bo.contract";
import diTokens from "../utilities/app-constants";
import { DaoContract } from "../dao/dao.contract";

@injectable()
export class ProductBo implements ProductBoContract {

    constructor(@inject(diTokens.PRODUCT_DAO_TOKEN) private dao: DaoContract<Product[]>) { }

    async add(data: Product): Promise<Product> {
        try {
            if (data) {
                const products = await this.dao.readFromFile()
                let status = false
                let id = 1
                if (products.length > 0) {
                    if (products.find(px => px.productId === data.productId))
                        status = true
                    else
                        id = (products[products.length - 1]).productId + 1
                }

                if (!status) {
                    data.productId = id
                    products.push(data);
                    await this.dao.writeIntoFile(products);
                    return data
                }
                else
                    throw new Error('product exists')
            }
            else
                throw new Error("no product data was sent");
        }
        catch (e) {
            throw e
        }
    }
    async update(data: Product, id: number): Promise<Product> {
        try {
            if (data) {
                let products = await this.dao.readFromFile();
                if (products.length > 0) {

                    const index = products.findIndex(p => p.productId === id);

                    if (index !== -1) {
                        products.splice(index, 1, {
                            ...data,
                            productId: id
                        });
                        await this.dao.writeIntoFile(products);
                        return data
                    } else
                        throw new Error("no such record exists");
                } else
                    throw new Error("product records are not found...");
            }
            else
                throw new Error('no data was sent')
        }
        catch (e) {
            throw e
        }
    }
    async remove(id: number): Promise<Product> {
        try {
            if (id > 0) {
                let products = await this.dao.readFromFile();
                if (products.length > 0) {
                    const found = products.find(p => p.productId === id)
                    if (found) {
                        const foundIndex = products.findIndex((p) => p.productId === id)
                        products.splice(foundIndex, 1)
                        await this.dao.writeIntoFile(products);
                        return found
                    } else
                        throw new Error("no such record exists");
                } else
                    throw new Error("no product records found...");
            } else
                throw new Error("pass a proper product id");
        }
        catch (e) {
            throw e
        }
    }
    async get(id: number): Promise<Product> {
        try {
            if (id > 0) {
                let products = await this.dao.readFromFile();
                let found = products.find((p) => p.productId === id);
                if (found)
                    return found
                else
                    throw new Error("no such record exists");
            } else {
                throw new Error("pass a proper id");
            }
        } catch (e) {
            throw e
        }
    }
    async getAll(): Promise<Product[]> {
        try {
            const data = await this.dao.readFromFile();
            if (data && data.length > 0)
                return data
            else
                throw new Error("no product records found at all...");
        } catch (e) {
            throw e
        }
    }
}