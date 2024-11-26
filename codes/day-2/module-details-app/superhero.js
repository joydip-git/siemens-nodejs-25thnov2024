class SuperHero {
    constructor(name) {
        this.name = name
    }
}
const multiply = (a, b) => a * b
const obj = new SuperHero('Batman')

module.exports = {
    superhero: { ...obj },
    multiply
}


global.x = 100
console.log(global);