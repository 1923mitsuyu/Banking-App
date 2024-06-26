function displayNone(ele){
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}

function displayBlock(ele){
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
}

 // Store the frequently used div tags 
 const config = {
    initialForm: document.getElementById("initial-form"),
    bankPage: document.getElementById("bankPage"),
    sidePage: document.getElementById("sidePage"),
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
    menuCon.classList.add("d-flex", "justify-content-center", "flex-wrap text-center", "py-3 mx-0");

    menuCon.innerHTML = 
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

    // 押されたらアラートを出す処理
    menuCon.querySelectorAll("#withdrawBtn")[0].addEventListener("click", function() {
        withdrawController(bankAccount)
    })
    menuCon.querySelectorAll("#depositBtn")[0].addEventListener("click", function() {
        alert("depositBtn")
    })
    menuCon.querySelectorAll("#comeBackLaterBtn")[0].addEventListener("click", function() {
        alert("comeBackLaterBtn")
    })

    let container = document.createElement("div");
    container.append(infoCon, balanceCon, menuCon);

    return container;
}

// 3ページ目 : component1 
function billInputSelecter(title) {
    let container = document.createElement("div");
    container.innerHTML =
    `
    <h2 class="pb-3">${title}</h2>
    <div class="form-group row">
        <label for="moneyWithdraw100" class="col-2 col-form-label col-form-label-sm">$100</label>
        <div class="col-10">
            <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="100" id="moneyWithdraw100" placeholder="5">
        </div>
    </div>
    <div class="form-group row">
        <label for="moneyWithdraw50" class="col-2 col-form-label col-form-label-sm">$50</label>
        <div class="col-10">
            <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="50" id="moneyWithdraw50" placeholder="1">
        </div>
    </div>
    <div class="form-group row">
        <label for="moneyWithdraw20" class="col-2 col-form-label col-form-label-sm">$20</label>
        <div class="col-10">
            <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="20" id="moneyWithdraw20" placeholder="2">
        </div>
    </div>
    <div class="form-group row">
        <label for="moneyWithdraw10" class="col-2 col-form-label col-form-label-sm">$10</label>
        <div class="col-10">
            <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="10" id="moneyWithdraw10" placeholder="3">
        </div>
    </div>
    <div class="form-group row">
        <label for="moneyWithdraw5" class="col-2 col-form-label col-form-label-sm">$5</label>
        <div class="col-10">
            <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="5" id="moneyWithdraw5" placeholder="1">
        </div>
    </div>
    <div class="form-group row">
        <label for="moneyWithdraw1" class="col-2 col-form-label col-form-label-sm">$1</label>
        <div class="col-10">
            <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="1" id="moneyWithdraw1" placeholder="4">
        </div>
    </div>
    <div class="text-center money-box p-3">
        <p id="withdrawTotal">$0.00</p>
    </div>
    `
    return container
}

// 3ページ目 : component2 
function backNextBtn(backString, nextString) {
    let container = document.createElement("div");
    container.innerHTML =
    `
    <div class="d-flex justify-content-between">
        <div class="col-6 pl-0">
            <button id="withdrawGoBack" class="btn btn-outline-primary col-12">${backString}</button>
        </div>
        <div class="col-6 pr-0">
            <button id="withdrawProcess" class="btn btn-primary col-12">${nextString}</button>
        </div>
    </div>
    `

    return container
}

function withdrawPage(bankAccount) {
    let container = document.createElement("div");
    container.classList.add("p-5");
    container.append(withdrawContainer)

    let withdrawContainer = document.createElement("div");
    withdrawContainer.append(billInputSelecter("Please Enter The Withdrawal Amount"));
    withdrawContainer.append(billInputSelecter("back", "next"));

    let backBtn = withdrawContainer.querySelectorAll(".back-btn").item(0);
    backBtn.addEventListener("click", function() {
        displayNone(config.sidePage);
        displayBlock(config.bankPage);
        config.bankPage.append(mainBankpage(bankAccount));
    })

    let billInput = withdrawContainer.querySelector(".bill-input");

    for(let i = 0; i < billInput.length; i++){
        billInput[i].addEventListener("change", function(event) {
            document.getElementById("withdrawTotal").innerHTML =  billInput[i].value
        })
    }

    let nextBtn = withdrawContainer.querySelectorAll(".next.btn").item(0);
    nextBtn.addEventListener("click", function() {
        container.innerHTML = "";

        let confirmDialog = document.createElement("div");
        confirmDialog.append(billDialog("The money you are going to take is...", billInput, "data-bill"));
        container.append(confirmDialog);

        let total = billSummation(billInput, "data-bill");
        confirmDialog.innerHTML += 
        `
        <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
            <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
            <p class="col-4 text-right rem1p5">$${bankAccount.calculateWithdrawAmount(total)}</p>
        </div>
        `

        // From here 
    })

    return container
}

function billSummation(inputElementNodeList, multiplierAttribute){
    let total = 0; 

    for(let i = 0; i < inputElementNodeList.length; i++) {
        let currEle = inputElementNodeList[i];
        let value = parseInt(currEle.value);

        value = currEle.hasAttribute(multiplierAttribute) ? parseInt(currEle.getAttribute(multiplierAttribute)) * value : value;
        summation += value >= 0 ? value : 0
    }

    return summation;

}

function billDialog(title, inputElementNodeList, multiplierAttribute){


}
