import { useCallback, useState } from 'react';
import { UseGetRoverPhotosType } from './useGetRoverPhotos.types';
import { Photo, FiltersType } from '../../models/rovers';
import { getRoverPhotos } from '../../services';

export const useGetRoverPhotos = (): UseGetRoverPhotosType => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searching, setSearching] = useState(false);
  const [filters, setFilters] = useState<FiltersType | null>();
  const [error, setError] = useState();

  const requestData = useCallback(
    (filters: FiltersType) => {
      if (!filters || searching) return;

      setSearching(true);

      getRoverPhotos(filters)
        .then((response) => {
          setPhotos((prev) => prev.concat(response));
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setSearching(false);
          setFilters(filters);
        });
    },
    [searching],
  );

  const searchMarsPhotos = useCallback(
    (filters: FiltersType) => {
      setPhotos([]);
      requestData({ ...filters, page: 1 });
    },
    [requestData],
  );

  const nextPage = useCallback(() => {
    if (!filters) return;

    requestData({ ...filters, page: filters.page ? filters.page + 1 : 1 });
  }, [filters, requestData]);

  return {
    error,
    nextPage,
    photos,
    searching,
    searchMarsPhotos,
  };
};
