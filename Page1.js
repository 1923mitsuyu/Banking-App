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

// Define user in the global scope
let user; 

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

    // 現在のページを非表示
    config.initialForm.classList.add("d-none");

    // 次のページを追加
    config.bankPage.append(mainBankpage(user))
}

function mainBankpage(bankAccount) {

    // 1st Section
    let infoCon = document.createElement("div");
    infoCon.classList.add("pb-2", "pb-md-4", "text-right");

    let nameP = document.createElement("p");
    nameP.classList.add("py-1")
    let accountP = nameP.cloneNode(true)
    let moneyP = nameP.cloneNode(true);

    nameP.innerHTML = bankAccount.getFullName();
    accountP.innerHTML = bankAccount.accountNumber;
    moneyP.innerHTML = bankAccount.initialDeposit;
    
    infoCon.append(nameP, accountP, moneyP);
    
    // 2nd Section 
    let balanceCon = document.createElement("div");
    balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

    balanceCon.innerHTML = 
    `
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$12,345</p>
    `;

    // 3rd Section
    let menuCon = document.createElement("div");
    balanceCon.classList.add("d-flex", "justify-content-center", "flex-wrap text-center", "py-3 mx-0");

    balanceCon.innerHTML = 
    `
    <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
        <div id="withdrawBtn" class="bg-blue hover p-3">
            <h5>WITHDRAWAL</h5>
            <i class="fas fa-wallet fa-3x"></i>
        </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="depositBtn" class="bg-blue hover p-3">
                <h5>DEPOSIT</h5>
                <i class="fas fa-coins fa-3x"></i>
            </div>
            </div>
            <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
                <div id="comeBackLaterBtn" class="bg-blue hover p-3">
                    <h5>COME BACK LATER</h5>
                    <i class="fas fa-home fa-3x"></i>
            </div>
        </div>
    `
    
    return infoCon
}