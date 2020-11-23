import model from './model';

export default class Controller{
    constructor(){}

    //GET
    getUsers(){
        return model.find({});
    }
    get(req, res){
        this.getUsers()
        .then(users => res.status(200).json({'users': users}))
        .catch(error => res.status(400).json({'result': error}))
    }

    //GETByID
    getUsersByID(id){
        return model.find(id);
    }
    getByID(req, res){
        const id = {_id: req.params.id};

        this.getUsersByID(id)
        .then(users => res.status(200).json({'users': users}))
        .catch(error => res.status(400).json({'result': error}))
    }

    //POST
    postUser(data){
        return model.create(data);
    }
    post(req, res){
        const data = req.body;

        this.postUser(data)
        .then(users => res.status(200).json({'users': users}))
        .catch(error => res.status(400).json({'result': error}))
    }

    //PUT
    updateUser(id, data){
        return model.findOneAndUpdate(id, data);
    }
    put(req, res){
        const id = {_id: req.params.id};
        const data = req.body;

        this.updateUser(id, data)
        .then(users => res.status(200).json({'users': users}))
        .catch(error => res.status(400).json({'result': error}))
    }

    //DELETE
    deleteUser(id){
        return model.deleteOne(id)
    }
    delete(req, res){
        const id = {_id: req.params.id};

        this.deleteUser(id)
        .then(users => res.status(200).json({'users': users}))
        .catch(error => res.status(400).json({'result': error}))
    }
}