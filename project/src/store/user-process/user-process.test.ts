import {UserProcess} from '../../types/state';
import {userProcess} from './user-process.slice';
import {AuthorizationStatus} from '../../const';
import {loginAction, logoutAction, checkAuthAction} from '../api-actions';
import {mockFakeUserData} from '../../utils/mocks';

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };
  });

  test('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, userData: null});
  });

  describe('checkAuthAction test', () => {
    test('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.fulfilled.type, payload: mockFakeUserData}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, userData: mockFakeUserData});
    });
    test('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.rejected.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userData: null});
    });
  });

  describe('loginAction test', () => {
    test('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: loginAction.fulfilled.type, payload: mockFakeUserData}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, userData: mockFakeUserData});
    });
    test('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, {type: loginAction.rejected.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userData: null});
    });
  });

  describe('logoutAction test', () => {
    test('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: logoutAction.fulfilled.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userData: null});
    });
  });
});
