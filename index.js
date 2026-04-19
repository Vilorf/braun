const express = require('express')
const exph = require('express-handlebars')
const handlers = require('./lib/handlers')

const app = express()

const port = process.env.PORT || 3000

// Настройка механизма представлений Handlebars
app.use(express.static(__dirname + '/public'))
app.engine('handlebars', exph.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

// Пользовательская страница 500
app.use(handlers.serverError)

// Добавляем маршруты сайта
app.get('/', handlers.home)

app.get('/about', handlers.about)

// Пользовательская страница 404
app.use(handlers.notFound)

app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; ` + 
    `нажмите Ctrl+C для завершения.`
))