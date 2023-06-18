export function Nav(){
    return(
        <nav className="flex justify-between px-7 h-16 items-center">
            <div className="flex gap-10">

                <div className="text-azul-custom text-2xl font-bold">
                    TCB
                    <label className="text-laranja-custom items-center">
                        INFO
                    </label>
                </div>

                <ul className="flex gap-6 items-center text-cinza-custom font-semibold">
                    <li>
                        Inicio
                    </li>
                    <li>
                        Cursos
                    </li>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </div>
            <div className="bg-azul-custom rounded-md text-white px-3 py-2 font-semibold hover:opacity-80">
                <a href="#">
                    Inscreva-se
                </a>
            </div>
        </nav>
    )
}