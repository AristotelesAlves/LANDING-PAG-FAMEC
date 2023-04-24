import { FacebookLogo, InstagramLogo } from "phosphor-react";
import famec from '../img/FAMEC.png'

export function Footer(){
    return(
        <footer className="w-full h-fit flex flex-col py-5 justify-center">
            <div className="w-full flex justify-around flex-wrap max-[1200px]:gap-2">
                <img className="max-[1200px]:h-[80px]" src={famec} alt="" />
                <div className="">
                    <strong className="text-3xl text-blue-950">
                        Nossos contatos
                    </strong>
                    <div className="flex flex-col items-center w-full my-2 gap-2">
                        <a href="https://api.whatsapp.com/send/?phone=558899139972&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Famec&type=phone_number&app_absent=0">(88) 9.9913.9972</a>
                        <a href=""> 0800.177.0800</a>
                    </div>
                </div>
                <div className="w-fit">
                    <strong className="text-3xl text-blue-950">
                        Nossos redes sociais
                    </strong>
                    <div className="flex justify-center py-2">
                        <a className="px-2 flex gap-1 items-center" href="https://www.instagram.com/fameccariri/"><InstagramLogo size={35}/>Instagram</a>
                        <a className="px-2 flex gap-1 items-center" href="https://www.facebook.com/profile.php?id=100004909158087"><FacebookLogo size={35}/>Facebook</a>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit flex mt-2 py-2 px-10 min-[1200px]:justify-start">
                <p>
                    2022 © Todos os Direitos Reservados
                </p>
            </div>
        </footer>
    )
}