const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cores = require('cores');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'RestaurantDatabase',
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

app.use(cores);

// https://expressjs.com/en/guide/routing.html
app.get('http://localhost:3306/comments', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM Restaurants LIMIT 0, 10', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
 /*
    connection.end();
 */
});
// Start the server
app.listen(3300, () => {
    console.log('Go to http://localhost:3306/posts to see posts');
});
