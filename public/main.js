const API_URL = "/api/person";

async function fetchPersons() {
    const response = await fetch(API_URL);
    const persons = await response.json();
    console.log(persons)
    renderPersons(persons);
}

function renderPersons(persons) {
    const personList = document.getElementById("person-list");
    personList.innerHTML = "";

    persons.forEach(person => {
        const personDiv = document.createElement("div");
        personDiv.className = "person";
        console.log(person)
        personDiv.innerHTML = `
            <h3>${person.name} ${person.lastname}</h3>
            <p>Email: ${person.email}</p>
            <p>Birthdate: ${person.birthdate}</p>
            <p>Password: ${person.password}</p>
            <button onclick="deletePerson(${person.id})">Delete</button>
        `;

        personList.appendChild(personDiv);
    });
}

async function addPerson(event) {
    event.preventDefault();

    const newPerson = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        birthdate: document.getElementById("birthdate").value,
        password: document.getElementById("password").value,
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPerson)
    });

    fetchPersons();
    document.getElementById("person-form").reset();
}

async function deletePerson(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    fetchPersons();
}

document.getElementById("person-form").addEventListener("submit", addPerson);
fetchPersons(); 