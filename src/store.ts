import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

const store = createStore(rootReducer, composeWithDevTools());
export default store;
