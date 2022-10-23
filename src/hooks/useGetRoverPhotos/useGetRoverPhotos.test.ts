import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { rest } from 'msw';
import { server } from '../../mocks/browser';
import { useGetRoverPhotos } from './useGetRoverPhotos';
import { FiltersType } from '../../models/rovers';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const A_FILTERS: FiltersType = {
  rover: 'Curiosity',
  earth_date: '2022-01-01',
  page: 1,
};

describe('useGetRoverPhotos hokk verification', () => {
  describe('When hook is init', () => {
    test('01 - should searching to be false', () => {
      const { result } = renderHook(() => useGetRoverPhotos());

      expect(result.current.searching).toBeFalsy();
    });
    test('02 - should data to be empty', () => {
      const { result } = renderHook(() => useGetRoverPhotos());

      expect(result.current.photos).toHaveLength(0);
    });
  });
  describe('Afert hook was init', () => {
    test('01 - should return 10 objects', async () => {
      const { result } = renderHook(() => useGetRoverPhotos());

      act(() => result.current.searchMarsPhotos(A_FILTERS));

      expect(result.current.searching).toBeTruthy();

      await waitFor(() => expect(result.current.photos).toHaveLength(10));

      expect(result.current.searching).toBeFalsy();
    });
  });
  describe('Error hook', () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?api_key=aFakeApiKey&rover=Curiosity&earth_date=2022-01-01&page=1`;
    const FAILED_REQUEST = rest.get(url, (_req, res, ctx) => {
      return res(ctx.status(404), ctx.json('MOCK_ERROR'));
    });
    test('01 - should return error message when api fails', async () => {
      server.use(FAILED_REQUEST);
      const { result } = renderHook(() => useGetRoverPhotos());

      act(() => result.current.searchMarsPhotos(A_FILTERS));

      expect(result.current.searching).toBeTruthy();

      await waitFor(() =>
        expect(result.current.error).toBe('something went wrong'),
      );

      expect(result.current.searching).toBeFalsy();
    });
  });
});
