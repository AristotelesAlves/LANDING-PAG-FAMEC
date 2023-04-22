export function Form(){
    return (
        <section id="inscricao" className="h-[70vh] w-full flex justify-end items-center pr-20">
            <div className="w-[500px] h-[90%] bg-custom-bg flex flex-col items-center justify-center">
                <strong className="text-3xl mb-6">
                    Inscrição gratuito!
                </strong>
                <form className="flex flex-col px-5 py-2 w-full">
                    <label>
                        Nome
                    </label>
                    <input className="border-[2px] border-black rounded-lg py-1 px-2 "/>

                    <label>
                        E-mail
                    </label>
                    <input className="border-[2px] border-black rounded-lg py-1 px-2 "/>

                    <label>
                        Telefone
                    </label>
                    <input className="border-[2px] border-black rounded-lg py-1 px-2 "/>

                    <label>
                        CPF
                    </label>
                    <input className="border-[2px] border-black rounded-lg py-1 px-2 "/>

                    <label>
                        RG
                    </label>
                    <input className="border-[2px] border-black rounded-lg py-1 px-2 "/>

                    <label>
                        Data nascimento
                    </label>
                    <input className="border-[2px] border-black rounded-lg py-1 px-2 "/>
                    <button className="mt-14 bg-custom-blue-01 w-fit m-auto px-5 py-3 text-xl font-bold text-white rounded-xl">
                        INSCREVA-SE
                    </button>
                </form>
            </div>
        </section>
    )
}