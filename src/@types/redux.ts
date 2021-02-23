import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import reducers from '../store/ducks';

export type RootState = ReturnType<typeof reducers>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type DefaultState<T> = {
  data: T;
  loading: false;
  error: undefined;
};
