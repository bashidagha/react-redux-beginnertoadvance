import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  } else if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  } else if (action.type === "ADDBY") {
    return { counter: (state.counter + Number.parseInt(action.payload.counter) ) };
  }
  return state;
};

const store = createStore(reducerFn,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
