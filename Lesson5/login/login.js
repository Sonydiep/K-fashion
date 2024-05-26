let login=document.getElementById('login');
login.addEventListener("submit", (e) => {
    e.preventDefault()
    let users = JSON.parse(localStorage.users);
    let email = document.getElementById('email');
    let pw =document.getElementById("password");

    let check=false;
    for (let i=0; i < users.length; i++){
    if (users[i].email === email.value.trim() && users[i].pw === pw.value.trim()){
        check = true;
        break;
    }}


if (check === true) {
    location.replace("/Users/sonydiep/Downloads/Merlin-Fashion-master/index.html");
} else {
    alert("account does not exist")
}
})