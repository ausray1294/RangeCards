const addReqEvt = require('./scripts/add-req-event.js');
const initializeProfileForm = require('./scripts/add-profile.js');
const addSensor = require('./scripts/add-sensor.js');
const updateSensorListUI = require('./scripts/add-sensor.js')
const Profile = require('./scripts/class_main')
const OperationRoom = require('./scripts/class_main')
const Sensor = require('./scripts/class_main')
const Satellite = require('./scripts/class_main')
const ElectroOptical = require('./scripts/class_main')
const Radar = require('./scripts/class_main')
const propagateSatelliteState = require('./scripts/propagation')
const propagateMissionSatellites = require('./scripts/propagation')
const MissionDetail = require('./scripts/class_mission')
const attachClickListenerToItems = ('./scripts/add-req-event.js')



document.addEventListener('DOMContentLoaded', () => {
    propagateSatelliteState();
    addReqEvt();
    initializeProfileForm();
    updateSensorListUI();
    addSensor();
    console.log('Initialization complete.');
});

