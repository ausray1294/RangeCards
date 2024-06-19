// this is where all mission data will be stored.

class MissionDetail {
  constructor(sensor, room, crew, contract, communication, details, startTime, endTime) {
    this.sensor = sensor;
    this.room = room;
    this.crew = crew;
    this.contracts = contract;
    this.communication = communication;
    this.svs = sv;
    this.details = details;
    this.startTime = startTime;
    this.endTime = endTime;
  }
  static missionDetails = [];
  static addMissionDetails(details) {
    MissionDetail.missionDetails.push(missionDetails);
  }
  static removeMissionDetails(details) {
    for (let i = 0; i < details.length; i++) {
      if (MissionDetail.missionDetails[i].details === details.details) {
        MissionDetail.missionDetails.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

module.exports = MissionDetail