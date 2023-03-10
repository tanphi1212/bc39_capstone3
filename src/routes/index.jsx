import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
    {
        path: "",
        element: lazy(() => import("./../pages/HomeTemplate")),
        nested: [
            {
                path: "",
                element: lazy(() => import("./../pages/HomeTemplate/HomePage")),
            },
            {
                path: "/list-movie",
                element: lazy(() => import("./../pages/HomeTemplate/ListMoviesPage")),
            },
            {
                path: `/detail/:id`,
                element: lazy(() => import("./../pages/HomeTemplate/DetailMoviePage")),
            },
            {
                path: `/ticket-room/:id`,
                element: lazy(() => import("../pages/HomeTemplate/TicketRoomPage")),
            },
        ]
    },
    {
        path: "admin",
        element: lazy(() => import("./../pages/AdminTemplate")),
        nested: [
          {
            path: "dashboard",
            element: lazy(() => import("./../pages/AdminTemplate/DashboardPage")),
          },
          {
            path: "add-user",
            element: lazy(() => import("./../pages/AdminTemplate/AddUserPage")),
          },
          {
            path: "add-movie",
            element: lazy(() => import("./../pages/AdminTemplate/AddMoviePage")),
          },
        ],
      },
      {
        path: "auth",
        element: lazy(() => import("./../pages/AdminTemplate/AuthPage")),
      },

]


const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<item.element />}
                            />
                        );
                    })}
                </Route>
            );
        } else {
            return (
                <Route key={route.path} path={route.path} element={<route.element />} />
            );
        }
    });
};

export default renderRoutes;
