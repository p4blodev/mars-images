import { rest } from 'msw';
import { MARS_PHOTOS } from './data/marsRoverPhotos';
export const handlers = [
  rest.get<any, any>(
    'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?api_key=aFakeApiKey&rover=Curiosity&earth_date=2022-01-01&page=1',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(MARS_PHOTOS));
    },
  ),
  rest.get('*', (req, res, ctx) => {
    console.error(`You MUST write a request handle for ${req.url.toString()}`);
    return res(ctx.status(500));
  }),
];
