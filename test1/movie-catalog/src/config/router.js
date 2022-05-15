import Home from "../pages/home";
import Favorite from "../pages/favorite";
import Detail from "../pages/detail";

export const routes = [
    {
        path: "/",
        exact: true,
        component: <Home />,
        title: "Home",
        isHeaderElement: true,
    },
    {
        path: "/movies/:id",
        exact: false,
        component: <Detail />,
        title: "Detail",
        isHeaderElement: false,
    },
    {
        path: "/favorites",
        exact: false,
        component: <Favorite />,
        title: "Favorites",
        isHeaderElement: true,
    },
];
