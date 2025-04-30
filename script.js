async function login() {
  const inputPassword = document.getElementById("passwordInput").value;

  const response = await fetch("users.json");
  const data = await response.json();

  const user = data.users.find(u => u.password === inputPassword);

  if (user) {
    window.location.href = "dashboard.html";
  } else {
    alert("Password salah!");
  }
}
