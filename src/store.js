import { createStore,applyMiddleware } from "redux";
import rootreducers from "./redux/reducers/main";
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(
    rootreducers,composeWithDevTools(applyMiddleware())
);

export default store;