const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity)
        throw new Error('divisor is zero')
    else
        return res
    //console.log(res);
}

const add = (a, b) => a + b

//const divPromise = divide(12, 3)
//divPromise.catch((err) => { console.log(err.message); })
// divPromise
//     .then(
//         (data) => {
//             console.log(data);
//         },
//         (err) => { console.log(err.message); }
//     )

// async function callDivide() {
//     try {
//         const divRes = await divide(12, 3)
//         console.log(divRes);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// callDivide()

async function callDivide() {
    try {
        const divRes = await divide(12, 3)
        console.log(divRes);
        // const addRes = add(12, 3)
        // console.log(addRes);
    } catch (error) {
        console.log(error.message);
    }
}
callDivide()

const addRes = add(12, 3)
console.log(addRes);

// (async function () {
//copy the code in this
// })()
