document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  if (usuario === "admin" && password === "1234") {
    window.location.href = "EconomiaLigera.html";
  } else {
    document.getElementById("loginMsg").textContent = "Datos incorrectos";
  }
});