import { createBrowserRouter } from "react-router-dom";
import Button from "../components/Button";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Button/>,
    },
])

export default router;