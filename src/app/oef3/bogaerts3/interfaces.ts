export interface Core {
  core_serial: string;
  flight: number;
  block ? : any;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success ? : any;
  landing_intent: boolean;
  landing_type ? : any;
  landing_vehicle ? : any;
}

export interface FirstStage {
  cores: Core[];
}

export interface OrbitParams {
  reference_system: string;
  regime: string;
  longitude ? : any;
}

export interface Payload {
  payload_id: string;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  orbit: string;
  orbit_params: OrbitParams;
}

export interface SecondStage {
  block: number;
  payloads: Payload[];
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: FirstStage;
  second_stage: SecondStage;
}

export interface LaunchSite {
  site_name_long: string;
}

export interface LaunchFailureDetails {
  reason: string;
}

export interface Launch {
  flight_number: number;
  mission_name: string;
  upcoming: boolean;
  launch_year: string;
  launch_date_utc: string;
  launch_date_unix: number;
  rocket: Rocket;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_failure_details: LaunchFailureDetails;
  details: string;
}
