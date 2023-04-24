import user01 from '../img/user01.png'
import mac from '../img/mec.png'
import famec from '../img/FAMEC.png'

export function Ofuturo(){
    return(
        <section id="#sobre" className="flex items-center justify-center w-full h-fit max-[1200px]:py-5 max-[1200px]:text-center ">
            <div className="max-[1200px]:hidden">
                <img src={user01} alt="" />
            </div>
            <div className="flex flex-col gap-11">
                <strong className="text-5xl text-blue-950">
                    O futuro é agora!
                </strong>
                <div className="w-[600px] flex flex-col gap-3 ml-24 max-[1200px]:w-[500px] max-[1200px]:ml-0">
                    <p>
                        A FAMEC é uma instituição de Ensino Superior devidamente credenciada pelo Ministério da Educação – MEC, por meio da Portaria Ministerial nº 90, de 14 de Janeiro de 2019.
                    </p>
                    <p>
                        A FAMEC tem como objetivo geral, em consonância com sua missão, “promover ações diferenciadas na qualificação pessoal e capacitação profissional de excelência, contribuindo para o desenvolvimento da sociedade no atendimento diferenciado da sua clientela, abrindo espaços de inclusão e de transformação social”.
                    </p>
                </div>
                <div className="flex justify-end items-end">
                    <img src={famec} alt="" />
                    <img src={mac} alt="" />
                </div>
            </div>
        </section>
    )
}