import { configureStore } from "@reduxjs/toolkit";
import matchesReducer from "./slices/matchesSlice";
import standingsReducer from "./slices/standingsSlice";

const store = configureStore({
  reducer: {
    matches: matchesReducer,
    standings: standingsReducer,
  },
});

export default store;
