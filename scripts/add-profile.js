import { Profile } from './class_main.js';

export function initializeProfileForm() {
    document.addEventListener('DOMContentLoaded', () => {
        const addProfileForm = document.getElementById('add-profile-form');
        const profilesList = document.getElementById('profilesList');

        addProfileForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const nameFirst = document.getElementById('nameFirst').value;
            const nameLast = document.getElementById('nameLast').value;
            const unit = document.getElementById('unit').value;
            const primaryNumber = document.getElementById('primaryNumber').value;
            const emailNIPR = document.getElementById('emailNIPR').value;
            const emailJWICS = document.getElementById('emailJWICS').value;
            const callSign = document.getElementById('callSign').value || "N/A";
            const smc = document.getElementById('smc').checked;

            const newProfile = new Profile(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign, smc);
            Profile.addProfile(newProfile);
            updateProfilesList();
            addProfileForm.reset();
        });

        function updateProfilesList() {
            profilesList.innerHTML = '';
            const fragment = document.createDocumentFragment();
            Profile.profiles.forEach(profile => {
                const listItem = document.createElement('li');
                listItem.textContent = `${profile.nameFirst} ${profile.nameLast} (${profile.unit})`;

                const removeButton = document.createElement('button');
                removeButton.innerHTML = '<i class="fas fa-trash-alt"></i> Remove';
                removeButton.classList.add('styledButton');
                removeButton.addEventListener('click', () => {
                    Profile.removeProfile(profile);
                    updateProfilesList();
                });

                listItem.appendChild(removeButton);
                fragment.appendChild(listItem);
            });
            profilesList.appendChild(fragment);
        }
    });
}

module.exports = initializeProfileForm;
