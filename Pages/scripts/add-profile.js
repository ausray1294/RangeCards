import Profile from './class_main.js';

export function manageProfiles () {

  document.addEventListener('DOMContentLoaded', () => {
      const addProfileForm = document.getElementById('add-profile-form');
      const removeProfileForm = document.getElementById('remove-profile-form');
      const profilesList = document.getElementById('profilesList');
      addProfileForm.addEventListener('submit', event => {
          event.preventDefault(); // Prevent the form from submitting the traditional way
          // Get the values from the form inputs
          const nameFirst = document.getElementById('nameFirst').value;
          const nameLast = document.getElementById('nameLast').value;
          const unit = document.getElementById('unit').value;
          const primaryNumber = document.getElementById('primaryNumber').value;
          const emailNIPR = document.getElementById('emailNIPR').value;
          const emailJWICS = document.getElementById('emailJWICS').value;
          const callSign = document.getElementById('callSign').value || "N/A";
          // Create a new Profile object
          const newProfile = new Profile(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign);
          Profile.addProfile(newProfile);
          // Update the profiles list display
          updateProfilesList();
          // Clear the form fields
          addProfileForm.reset();
      });
      removeProfileForm.addEventListener('submit', event => {
          event.preventDefault();
          const nameFirst = document.getElementById('removeNameFirst').value;
          const nameLast = document.getElementById('removeNameLast').value;
          const tempProfile = new Profile(nameFirst, nameLast); // Dummy profile to match
          // Remove the profile
          const removed = Profile.removeProfile(tempProfile);
          if (removed) {
              updateProfilesList();
              removeProfileForm.reset();
          } else {
              alert('Profile not found');
          }
      });
      // Function to update the display of profiles
      function updateProfilesList() {
          profilesList.innerHTML = ''; // Clear the current list
          Profile.profiles.forEach(profile => {
              const listItem = document.createElement('li');
              listItem.textContent = `${profile.nameFirst} ${profile.nameLast} (${profile.unit})`;
              profilesList.appendChild(listItem);
          });
      }
  });
}