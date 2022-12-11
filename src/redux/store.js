import { createStore } from "redux";

const reduxInitialtate = [];

const viewsCountReducer = function (state = reduxInitialtate, action) {
  if (action.type === "iniState") {
    reduxInitialtate.push(...action.iniState);
  }
  if (action.type === "id") {
    return state.map((object) =>
      object.id === action.payLoad
        ? { ...object, count: object.count + 1 }
        : object
    );
  }
  return state;
};

const store = createStore(viewsCountReducer);

export default store;
