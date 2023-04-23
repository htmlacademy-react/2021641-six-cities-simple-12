import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process.slice';
import {offersData} from './offers-data/offers-data.slice';
import {sortingProcess} from './sorting-process/sorting-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.Sorting]: sortingProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
