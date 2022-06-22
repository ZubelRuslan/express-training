import { rootRouter } from './routing';
import { initDb } from './db';
import { json } from 'body-parser';
import express = require('express');
import { config } from './config';

const app = express();

app.use(json())

app.use(rootRouter)

initDb()

app.listen(config.port, () => {
  console.info('server started at port: ' + config.port);
})