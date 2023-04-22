import binoculo from '../img/binocular.png'
import justica from '../img/justica.png'
import rock from '../img/rocket.png'
import valor from '../img/valor.png'


export function Institucional(){
    return(
        <div className="flex h-fit py-10 gap-10 w-full justify-center items-center flex-wrap mt-5">

            <div className="w-[300px] h-[250px] text-center">
                <img 
                 className="m-auto h-24 w-24"
                 src={justica} alt="" />
                <strong className="text-2xl py-3 text-blue-950">
                    Princípios
                </strong>
                <p className="text-sm">
                    Respeito ao homem e ao meio ambiente;
                    Éticos, morais e cristãos;
                    Justiça, democracia e liberdade.
                </p>
            </div>

            <div className="w-[300px] h-[250px] text-center">
                <img 
                 className="m-auto h-24 w-24"
                 src={rock} alt="" />
                <strong className="text-2xl py-3 text-blue-950">
                    Missão
                </strong>
                <p className="text-sm">
                    “Promover educação de qualidade formando profissionais e cidadãos competentes, éticos, empreendedores e comprometidos com o desenvolvimento da economia regional sustentável.”
                </p>
            </div>

            <div className="w-[300px] h-[250px] text-center">
                <img 
                 className="m-auto h-24 w-24"
                 src={binoculo} alt="" />
                <strong className="text-2xl py-3 text-blue-950">
                    Visão
                </strong>
                <p className="text-sm">
                    Ser reconhecida pela excelência em seus projetos pedagógicos, disseminando a qualidade do saber  e contribuindo para a preservação e valorização das características étnico-culturais e ambientais.
                </p>
            </div>

            <div className="w-[300px] h-[250px] text-center">
                <img 
                 className="m-auto h-24 w-24"
                 src={valor} alt="" />
                <strong className="text-2xl py-3 text-blue-950">
                    Valores
                </strong>
                <p className="text-sm ">
                    Responsabilidade Educacional;
                    Qualidade nos serviços;
                    Respeito à ética;
                    Sustentabilidad
                </p>
            </div>
        </div>
    )
}