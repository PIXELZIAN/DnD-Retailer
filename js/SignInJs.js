// emails and passwords for account;
let emails = ["bob@dnd.ie", "alice@dnd.ie", "john@dnd.ie"];
let passwords = ["abcdefgh", "01234567", "a2c4e6h8"];
let username1 = ["Bob", "Alice", "John"];
let currentAccount = -1;

// check if account is valid
function validateAccount(){
    let emailSignIn = document.getElementById("userEmail").value;
    let passwordSignIn  = document.getElementById("userPassword").value;

    for(let i = 0; i < emails.length; i++){
        if(emailSignIn == emails[i] && passwordSignIn == passwords[i]){
            currentAccount = i;
            localStorage.currentAccounts = currentAccount;
            localStorage.username = username1[i];
            location.href = "HomePage.html";
        }
        else{}
    }
}

function newAccount(){
    let emailSignUp = document.getElementById("userEmail").value;
    let username2 = document.getElementById("usernameSignUp").value;
    let passwordSignUp1 = document.getElementById("userPassword1").value;
    let passwordSignUp2 = document.getElementById("userPassword2").value;

     //check if email is valid
     var at = "@";
     var dot = ".";
     let emailAt = emailSignUp.indexOf(at);
     let emailDot = emailSignUp.indexOf(dot);
     if( emailAt == -1 || emailDot == -1){
         alert("You have entered an invalid email address!")
         return (false)
     }
     else{
         return (true)
     }

    //if username has 8 or more characters
    if (username2.length < 8) {
        alert("Name must have 8 characters");
        return false;
    }

    //password
    //if password has 8 or more characters
    if (passwordSignUp1.length < 8) {
        alert("Password must have 8 characters");
        return false;
    }
    //if password1 and password2 is the same
    if (password1 == passwordSignUp2) {
        return true;
    } else{
        alert("Password must be the same");
        return false;
    }	   
}