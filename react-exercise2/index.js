import {createRoot} from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App.js"
import Home from "./Components/Home.jsx";
import CountryDetail from "./Components/CountryDetails.jsx";
import Contact from "./Components/Contact.jsx";
const getRootById= document.getElementById("root");
const root = createRoot(getRootById);
const Root=createBrowserRouter([
{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path: '/:country',
      element: <CountryDetail/>,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]
}
])

root.render(<RouterProvider root={Root}/>);