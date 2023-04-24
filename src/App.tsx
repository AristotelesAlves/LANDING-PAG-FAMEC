import { BrowserRouter } from "react-router-dom";
import Rotas from "./Router";

export default function App(){
  return(
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
  )
}