import { MonitorPlay, MouseSimple, Sparkle, UsersThree } from "phosphor-react";

export function Home(){
    return(
        <div className="flex justify-center bg-color-home h-full pt-10">
            <div className="w-[45%] flex flex-col items-center mt-2">
                <div className="h-full">
                    <h1 className="text-5xl font-bold text-cinza-custom">
                        O 
                        <label className="px-1 text-laranja-custom">
                            futuro
                        </label>
                        da<br/>
                        Educação é aqui!
                    </h1>
                    <p className="mt-5 text-cinza-custom">
                        A 
                        <label className="text-azul-custom px-2">
                            TCB
                            <label className="text-laranja-custom ">
                                INFO
                            </label>
                        </label> 
                        é uma plataforma de curso fictício, apenas<br/> para aprimorar meus domínios com ferramentas de<br/> desenvolvimento web.
                    </p>
                    <p className="mt-48 font-light text-cinza-custom flex gap-1 items-center">
                        <MouseSimple 
                          className="animate-bounce mt-2"
                          size={23}
                        />
                        Desça  para ver nossos cursos!
                    </p>
                </div>
            </div>
            <div className="bg-home bg-right bg-no-repeat w-[52%] h-[446px]">
                <div className="flex flex-col gap-6">
                    <div className="flex bg-white px-2 py-2 rounded-xl items-center gap-2 ml-20 w-44 drop-shadow-padrao">
                        <div className="bg-laranja-custom h-fit w-fit p-1 rounded-lg text-white flex justify-center items-center shadow-md shadow-laranja-custom">
                            <MonitorPlay size={32} />
                        </div>
                        <div >
                            <p className="font-bold text-sm">
                                +10 Cursos
                            </p>
                            <p className="text-cinza-custom text-sm">
                                Gratuitos
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-white px-2 py-2 w-44 rounded-xl items-center gap-2 ml-10 drop-shadow-padrao">
                        <div className="bg-laranja-custom h-fit w-fit p-1 rounded-lg text-white flex justify-center items-center shadow-md shadow-laranja-custom ">
                            <Sparkle size={32} />
                        </div>
                        <div>
                            <p className="font-bold text-sm">
                                Certificados
                            </p>
                            <p className="text-cinza-custom text-sm">
                                Gratuitos
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-white px-2 py-2 w-44 rounded-xl items-center gap-2 drop-shadow-padrao">
                        <div className="bg-laranja-custom h-fit w-fit p-1 rounded-lg text-white flex justify-center items-center shadow-md shadow-laranja-custom">
                            <UsersThree size={32} />
                        </div>
                        <div>
                            <p className="font-bold text-sm">
                                +100 Alunos
                            </p>
                            <p className="text-cinza-custom text-sm">
                                Formado
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}