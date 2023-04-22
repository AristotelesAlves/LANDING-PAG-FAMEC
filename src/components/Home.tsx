import homeImg from '../img/ImgHome.png'
import famec from '../img/FAMEC.png'

export function Home(){
    return (
        <header>
            <div className="flex w-full h-fit justify-between px-10 py-2 fixed bg-white backdrop-blur-sm bg-opacity-50 drop-shadow-2xl">
                <img src={famec} alt="" />
                <ul className="flex gap-10 h-20 items-center text-xl mr-10">
                    <li>Home</li>
                    <li>Inscrições</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div className="flex w-full justify-between bg-custom-bg pb-10">
                <div className="m-auto flex flex-col gap-10 py-10">
                    <h1 className="font-bold text-5xl text-blue-950 w-[600px] uppercase">
                    A faculdade metropolitana do cariri.
                    </h1>
                    <p className="w-[700px] tracking-widest">
                    FAMEC reflete o esforço de conceber a Instituição em sua totalidade, a partir de uma visão que a insere no plano nacional e regional alinhá-la à nova era e baseada num ambiente que busca autonomia para tornar-se uma instituição inovadora e de expressão regional, com dimensão compatível com o atual estágio de desenvolvimento e com as necessidades futuras que a realidade local impõe.
                    </p>
                    <a 
                     className="bg-custom-blue-01 text-white px-5 py-3 w-fit rounded-xl text-lg font-semibold shadow-2xl"
                     href="">
                        Inscreva-se
                    </a>
                    <div className="before:content bg-blue-950 w-[450px] h-[2px]">

                    </div>
                </div>
                <img className="h-[700px] w-[700px]" src={homeImg} alt="" />
            </div>
        </header>
    )
}