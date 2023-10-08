import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import ContentDetails from "../pages/contentDetails/ContentDetails";
import ReadingHistory from "../pages/readingHistory/ReadingHistory";
import Dashboard from "../layouts/Dashboard";
import ContentList from "../pages/dashboard/ContentList";
import AddContent from "../pages/dashboard/AddContent";
import UpdateContent from "../pages/dashboard/UpdateContent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/reading-history',
                element: <ReadingHistory></ReadingHistory>
            },
            {
                path: '/content-details/:id',
                element: <ContentDetails></ContentDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <ContentList></ContentList>
            },
            {
                path: '/dashboard/add-content',
                element: <AddContent></AddContent>
            },
            {
                path: '/dashboard/update-content/:id',
                element: <UpdateContent></UpdateContent>
            },
        ]
    },
]);

export default router;