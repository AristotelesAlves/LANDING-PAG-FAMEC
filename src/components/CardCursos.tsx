import { Calendar, MapPin, BookmarkSimple } from 'phosphor-react';

interface ICardCursos{
    img: string;
    title: string;
    description: string;
    modality: string;
    time: string;
}

export function CardCursos(props: ICardCursos){
    return(
        <div className="bg-white p-3 shadow-xl rounded-xl w-[340px] h-[450px] flex flex-col justify-center item ">
            <div className="flex gap-1 h-fit items-center text-xl font-bold pt-3 ">
                <img src={props.img} alt="" />
                <strong className="text-blue-950 text-2xl">
                    {props.title}
                </strong>
            </div>
            <p className="w-[280px;] h-[150px] overflow-auto flex border-l-[3px] border-blue-950 ml-6 pl-5 my-5">
                {props.description}
            </p>
            <ul className="ml-3 mb-3 flex flex-col gap-2">
                <li className="flex gap-1"><Calendar size={32} />Duração: {props.time}</li>
                <li className="flex gap-1"><BookmarkSimple size={32} />{props.modality}</li>
                <li className="flex gap-1"><MapPin size={32} />Crato-CE</li>
            </ul>
            <div className="w-full m-auto h-fit text-center pb-2">
                <a 
                 href="#inscricao"
                 className="border-b-[2px] border-blue-900 px-2 py-1 hover:border-b-[3px] hover:border-blue-950"
                >
                    Tenho interesse
                </a>
            </div>
        </div>
    )
}