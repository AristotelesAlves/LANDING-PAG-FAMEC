import {Route, Routes} from 'react-router-dom';
import { LandingPag } from './pages/LandingPag';
import { Adm } from './pages/Adm';
import { Home } from './components/Home';
import { Cursos } from './components/Cursos';


export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<LandingPag/>}/>
            <Route path="/adm" element={<Adm/>}/>
            <Route path="/1" element={<Home/>}/>
            <Route path="/2" element={<Cursos/>}/>
        </Routes>
    )
}