const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const SELECT_ALL = 'SELECT * FROM Restaurants';
// https://github.com/mysqljs/mysql
 const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ArticleDatabase',
    port: 3300,
    socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
});

/*
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);
*/


// Initialize the app
const app = express();
app.use(cors());

// let allowCrossDomain = function(req, res, next) {
//    res.header('Access-Control-Allow-Origin', "*");
//    res.header('Access-Control-Allow-Headers', "*");
//    next();
// }
// app.use(allowCrossDomain);

// https://expressjs.com/en/guide/routing.html
app.get('/comments', function (req, res) {
 // connection.connect();

    connection.query('SELECT * FROM articles', function (error, results, fields) {
        if (error) throw error;
        else {
             return res.json({
                data: results
             })
        };
    });

//    connection.end();
});

// Start the server
app.listen(3300, () => {
    console.log('Go to http://localhost:3306/posts to see posts');
});
