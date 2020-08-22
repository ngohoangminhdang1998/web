var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'minhdang63',
  port: 5432,
})



/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log("test")
    console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
