import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../Layout/App";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../Features/activities/form/ActivityForm";
import ActivityDetails from "../../Features/activities/details/ActivityDetails";

// Path: Reactivities/client-app/src/App/router/routs.tsx
export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: "activities", element: <ActivityDashboard />},
            {path: "activities/:id", element: <ActivityDetails />},
            {path: "createActivity", element: <ActivityForm key='create'/>},
            {path: "manage/:id", element: <ActivityForm key='manage'/>},
            
        ]
    },
   
]

export const router = createBrowserRouter(routes)