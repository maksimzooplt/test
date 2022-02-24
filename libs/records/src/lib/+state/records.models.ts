
export interface Emergency {
  emergencyId: string;
  requestTime: Date;
}

export interface Device {
  serialNumber: string;
}

export interface Holder {
  firstName: string;
  lastName: string;
}

export interface RecordsEntity {
  emergency: Emergency;
  device: Device;
  holder: Holder;
}

export interface ResponceObject {
  content: RecordsEntity[];
}
