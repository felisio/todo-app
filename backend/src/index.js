require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');

const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
}, deet => {
  console.log(`server in running in port http://localhost:${deet.port}`)
})