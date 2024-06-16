class Profile {
  constructor(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign = "N/A") {
      this.nameFirst = nameFirst;
      this.nameLast = nameLast;
      this.unit = unit;
      this.primaryNumber = primaryNumber;
      this.emailNIPR = emailNIPR;
      this.emailJWICS = emailJWICS;
      this.callSign = callSign;
  }

  static profiles = [];

  static addProfile(profile) {
      Profile.profiles.push(profile);
  }

  static removeProfile(profile) {
      for (let i = 0; i < Profile.profiles.length; i++) {
          if (Profile.profiles[i].nameFirst === profile.nameFirst && Profile.profiles[i].nameLast === profile.nameLast) {
              Profile.profiles.splice(i, 1);
              return true;
          }
      }
      return false;
  }

  updateProfile(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign = "N/A") {
      for (let user of Profile.profiles) {
          if (user.nameFirst === this.nameFirst && user.nameLast === this.nameLast) {
              user.nameFirst = nameFirst;
              user.nameLast = nameLast;
              user.unit = unit;
              user.primaryNumber = primaryNumber;
              user.emailNIPR = emailNIPR;
              user.emailJWICS = emailJWICS;
              user.callSign = callSign;
              return true;
          }
      }
      return false;
  }
}

class Crew extends Profile {
  constructor(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign = "N/A", smc = false) {
      super(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign);
      this.smc = smc;
  }

  static operators = [];

  static addProfile(operator) {
      Crew.operators.push(operator);
  }

  static removeProfile(operator) {
      for (let i = 0; i < Crew.operators.length; i++) {
          if (Crew.operators[i].nameFirst === operator.nameFirst && Crew.operators[i].nameLast === operator.nameLast) {
              Crew.operators.splice(i, 1);
              return true;
          }
      }
      return false;
  }
}

class Sensor {
  constructor(name, type, owner, latitude, longitude, lookAngleEast, lookAngleWest, altitude) {
      this.name = name;
      this.type = type;
      this.owner = owner;
      this.latitude = latitude;
      this.longitude = longitude;
      this.lookAngleEast = lookAngleEast;
      this.lookAngleWest = lookAngleWest;
      this.altitude = altitude;
  }

  static sensors = [];

  static addSensor(sensor) {
      Sensor.sensors.push(sensor);
  }

  static removeSensor(sensor) {
      for (let i = 0; i < Sensor.sensors.length; i++) {
          if (Sensor.sensors[i].name === sensor.name && Sensor.sensors[i].type === sensor.type) {
              Sensor.sensors.splice(i, 1);
              return true;
          }
      }
      return false;
  }
}

class ElectricalOptical extends Sensor {
  constructor(name, owner, latitude, longitude, lookAngleEast, lookAngleWest, altitude, dataType, wavelength, sensitivity) {
      super(name, 'electro-optical', owner, latitude, longitude, lookAngleEast, lookAngleWest, altitude);
      this.dataType = dataType;
      this.wavelength = wavelength;
      this.sensitivity = sensitivity;
  }

  static eoScopes = [];

  static addEO(eoScope) {
      ElectricalOptical.eoScopes.push(eoScope);
  }

  static removeEO(eoScope) {
      for (let i = 0; i < ElectricalOptical.eoScopes.length; i++) {
          if (ElectricalOptical.eoScopes[i].name === eoScope.name) {
              ElectricalOptical.eoScopes.splice(i, 1);
              return true;
          }
      }
      return false;
  }
}

class Radar extends Sensor {
  constructor(name, owner, latitude, longitude, lookAngleEast, lookAngleWest, altitude, dataType, frequency, power) {
      super(name, 'radar', owner, latitude, longitude, lookAngleEast, lookAngleWest, altitude);
      this.dataType = dataType;
      this.frequency = frequency;
      this.power = power;
  }

  static radars = [];

  static addRadar(radar) {
      Radar.radars.push(radar);
  }

  static removeRadar(radar) {
      for (let i = 0; i < Radar.radars.length; i++) {
          if (Radar.radars[i].name === radar.name) {
              Radar.radars.splice(i, 1);
              return true;
          }
      }
      return false;
  }
}

// Export all the classes
export { Profile, Crew, Sensor, ElectricalOptical, Radar };