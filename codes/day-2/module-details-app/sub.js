var subModule = (
    function (message) {
        const subtract = (a, b) => a - b
        console.log(subtract(12, 3));
        console.log(message);
    }
)
subModule('hey')