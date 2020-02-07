const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config();
const path=require('path');


const app =express()
const port =process.env.PORT || 5000

app.use(cors())
app.use(express.json())
const uri =process.env.ATLAS_URI


//deplye
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

//route

const articlesRoute=require('./routes/articles')
app.use('/articles',articlesRoute)

mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true });

const connection =mongoose.connection;
connection.once('open',()=>{
    console.log('mongodb connection establish succesfully')
});
app.listen(port,()=>{console.log(`The app is running on port ${port}`)})