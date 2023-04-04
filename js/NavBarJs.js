let usernames = localStorage.username;
let currentAccount1 = localStorage.currentAccounts;
if(currentAccount1 > -1){
    document.getElementById("username").innerHTML = "<li class='nav-item dropdown'> <a class='nav-link text-dark bg-white border border-light rounded dropdown-toggle' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> "+ usernames +" </a> <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'> <a type='button' onclick='LogOutAccount()' class='dropdown-item'>Log Out</a> </div> </li>";
}

function LogOutAccount() {
  localStorage.username = ""
  localStorage.currentAccounts = -1
  location.href = "HomePage.html";
}