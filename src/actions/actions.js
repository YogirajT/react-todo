const SHOW_ALL = "SHOW_ALL";
const SHOW_FINISHED = "SHOW_FINISHED";
const SHOW_PENDING = "SHOW_PENDING";

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const visibilityFilters = {
  SHOW_ALL,
  SHOW_FINISHED,
  SHOW_PENDING
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}
