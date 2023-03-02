const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended :false}));

const root = require('./routes/root')

app.use('/' , root);

app.get('/*', (req, res)=>{
    res.send('file not found');
})

app.listen(3000, ()=>{
    console.log('app listening ', 3000);
})