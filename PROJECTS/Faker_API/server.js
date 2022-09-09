const { faker } = require('@faker-js/faker');
// Bring in Express
const express = require('express');
const app = express(); // invoking express()
const PORT = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// -------------User class----------------------------------------------------------------
class User {
    constructor() {
        this._id = faker.random.numeric(6);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
// Create a new User
const newUser = new User();

// -------------Company class----------------------------------------------------------------
class Company {
    constructor(_id, name, street, city, state, zipCode, country) {
        this._id = faker.random.numeric(6);
        this.name = faker.name.fullName();
        this.address = {
            "street": faker.address.streetAddress(true),
            "city": faker.address.cityName(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        };

    }
}
// Create a new Company
const newCompany = new Company();

// Read one user
app.get("/api/users/new", (req, res) => {
    res.json(newUser)
})

// Read one company
app.get("/api/companies/new", (req, res) => {
    res.json(newCompany)
})

// Read one user and one company
app.get("/api/user/company", (req, res) => {
    res.json({
        New_User: newUser,
        New_Company: newCompany
    })
})

// Start a server
app.listen(PORT, () => console.log(`Server up on PORT: ${PORT}`))

