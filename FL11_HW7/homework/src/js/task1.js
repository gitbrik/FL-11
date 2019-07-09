// Your code goes here
const email = prompt("Enter email");
const credentials = {
    "UserPass": "user@gmail.com",
    "AdminPass": "admin@gmail.com"
};

if (email === '' || email === ' ' || !email) {
    alert("Canceled");
} else if (email.length < 6) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    const pass = prompt("Enter pass");
    if (pass === '' || pass === ' ' || !pass) {
        alert("Canceled");
    } else if (!(credentials[pass] === 'user@gmail.com' || credentials[pass] === 'admin@gmail.com')) {
        alert("Wrong password!");
    } else {
        const newPassConformation = confirm("Do you want to change your password?");
        if (newPassConformation) {
            const oldPass = prompt("Enter old pass");
            if (oldPass === '' || oldPass === ' ' || !oldPass) {
                alert("Canceled");
            } else if (!(credentials[oldPass] === 'user@gmail.com' || credentials[oldPass] === 'admin@gmail.com')) {
                alert("Wrong password!");
            } else {
                const newPass = prompt("Enter new pass");
                if (newPass.length < 5) {
                    alert("It’s too short password. Sorry.");
                } else {
                    const newPassConformation = prompt("Enter new pass again");
                    if (newPass === newPassConformation) {
                        alert("You have successfully changed your password.");
                    } else {
                        alert("You wrote the wrong password.");
                    }
                }
            }
        } else {
            alert("You have failed the change.");

        }
    }
} else {
    alert("I don’t know you");
}

