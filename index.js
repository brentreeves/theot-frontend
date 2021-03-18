const cool = require("cool-ascii-faces");
require("dotenv").config();

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const TABLE1 = process.env.DB_TABLE || "dots";

const { Pool } = require("pg");

console.log("index.js starting...\n");

// heroku
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
    // ssl: this.isProduction() ? { rejectUnauthorized: false } : false
    //   ssl: true
});
// heroku end


express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get("/db", async (req, res) => {
	console.log('table ' + TABLE1);
	try {
	    const client = await pool.connect();
	    const sql = `select * from ${TABLE1}`;
	    const result = await client.query(sql);
	    const results = { results: result ? result.rows : null };
	    res.render("pages/db", results);
	    client.release();
	} catch (err) {
	    console.error(err);
	    res.send("Error db " + err);
	}
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
