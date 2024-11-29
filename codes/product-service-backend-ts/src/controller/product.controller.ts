import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ProductControllerContract } from "./product-controller.contract";
import { inject, injectable } from "inversify";
import diTokens from "../utilities/app-constants";
import createResponse from "../utilities/response-generator";
import { Product } from "../models/product";
import { ProductBoContract } from "../bo/product-bo.contract";


@injectable()
export class ProductController implements ProductControllerContract {
    constructor(@inject(diTokens.PRODUCT_BO_TOKEN) private bo: ProductBoContract) {
    }

    getAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const productId = Number(req.params.id)
            const product = await this.bo.get(productId)
            const response = createResponse<Product>('found record', 200, product)
            res.send(response)
        } catch (error: any) {
            const errResponse = createResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }

    getAllAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const products = await this.bo.getAll()
            const response = createResponse<Product[]>('found records', 200, products)
            res.send(response)
        } catch (error: any) {
            const errResponse = createResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }

    postAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const productData = <Product>req.body
            const added = await this.bo.add(productData)
            const response = createResponse<Product>('added successfully', 201, added)
            res.send(response)
        } catch (error: any) {
            const errResponse = createResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }

    putAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const id = Number(req.params.id)
            const productData = <Product>req.body
            const updated = await this.bo.update(productData, id)
            const response = createResponse<Product>('updated record', 201, updated)
            res.send(response)
        } catch (error: any) {
            const errResponse = createResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }

    deleteAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const id = Number(req.params.id)
            const deleted = await this.bo.remove(id)
            const response = createResponse<Product>('deleted record', 201, deleted)
            res.send(response)
        } catch (error: any) {
            const errResponse = createResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }
}