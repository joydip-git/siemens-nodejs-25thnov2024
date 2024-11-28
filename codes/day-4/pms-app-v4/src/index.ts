import { program } from 'commander'
import { APP_CONSTANTS } from './utils/constants'
import ProductController from './controllers/productcontroller'
import { createInterface } from 'node:readline/promises'
import Product from './models/product'

program
    .option('-f, --file <string>', 'path of the file', '')
    .action((options) => {
        if (options && options.file !== '') {
            APP_CONSTANTS.filePath = options.file
            console.log(APP_CONSTANTS.filePath);
        }
    })

program.parse()

const acceptProductValues = async (): Promise<Product> => {
    const userInterface = createInterface(process.stdin, process.stdout)
    const id = Number(await userInterface
        .question('enter id: '))
    const name = await userInterface
        .question('enter name: ')
    const code = await userInterface
        .question('enter code: ')
    const desc = await userInterface
        .question('enter description: ')
    const releasedOn = await userInterface
        .question('enter release date: ')
    const imagePath = await userInterface
        .question('enter image path: ')
    const price = Number(await userInterface
        .question('enter price: '))
    const rating = Number(await userInterface
        .question('enter rating: '))
    userInterface.close();

    return { productId: id, productName: name, productCode: code, description: desc, releaseDate: releasedOn, price: price, starRating: rating, imageUrl: imagePath }
}

const controller = new ProductController()
acceptProductValues()
    .then((result) => {
        controller.addData(result)
        controller.fetchAll()
    })
    .catch((err) => {
        console.log(err);
    });

