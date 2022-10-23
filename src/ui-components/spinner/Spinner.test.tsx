import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner component verification', () => {
  test('01 - should render compnent', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(true).toBeTruthy();
  });
});
