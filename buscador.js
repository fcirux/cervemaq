
document.getElementById("buscador").addEventListener("keyup", function() {
  let filtro = this.value.toLowerCase();
  let items = document.querySelectorAll("#lista-productos li");
  items.forEach(function(item) {
    let texto = item.textContent.toLowerCase();
    item.style.display = texto.includes(filtro) ? "" : "none";
  });
});
