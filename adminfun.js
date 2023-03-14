const btnAbrirIng = document.querySelector(".ingre");
const btnAbrirCon = document.querySelector("#btm-registrar-modal");

const btnAbrirNue = document.querySelector("#btm-si");
const btnCerrarModal = document.querySelector("#btm-no");
const modal = document.querySelector(".ingresar-modal");

const modalconfir = document.querySelector(".confir-ingr");

btnAbrirIng.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
    modalconfir.close();
})

btnAbrirCon.addEventListener("click", ()=>{
    modalconfir.showModal();
})

btnAbrirNue.addEventListener("click", ()=>{
    modalconfir.close();
})