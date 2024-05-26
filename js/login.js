var user = document.getElementById("username");
var pass =  document.getElementById("password");
var btn = document.querySelector(".login-button");

function checkvalidity(){
        if(user.value == "" || pass.value ==""){
            alert("Please provide Username & Password ")
        }
    
}

btn.addEventListener("click", checkvalidity)
// Sample user database
let users = [];

// Signup function
function signUp(username, password) {
    // Check if username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return "Username already exists. Please choose a different one.";
    }

    // Create new user object
    const newUser = {
        username: username,
        password: password
    };

    // Add new user to the database
    users.push(newUser);
    return "Signup successful!";
}

// Login function
function login(username, password) {
    // Find user in database
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        return "Login successful!";
    } else {
        return "Invalid username or password.";
    }
}

// Example usage
console.log(signUp("user1", "password123")); // Signup successful!
console.log(signUp("user1", "password123")); // Username already exists. Please choose a different one.
console.log(login("user1", "password123")); // Login successful!
console.log(login("user1", "wrongpassword")); // Invalid username or password.
