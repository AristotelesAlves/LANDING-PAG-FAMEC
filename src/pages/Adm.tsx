import { useEffect, useState } from "react"
import { api } from "../services/api"

interface Iuser {
    nome: string
    email: string
    telefone: string
    cpf: string
    rg: string
    dataNascimento: string
}

export function Adm(){

    const [response, setResponse] = useState<Iuser[]>([])

    useEffect(()=> {
        api.get<Iuser[]>('/users')
            .then(response => {
                setResponse(response.data)
            })
    })

    return(
        <div>
            <tr className="flex w-full justify-around mt-10 text-center">
                <td className="w-[300px]">Nome</td>
                <td className="w-[300px]">E-mail</td>
                <td className="w-[300px]">Telefone</td>
                <td className="w-[300px]">CPF</td>
                <td className="w-[300px]">RG</td>
                <td className="w-[300px]">Data nascimento</td>
            </tr>
            {response.map(d => {
                return (
                    <tr className="flex w-full justify-around mt-4 text-center">
                        <td className="w-[300px]">{d.nome}</td>
                        <td className="w-[300px]">{d.email}</td>
                        <td className="w-[300px]">{d.telefone}</td>
                        <td className="w-[300px]">{d.cpf}</td>
                        <td className="w-[300px]">{d.rg}</td>
                        <td className="w-[300px]">{d.dataNascimento}</td>
                    </tr>
                )
            })}
            
        </div>
    )
}