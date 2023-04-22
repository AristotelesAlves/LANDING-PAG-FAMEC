import { Cursos } from "../components/Cursos";
import { Form } from "../components/Form";
import { Home } from "../components/Home";
import { Institucional } from "../components/Institucional";
import { Ofuturo } from "../components/Ofuturo";

export function LandingPag(){
    return(
        <div>
            <Home/>
            <Institucional/>
            <Cursos/>
            <Ofuturo/>
            <Form/>
        </div>
    )
}