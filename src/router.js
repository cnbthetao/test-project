import React from "react";
import { Router } from "dva/router";
import RouterComp from "./components/RouterComp/index";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterComp />
    </Router>
  );
}

export default RouterConfig;
