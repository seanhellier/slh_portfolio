const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/apiMap', (req, res) => {
    // "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAHBpna662s8L1EqRUcrD5uJ9YmXHzZDA&callback=initMap"
    res.send("AIzaSyCAHBpna662s8L1EqRUcrD5uJ9YmXHzZDA")
})

app.listen(port, () => console.log(`listening on ${port}`))