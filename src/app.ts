import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import config from'./environment'


const app = express()

app.use(cors({ origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const server = http.createServer(app);
//server initialization

function startServer(){
    server.listen(config.port, parseInt(config.host), function(){
        console.log('Express server listeningon %d, in %s mode %s', config.port, config.host, config.env)
    });
}

setImmediate(startServer);
