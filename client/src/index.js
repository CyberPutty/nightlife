import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Reducers from "./redux/reducers/index";
import thunkMiddleware from "redux-thunk";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Search from "./components/search";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

delete window.__PRELOADED_STATE__
const store = createStore(
  Reducers,/*preload state,*/ composeEnhancers(applyMiddleware(thunkMiddleware))
);



ReactDOM.render(
  <Provider store={store}>
    <div className="grid-main">
      <Nav />
      <Search/>
      <App/>
      <Footer />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
