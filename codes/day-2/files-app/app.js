//const { Buffer } = require('node:buffer')
// const bufferObject = Buffer.from('joydip', 'utf-8');
// //bufferObject.write('siemens')
// console.log(bufferObject);
// console.log(bufferObject.toJSON());
// console.log(bufferObject.toString());

const fs = require('node:fs')

//const data = fs.readFileSync('./data.txt')

function getData(callback) {
    fs.readFile(
        './data.txt',
        { encoding: 'utf-8' },
        callback
    )
}
function writeData(data, callback) {
    fs.appendFile('./data.txt', data, callback)
}
const getDataCallback = (err, data) => {
    if (err)
        console.log(err);

    if (data)
        console.log(data.toString());
}
const writeDataCallback = () => {
    console.log('writing over...');
}
writeData('hello..', writeDataCallback)
getData(getDataCallback)
console.log('continuing....');
console.log('continuing....');
console.log('continuing....');
console.log('continuing....');

