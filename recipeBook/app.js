var express = require ('express'),
    path = require ('path'),
    bodyParser = require ('body-parser'),
    cons = require ('consolidate'),
    dust = require ('dustjs-helpers'),
    pg = require ('pg'),
    app = express (),
    sqlFormat = require ('pg-format');
        
app.engine ('dust', cons.dust);
app.set ('view engine', 'dust');
app.set ('views', __dirname + '/views');
app.use (express.static (path.join (__dirname, 'public')));

app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended:false}));

app.get ('/', async function (req, res){
    const client = new pg.Client({
      host: 'localhost',
      port: 5432,
      database: 'recipeDB',
      user: 'dgwUser',
      password: 'POST2me4good!!!',
    });
    await client.connect ();
    console.log ("Select connected");
    var sqlQuery = sqlFormat ('SELECT * FROM recipes');
    await client.query (sqlQuery, async function (err, result) {
        if (err) {
            return console.log ('error returning query', err);
        }
        res.render ('index', {recipes: result.rows});

        await client.end (function (err) {
            if (err) {
                return console.log ("error with close");
            }
            console.log ("Client closed after select");
        });
    });
});

app.post ('/add', async function (req, res){
    const client = new pg.Client({
      host: 'localhost',
      port: 5432,
      database: 'recipeDB',
      user: 'dgwUser',
      password: 'POST2me4good!!!',
    });
    await client.connect ();
    console.log ("Insert connected");

    var sqlQuery = sqlFormat ('INSERT INTO recipes (recipename, ingredients, directions, imagelink) VALUES (%L, %L, %L, %L)', req.body.recipename, req.body.ingredients, req.body.directions, req.body.imagelink);
    console.log (sqlQuery);
/*    await client.query (sqlQuery, async function (err, result) {
        if (err) {
            console.log ('Insert error ', err);
        }
    });*/

    const result = await client.query (sqlQuery);
    
    await client.end (function (err) {
        if (err) {
            return console.log ("error with close");
        }
        console.log ("client closed after insert");
    });
    res.redirect ('/');
});

app.post ('/edit', async function (req, res){
      const client = new pg.Client({
      host: 'localhost',
      port: 5432,
      database: 'recipeDB',
      user: 'dgwUser',
      password: 'POST2me4good!!!',
    });
    await client.connect ();
    console.log ("Edit connected");

    var sqlQuery = sqlFormat ('UPDATE recipes SET recipename=%L, ingredients=%L, directions=%L, imagelink=%L WHERE id=%L', req.body.recipename, req.body.ingredients, req.body.directions, req.body.imagelink, req.body.id);
    console.log (sqlQuery);
/*    await client.query (sqlQuery, async function (err, result) {
        if (err) {
            console.log ('Delete error ', err);
        }
    });*/

    const result = await client.query (sqlQuery);
    
    await client.end (function (err) {
        if (err) {
            return console.log ("error with close");
        }
        console.log ("client closed after edit");
    });
    res.redirect ('/');
});

app.delete ('/delete/:id', async function (req, res) {
      const client = new pg.Client({
      host: 'localhost',
      port: 5432,
      database: 'recipeDB',
      user: 'dgwUser',
      password: 'POST2me4good!!!',
    });
    await client.connect ();
    console.log ("Delete connected");

    var sqlQuery = sqlFormat ('DELETE FROM recipes WHERE id = %L', req.params.id);
    console.log (sqlQuery);
/*    await client.query (sqlQuery, async function (err, result) {
        if (err) {
            console.log ('Delete error ', err);
        }
    });*/

    const result = await client.query (sqlQuery);
    
    await client.end (function (err) {
        if (err) {
            return console.log ("error with close");
        }
        console.log ("client closed after delete");
    });
    res.sendStatus (200);
});

app.listen (3030,function () {
    console.log ('Server started');
});



