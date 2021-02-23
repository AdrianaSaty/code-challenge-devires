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
    getAllTodosSuccess: (state: State, { payload }: PayloadAction<IToDo[]>) => ({
      ...state,
      dataTodo: payload,
    }),
    getAllTodosError: (state: State, { payload }: PayloadAction<string>) => {
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

export const deleteTodo = (id: number): AppThunk => async (dispatch: Dispatch) => {
  try {
    await api.delete(`/todos/${id}`);
    const response = await api.get<IToDo[]>('/todos');
    dispatch(getAllTodosSuccess(response.data));
    dispatch(getAllTodosSuccess(response.data));
  } catch (err) {
    dispatch(getAllTodosError(err.toString()));
  }
};

export const addTodo = (description: string): AppThunk => async (
  dispatch: Dispatch
) => {
  try {
    const request = { description, isCompleted: false };
    await api.post('/todos/', request);
    const response = await api.get<IToDo[]>('/todos');
    dispatch(getAllTodosSuccess(response.data));
  } catch (err) {
    dispatch(getAllTodosError(err.toString()));
  }
};

export const completeTodo = (id: number, isCompleted: boolean): AppThunk => async (
  dispatch: Dispatch
) => {
  try {
    await api.patch(`/todos/${id}`, { isCompleted: isCompleted });
    const response = await api.get<IToDo[]>('/todos');
    dispatch(getAllTodosSuccess(response.data));
  } catch (err) {
    dispatch(getAllTodosError(err.toString()));
  }
};

export const todoState = (state: RootState) => state.todoReducer;
