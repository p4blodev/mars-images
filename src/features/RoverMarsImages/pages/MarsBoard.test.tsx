import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import MarsBoard from './MarsBoard';
import { server } from '../../../mocks/browser';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const BASE_URL = process.env.REACT_APP_BASE_URL;

describe('Board page verification', () => {
  test('01 - should render spinner after user clic search', () => {
    render(<MarsBoard />);
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(screen.getAllByRole('status')).toHaveLength(2);
  });
  test('02 - should render 5 photos taked for camera "Front Hazard Avoidance Camera"', async () => {
    render(<MarsBoard />);
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    const items = await screen.findAllByText('Front Hazard Avoidance Camera');

    expect(items).toHaveLength(5);

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
  describe('Board page Error verification', () => {
    const url = `${BASE_URL}Curiosity/photos`;
    const FAILED_REQUEST = rest.get(url, (_req, res, ctx) => {
      return res(ctx.status(404), ctx.json('MOCK_ERROR'));
    });
    test('01 - should render error message when api fails', async () => {
      server.use(FAILED_REQUEST);
      render(<MarsBoard />);
      fireEvent.click(screen.getByRole('button', { name: 'Search' }));

      await screen.findByRole('alert');
      expect(screen.getByRole('alert')).toHaveTextContent(
        'something went wrong',
      );

      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });
  });
});
