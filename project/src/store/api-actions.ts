import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offer, OfferId} from '../types/offer';
import {loadOffers,loadOffer,loadOffersNearby, requireAuthorization, setOffersDataLoadingStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(loadOffer(data));
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffersNearby',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/${'nearby'}`);
    dispatch(loadOffersNearby(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
