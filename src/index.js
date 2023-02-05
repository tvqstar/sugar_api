const express = require('express');
const db = require('./config/db');
const routes = require('./routes');

const cors = require('cors');
const bodyParser = require('body-parser')

db.connect();

const app = express();
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json())

app.use(express.json());
const port = 3001;

routes(app);

// app.get('/', (req, res) => {
//     return res.send('hello world 2223');
// });

app.listen(port, () => console.log(`Example app listening at http:localhost:${port}`));
