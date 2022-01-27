import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/water', (req, res) => {
    res.send('Hello World! in 🌊')
})

app.get('/food', (req, res) => {
    res.send('Hello World! from 🍔🍟')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})