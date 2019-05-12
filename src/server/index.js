const express = require('express')
const sql = require("mssql");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors());
const port = 3030

var config = {
    user: 'sa',
    password: 'IowvokdTik^49EL9',
    server: 'localhost', 
    database: 'BlogChain' 
};

app.get('/getall', function (req, res) { 
    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().query(
            'SELECT * FROM articles'
            ).then(result => {
                res.send(result.recordset);
                sql.close();
            }).catch(err => {
                console.log(err);
                sql.close();
            });
    });

});

app.get('/:searchparameter', function (req, res) { 
    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().query(
            `SELECT * FROM articles WHERE name='${req.params.searchparameter}'`
            ).then(result => {
                res.send(result.recordset);
                sql.close();
            }).catch(err => {
                console.log(err);
                sql.close();
            });
    });

});

app.post('/insert', function(req, res) {

    const article = req.body
    console.log(article);

    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().query(
            `INSERT INTO articles(hash, title, author, name, date) 
                VALUES (${article.hash, article.title, article.author, article.name, article.date})`
            ).then(result => {
                res.send(result.recordset);
                sql.close();
            }).catch(err => {
                console.log(err);
                sql.close();
            });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))