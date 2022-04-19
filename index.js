import express from 'express';
import { config } from './config.js';
import {rootRouter} from './routing.js';

const app = express();

app.use(rootRouter)

app.listen(config.port, () => {
  console.info('server started at port: ' + config.port);
})

// CRUD
// POST /users -- пост запрос с бади, в котором есть юзер
// GET /users -- получение всех юзеров
// GET /users/:id -- получение юзера по айди
// PUT /users/:id -- апдейт по айди
// DELETE /users/:id -- удалить по айди