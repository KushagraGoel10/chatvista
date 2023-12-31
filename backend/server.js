const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const userRoutes= require('./routes/userRoutes');


const app = express();
dotenv.config();
connectDB();

app.use(express.json());  //to accept json data


app.get('/', (req,res) => {
    res.send("API is running successfully");
});

app.use('/api/user', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(5000, console.log('Server started on PORT 5000'));
