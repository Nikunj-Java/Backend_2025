const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors');

const db= require('./config/db')
const userRoutes=require('./routes/userRoutes')

dotenv.config();

const app=express();

app.use(express.json());
app.use(cors({
 // origin: 'http://localhost:5000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
const PORT=process.env.PORT;

app.use('/',userRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
})

