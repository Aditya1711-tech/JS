const redux = require("redux");
const createStore = redux.createStore;

/**DEFINED ACTION TYPES */
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORED = "CAKE_RESTORED";

/**  ACTION CREATOR */
// This action creator returns an object or we can say action object
function cakeOrdered() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function cakeRestored(qty = 1) {
  return {
    type: CAKE_RESTORED,
    payload: qty,
  };
}

/** INITIAL STATE */
const initialState = {
  numOfCakes: 10,
};

/** REDUCER */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, //There can be more than one attributes so to prevent there value as it is by  making copy of it
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTORED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

/**   REDUX STORE  */
const store = createStore(reducer);
console.log("Initial state:", store.getState());

// Everytime when state updates it will get exicuted
const unsubscribe = store.subscribe(() =>
  console.log("Updated state:", store.getState())
);

store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeRestored(3));

unsubscribe();
