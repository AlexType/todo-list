import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const persistedState = (typeof window !== "undefined") && localStorage.getItem("redux-state")
    ? JSON.parse(localStorage.getItem("redux-state"))
    : {};

export const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    localStorage.setItem("redux-state", JSON.stringify(store.getState()));
});