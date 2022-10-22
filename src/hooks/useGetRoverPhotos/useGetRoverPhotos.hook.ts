import { useCallback, useState } from 'react';
import { Photo, FiltersType } from '../../models/rovers';
import { getRoverPhotos } from '../../services';

const useGetRoverPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searching, setSearching] = useState(false);
  const [filters, setFilters] = useState<FiltersType | null>();

  const requestData = useCallback(
    (filters: FiltersType) => {
      if (!filters || searching) return;

      setSearching(true);

      getRoverPhotos(filters)
        .then((response) => {
          setPhotos((prev) => prev.concat(response));
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
    photos,
    searching,
    searchMarsPhotos,
    nextPage,
  };
};

export default useGetRoverPhotos;
