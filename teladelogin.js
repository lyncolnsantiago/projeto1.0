function Entrar() {
  var a = document.getElementById("usuario").value,
    b = document.getElementById("senha").value;
  "lyncoln" == a && "1234" == b
    ? (location.href = "inicio.html")
    : alert("usuario ou senha incorretos");
}
