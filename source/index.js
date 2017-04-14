/*eslint-env node*/
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import "./containers/App/App.styl";

// Components
import App from "./containers/App/App";

// Extra Build Imports
import "../../public/favicon.ico";
import "../../public/CNAME";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};
render(App);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept("./containers/App/App", () => {
    render(App);
  });
}
