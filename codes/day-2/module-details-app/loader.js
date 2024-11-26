const superhero = require('./hero')
const firstModule = (
    function (name) {
        const batman = new superhero(name)
        console.log(batman);
    }
)
const secondModule = (
    function (name) {
        const superman = new superhero(name)
        console.log(superman);
    }
)

firstModule('Batman')
secondModule('Superman')