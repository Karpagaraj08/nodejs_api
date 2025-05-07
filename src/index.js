import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { checkConnection } from './config/dbconfig.js';
import premiumConfigRoutes from './routes/premiumconfig.route.js'

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
checkConnection();

app.use('/', (req, res, next) => {
  console.log("req", req.url)
  next();
});

app.use('/home', (req, res, next) => {
  console.log("hello world from home routes");
  res.send("Hello from middleware");
});

app.use('/api/Premium', premiumConfigRoutes);


app.listen(PORT, async () => {
  console.log("Server Listening on PORT:", PORT);
});