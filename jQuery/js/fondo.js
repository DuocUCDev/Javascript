let contador = 0;

$(document).ready(function () {
  $("#red").click(function () {
    contador++;
    cambiarColorYContador("red", "white", "#red", contador);
  });

  $("#green").click(function () {
    contador++;
    cambiarColorYContador("green", "white", "#green", contador);
  });

  $("#blue").click(function () {
    contador++;
    cambiarColorYContador("blue", "white", "#blue", contador);
  });
});

function cambiarColorYContador(colorFondo, colorFuente, idEtiqueta, contador) {
  $("body").css("background-color", colorFondo);
  $(idEtiqueta).css("color", colorFondo);
  $("h1").css("color", colorFuente);
  $("#contador").text(contador);
}
