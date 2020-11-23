import * as mongoose from 'mongoose';

//Configuração do MongoDB
export default class DataBase{
    private dburl = 'mongodb://127.0.0.1/user_register';
    private dbconnection;

    constructor(){}

    createConnection(){
        mongoose.connect(this.dburl);
        this.logger(this.dburl);
    }

    //Conecta a aplicação ao banco de dados
    logger(uri){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('MONGOOSE CONNECTED'));
        this.dbconnection.on('error', error => console.log('CONNECTION ERROR: ', error));
    }
}