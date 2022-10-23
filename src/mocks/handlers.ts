import { rest } from 'msw';
import { MARS_PHOTOS } from './data/marsRoverPhotos';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const handlers = [
  rest.get<any, any>(`${BASE_URL}Curiosity/photos`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MARS_PHOTOS));
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`You MUST write a request handle for ${req.url.toString()}`);
    return res(ctx.status(500));
  }),
];
