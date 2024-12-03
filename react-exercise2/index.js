import {createRoot} from "react-dom/client"
import App from "./App.js"
const getRootById= document.getElementById("root");
const root = createRoot(getRootById);

root.render(<App/>);