//calls from the various classes to be pulled into mission details

//forms on the mission director html should display all values held in each class for mission director to choose from
// information that is selected is then pushed into the mission detail class. need to verify satellites are being
//pushed into an array so that way we can call to them when propogating.
// after everything is loaded it should prepopulate a majority of the information onto the range cards with areas left blank for
// for a user to fill in will have to take info and pull it then convert to a string as some <li> <div> and
// appendChild that to the html.






const MissionDetail = require('./class_mission');
const  SensorCost  = require('./class_main');

function calculateTime(sensor, input) {
  if(sensor instanceof MissionDetail) {
    const totalHours = (new Date(sensor.endTime) - new Date(sensor.startTime)) / 3600000;
    const totalDays = Math.ceil(totalHours / 24);
    return { totalHours, totalDays };
  }
}

function calculateCost(sensor, totalHours, totalDays) {
    const sensorCosts = sensor.map(s => new SensorCost(s.name, s.costFactor, s.costRate));
    return SensorCost.calculateTotalCost(totalHours, totalDays);
}

module.exports = { calculateTime, calculateCost };
