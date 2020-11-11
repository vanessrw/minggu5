import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import config from './environment';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
routes(app);

//Connect to database
mongoose.connect(config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
const database = mongoose.connection;
database.once("open", async () => {
    console.log("Connected to database");
});
database.on("error", () => {
    console.log("Error connecting to database");
});

const server = http.createServer(app);
//server initialization

function startServer(){
    server.listen(config.port, parseInt(config.host), function(){
        console.log('Express server listening on %d, in %s mode %s', config.port, config.host, config.env)
    });
}

app.get('/api/index/:id', (req, res) => {
    console.log("req: ", req)
    return res.status(200).json({message: "success !"})
})
app.post('/api/create', (req, res) => {
    console.log("req: ", req)
    return res.status(200).json({message: "success !"})
})
app.delete('/api/remove/:id', (req, res) => {
    console.log("req: ", req)
    return res.status(200).json({message: "success !"})
})
app.put('/api/update/:id', (req, res) => {
    console.log("req: ", req)
    return res.status(200).json({message: "success !"})
})

export default routes;
setImmediate(startServer);
