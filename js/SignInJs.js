// emails and passwords for account 
let emails = ["bob@dnd.ie", "alice@dnd.ie", "john@dnd.ie"];
let passwords = ["abcdefgh", "01234567", "a2c4e6h8"];
let username1 = ["Bob", "Alice", "John"];
let currentAccount = -1;

// check if account is valid
function validateAccount(){
    let email1 = document.getElementById("userEmail").value;
    let password1 = document.getElementById("userPassword").value;

    for(let i = 0; i < emails.length; i++){
        if(email1 == emails[i] && password1 == passwords[i]){
            currentAccount = i;
            localStorage.currentAccounts = currentAccount;
            localStorage.username = username1[i];
            location.href = "HomePage.html";
        }
        else{}
    }
}