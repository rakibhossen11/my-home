import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddClient from "../pages/AddClient";
import AdminHome from "../admin/pages/Home";
import ClientDetails from "../admin/pages/ClientDetails";
import RentCollection from "../admin/pages/RentCollection";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'addclient',
                element: <AddClient></AddClient>
            },
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'clientdetails',
                element: <ClientDetails></ClientDetails>
            },
            {
                path: 'rentcollection',
                element: <RentCollection></RentCollection>
            },
        ]
    }
])

export default routes;