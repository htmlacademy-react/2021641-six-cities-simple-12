import { internet, datatype } from 'faker';
import {UserData} from '../types/user-data';

export const mockFakeUserData = (): UserData => ({
  id: datatype.number(),
  email: internet.email(),
  token: datatype.string(),
  avatarUrl: internet.avatar(),
});
