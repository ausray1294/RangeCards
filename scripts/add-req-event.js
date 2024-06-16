export function addReqEvt() {
    const addButton = document.getElementById('add_msn_reqs');
    const removeButton = document.getElementById('rm_msn_reqs');
    const modal = document.getElementById('popup-modal');
    const closeModal = document.querySelector('.close-button');
    const saveButton = document.getElementById('save-requirement');
    const newRequirementInput = document.getElementById('new-requirement');

    function attachClickListenerToItems() {
      const items = document.querySelectorAll('.rangeRequirements');
      items.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('reded-out');
        });
      });
    }

    addButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    saveButton.addEventListener('click', () => {
      const requirementList = document.getElementById('requirement-list');
      const newItem = document.createElement('li');
      newItem.className = 'rangeRequirements';
      newItem.innerHTML = `${newRequirementInput.value} <input type="checkbox">`;
      newItem.addEventListener('click', () => {
        newItem.classList.toggle('reded-out');
      });
      requirementList.appendChild(newItem);
      newRequirementInput.value = '';
      modal.style.display = 'none';
    });

    removeButton.addEventListener('click', () => {
      const rededOutItems = document.querySelectorAll('.rangeRequirements.reded-out');
      rededOutItems.forEach(item => {
        item.remove();
      });
    });

    attachClickListenerToItems();
  }