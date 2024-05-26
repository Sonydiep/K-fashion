let register = document.querySelector('#register');
register.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById('email');
    let pw = document.getElementById("password")
    let confirmpass = document.getElementById('confirm-password');
    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g


    if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
        alert("Please input your email & password")

    }
    else if (email.value.trim().length == 0) {
        alert('please input your email');
    }
    else if (pw.value.trim().length == 0) {
        alert('please input your password'); }
        else if (confirmpass.value.trim().length == 0) {
            alert('please input your confirm password'); }
    else if (pw.value.trim().length < 8) {
            alert('Password must be at least 8 characters.');}
    else if (!pw.value.trim().match(lowerCaseLetter)) {
                alert('Password must be contain a lowercase letter')}
    else if (!pw.value.trim().match(upperCaseLetter)) {
         alert('Password must be contain a uppercase letter')}
         else if (!pw.value.trim().match(numbers)) {
            alert('Password must be contain a number or special character')}
        else if(pw.value.trim() !== confirmpass.value.trim())

        {
            alert("password and confirm password not match!");
        }
        else {
            if(localStorage.users) {
                let users=JSON.parse(localStorage.users); 
                let userExist = false;
                for (let i = 0; i < users.length; i++)
                {
                    if (users[i].email === email.value) {
                        userExist = true;
                        break };
                    
                }
                if(userExist === true) {
                    alert('User existed');
                }
                else {
                
            
                users.push({
                    email: email.value.trim(),
                    pw: pw.value.trim()
                })
                localStorage.setItem("users", JSON.stringify(users))
            } } else {
                localStorage.setItem("users", JSON.stringify(
                    [{
                        email: email.value.trim(),
                        pw: pw.value.trim()
                    }]
                ) 
                )
                alert('register successful')
            location.replace("../login/login.html");
            }
            

        }









            })