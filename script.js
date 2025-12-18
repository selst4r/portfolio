
document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark-mode");
};

document.getElementById("editJobBtn").onclick = function () {
    let newTitle = prompt("Enter new job title:");
    if (newTitle) {
        document.getElementById("jobTitle").textContent = newTitle;
    }
};

document.getElementById("toggleSkillsBtn").onclick = function () {
    let skills = document.getElementById("skillsSection");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        this.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        this.textContent = "Show Skills";
    }
};

document.getElementById("msgBox").onkeyup = function () {
    let max = 200;
    let current = this.value.length;
    document.getElementById("counter").textContent = max - current;
};

function validateForm() {
    let name = document.getElementById("nameField").value;
    let email = document.getElementById("emailField").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields");
        return false;
    }
    return true;
}

let today = new Date();
document.getElementById("dateDisplay").textContent =
    "Today's date: " + today.toDateString();

function showGreeting() {
    let hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    document.getElementById("greeting").textContent = greeting;
}

showGreeting();
