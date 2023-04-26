import {sortingProcess, changeCity, changeSort} from './sorting-process.slice';
import {SortingProcess} from '../../types/state';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE, Cities, SortsList} from '../../const';

describe('sortingProcess', () => {
  let initialState: SortingProcess;

  beforeEach(() => {
    initialState = {
      city: DEFAULT_CITY,
      sorting: DEFAULT_SORT_TYPE,
    };
  });

  test('without additional parameters should return initial state', () => {
    expect(sortingProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });
  test('change city location', () => {
    expect(sortingProcess.reducer(initialState, changeCity(Cities[3])))
      .toEqual({city: Cities[3], sorting: DEFAULT_SORT_TYPE});
  });

  test('change sorting', () => {
    expect(sortingProcess.reducer(initialState, changeSort(SortsList.POPULAR)))
      .toEqual({city: DEFAULT_CITY, sorting: SortsList.POPULAR});
  });
});
