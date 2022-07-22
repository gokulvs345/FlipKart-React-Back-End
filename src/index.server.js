const express = require('express');
const env = require('dotenv');
const app=express();
// enviornment variable or you can say constants
env.config();
app.listen(process.env.PORT,() => {
    console.log(`server is running on port ${process.env.PORT}`);
});