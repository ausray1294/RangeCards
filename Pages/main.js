import { addReqEvt } from './add-req-event.js';
import { initializeProfileForm } from './profile-form.js';
import { addSensor, updateSensorListUI } from './add-sensor.js';

document.addEventListener('DOMContentLoaded', () => {
  addReqEvt(); // Initialize event listeners for requirements
  initializeProfileForm(); // Initialize event listeners for profile form
  updateSensorListUI(); // Initialize sensor list UI
});