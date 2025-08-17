import express from 'express'
import nodeRouter from './routes/nodeRoutes'
//import edgeRouter from './routes/edgeRoutes'
const app = express();
const port = 3000;

app.use(express.json());

app.use("/nodes",nodeRouter);

app.listen(port, () => {
    console.log(`app listening on ${port}`);
})