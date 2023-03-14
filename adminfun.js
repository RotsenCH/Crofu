const btnAbrirIng = document.querySelector(".ingre");
const btnAbrirEdit = document.querySelector(".edita");

const btnAbrirCon = document.querySelector("#btm-registrar-modal");
const btnEditarCon = document.querySelector("#btm-editar-modal")

const btnAbrirNue = document.querySelector("#btm-si");
const btnCerrarModal = document.querySelector("#btm-no");
const btnAbrirNueEdit = document.querySelector("#btm-si-edit");
const btnCerrarEditCon = document.querySelector("#btm-no-edit");

const modal = document.querySelector(".ingresar-modal");

const modalconfir = document.querySelector(".confir-ingr");
const modaledit = document.querySelector(".editar-modal");
const modalconedit = document.querySelector(".confir-edit");


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

btnAbrirEdit.addEventListener("click", ()=>{
    modaledit.showModal();
})

btnEditarCon.addEventListener("click", ()=>{
    modaledit.close();
    modalconedit.showModal();
})

btnCerrarEditCon.addEventListener("click", ()=>{
    modalconedit.close();
    modaledit.showModal();
})

btnAbrirNueEdit.addEventListener("click", ()=>{
    modaledit.close();
    modalconedit.close();
})