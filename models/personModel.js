let persons = [
    {
        id: 10,
        name: "Rodrigo",
        lastname: "Nogueira",
        username: "RodrigoNogueira",
        email: "rdg6design@gmail.com",
        birthdate: "1987-09-01",
        address: {
            street: "José Merhy",
            number: 1680,
            city: "Curitiba",
            zipcode: "82560440"
        },
        phone: "5541998004952",
        cpf: "04531440986",
        password: "securepassword123"
    }
];

module.exports = {
    findAll: () => persons,
    findById: (id) => persons.find(person => person.id === id),
    create: (person) => {
        persons.push(person);
        return person;
    },
    update: (id, updatedPerson) => {
        const index = persons.findIndex(person => person.id === id);
        if (index !== -1) {
            persons[index] = { ...persons[index], ...updatedPerson };
            return persons[index];
        }
        return null;
    },
    delete: (id) => {
        const index = persons.findIndex(person => person.id === id);
        if (index !== -1) {
            return persons.splice(index, 1);
        }
        return null;
    }
};
