import TabBar from "../tabbar/index";
import Tab from "../tab/index";
import React, { lazy, Suspense, Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "dva/router";
const Home = lazy(() => import("../../routes/home/Home"));
const Categorys = lazy(() => import("../../routes/category/Categorys"));
const Car = lazy(() => import("../../routes/car/Car"));
const Mine = lazy(() => import("../../routes/mine/Mine"));
const Search = lazy(() => import("../../routes/search/Search"));
const NoFind = lazy(() => import("../../routes/notfound/NoFind"));
const Detail = lazy(() => import("../../routes/detail/Detail"));
class RouterComp extends React.Component {
  state = {
    routes: [
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/cates/:id",
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
        path: "/search",
        component: Search,
      },
      {
        path: "/detail/:id",
        component: Detail,
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
            <Redirect from='/cates' exact to='/cates/1' />
            {this.state.routes.map((item, index) => (<Route key={index} path={item.path} exact component={item.component} />))}
          </Switch>
          <TabBar {...this.props} />
        </Suspense>
      </Fragment>
    );
  }
}

export default withRouter(RouterComp);
