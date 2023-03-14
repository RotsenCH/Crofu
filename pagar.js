const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btm-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})

const pagoexitoso = document.querySelector("#pago-exitoso");
const btnpagar = document.querySelector("#btm-pagar");
const btok = document.querySelector("#btn-ok");

btnpagar.addEventListener("click",()=>{
    pagoexitoso.showModal();
})

btok.addEventListener("click", ()=>{
    pagoexitoso.close();
})



