function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// You can add logic here to check the username and password against a database of users
	// For now, we will assume there are two users: "user1" and "user2"

	if (username === "Kashish" && password === "Kashish4768") {
		window.location.href = "user1.html";
	} else if (username === "Pranshul" && password === "Pranshul4782") {
		window.location.href = "user2.html";
	} else {
		showAlert("Invalid login credentials");
	}
}

function showAlert(message) {
	var alertDiv = document.createElement("div");
	alertDiv.classList.add("alert");
	alertDiv.innerHTML = message + '<span class="alert-close" onclick="function() {alertDiv.remove();}">&#10006;</span>';

	document.body.appendChild(alertDiv);
}
