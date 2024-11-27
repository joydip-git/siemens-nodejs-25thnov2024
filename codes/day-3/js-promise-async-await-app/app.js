const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity)
                rejectFnRef(new Error('divisor is zero'))
            else {
                //console.log(res);
                resolveFnRef(res)
            }
            //resolveFnRef(res)
        }
    )
    return p
}

const add = (a, b) => a + b

const divPromise = divide(12, 3)
divPromise
    .then(
        //success
        (data) => {
            console.log(data);
            const addRes = add(12, data)
            console.log(addRes);
            //console.log(this);
            //return data;
        },
        //failed
        (err) => { console.log(err.message); }
    )
