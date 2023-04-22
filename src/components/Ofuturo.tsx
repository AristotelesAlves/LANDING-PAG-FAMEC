import user01 from '../img/user01.png'

export function Ofuturo(){
    return(
        <section className="flex items-center justify-center">
            <div className="z-0">
                <img src={user01} alt="" />
            </div>
            <div>
                <strong className="text-5xl text-blue-950">
                    O futuro é agora!
                </strong>
                <div className="w-[600px] flex flex-col gap-3 pl-14">
                    <p>
                        A FAMEC é uma instituição de Ensino Superior devidamente credenciada pelo Ministério da Educação – MEC, por meio da Portaria Ministerial nº 90, de 14 de Janeiro de 2019.
                    </p>
                    <p>
                        A FAMEC tem como objetivo geral, em consonância com sua missão, “promover ações diferenciadas na qualificação pessoal e capacitação profissional de excelência, contribuindo para o desenvolvimento da sociedade no atendimento diferenciado da sua clientela, abrindo espaços de inclusão e de transformação social”.
                    </p>
                </div>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    )
}