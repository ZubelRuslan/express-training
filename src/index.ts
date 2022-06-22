import { rootRouter } from './routing';
import { initDb } from './db';
import { json } from 'body-parser';
import express = require('express');
import { config } from './config';
import swaggerUi from 'swagger-ui-express'

const app = express();

app.use(json())
app.use(express.static('public'))

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "/swagger.json",
      baseUrl: "/api"
    },
  })
);

app.use(rootRouter)

initDb()

app.listen(config.port, () => {
  console.info('server started at port: ' + config.port);
})