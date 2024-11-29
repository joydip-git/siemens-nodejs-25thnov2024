import Product from "../models/product";
import { Request, Response } from "express";

export interface ProductControllerContract {
    insertProduct(req: Request, res: Response): Promise<void>;
    deleteProduct(req: Request, res: Response): Promise<void>;
    updateProduct(req: Request, res: Response): Promise<void>;
    fetchProducts(req: Request, res: Response): Promise<void>;
    fetchProductById(req: Request, res: Response): Promise<void>;
}