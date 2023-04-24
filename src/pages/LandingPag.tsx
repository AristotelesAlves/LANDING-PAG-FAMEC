import { Cursos } from "../components/Cursos";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Home } from "../components/Home";
import { Institucional } from "../components/Institucional";
import { Ofuturo } from "../components/Ofuturo";

export function LandingPag(){
    return(
        <div className="">
            <Home/>
            <Institucional/>
            <Cursos/>
            <Ofuturo/>
            <Form/>
            <Footer/>
        </div>
    )
}