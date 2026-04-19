const express = require('express')
const exph = require('express-handlebars')
const fortune = require('./lib/fortune')

const app = express()

const port = process.env.PORT || 3000

// Настройка механизма представлений Handlebars
app.use(express.static(__dirname + '/public'))
app.engine('handlebars', exph.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

// Пользовательская страница 500
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

// Добавляем маршруты сайта
app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    
    console.log(randomFortune)
    res.render('about', {fortune: fortune.getFortune()})
})

// Пользовательская страница 404
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; ` + 
    `нажмите Ctrl+C для завершения.`
))