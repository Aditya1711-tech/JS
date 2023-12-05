const redux = require("redux");
const createStore = redux.createStore;
const immer = require("immer");
const produce = immer.produce;

const UPDATE_STREET = "UPDATE_STREET";

const initialState = {
  name: "Aditya",
  address: {
    street: "Gayatri nagar",
    houseNo: "2",
  },
};

function updateStreet(street) {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_STREET:
//       return {
//         ...state,
//         address: {
//           ...state.address,
//           street: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
// In above mothod it is difficult to update nested object
// So by using immer library it will be easy to do it

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state: ", store.getState());
});

store.dispatch(updateStreet("Janki nagar"));

unsubscribe();
