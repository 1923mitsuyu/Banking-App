 // Store the frequently used div tags 
 const config = {
    initialForm: document.getElementById("initial-form"),
    bankPage: document.getElementById("bankPage"),
}

// Define a class 
class BankAccount {

    // constructor to initialize an object 
    constructor(firstName, lastName, email, type, accountNumber, money) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.accountNumber = accountNumber;
        this.money = money;
        this.initialDeposit = money;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

// Generate a random integer between min and max
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let user; // Define user in the global scope

// Called when the user pushes the submit button
function initialiseUserAccount() {
    const form = document.getElementById("bank-form");

    user = new BankAccount(
        form.querySelectorAll(`input[name="userFirstName"]`)[0].value,
        form.querySelectorAll(`input[name="userLastName"]`)[0].value,
        form.querySelectorAll(`input[name="userEmail"]`)[0].value,
        form.querySelectorAll(`input[name="userAccountType"]:checked`)[0].value,
        getRandomInteger(0, Math.pow(10, 8)),
        parseInt(form.querySelectorAll(`input[name="userFirstDeposit"]`)[0].value)
    );

    console.log(user);
}