import {createServer} from 'http';
import app from './api'; // index.ts
import { PORT, BASE_URL } from './config';


// Spin server
const server = createServer(app);
server.listen(PORT, () => console.info(`Server listening on ${BASE_URL}`));

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
 console.error('There was an uncaught error', err)
 console.log('Shutting down the server due to Uncaught Exception');
  // Close server & exit process
  server.close(() => process.exit(1));
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err:any) => {
  console.error('There was an unhandled rejection', err)
  console.log('Shutting down the server due to Unhandled Promise rejection');
  server.close(() => process.exit(1));
});
