import TabBar from "../tabbar/index";
import Tab from "../tab/index";
import React, { lazy, Suspense, Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "dva/router";
const Home = lazy(() => import("../../routes/Home"));
const Categorys = lazy(() => import("../../routes/Categorys"));
const Car = lazy(() => import("../../routes/Car"));
const Mine = lazy(() => import("../../routes/Mine"));
const NoFind = lazy(() => import("../../routes/NoFind"));
class RouterComp extends React.Component {
  state = {
    routes: [
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/cates",
        component: Categorys,
      },
      {
        path: "/car",
        component: Car,
      },
      {
        path: "/mine",
        component: Mine,
      },
      {
        path: "",
        component: NoFind,
      },
    ],
  };
  render() {
    return (
      <Fragment>
        <Suspense fallback={() => <div>Loading</div>}>
        <Tab {...this.props} />
          <Switch>
            <Redirect from="/" exact to="/home" />
            {this.state.routes.map((item, index) => ( <Route key={index} path={item.path} exact component={item.component}/>))}
          </Switch>
        <TabBar />
        </Suspense>
      </Fragment>
    );
  }
}

export default withRouter(RouterComp);
