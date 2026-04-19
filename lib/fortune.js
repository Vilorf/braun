const fortunes = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужны истоки.",
    "Не бойся неведомого.",
    "Тебя ждет приятный сюрприз.",
    "Будь проще везде, где только можно.",
    "Не сдавайся, ну а если совсем плохо, то похуй - сдавайся"
]

exports.getFortune = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    return randomFortune;
}