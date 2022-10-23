import { fireEvent, render, screen } from '@testing-library/react';
import { FiltersType } from '../../../../models/rovers';
import userEvent from '@testing-library/user-event';
import Filters from './Filters';

describe('Filters component verification', () => {
  test('01 - sohuld return default values', () => {
    const onFilters = (val: FiltersType) => {
      const MOCK_RETURNED_VALUES = {
        rover: 'Curiosity',
        earth_date: '2022-10-20',
      };

      expect(JSON.stringify(val)).toBe(JSON.stringify(MOCK_RETURNED_VALUES));
    };

    render(<Filters onFilters={onFilters} />);

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  });
  test('02 - should return correct rover after change it in list of rovers', async () => {
    const onFilters = (val: FiltersType) => {
      const MOCK_RETURNED_VALUES = {
        rover: 'Opportunity',
        earth_date: '2022-10-20',
      };

      expect(JSON.stringify(val)).toBe(JSON.stringify(MOCK_RETURNED_VALUES));
    };

    render(<Filters onFilters={onFilters} />);

    await userEvent.selectOptions(
      screen.getByLabelText('Rover'),
      'Opportunity',
    );

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  });
  test('03 - should return camera in filters when user choose one', async () => {
    const onFilters = (val: FiltersType) => {
      const MOCK_RETURNED_VALUES = {
        rover: 'Curiosity',
        earth_date: '2022-10-20',
        camera: 'CHEMCAM',
      };

      expect(JSON.stringify(val)).toBe(JSON.stringify(MOCK_RETURNED_VALUES));
    };

    render(<Filters onFilters={onFilters} />);

    await userEvent.selectOptions(screen.getByLabelText('Camera'), 'CHEMCAM');

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  });
});
