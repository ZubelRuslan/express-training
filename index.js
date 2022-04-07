const express = require('express');
const usersRouter = require('./users/users.routes')
const apiRouter = express.Router;

const app = express();

apiRouter.use('/users', usersRouter);
apiRouter.use('/profile', profileRouter);

app.use('/api', apiRouter)
app.use('/static/photos/:id', authMiddleware,  express.static('public'))

app.listen(8000, () => {
  console.log('server started');
})

if (req.params.id === jwtPayload.id) {
  next()
} else {
  res.status(403).send()
}


// CRUD
// POST /users -- пост запрос с бади, в котором есть юзер
// GET /users -- получение всех юзеров
// GET /users/:id -- получение юзера по айди
// PUT /users/:id -- апдейт по айди
// DELETE /users/:id -- удалить по айди


// CRUD на юзеров
// Хранение юзеров в переменной
// Хранение юзеров в файлике на жёстком диске в формате JSON
