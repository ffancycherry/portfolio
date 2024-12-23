const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));

// Чтение данных из файла с обработкой ошибок
let projects = [];
try {
    const data = fs.readFileSync('./data/projects.json', 'utf-8');
    projects = JSON.parse(data);
} catch (error) {
    console.error('Error reading projects file:', error.message);
    projects = []; // Устанавка пустого массива, чтобы сервер мог продолжить работу
}

// Маршруты
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', projects });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects', projects });
});

app.get('/contacts', (req, res) => {
    res.render('contacts', { title: 'Contact' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
