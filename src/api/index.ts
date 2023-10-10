import cors from 'cors';
import InitiateMongoServer from '../config/db';
import express from "express";
//import './telegram/telegram';
import expressError from '../utils/express.error';

// Instance of express
const app: express.Application = express();

//app.use(xhub({ algorithm: 'sha1', secret: FACEBOOK_APP_SECRET || (()=> {throw new Error('FACEBOOK_APP_SECRET is not defined') })() }));
// Initiate Database Connection

app.use(expressError);
// Routers


// for every uncaught error, log the error and send a 500 error
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err)
})

export default app;