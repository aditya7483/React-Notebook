const connectToMongo= require('./db');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')

app.use(cors())
app.use(express.json())
connectToMongo();

// to maintain the proper flow of code we have used the routes folder 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
