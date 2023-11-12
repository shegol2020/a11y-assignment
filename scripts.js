window.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector(".btn_hollow");
  addBtn.addEventListener("click", () => {
    addBtn.innerText = "Added";
  })

  const inputsColor = document.querySelectorAll('input[name=product_color]');
  const formColorLabel = document.getElementById('productColorValue');
  const priceText = document.getElementById("price");
  const prices = {
    Black: "EUR 41",
    White: "EUR 40",
    Gray: "EUR 42",
    "Purple latte": "EUR 43"
  }

  inputsColor.forEach((input) => {
    input.addEventListener('change', (e) => {
      formColorLabel.innerText = e.target.dataset.nameDisplay;
      priceText.innerText = prices[formColorLabel.innerText];
    });
  });

  const inputsQuantity = document.querySelectorAll('.input-quantity');
  inputsQuantity.forEach((input) => {
    const inputField = input.querySelector('.input-quantity__field');
    const inputBtnIncrease = input.querySelector('.input-quantity__btn[data-action=increase]');
    const inputBtnDecrease = input.querySelector('.input-quantity__btn[data-action=decrease]');
    inputBtnIncrease.addEventListener('click', (e) => {
      e.preventDefault();
      const initialValue = inputField.value * 1;
      inputField.value = initialValue + 1;
    });
    inputBtnDecrease.addEventListener('click', (e) => {
      e.preventDefault();
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
  let previousActiveElement;

  modalTarget.forEach((modalTarget)=> {
    modalTarget.addEventListener('click', ()=>{
      previousActiveElement = document.activeElement;
      const modalWindow = document.querySelector('.modal');
      const closeBtn = modalWindow.querySelector("#modal-close");
      showModal(modalWindow, closeBtn);
    });
  });
  const modalBackdrop = document.querySelectorAll('.modal-backdrop');
  const mainEl = document.querySelector(".main-grid");
  const modalCloseBtns = document.querySelectorAll(".modal-close");
  modalBackdrop.forEach((modalBackdrop)=> {
    modalBackdrop.addEventListener('click', (e) => {
      const modalWindow = e.target.closest('.modal');
      hideModal(modalWindow);
    });
  });
  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modalWindow = e.target.closest('.modal');
      hideModal(modalWindow);
    });
  });


  const showModal = (modalWindow, closeBtn) => {
    mainEl.inert = true;
    modalWindow.classList.add('show-modal');
    closeBtn.focus();
  }

  const hideModal = (modalWindow) => {
    mainEl.inert = false;
    modalWindow.classList.remove('show-modal');
    previousActiveElement.focus();
  }

})