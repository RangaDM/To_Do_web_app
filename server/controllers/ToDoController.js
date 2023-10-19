const ToDoModel = require('../models/ToDoModal');

module.exports.getToDo = async (req, res) => {
    //get email from params
    const { email } = req.params;
    //find all todos with that email
    const todo = await ToDoModel.find({email});

    
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    console.log(req.body)
    const { text,email } = req.body;

    ToDoModel
        .create({ text,email })
        .then(() => res.set(201).send("Added Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}