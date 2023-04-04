let username1 = localStorage.username;
let currentAccount = localStorage.currentAccounts;
if(currentAccount > -1){
    document.getElementById("username").innerHTML = username1;
}