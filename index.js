// import library modules and framework
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// port and middleware
const port = process.env.PORT || config.PORT;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 

// direct to build view
app.use(express.static(__dirname + '/view/dist/view/'));

// direct response to view
app.use((req, res) => {
   res.sendFile(path.join(__dirname, '/view/dist/view', 'index.html'))
});


// forbidden server api link form client
app.use('*', (req, res) => {
    res.status(403).send('403 \n Access is forbidden to the requested page.');
});
 
// start listening to port
app.listen(port, () => console.log(`listening to port ${port}`));