const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
koalaRouter.get('/', (req, res) => {
    console.log(`In GET route!`);
    const queryText = `SELECT * FROM koalas ORDER BY name ASC;`;

    pool.query(queryText);
});

// POST

// PUT

// DELETE

module.exports = koalaRouter;