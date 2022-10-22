export interface ManifestType {
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: string[];
}

export const MANIFESTS_MOCK: ManifestType[] = [
  {
    name: 'Curiosity',
    landing_date: '2012-08-06',
    launch_date: '2011-11-26',
    status: 'active',
    max_sol: 3628,
    max_date: '2022-10-20',
    total_photos: 602691,
    cameras: [
      'All',
      'FHAZ',
      'RHAZ',
      'MAST',
      'CHEMCAM',
      'MAHLI',
      'MARDI',
      'NAVCAM',
    ],
  },
  {
    name: 'Opportunity',
    landing_date: '2004-01-25',
    launch_date: '2003-07-07',
    status: 'complete',
    max_sol: 5111,
    max_date: '2018-06-11',
    total_photos: 198439,
    cameras: ['All', 'FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  },
  {
    name: 'Spirit',
    landing_date: '2004-01-04',
    launch_date: '2003-06-10',
    status: 'complete',
    max_sol: 2208,
    max_date: '2010-03-21',
    total_photos: 124550,
    cameras: ['All', 'FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  },
];
