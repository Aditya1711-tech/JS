const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

/**DEFINED ACTION TYPES */
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORED = "CAKE_RESTORED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTORED = "ICECREAM_RESTORED";

/**  ACTION CREATOR */
// This action creator returns an object or we can say action object
function cakeOrdered() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function cakeRestore(qty = 1) {
  return {
    type: CAKE_RESTORED,
    payload: qty,
  };
}
function iceCreamOrdered() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}
function iceCreamRestored(qty = 1) {
  return {
    type: ICECREAM_RESTORED,
    payload: qty,
  };
}

/** INITIAL STATE */
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

// It will become very long reducer if we add all the actions in one reducer and hard to maintain and debug
// When it comes to multiple reducers, we need to combine them into one single reducer
/** REDUCER */
const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state, //There can be more than one attributes so to prevent there value as it is by  making copy of it
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTORED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

/**   REDUX STORE  */
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial state:", store.getState());

// Everytime when state updates it will get exicuted
const unsubscribe = store.subscribe(() =>
  console.log("Updated state:", store.getState())
);

store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeRestore(3));
store.dispatch(iceCreamOrdered());
store.dispatch(iceCreamOrdered());
store.dispatch(iceCreamOrdered());
store.dispatch(iceCreamRestored(3));

unsubscribe();
