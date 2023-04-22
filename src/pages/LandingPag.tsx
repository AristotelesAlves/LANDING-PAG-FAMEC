import { Cursos } from "../components/Cursos";
import { Home } from "../components/Home";
import { Institucional } from "../components/Institucional";
import { Ofuturo } from "../components/Ofuturo";

export function LandingPag(){
    return(
        <>
            <Home/>
            <Institucional/>
            <Cursos/>
            <Ofuturo/>
        </>
    )
}