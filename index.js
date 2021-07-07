const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//import routes
const authRoutes = require('./routes/auth');
const postRoute = require('./routes/posts');
dotenv.config();
//connect to db 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
    
() => console.log("connected to db..."))
//middleware
app.use(express.json());


//Route middleware
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoute);
app.listen(3000, () => console.log('server running...'));
