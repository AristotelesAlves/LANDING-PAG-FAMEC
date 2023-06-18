import { Cursos } from "../components/Cursos";
import { Home } from "../components/Home";
import { Nav } from "../components/Nav";

export function LandingPag(){
    return(
        <div className="">
            <header className="">
                <Nav/>
                <Home/>
            </header>
            <section>
                <Cursos/>
            </section>
        </div>
    )
}