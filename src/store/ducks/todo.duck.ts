import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AppThunk } from '../../@types/redux';
import api from 'services/api';
import { RootState } from 'store';
import { IToDo } from '../../@types/ITodo';

interface State {
  dataTodo: IToDo[];
  error: string | null;
}

const INITIAL_STATE: State = {
  dataTodo: [],
  error: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    getAllTodosSuccess: (
      state: State,
      { payload }: PayloadAction<any | undefined>
    ) => ({
      ...state,
      dataTodo: payload,
    }),
    getAllTodosError: (
      state: State,
      { payload }: PayloadAction<any | undefined>
    ) => {
      state.error = payload;
    },
  },
});

export const { getAllTodosSuccess, getAllTodosError } = todoSlice.actions;

export default todoSlice.reducer;

export const getAllTodos = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    const response = await api.get<IToDo[]>('/todos');
    dispatch(getAllTodosSuccess(response.data));
  } catch (err) {
    dispatch(getAllTodosError(err.toString()));
  }
};

export const todoState = (state: RootState) => state.todoReducer;
