import Home from "../pages/home";
import Detail from "../pages/movie-detail";
import Favorite from "../pages/favourites";

export const routes = [
    {
        path: "/",
        exact: true,
        component: <Home />,
        title: "Home",
        isHeaderElement: true
    },
    {
        path: "/movies/:id",
        exact: false,
        component: <Detail />,
        title: "Movie Detail",
        isHeaderElement: false
    },
    {
        path: "/favourites",
        exact: false,
        component: <Favorite />,
        title: "Favourites",
        isHeaderElement: true
    }
];