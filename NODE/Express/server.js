import { count, time } from 'console'
import express from 'express'
import fs from 'fs'
import rateLimiter from './middlewares/rate-limiter.js'
import 'http2'

const app = express()
app.use(express.json())

app.use(rateLimiter)

app.get('/', (req, res) => {
    res.json({ message: "Welcome User !" })
})

fs.readdir('./', { withFileTypes: true }, (err, data) => {
    if (err) console.log(err)
    const result = data
    result.forEach((each) => {
        console.log(each.isFile())
        console.log(each.name)
    })
})

app.listen(3000, () => {
    console.log('server is running ✅')
})
