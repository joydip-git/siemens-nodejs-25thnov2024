import { inject, injectable } from "inversify";
import Product from "../models/product";
import { ProductControllerContract } from "./productcontrollercontract";
import { RepositoryContract } from "../repository/repositorycontract";
import { DI_TOKENS } from "../utils/constants";
import { Request, Response } from "express";
import { generateReponse } from "../utils/responsegenerator";

@injectable()
class ProductController implements ProductControllerContract {

    constructor(@inject(DI_TOKENS.REPOSITORY_TOKEN) private repository: RepositoryContract<Product, number>) {
        console.log('controller created...');
    }

    insertProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const product = req.body as Product
            const status = await this.repository.add(product)
            if (status) {
                const products = await this.repository.getAll()
                res.status(200).json(generateReponse<Product>('found', products[products.length - 1], 200))
            } else {
                res.status(404).json(generateReponse<Product>('not found', null, 404))
            }
        } catch (error: any) {
            res.status(500).json(generateReponse<Product>(error.message, null, 500))
        }
    }

    deleteProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = +req.params.id
            const result = await this.repository.remove(id)
            if (result)
                res.status(200).json(generateReponse<Product>('deleted', result, 200))
            else
                res.status(404).json(generateReponse<null>('not deleted', null, 404))
        } catch (error: any) {
            res.status(500).json(generateReponse<Product>(error.message, null, 500))
        }
    }

    updateProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = +req.params.id
            const product = req.body as Product
            const result = await this.repository.update(id, product)
            if (result)
                res.status(200).json(generateReponse<Product>('updated', { ...product, productid: id }, 200))
            else
                res.status(404).json(generateReponse<null>('not updated', null, 404))

        } catch (error: any) {
            res.status(500).json(generateReponse<Product>(error.message, null, 500))
        }
    }

    fetchProducts = async (req: Request, res: Response): Promise<void> => {
        try {
            const products = await this.repository.getAll()
            res.status(200).json(generateReponse<Product[]>('found', products, 200))
        } catch (error: any) {
            console.log(error);
            res.status(500).json(generateReponse<null>(error.message, null, 500))
        }
    }

    fetchProductById = async (req: Request, res: Response): Promise<void> => {
        try {
            const product = await this.repository.get(+req.params.id)
            res.status(200).json(generateReponse<Product>('found', product, 200))
        } catch (error: any) {
            res.status(500).json(generateReponse<null>(error.message, null, 500))
        }
    }
}

export default ProductController