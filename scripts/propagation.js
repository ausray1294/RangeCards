const satellite = require('satellite.js');
const Satellite = require('../scripts/class_main.js')
const MissionDetail = require('../scripts/class_mission.js')

/**
 * Function to propagate the state of a Space Vehicle (satellite) over a given period using TLE data
 * @param {string} tleLine1 - First line of TLE data
 * @param {string} tleLine2 - Second line of TLE data
 * @param {Date} startTime - Start time for propagation
 * @param {Date} endTime - End time for propagation
 * @param {number} stepMinutes - Time step in minutes for propagation
 */
function propagateSatelliteState(tleLine1, tleLine2, startTime, endTime, stepMinutes) {
    const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
    const start = new Date(startTime);
    const end = new Date(endTime);
    const stepMilliseconds = stepMinutes * 60 * 1000;
    let currentTime = start;

    while (currentTime <= end) {
        const propagated = satellite.propagate(satrec, currentTime);
        if (propagated.position && propagated.velocity) {
            const positionAndVelocity = satellite.eciToGeodetic(propagated.position, satellite.gstime(currentTime));
            const lat = satellite.degreesLat(positionAndVelocity.latitude);
            const lon = satellite.degreesLong(positionAndVelocity.longitude);
            const alt = positionAndVelocity.height;

            updateTitleCard(lat, lon, alt, currentTime);
            updateAnnexA(lat, lon, alt, currentTime);
            updateAnnexB(lat, lon, alt, currentTime);
        }
        currentTime = new Date(currentTime.getTime() + stepMilliseconds);
    }
}

function propagateMissionSatellites(missionDetail) {
    missionDetail.svs.forEach(satellite => {
        propagateSatelliteState(satellite.tleLine1, satellite.tleLine2, missionDetail.startTime, missionDetail.endTime, 200);
    });
}

module.exports = { propagateSatelliteState, propagateMissionSatellites };