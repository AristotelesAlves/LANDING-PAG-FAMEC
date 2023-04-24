import homeImg from '../img/ImgHome.png'
import famec from '../img/FAMEC.png'
import { Hamburger, List, X } from 'phosphor-react'
import { useState } from 'react'

export function Home(){

    const [opening,setOpening]= useState(true);
    
    return (
        <header className="flex flex-col min-[1200px]:items-center max-[1200px]:center w-full bg-custom-bg">
            <div className="flex w-full h-fit justify-between px-10 py-2 bg-white backdrop-blur-sm bg-opacity-50 drop-shadow-2xl ">
                <img src={famec} alt="" />
                <ul className="flex gap-10 h-20 items-center text-xl mr-10 max-[1200px]:hidden">
                    <li><a href="#home" className="font-semibold text-2xl">Home</a></li>
                    <li><a href="#inscricao" className="font-semibold text-2xl">Inscrições</a></li>
                    <li><a href="#home" className="font-semibold text-2xl">Contato</a></li>
                </ul>
                <button 
                  className="min-[1200px]:hidden"
                onClick={() => {
                    setOpening(!opening)
                }}>
                    {opening == true ? <List size={40}/> : <X size={40}/>}
                </button>
            </div>
            <div className="flex w-full h-fit justify-center">
                <div className="flex flex-col gap-10 py-10 max-[1200px]:text-sm">
                    <h1 className="font-bold  text-5xl text-blue-950 w-[600px] max-[1200px]:w-[500px] uppercase">
                    A faculdade metropolitana do cariri.
                    </h1>
                    <p className="tracking-widest w-[500px]">
                    FAMEC reflete o esforço de conceber a Instituição em sua totalidade, a partir de uma visão que a insere no plano nacional e regional alinhá-la à nova era e baseada num ambiente que busca autonomia para tornar-se uma instituição inovadora e de expressão regional, com dimensão compatível com o atual estágio de desenvolvimento e com as necessidades futuras que a realidade local impõe.
                    </p>
                    <a 
                     className="bg-custom-blue-01 text-white px-5 py-3 w-fit rounded-xl text-lg font-semibold shadow-2xl hover:bg-blue-700 active:bg-blue-500"
                     href="#inscricao">
                        Inscreva-se
                    </a>
                    <div className="before:content bg-blue-950 w-[450px] h-[2px]">

                    </div>
                </div>
                <img className="h-[700px] w-[700px] max-[1200px]:hidden" src={homeImg} alt="" />
            </div>
        </header>
    )
}