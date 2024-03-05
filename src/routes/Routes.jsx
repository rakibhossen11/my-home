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
import UpdateForm from "../admin/pages/UpdateForm";
import Rent from "../admin/pages/Rent";
import ClientAdd from "../admin/pages/ClientAdd";

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
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
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
                path: 'rentcollection',
                element: <RentCollection></RentCollection>
            },
            {
                path: 'updateForm/:id',
                element: <UpdateForm></UpdateForm>,
                loader: ({params}) => fetch(`https://myhome-server.vercel.app/clients/${params.id}`)
            },
            {
                path: 'rent/:id',
                element: <Rent></Rent>,
                loader: ({params}) => fetch(`https://myhome-server.vercel.app/clients/${params.id}`)
            },
            {
                path: 'clientadd',
                element: <AddClient></AddClient>
            },
            {
                path: 'clientdetails/:id',
                element: <ClientDetails></ClientDetails>,
                loader: ({params}) => fetch(`https://myhome-server.vercel.app/clients/${params.id}`)
            },
        ]
    }
])

export default routes;