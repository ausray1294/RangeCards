class Profile {
  constructor(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign = "N/A", smc = false) {
      this.nameFirst = nameFirst;
      this.nameLast = nameLast;
      this.unit = unit;
      this.primaryNumber = primaryNumber;
      this.emailNIPR = emailNIPR;
      this.emailJWICS = emailJWICS;
      this.callSign = callSign;
      user.smc = smc;
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

  updateProfile(nameFirst, nameLast, unit, primaryNumber, emailNIPR, emailJWICS, callSign = "N/A", smc = false) {
      for (let user of Profile.profiles) {
          if (user.nameFirst === this.nameFirst && user.nameLast === this.nameLast) {
              user.nameFirst = nameFirst;
              user.nameLast = nameLast;
              user.unit = unit;
              user.primaryNumber = primaryNumber;
              user.emailNIPR = emailNIPR;
              user.emailJWICS = emailJWICS;
              user.callSign = callSign;
              user.smc = smc;
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

class ElectroOptical extends Sensor {
  constructor(name, owner, latitude, longitude, lookAngleEast, lookAngleWest, altitude, dataType, wavelength, sensitivity) {
      super(name, 'electro-optical', owner, latitude, longitude, lookAngleEast, lookAngleWest, altitude);
      this.dataType = dataType;
      this.wavelength = wavelength;
      this.sensitivity = sensitivity;
  }

  static eoScopes = [];

  static addEO(eoScope) {
    ElectroOptical.eoScopes.push(eoScope);
  }

  static removeEO(eoScope) {
      for (let i = 0; i < ElectroOptical.eoScopes.length; i++) {
          if (ElectroOptical.eoScopes[i].name === eoScope.name) {
            ElectroOptical.eoScopes.splice(i, 1);
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

class Satellite {
    constructor(vehicleName, tleLine1, tleLine2) {
        this.vehicleName = vehicleName;
        this.tleLine1 = tleLine1;
        this.tleLine2 = tleLine2;
    }
}

// Export all the classes
export { Profile, Sensor, Satellite, ElectroOptical, Radar };