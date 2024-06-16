import { Sensor, ElectroOptical, Radar } from './class_main.js';

export function addSensor(sensor) {
  if (sensor.type === 'radar') {
    Radar.addRadar(sensor);
  } else if (sensor.type === 'electro-optical') {
    ElectroOptical.addEO(sensor);
  }
}

export function removeSensor(sensor) {
  if (sensor.type === 'radar') {
    Radar.removeRadar(sensor);
  } else if (sensor.type === 'electro-optical') {
    ElectroOptical.removeEO(sensor);
  }
}

export function updateSensorListUI() {
  const sensorListElement = document.getElementById('sensor-list');
  sensorListElement.innerHTML = '';
  Sensor.sensors.forEach(sensor => {
    const sensorElement = document.createElement('li');
    sensorElement.innerText = `Name: ${sensor.name}, Owner: ${sensor.owner}, Type: ${sensor.type}`;
    if (sensor.isUnderMaintenance) {
      sensorElement.style.backgroundColor = 'yellow';
    }
    sensorElement.addEventListener('click', () => showSensorDetails(sensor));
    sensorListElement.appendChild(sensorElement);
  });
}

function showSensorDetails(sensor) {
  const sensorDetailsModal = document.getElementById('sensorDetailsModal');
  const sensorDetails = document.getElementById('sensorDetails');
  let sensorDetailsText = `
    Name: ${sensor.name} <br>
    Type: ${sensor.type} <br>
    Owner: ${sensor.owner} <br>
    Latitude: ${sensor.latitude} <br>
    Longitude: ${sensor.longitude} <br>
    Look Angle East: ${sensor.lookAngleEast} <br>
    Look Angle West: ${sensor.lookAngleWest} <br>
    Data Types: ${sensor.dataType} <br>`;

  if (sensor instanceof ElectroOptical) {
    sensorDetailsText += `Wavelength: ${sensor.wavelength} nm <br>Sensitivity: ${sensor.sensitivity} Lux <br>`;
  } else if (sensor instanceof Radar) {
    sensorDetailsText += `Frequency: ${sensor.frequency} GHz <br>Power: ${sensor.power} kW <br>`;
  }

  sensorDetails.innerHTML = sensorDetailsText;
  sensorDetailsModal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const addSensorButton = document.getElementById('show-add-sensor-form');
  const addSensorModal = document.getElementById('addSensorModal');
  const closeModalButtons = document.querySelectorAll('.close-button');
  const sensorForm = document.getElementById('add-sensor-form');
  const sensorDetailsModal = document.getElementById('sensorDetailsModal');

  addSensorButton.addEventListener('click', () => {
    addSensorModal.style.display = 'block';
  });

  closeModalButtons.forEach(button => button.addEventListener('click', () => {
    addSensorModal.style.display = 'none';
    sensorDetailsModal.style.display = 'none';
  }));

  sensorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('sensorName').value;
    const type = document.getElementById('sensorType').value;
    const owner = document.getElementById('sensorOwner').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const lookAngleEast = document.getElementById('look-angle-east').value;
    const lookAngleWest = document.getElementById('look-angle-west').value;
    const dataType = document.getElementById('data-types').value;
    let newSensor;
    if (type === 'electro-optical') {
      const wavelength = document.getElementById('eo-wavelength').value;
      const sensitivity = document.getElementById('eo-sensitivity').value;
      newSensor = new ElectroOptical(name, owner, latitude, longitude, lookAngleEast, lookAngleWest, 0, dataType, wavelength, sensitivity);
      ElectroOptical.addEO(newSensor);
    } else if (type === 'radar') {
      const frequency = document.getElementById('radar-frequency').value;
      const power = document.getElementById('radar-power').value;
      newSensor = new Radar(name, owner, latitude, longitude, lookAngleEast, lookAngleWest, 0, dataType, frequency, power);
      Radar.addRadar(newSensor);
    }
    addSensor(newSensor);
    updateSensorListUI();
    sensorForm.reset();
    addSensorModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === addSensorModal) {
      addSensorModal.style.display = 'none';
    }
    if (event.target === sensorDetailsModal) {
      sensorDetailsModal.style.display = 'none';
    }
  });
});