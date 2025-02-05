const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 9090
const db_url = process.env.DB_URL
const connectToDb = require('./src/config/db.js')


app.get('/', (req,res)=>{
    res.send('This is Home Page')
})

app.listen(port, async()=>{
    try{
        await connectToDb(db_url)
        console.log(`Server is running at http://localhost:${port}`)
        console.log('Database connected successfully')
    }
    catch(err){
        console.error(err)
    }
})