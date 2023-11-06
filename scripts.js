window.addEventListener("DOMContentLoaded", () => {
  const inputsColor = document.querySelectorAll('input[name=product_color]');
  const formColorLabel = document.getElementById('productColorValue');
  const priceText = document.getElementById("price");
  inputsColor.forEach((input) => {
    input.addEventListener('change', (e) => {
      formColorLabel.innerText = e.target.dataset.nameDisplay;
      priceText.innerText = "EUR 100";
    });
  });

  const inputsQuantity = document.querySelectorAll('.input-quantity');
  inputsQuantity.forEach((input) => {
    const inputField = input.querySelector('.input-quantity__field');
    const inputBtnIncrease = input.querySelector('.input-quantity__btn[data-action=increase]');
    const inputBtnDecrease = input.querySelector('.input-quantity__btn[data-action=decrease]');
    inputBtnIncrease.addEventListener('click', () => {
      const initialValue = inputField.value * 1;
      inputField.value = initialValue + 1; 
    });
    inputBtnDecrease.addEventListener('click', () => {
      const initialValue = inputField.value * 1;
      if (initialValue > 1) inputField.value = initialValue - 1;
    });    
  });

  const accordions = document.querySelectorAll('.accordion__item');
  accordions.forEach((accordion) => {
    const accordionTitle = accordion.querySelector('.accordion__item-title');
    accordionTitle.addEventListener('click', () => {
      accordion.classList.toggle('accordion__item_active');
      const title = accordion.querySelector('.accordion__item-title');
      if (accordion.classList.contains('accordion__item_active')) {
        title.setAttribute('aria-expanded', 'true');
      } else {
        title.setAttribute('aria-expanded', 'false');   
      }
    });    
  });

  const modalTarget = document.querySelectorAll('.modal-target');
  modalTarget.forEach((modalTarget)=> {
    modalTarget.addEventListener('click', ()=>{
      const modalWindow = document.querySelector('.modal');
      showModal(modalWindow);
    });
  });
  const modalBackdrop = document.querySelectorAll('.modal-backdrop');
  modalBackdrop.forEach((modalBackdrop)=> {
    modalBackdrop.addEventListener('click', (e) => {

      const modalWindow = e.target.closest('.modal');
      modalWindow.classList.remove('show-modal');
    });
  });

  const showModal = (modalWindow) => {
    modalWindow.classList.add('show-modal');
  }


})