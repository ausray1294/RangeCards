import { addReqEvt } from './scripts/add-req-event.js';
import { initializeProfileForm } from './scripts/add-profile.js';
import { addSensor, updateSensorListUI } from './scripts/add-sensor.js';

document.addEventListener('DOMContentLoaded', () => {
    addReqEvt();
    initializeProfileForm();
    updateSensorListUI();
    console.log('Initialization complete.');

});