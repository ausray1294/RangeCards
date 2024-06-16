import { Profile } from './class_main.js';

export function initializeProfileForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const addProfileForm = document.getElementById('add-profile-form');
    const profilesList = document.getElementById('profilesList');

    addProfileForm.addEventListener('submit', event => {
      event.preventDefault();
      const nameFirst = document.getElementById('nameFirst').value;
      const nameLast = document.getElementById('nameLast').value;
      const unit = document.getElementById('unit').value;
      const primaryNumber = document.getElementById('primaryNumber').value;
      const emailNIPR = document.getElementById('emailNIPR').value;
      const emailJWICS = document.getElementById('emailJWICS').value;
      const callSign = document.getElementById('callSign').value || "N/A";
      const newProfile = new Profile(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign);

      Profile.addProfile(newProfile);
      updateProfilesList();
      addProfileForm.reset();
    });

    function updateProfilesList() {
      profilesList.innerHTML = '';
      Profile.profiles.forEach(profile => {
        const listItem = document.createElement('li');
        listItem.textContent = `${profile.nameFirst} ${profile.nameLast} (${profile.unit})`;
        profilesList.appendChild(listItem);
      });
    }
  });
}