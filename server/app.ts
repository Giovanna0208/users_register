import * as express from 'express';
import bodyParser = require('body-parser');
import database from './db';
import controller from './controller';

export default new class App{
    public app: express.Application;
    private database: database;
    private controller: controller;

    constructor(){
        this.app = express();
        this.middleware();
        this.database = new database();
        this.database.createConnection();
        this.controller = new controller();
        this.routes();
    }

    middleware(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));  
    }

    //rotas
    routes(){
        this.app.route('/users').get((req, res) => this.controller.get(req, res));
        this.app.route('/users/:id').get((req, res) => this.controller.getByID(req, res));
        this.app.route('/users').post((req, res) => this.controller.post(req, res));
        this.app.route('/users/:id').put((req, res) => this.controller.put(req, res));
        this.app.route('/users/:id').delete((req, res) => this.controller.delete(req, res));
    }
}