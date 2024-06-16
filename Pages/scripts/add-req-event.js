// Event listeners for adding and removing range requirements
export function addReqEvt() {
  const addButton = document.getElementById('add_msn_reqs');
  const removeButton = document.getElementById('rm_msn_reqs');
  const modal = document.getElementById('popup-modal');
  const closeModal = document.querySelector('.close-button');
  const saveButton = document.getElementById('save-requirement');
  const newRequirementInput = document.getElementById('new-requirement');
  addButton.addEventListener('click', () => {
      modal.style.display = 'block';
  });
  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });
  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
  saveButton.addEventListener('click', () => {
      const requirementList = document.getElementById('requirement-list');
      const newItem = document.createElement('li');
      newItem.className = 'rangeRequirements';
      newItem.innerHTML = `<label>${newRequirementInput.value}</label><input type=checkbox>`;
      requirementList.appendChild(newItem);
      // Clear input and hide modal
      newRequirementInput.value = '';
      modal.style.display = 'none';
  });

  //toggles the list item red
  document.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI' && event.target.classList.contains('rangeRequirements')) {
          event.target.classList.toggle('reded-out');
      }
  });
  // document.addEventListener('click', (event) => {
  //   if (event.target.tagName === 'LI') && event.target.classList.contains
  // })

  // removes all things reded out
  removeButton.addEventListener('click', () => {
      const rededOutItems = document.querySelectorAll('.rangeRequirements.reded-out');
        rededOutItems.forEach(item => {
          item.remove();
      });
  });
}