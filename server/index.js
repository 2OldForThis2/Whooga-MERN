require("dotenv").config({ path: __dirname + "/.env" });
const {db, pool} = require('./config/db');
const {collections, collectionUniverses} = require('./config/schema');
const express = require('express');
const {eq} = require('drizzle-orm');
const attributeRouter = require('./routes/collectableAttributes');
const universeRouter = require('./routes/collectionUniverse');
const collectionRouter = require('./routes/collection');
/*const { drizzle } = require('drizzle-orm');
const { pgAdapter } = require('drizzle-orm-pg');
const pg = require('pg');*/

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

/*const db = drizzle(pgAdapter(pool));

app.use(express.json());*/

// Here we can add our routes
app.get("/", (req, res) => {
  res.send("Hello World!");
} );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
} );

app.use('/collectable-attributes', attributeRouter);

app.use('/collection-universe', universeRouter);

app.use('/collection', collectionRouter);

//app.get('/users', getUsers)