class Product extends Object {
    constructor(id, name, code, releasedOn, desc, price, rating, imagePath) {
        super()
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

export default Product