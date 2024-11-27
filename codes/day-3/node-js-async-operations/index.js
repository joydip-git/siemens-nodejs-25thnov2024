const crypto = require('node:crypto')

//process.env.UV_THREADPOOL_SIZE = 8
const start = Date.now()
for (let index = 0; index < 6; index++) {
    // const hash = crypto.pbkdf2Sync("password", "salt", 5000, 512, "sha512")
    // //console.log(hash);
    // console.log(`Hash ${index + 1}:${Date.now() - start}`);

    crypto.pbkdf2("password", "salt", 5000, 512, "sha512", (err, hash) => {
        console.log(`Hash ${index + 1}:${Date.now() - start}`)
    })
}
