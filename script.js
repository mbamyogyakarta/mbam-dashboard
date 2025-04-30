async function login() {
  const inputPassword = document.getElementById("passwordInput").value;

  const response = await fetch("users.json");
  const data = await response.json();

  if (data.passwords.includes(inputPassword)) {
    window.location.href = "dashboard.html";
  } else {
    alert("Password salah!");
  }
}
