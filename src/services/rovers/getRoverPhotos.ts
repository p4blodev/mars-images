import { Photo, FiltersType } from '../../models/rovers';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getRoverPhotos = async (
  filters: FiltersType,
): Promise<Photo[]> => {
  const API_RESOURCE = `${filters.rover}/photos?`;

  const params = new URLSearchParams({
    api_key: process.env.REACT_APP_NASA_API_KEY ?? '',
  });

  Object.keys(filters).forEach((key) => {
    const value = filters[key as keyof FiltersType];

    if (value) params.set(key, value.toString());
  });

  const url = `${BASE_URL}${API_RESOURCE}${params}`;

  return await fetch(url)
    .then(async (response) => {
      if (response.ok) {
        return await response.json();
      }

      throw new Error('something went wrong');
    })
    .then((response) => {
      const { photos } = response;
      return photos;
    })
    .catch((error) => {
      throw error;
    });
};
