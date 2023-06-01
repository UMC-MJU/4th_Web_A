// slice 를 생성하려면 slice 를 식별하기 위한
// 문자열 이름, 초기상태 값 및 상태를 업데이트할 수 있는 방법을 정의하는
// 하나 이상의 reducer 함수가 필요하다

import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;
const initialState = [];

export const todoSlice = createSlice({
  name: "todofunction",
  initialState,
  reducers: {
    add: (state, action) => {
      nextId++;
      state.push({
        id: nextId,
        text: action.payload.text,
        completed: false,
        date: action.payload.date,
        memo: "",
      });
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    complete: (state, action) => {
      const todoId = action.payload;
      const todo = state.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateMemo: (state, action) => {
      const { id, memo } = action.payload;
      const todo = state.find((e) => e.id === id);
      if (todo) {
        todo.memo = memo;
      }
    },
  },
});

export const { add, remove, complete, updateMemo } = todoSlice.actions;

export default todoSlice.reducer;
