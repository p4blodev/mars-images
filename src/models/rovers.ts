export interface RootObject {
  photos: Photo[];
}

export interface Photo {
  camera: Camera;
  earth_date: Date;
  id: number;
  img_src: string;
  rover: Rover;
  sol: number;
}

export interface Camera {
  full_name: FullName;
  id: number;
  name: CameraName;
  rover_id: number;
}

export enum FullName {
  FrontHazardAvoidanceCamera = 'Front Hazard Avoidance Camera',
  RearHazardAvoidanceCamera = 'Rear Hazard Avoidance Camera',
  MastCamera = 'Mast Camera',
  ChemistryAndCameraComplex = 'Chemistry and Camera Complex	',
  MarsHandLensImager = 'Mars Hand Lens Imager	',
  MarsDescentImager = 'Mars Descent Imager			',
  NavigationCamera = 'NavigationCamera',
  PanoramicCamera = 'Panoramic Camera	',
  MiniatureThermalEmissionSpectrometer = 'Miniature Thermal Emission Spectrometer ',
}

export enum CameraName {
  CHEMCAM = 'CHEMCAM',
  FHAZ = 'FHAZ',
  MAHLI = 'MAHLI',
  MARDI = 'MARDI',
  MAST = 'MAST',
  MINITES = 'MINITES',
  NAVCAM = 'NAVCAM',
  Pancam = 'PANCAM',
  PANCAM = 'PANCAM',
  RHAZ = 'RHAZ',
}

export interface Rover {
  id: number;
  landing_date: Date;
  launch_date: Date;
  name: RoverName;
  status: Status;
}

export enum RoverName {
  Curiosity = 'Curiosity',
  Opportunity = 'Opportunity',
  Spirit = 'Spirit',
}

export enum Status {
  Complete = 'complete',
}

export interface FiltersType {
  rover: string;
  earth_date: string;
  sol?: number;
  camera?: string;
  page?: number;
}
