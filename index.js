
const express = require('express');
const path = require("path");

const port = process.env.port || 3000;
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('pages/index');
});

app.listen(port, () =>{
    console.log(`Server running on port:  ${port}` );
});
