import {sortingProcess, changeCity, changeSort} from './sorting-process.slice';
import {SortingProcess} from '../../types/state';
import {Default, Cities, SortsList} from '../../const';

describe('sortingProcess', () => {
  let initialState: SortingProcess;

  beforeEach(() => {
    initialState = {
      city: Default.city,
      sorting: Default.sort,
    };
  });

  test('without additional parameters should return initial state', () => {
    expect(sortingProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });
  test('change city location', () => {
    expect(sortingProcess.reducer(initialState, changeCity(Cities[3])))
      .toEqual({city: Cities[3], sorting: Default.sort});
  });

  test('change sorting', () => {
    expect(sortingProcess.reducer(initialState, changeSort(SortsList.POPULAR)))
      .toEqual({city: Default.city, sorting: SortsList.POPULAR});
  });
});
