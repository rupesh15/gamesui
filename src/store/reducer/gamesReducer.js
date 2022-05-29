import { produce } from "immer";

let initialValue = {
  gamesName: "",
  yearOfLaunch: "",
  description: "",
  type: "",
  price: "",
};

const gamesReducer = (state = initialValue, action) => {
  console.log("value is ", state, action);
  
  switch (action.type) {
    case "gameName":
      return produce(state, (draft) => {
        draft.gamesName = action.payload;
      });

    case "yearOfLaunch":
      return produce(state, (draft) => {
        draft.yearOfLaunch = action.payload;
      });

    case "description":
      return produce(state, (draft) => {
        draft.description = action.payload;
      });

    case "type":
      return produce(state, (draft) => {
        draft.type = action.payload;
      });

    case "price":
      return produce(state, (draft) => {
        draft.price = action.payload;
      });

    default:
      return state;
  }
};

export default gamesReducer;
