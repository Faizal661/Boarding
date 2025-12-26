// PROMISIFY is the process of converting a traditional "error-first callback" function
// into a function that returns a Promise.

import fs from 'fs'

// manual promisifying
function readFileAsync(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })
}


// using util.promisify

import { promisify } from 'util'

const readFile = promisify(fs.readFile)

async function getData(path) {
    try {
        const data = await readFile(path, "utf-8")
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
getData()



// For the FS module, Node.js now provides a pre-promisified 
// version of every method, so you don't even need util.promisify.

const fs = require('fs').promises;

async function run() {
    const data = await fs.readFile('test.txt', 'utf-8');
    console.log(data)
}
run()