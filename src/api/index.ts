import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import InitiateMongoServer from '../config/db';
import { RegisterRoutes } from './routes/routes';
import express from "express";
import basicAuth from 'express-basic-auth';
const swaggerDocument = require('../../docs/swagger.json');
//import './telegram/telegram';
import expressError from '../utils/express.error';

// Instance of express
const app: express.Application = express();

//app.use(xhub({ algorithm: 'sha1', secret: FACEBOOK_APP_SECRET || (()=> {throw new Error('FACEBOOK_APP_SECRET is not defined') })() }));
// Initiate Database Connection
InitiateMongoServer();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({
  verify: (req, res, buf) => {
    //@ts-ignore
    req.rawBody = buf.toString();
  }
},
));
// set end point for ping and respond with pong
app.get('/ping', (req, res) => {
  res.send('pong');
}
);

app.use(cors({
  credentials: true, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', preflightContinue: false, origin: '*',
}));

RegisterRoutes(app)

// create and start the swagger server
app.use('/api-docs', basicAuth({
  users: { 'admin': 'admin' },
  challenge: true,
  realm: 'Imb4T3st4pp',
}), swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(expressError);
// Routers


// for every uncaught error, log the error and send a 500 error
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err)
})

export default app;