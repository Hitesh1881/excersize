// Create a function called `checkLogin` that takes a username and a password as parameters.
//  If the username is "user" and the password is "pass", log "Login successful"; otherwise, log "Login failed".


function checkLogin(username, password) {
    if (username === "user" && password === "pass") {
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }
}

checkLogin("user", "pass");
checkLogin("admin", "password");
