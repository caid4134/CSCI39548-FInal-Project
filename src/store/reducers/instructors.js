import * as at from "../actions/actionTypes";

// REDUCER;
const allInstructors = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_INSTRUCTORS:
      return action.payload;
    default:
      return state;
    case at.DELETE_INSTRUCTOR:
      return state.filter(instructor => instructor.id!==action.payload);
  }
};

export default allInstructors;