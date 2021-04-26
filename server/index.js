import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

// initialise the app
const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// this adds the prefix '/posts' behind all routes in post.js, equal to the 'routes.rb' file regarding functionality
app.use('/posts', postRoutes);
app.get('/', (req,res) => {
  res.send("hello");
});

// mongo section, credentials will be secured later
// const CONNECTION_URL = 'mongodb+srv://amwhow33:amwhow3305@cluster0.8oqr7.mongodb.net/PostMessage?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3500;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
