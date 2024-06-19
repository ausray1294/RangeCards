class MissionDetail {
  constructor(sensor, room, crew, contract, communication, svs, details, startTime, endTime) {
    this.sensor = sensor;
    this.room = room;
    this.crew = crew;
    this.contracts = contract;
    this.communication = communication;
    this.svs = svs; // Ensure this is an array of Satellite instances
    this.details = details;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  static missionDetails = [];

  static addMissionDetails(details) {
    MissionDetail.missionDetails.push(details);
  }

  static removeMissionDetails(details) {
    for (let i = 0; i < MissionDetail.missionDetails.length; i++) {
      if (MissionDetail.missionDetails[i].details === details.details) {
        MissionDetail.missionDetails.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

module.exports = MissionDetail;


// const MissionDetail = require('./class_mission.js');
// const Satellite = require('./class_main.js');

// // Example satellite
// const satellite1 = new Satellite(
//   '1 25544U 98067A   21274.20459167  .00000288  00000-0  13367-4 0  9993',
//   '2 25544  51.6442  21.7288 0004059  82.5240 106.0967 15.48815313280885',
//   'ISS'
// );

// // Example mission detail
// const missionDetail = new MissionDetail(
//   sensorData,
//   roomData,
//   crewData,
//   contractData,
//   communicationData,
//   [satellite1], // Add satellites here
//   detailsData,
//   '2021-10-01T00:00:00Z',
//   '2021-10-01T01:00:00Z'
// );

// MissionDetail.addMissionDetails(missionDetail);

// // Propagate satellites for this mission
// const { propagateMissionSatellites } = require('./propagation');
// propagateMissionSatellites(missionDetail);
