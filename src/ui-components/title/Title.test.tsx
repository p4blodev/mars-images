import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title component verification', () => {
  test('01 - should render component', async () => {
    const title = 'a fake title';
    render(<Title text={title} />);
    expect(await screen.findByText(title)).toBeInTheDocument();
  });
});
