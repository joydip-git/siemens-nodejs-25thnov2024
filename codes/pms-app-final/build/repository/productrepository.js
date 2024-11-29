"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = require("mssql");
const constants_1 = require("../utils/constants");
const inversify_1 = require("inversify");
let ProductRepository = class ProductRepository {
    constructor() {
        console.log('repo created...');
    }
    async getAll() {
        let pool;
        try {
            pool = await (0, mssql_1.connect)(constants_1.DB_CONFIG);
            const request = pool.request();
            const results = await request.query('select * from products');
            return results.recordset;
        }
        catch (error) {
            throw error;
        }
        finally {
            pool?.close();
        }
    }
    async get(id) {
        let pool;
        try {
            pool = await (0, mssql_1.connect)(constants_1.DB_CONFIG);
            let result = await pool
                .request()
                .input('id', id)
                .query('select * from products where productid=@id');
            const found = result.recordset[0];
            if (found)
                return found;
            else
                throw new Error(`no product with id:${id} found...`);
        }
        catch (error) {
            throw error;
        }
        finally {
            pool?.close();
        }
    }
    async add(product) {
        let pool;
        try {
            pool = await (0, mssql_1.connect)(constants_1.DB_CONFIG);
            const result = await pool
                .request()
                .input('name', product.productname)
                .input('price', product.price)
                .input('desc', product.description)
                .input('code', product.productcode)
                .input('date', product.releasedate)
                .input('rating', product.starrating)
                .input('image', product.imageurl)
                .query('insert into products(productname,productcode,releasedate,description,price,starrating,imageurl) values(@name,@code,@date,@desc,@price,@rating,@image)');
            if (result.rowsAffected[0] > 0)
                return true;
            else
                throw new Error('could not add data');
        }
        catch (error) {
            throw error;
        }
        finally {
            pool?.close();
        }
    }
    async update(id, product) {
        let pool;
        try {
            pool = await (0, mssql_1.connect)(constants_1.DB_CONFIG);
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
                .query('update products set productname=@name, productcode=@code, releasedate=@date, description=@desc, price=@price, starrating=@rating, imageurl=@image where productid=@id');
            if (result.rowsAffected[0] > 0)
                return true;
            else
                throw new Error('product with ' + id + ' does not exist');
        }
        catch (err) {
            throw err;
        }
        finally {
            pool?.close();
        }
    }
    async remove(id) {
        let pool;
        try {
            pool = await (0, mssql_1.connect)(constants_1.DB_CONFIG);
            const found = await this.get(id);
            pool = await (0, mssql_1.connect)(constants_1.DB_CONFIG);
            let result = await pool
                .request()
                .input('id', id)
                .query('delete from products where productid=@id');
            if (result.rowsAffected[0] > 0)
                return found;
            else
                throw new Error(`a product with same id (${id}) does not exist..`);
        }
        catch (error) {
            throw error;
        }
        finally {
            pool?.close();
        }
    }
};
ProductRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ProductRepository);
exports.default = ProductRepository;
//# sourceMappingURL=productrepository.js.map