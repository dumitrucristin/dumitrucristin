document.getElementById("parent").addEventListener("click", function () {
  alert("Parent Clicked!");
});

document.getElementById("child").addEventListener("click", function (event) {
  event.stopPropagation(); // Stops the event from propagating to parent
  alert("Child Clicked!");
});

window.addEventListener("load", async function () {
  const loginForm = document.querySelector(".login-form");
  const body = document.querySelector("body");

  // Create a message to display logged-in info
  const loggedInMessage = document.createElement("p");
  const logoutButton = document.createElement("button");
  const timerDisplay = document.createElement("p"); // For displaying logged-in time
  const changeBgButton = document.createElement("button"); // Button to change background color

  let timer;
  let startTime;

  // Check if the user is already logged in
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    loggedInMessage.textContent = `Logged in as ${loggedInUser.username}`;
    loggedInMessage.style.fontSize = "18px";
    loggedInMessage.style.fontWeight = "bold";
    loggedInMessage.style.marginTop = "10px";

    // Add the message to the page
    body.insertBefore(loggedInMessage, loginForm);

    // Create and display the Logout button
    logoutButton.textContent = "Logout";
    logoutButton.style.marginTop = "10px";
    logoutButton.style.padding = "10px";
    body.insertBefore(logoutButton, loginForm);

    // Display the timer
    timerDisplay.style.fontSize = "16px";
    timerDisplay.style.marginTop = "10px";
    body.insertBefore(timerDisplay, logoutButton);

    // Create and display the Change Background button
    changeBgButton.textContent = "Change Background Color";
    changeBgButton.style.marginTop = "10px";
    changeBgButton.style.padding = "10px";
    body.insertBefore(changeBgButton, logoutButton);

    // Hide the login form if the user is logged in
    loginForm.style.display = "none";

    // Set up the timer for the logged-in user
    startTime = Date.now();
    updateTimer();

    // Logout functionality
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");

      // Remove the logged-in message and logout button
      loggedInMessage.remove();
      logoutButton.remove();
      timerDisplay.remove();
      changeBgButton.remove();

      // Show the login form again
      loginForm.style.display = "block";

      alert("You have logged out.");
    });

    return; // Skip the login form processing if the user is logged in
  }

  // Fetch JSON data for users
  const res = await fetch("https://dumitrucristin.github.io/dumitrucristin/albums.json");
  const users = await res.json();

  // Handle login form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh on form submission

    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    // Find the user in the fetched JSON data
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Store the logged-in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({ username }));

      // Show logged-in message and hide the login form
      loggedInMessage.textContent = `Logged in as ${username}`;
      body.insertBefore(loggedInMessage, loginForm);

      // Create and display the Logout button
      logoutButton.textContent = "Logout";
      logoutButton.style.marginTop = "10px";
      logoutButton.style.padding = "10px";
      body.insertBefore(logoutButton, loginForm);

      // Display the timer
      timerDisplay.style.fontSize = "16px";
      timerDisplay.style.marginTop = "10px";
      body.insertBefore(timerDisplay, logoutButton);

      // Create and display the Change Background button
      changeBgButton.textContent = "Change Background Color";
      changeBgButton.style.marginTop = "10px";
      changeBgButton.style.padding = "10px";
      body.insertBefore(changeBgButton, logoutButton);

      // Hide the login form after successful login
      loginForm.style.display = "none";

      // Set up the timer for the logged-in user
      startTime = Date.now();
      updateTimer();

      alert("Login successful!");

      logoutButton.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");

        // Remove the logged-in message and logout button
        loggedInMessage.remove();
        logoutButton.remove();
        timerDisplay.remove();
        changeBgButton.remove();

        // Show the login form again
        loginForm.style.display = "block";

        alert("You have logged out.");
      });

      return;
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

  // Function to update the timer display
  function updateTimer() {
    timer = setInterval(function () {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Time in seconds
      const minutes = Math.floor(elapsedTime / 60);
      const seconds = elapsedTime % 60;
      timerDisplay.textContent = `Logged in for: ${minutes}m ${seconds}s`;
    }, 1000); // Update every second
  }

  // Function to change the background color to a random color
  function changeBackgroundColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    body.style.backgroundColor = randomColor;
  }

  // Add event listener to change the background color
  changeBgButton.addEventListener("click", changeBackgroundColor);
  const computedStyle = window.getComputedStyle(loginForm);
  console.log(computedStyle.color);
});
