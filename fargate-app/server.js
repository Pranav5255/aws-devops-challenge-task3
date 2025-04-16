import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import sampleRoutes from "./routes/sampleRoutes.js"
dotenv.config();
const app = express();


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));
app.get('/', (req, res) => {
    res.send('App running on ECS Fargate with RDS!');
});
app.use("/sample",sampleRoutes)
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
