export default function initModal() {
  const abrirLogin = document.querySelector('[data-modal="abrir"]');
  const fecharBtn = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector(
    '[data-modal="modal-container"]'
  );
  
  if (abrirLogin && fecharBtn && modalContainer) {
    function initLogin(e) {
      e.preventDefault();
      modalContainer.classList.add("ativo");
    }

    function closeBtn(e) {
      e.preventDefault();
      modalContainer.classList.remove("ativo");
    }

    function fecharModal(e) {
      if (e.target === this) {
        closeBtn(e);
      }
    }

    abrirLogin.addEventListener("click", initLogin);
    fecharBtn.addEventListener("click", closeBtn);
    modalContainer.addEventListener("click", fecharModal);
  }
}
