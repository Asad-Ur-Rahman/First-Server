import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/water', (req, res) => {
    res.send('Hello World! in 🌊')
})

app.get('/food', (req, res) => {
    res.send('Hello World! from 🍔🍟')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})