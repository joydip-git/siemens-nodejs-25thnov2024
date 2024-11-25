//models
class Product extends Object {
    constructor(id, name, code, releasedOn, desc, price, rating, imagePath) {
        this.productId = id
        this.productName = name
        this.productCode = code
        this.description = desc
        this.releaseDate = releasedOn
        this.starRating = rating
        this.imageUrl = imagePath
        this.price = price
    }
    toString() {
        return `Name=${this.productName}, Id=${this.productId}, Code=${this.productCode}, ReleasedOn=${this.releaseDate}, Description=${this.description}, Price=${this.price}, Rating=${this.starRating}, ImagePath=${this.imageUrl}`
    }
}

//sample repository
const products = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 4,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "price": 50,
        "productName": "Garden Cart",
        "description": "15 gallon capacity rolling garden cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "starRating": 4,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 3,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 4,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 5,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
]

//manager class
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
        const found = products.find(p => p.productId === id)
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

        products.splice(foundIndex, 1)
        return products[foundIndex]
    }
}