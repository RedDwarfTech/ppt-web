import { createBrowserRouter } from "react-router-dom";
import App from "../../page/home/App";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
]);

export default routes;

