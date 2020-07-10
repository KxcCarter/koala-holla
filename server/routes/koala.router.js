const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
koalaRouter.get('/', (req, res) => {
    console.log(`In GET route!`);
    const queryText = `SELECT * FROM koalas ORDER BY name ASC;`;

    pool
        .query(queryText)
        .then((dbResponse) => {
            res.send(dbResponse.rows);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// POST
koalaRouter.post('/', (req, res) => {
    console.log(`in POST route`);
    const queryText = `INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
                        VALUES ($1, $2, $3, $4, $5);`;

    // destructuring req.body to seperate variables. Might be overkill?
    let name, gender, age, readyForTransfer, notes;
    [name, gender, age, readyForTransfer, notes] = [
        req.body.name,
        req.body.gender,
        req.body.age,
        req.body.readyForTransfer,
        req.body.notes,
    ];

    console.log(name, gender, age, readyForTransfer, notes);

    pool
        .query(queryText, [name, gender, age, readyForTransfer, notes])
        .then((dbResponse) => {
            console.log(`in dbResponse`);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// PUT
koalaRouter.put('/:id', (req, res) => {
    console.log(`In PUT route`);
    const queryText = `UPDATE koalas SET ready_to_transfer = $1 WHERE id = $2;`;
    const id = req.params.id;
    const transferStatus = req.body.status;

    pool
        .query(queryText, [transferStatus, id])
        .then((dbResponse) => {
            console.log(`In dbResponse`);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// DELETE
koalaRouter.delete('/:id', (req, res) => {
    console.log(`In DELETE route`);
    const queryText = `DELETE FROM koalas WHERE id = $1;`;
    const id = req.params.id;
    pool
        .query(queryText, [id])
        .then((dbResponse) => {
            console.log(`In dbResponse`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = koalaRouter;