import { createStore } from "redux";
import { todoApp } from "../reducers/combined-reducers";

// when state needs to be hydrated from the server
// const store = createStore(todoApp, window.STATE_FROM_SERVER)

const store = createStore(todoApp);
