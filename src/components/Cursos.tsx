import { CardCursos } from "./CardCursos";
import logoDireito from '../img/direito.svg'

export function Cursos(){
    return(
        <section className="flex flex-col items-center w-full bg-custom-bg py-6">
            <strong className="text-4xl pb-7 pt-2 text-blue-950">
                Nossos melhores cursos para você
            </strong>
            <div className="flex gap-4 justify-center w-full h-fit flex-wrap">
                <CardCursos 
                 description="Direito é a área responsável por promover a aplicação e execução de normas jurídicas que regem a sociedade." 
                 img={logoDireito} 
                 modality="EAD e Presencial" 
                 time="5 anos" 
                 title="Direito"
                />

<CardCursos 
                 description="Direito é a área responsável por promover a aplicação e execução de normas jurídicas que regem a sociedade." 
                 img={logoDireito} 
                 modality="EAD e Presencial" 
                 time="5 anos" 
                 title="Direito"
                />


<CardCursos 
                 description="Direito é a área responsável por promover a aplicação e execução de normas jurídicas que regem a sociedade." 
                 img={logoDireito} 
                 modality="EAD e Presencial" 
                 time="5 anos" 
                 title="Direito"
                />

<CardCursos 
                 description="Direito é a área responsável por promover a aplicação e execução de normas jurídicas que regem a sociedade." 
                 img={logoDireito} 
                 modality="EAD e Presencial" 
                 time="5 anos" 
                 title="Direito"
                />
            </div>
        </section>
    )
}