const personModel = require("../models/personModel");

module.exports = {
    getAllPersons: (req, res) => {
        const persons = personModel.findAll();
        res.json(persons);
    },
    getPersonById: (req, res) => {
        const person = personModel.findById(parseInt(req.params.id));
        if (!person) return res.status(404).json({ error: "Person not found" });
        res.json(person);
    },
    createPerson: (req, res) => {
        const newPerson = req.body;
        const createdPerson = personModel.create(newPerson);
        console.log(createdPerson)
        res.status(201).json(createdPerson);
    },
    updatePerson: (req, res) => {
        const id = parseInt(req.params.id);
        const updatedPerson = req.body;
        const result = personModel.update(id, updatedPerson);
        if (!result) return res.status(404).json({ error: "Person not found" });
        res.json(result);
    },
    deletePerson: (req, res) => {
        const id = parseInt(req.params.id);
        const result = personModel.delete(id);
        if (!result) return res.status(404).json({ error: "Person not found" });
        res.status(204).send();
    }
};
