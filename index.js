const selectorAlquiler = document.getElementById("selectorAlquiler");
const selectorVenta = document.getElementById("selectorVenta");
const selectorTasacion = document.getElementById("selectorTasacion");

const textSelectorAlq = document.getElementById("textSelectorAlq");
const textSelectorVen = document.getElementById("textSelectorVen");
const textSelectorTas = document.getElementById("textSelectorTas");

selectorAlquiler.addEventListener("mouseover", () => {
  selectorAlquiler.src = "Imagenes/Alquiler2.svg";
  textSelectorAlq.style.visibility = "visible";
});
selectorVenta.addEventListener("mouseover", () => {
  selectorVenta.src = "Imagenes/Venta2.svg";
  textSelectorVen.style.visibility = "visible";
});
selectorTasacion.addEventListener("mouseover", () => {
  selectorTasacion.src = "Imagenes/Tasacion2.svg";
  textSelectorTas.style.visibility = "visible";
});

selectorAlquiler.addEventListener("mouseleave", () => {
  selectorAlquiler.src = "Imagenes/Alquiler.svg";
  textSelectorAlq.style.visibility = "hidden";
});
selectorVenta.addEventListener("mouseleave", () => {
  selectorVenta.src = "Imagenes/Venta.svg";
  textSelectorVen.style.visibility = "hidden";
});
selectorTasacion.addEventListener("mouseleave", () => {
  selectorTasacion.src = "Imagenes/Tasacion.svg";
  textSelectorTas.style.visibility = "hidden";
});
