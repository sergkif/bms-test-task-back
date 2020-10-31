const express = require('express')
const personRouter = require('./routers/person')
var cors = require('cors')
const port = process.env.PORT
require('./db/db')


const app = express()

app.use(cors())
app.use(express.json())
app.use(personRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})