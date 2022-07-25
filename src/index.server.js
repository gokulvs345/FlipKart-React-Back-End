const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes

const userRoutes=require('./routes/user');

// enviornment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://Gokul:<password>@cluster0.so93j.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect(
 
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.so93j.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
}

).then(()=>{
    console.log('database connected');
});

//add middle ware
// app.use(express.json());
app.use(bodyParser());
app.use('/api',userRoutes);

// //get reqest
// app.get('/', (req,res,next) =>{
//     res.status(200).json({
//         message:'Hello from server'
//     });
// });


// //post  reqest
// app.post('data', (req,res,next) =>{
//     res.status(200).json({
//         message:req.body
//     });
// });



app.listen(process.env.PORT,() => {
    console.log(`server is running on port ${process.env.PORT}`);
});