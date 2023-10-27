import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddClient from "../pages/AddClient";
import AdminHome from "../admin/pages/Home";
import ClientDetails from "../admin/pages/ClientDetails";
import RentCollection from "../admin/pages/RentCollection";
import Cost from "../admin/pages/Cost";
import CostAdd from "../admin/pages/CostAdd";
import Dashboard from "../layout/Dashboard";

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
                path: 'clientdetails',
                element: <ClientDetails></ClientDetails>
            },
            {
                path: 'rentcollection',
                element: <RentCollection></RentCollection>
            },
            {
                path: 'cost',
                element: <Cost></Cost>
            },
            {
                path: 'costadd',
                element: <CostAdd></CostAdd>
            },
            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            },
        ]
    }
])

export default routes;