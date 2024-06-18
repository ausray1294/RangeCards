// add a function here that takes in a tle/state and gives a location for
// the sut based of expected date of operation. have the data plug into
// TitleCard, AnnexA and AnnexB

const satellite = require('satellite.js');

/**
 * Function to propagate the state of a Space Vehicle (satellite) over a given period using TLE data
 * @param {string} tleLine1 - First line of TLE data
 * @param {string} tleLine2 - Second line of TLE data
 * @param {Date} startTime - Start time for propagation
 * @param {Date} endTime - End time for propagation
 * @param {number} stepMinutes - Time step in minutes for propagation
 */
function propagateSatelliteState(tleLine1, tleLine2, startTime, endTime, stepMinutes) {
    // Parse TLE data
    const satrec = satellite.twoline2satrec(tleLine1, tleLine2);

    const start = new Date(startTime);
    const end = new Date(endTime);
    const stepMilliseconds = stepMinutes * 60 * 1000;

    let currentTime = start;

    while (currentTime <= end) {
        // Propagate satellite's state to the current time
        const propagated = satellite.propagate(satrec, currentTime);

        // If the propagation was successful
        if (propagated.position && propagated.velocity) {
            const positionAndVelocity = satellite.eciToGeodetic(propagated.position, satellite.gstime(currentTime));

            // Extract relevant data
            const lat = satellite.degreesLat(positionAndVelocity.latitude);
            const lon = satellite.degreesLong(positionAndVelocity.longitude);
            const alt = positionAndVelocity.height;

            // Plug data into TitleCard, AnnexA, and AnnexB (placeholder functions, to be implemented)
            updateTitleCard(lat, lon, alt, currentTime);
            updateAnnexA(lat, lon, alt, currentTime);
            updateAnnexB(lat, lon, alt, currentTime);
        }

        // Move to the next time step
        currentTime = new Date(currentTime.getTime() + stepMilliseconds);
    }
}

/**
 * Placeholder functions to simulate data update. Implement these according to actual requirements.
 */
function updateTitleCard(lat, lon, alt, time) {
    console.log(`TitleCard -> Time: ${time.toISOString()}, Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}, Alt: ${alt.toFixed(4)} km`);
}

function updateAnnexA(lat, lon, alt, time) {
    console.log(`AnnexA -> Time: ${time.toISOString()}, Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}, Alt: ${alt.toFixed(4)} km`);
}

function updateAnnexB(lat, lon, alt, time) {
    console.log(`AnnexB -> Time: ${time.toISOString()}, Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}, Alt: ${alt.toFixed(4)} km`);
}

// Example usage
const tleLine1 = '1 25544U 98067A   21274.20459167  .00000288  00000-0  13367-4 0  9993';
const tleLine2 = '2 25544  51.6442  21.7288 0004059  82.5240 106.0967 15.48815313280885';

const startTime = new Date('2021-10-01T00:00:00Z');
const endTime = new Date('2021-10-01T01:00:00Z');
const stepMinutes = 10;

propagateSatelliteState(tleLine1, tleLine2, startTime, endTime, stepMinutes);