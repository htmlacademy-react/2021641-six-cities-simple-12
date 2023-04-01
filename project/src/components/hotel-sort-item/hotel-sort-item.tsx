import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {sortChange} from '../../store/action';

type HotelSortItemProps = {
  sortType: string;
  toggleSort: () => void;
}

function HotelSortItem({sortType, toggleSort}: HotelSortItemProps): JSX.Element {
  const currentSort = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  return (
    <li
      className={`places__option ${currentSort === sortType ? '' : 'places__option--active'}`}
      tabIndex={0}
      onClick={
        () => {
          dispatch(sortChange(sortType));
          toggleSort();
        }
      }
    >
      {sortType}
    </li>
  );
}

export default HotelSortItem;
