import {createRoot} from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App.js"
const getRootById= document.getElementById("root");
const root = createRoot(getRootById);
const Root=createBrowserRouter([
{
  path:"/",
  element:<App/>
}
])

root.render(<RouterProvider root={Root}/>);