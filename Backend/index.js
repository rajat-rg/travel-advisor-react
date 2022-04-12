const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

//Available Routes
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/places',require('./routes/places'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  