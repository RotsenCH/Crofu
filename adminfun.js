const btnAbrirIng = document.querySelector(".ingre");
const btnAbrirEdit = document.querySelector(".edita");
const btnAbrirElim = document.querySelector(".elimi");

const btnAbrirCon = document.querySelector("#btm-registrar-modal");
const btnEditarCon = document.querySelector("#btm-editar-modal");
const btnEliminarCon = document.querySelector("#btm-eliminar-modal");

const btnAbrirNue = document.querySelector("#btm-si");
const btnCerrarModal = document.querySelector("#btm-no");

const btnAbrirNueEdit = document.querySelector("#btm-si-edit");
const btnCerrarEditCon = document.querySelector("#btm-no-edit");

const btnAbrirNueElim = document.querySelector("#btm-si-elim");
const btnCerrarElimCon = document.querySelector("#btm-no-elim");

const modal = document.querySelector(".ingresar-modal");

const modalconfir = document.querySelector(".confir-ingr");
const modaledit = document.querySelector(".editar-modal");
const modalconedit = document.querySelector(".confir-edit");
const modaleliminar = document.querySelector(".eliminar-modal");
const modalconelimina = document.querySelector(".confir-eliminar");


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


btnAbrirElim.addEventListener("click", ()=>{
    modaleliminar.showModal();
})

btnEliminarCon.addEventListener("click", ()=>{
    modalconelimina.showModal();
})


btnAbrirNueElim.addEventListener("click", ()=>{
    modaleliminar.close();
    modalconelimina.close();
})

btnCerrarElimCon.addEventListener("click", ()=>{
    modalconelimina.close();
    modaleliminar.showModal();
})