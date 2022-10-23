import { Photo, FiltersType } from '../../models/rovers';

export interface UseGetRoverPhotosType {
  error?: string;
  nextPage: () => void;
  photos: Photo[];
  searching: boolean;
  searchMarsPhotos: (filters: FiltersType) => void;
}
