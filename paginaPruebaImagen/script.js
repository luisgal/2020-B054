const $cargaImagen = document.querySelector("#cargaImagen"),
  $imagenCargada = document.querySelector("#imagenCargada");

$cargaImagen.addEventListener("change", () => {
  const archivos = $cargaImagen.files;
  if (!archivos || !archivos.length) {
    $imagenCargada.src = "";
    return;
  }
  const primerArchivo = archivos[0];
  const objectURL = URL.createObjectURL(primerArchivo);
  $imagenCargada.src = objectURL;
});