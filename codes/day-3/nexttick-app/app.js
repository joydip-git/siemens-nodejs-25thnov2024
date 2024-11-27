setTimeout(() => console.log('settimeout 1'), 0)
setTimeout(() => console.log('settimeout 2'), 0)

process.nextTick(() => console.log('next tick 1'))//in ntq
process.nextTick(() => console.log('next tick 2'))//ntq
Promise.resolve().then(
    () => {
        console.log('promise callback 1')
        setTimeout(() => console.log('settimeout inside promise callback 1'), 0)
        process.nextTick(() => console.log('next tick inside promise callback 1'))//ntq-(it2)
    }
)//pq

setTimeout(() => console.log('settimeout 3'), 0)
process.nextTick(() => console.log('next tick 3')) //ntq
Promise.resolve().then(
    () => {
        console.log('promise callback 2')//pq
    }
)