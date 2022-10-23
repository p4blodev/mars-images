import { FiltersType } from '../../../../models/rovers';

export interface FilterType {
  onFilters: (filters: FiltersType) => void;
}
