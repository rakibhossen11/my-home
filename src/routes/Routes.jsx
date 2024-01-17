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
                path: '/costadd',
                element: <CostAdd></CostAdd>
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
                path: 'rentcollection',
                element: <RentCollection></RentCollection>
            },
            {
                path: 'updateForm/:id',
                element: <UpdateForm></UpdateForm>,
                loader: ({params}) => fetch(`http://localhost:5000/clients/${params.id}`)
            },
            {
                path: 'rent',
                element: <Rent></Rent>
            },
            {
                path: 'clientadd',
                element: <AddClient></AddClient>
            },
            {
                path: 'clientdetails/:id',
                element: <ClientDetails></ClientDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/clients/${params.id}`)
            },
        ]
    }
])

export default routes;