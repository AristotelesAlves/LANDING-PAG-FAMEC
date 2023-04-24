import {Route, Routes} from 'react-router-dom';
import { LandingPag } from './pages/LandingPag';
import { Adm } from './pages/Adm';


export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<LandingPag/>}/>
            <Route path="/adm" element={<Adm/>}/>
        </Routes>
    )
}