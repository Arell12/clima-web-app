const btnHoy = document.getElementById("btnHoy");
const btnSemana = document.getElementById("btnSemana");
const contenidoHoy = document.getElementById("contenidoHoy");
const contenidoSemana = document.getElementById("contenidoSemana");

btnHoy.addEventListener("click", () => {
    contenidoHoy.classList.remove("hidden");
    contenidoSemana.classList.add("hidden");
    btnHoy.classList.add("text-indigo-600", "font-semibold");
    btnSemana.classList.remove("text-indigo-600", "font-semibold");
});

btnSemana.addEventListener("click", () => {
    contenidoHoy.classList.add("hidden");
    contenidoSemana.classList.remove("hidden");
    btnSemana.classList.add("text-indigo-600", "font-semibold");
    btnHoy.classList.remove("text-indigo-600", "font-semibold");
});
