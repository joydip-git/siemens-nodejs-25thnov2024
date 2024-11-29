import { Product } from "../models/product";

export interface ProductBoContract {
    add(data: Product): Promise<Product>;
    update(data: Product, id: number): Promise<Product>;
    remove(id: number): Promise<Product>;
    get(id: number): Promise<Product>;
    getAll(): Promise<Product[]>;
}