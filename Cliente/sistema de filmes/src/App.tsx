import { BrowserRouter } from "react-router-dom";
import {Router} from "../Router"
import "../src/Themes/global.module.css"
export function App() {
  return (
   <BrowserRouter>
      <Router/>
   </BrowserRouter>
  )
}


