import { CardCursos } from "./CardCursos";
import { Calculator, Cookie, Scales, Users } from "phosphor-react";

export function Cursos(){
    return(
        <section className="flex flex-col items-center w-full bg-custom-bg py-6">
            <strong className="text-4xl pb-7 pt-2 text-blue-950 max-[1200px]:text-3xl">
                Nossos melhores cursos para você
            </strong>
            <div className="flex gap-4 justify-center w-full h-fit flex-wrap">
                <CardCursos 
                 description="Direito é a área responsável por promover a aplicação e execução de normas jurídicas que regem a sociedade." 
                 img={<Scales size={50} />} 
                 modality="EAD e Presencial" 
                 time="5 anos" 
                 title="Direito"
                />

                <CardCursos 
                 description="O curso de Administração é amplo e versátil, pois reúne diversas áreas de conhecimento como Gestão de Pessoas, Direito, Economia, Contabilidade e Marketing." 
                 img={<Calculator size={50} />} 
                 modality="EAD e Presencial" 
                 time="Duração: 4 anos" 
                 title="Adminstração"
                />


                <CardCursos 
                 description="Nutrição é a área de conhecimento que estuda o comportamento do organismo humano durante o processamento e aproveitamento de nutrientes dos alimentos." 
                 img={<Cookie size={50} />} 
                 modality="EAD e Presencial" 
                 time="4 anos" 
                 title="Nutrição"
                />

                <CardCursos 
                 description="Serviço Social é a área relacionada à execução de políticas públicas e programas sociais, que tem por objetivo a inclusão social, a diminuição de desigualdades e a garantia de direitos do cidadão." 
                 img={<Users size={50} />} 
                 modality="EAD e Presencial" 
                 time="4 anos" 
                 title="Serviço social"
                />
            </div>
        </section>
    )
}