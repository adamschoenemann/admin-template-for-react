import { Admin } from "app/pages/admin";
import { Callback, Login, Logout } from "app/pages/auth";
import { NotFound } from "app/pages/public";
import { getAuthUri, isAuthorized } from "app/service/auth";
import * as React from "react";
import { Redirect } from "react-router";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/admin" />;
    },
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/auth/callback",
    component: Callback,
  },
  {
    path: "/admin",
    // `render()` method support in react-router-config v5.0
    /* eslint-disable */
    render: () => {
      if (isAuthorized()) {
        return <Admin />;
      } else {
        if (
          !getAuthUri()
            .toLowerCase()
            .startsWith("http")
        ) {
          return <Redirect to={getAuthUri()} />;
        }
      }
      location.href = getAuthUri();
      return null;
    },
  },
  {
    component: NotFound,
  },
];

export default routes;
