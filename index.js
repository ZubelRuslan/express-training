const express = require('express');
const usersRouter = require('./users/users.routes')

const app = express();

app.use('/users', usersRouter)

app.listen(8000, () => {
  console.log('server started');
})


// CRUD
// POST /users -- пост запрос с бади, в котором есть юзер
// GET /users -- получение всех юзеров
// GET /users/:id -- получение юзера по айди
// PUT /users/:id -- апдейт по айди
// DELETE /users/:id -- удалить по айди


// CRUD на юзеров
// Хранение юзеров в переменной
// Хранение юзеров в файлике на жёстком диске в формате JSON
