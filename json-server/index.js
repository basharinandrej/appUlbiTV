const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const pathToDB = path.resolve(__dirname, 'db.json')

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 10);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(pathToDB, 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            delete userFromBd.password
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для update профиля
server.put('/profiles', (req, res) => {
    try {
        const {id} = req.body;
        const db = JSON.parse(fs.readFileSync(pathToDB, 'UTF-8'));
        const { profiles = [] } = db;

        const profileById = profiles.find(
            (profile) => profile.id === id,
        );

        const newProfile = {
            ...profileById,
            ...req.body
        }

        const parsedProfiles = db.profiles;
        const updatedProfiles = parsedProfiles.filter(profile => profile.id !== id).concat(newProfile)
        const updatedDB = {
            ...db,
            profiles: updatedProfiles
        }

        fs.writeFileSync(pathToDB, JSON.stringify(updatedDB), (err) => {
            if(err) throw err;
        })

        return res.json(newProfile);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    // if (!req.headers.authorization) {
    //     return res.status(403).json({ message: 'AUTH ERROR' });
    // }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
