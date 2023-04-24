import { FormEvent, useState } from 'react';
import bg from '../img/bg-img.png'
import InputMask from 'react-input-mask';
import { api } from '../services/api';

export function Form(){
    import.meta.env.BASE_URL
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [check, setCheck] = useState(false);
    const [invalidTermo,setInvalidTermo] = useState('')
    const [isVisible, setIsVisible] = useState(true);
    const [invalidName, setInvalidName] = useState('');
    const [invalidEmail, setInvalidEmail] = useState('');
    const [invalidTelefone, setInvalidTelefone] = useState('');
    const [invalidcpf, setInvalidcpf] = useState('');
    const [invalidNRg, setInvalidNRg] = useState('');
    const [invalidDataNascimento, setInvalidDataNascimento] = useState('');
    const [responseError, setResponseError] = useState<any>(null);;

    function hideElementAfterDelay() {
        setIsVisible(!isVisible);
        setTimeout(() => {
          setIsVisible(!isVisible);
        }, 3000);
      }

    async function handleInformations(){
        await api.post('/user', {
            nome: nome,
            email: email,
            telefone: telefone,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento
        },{
            headers: {
                'Authorization': 'Token de acesso',
                'Content-Type': 'application/json'
              }
        }).then(response => {
            setResponseError(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }


    async function handlesendForm(e: FormEvent){
        e.preventDefault();

        if(nome == ''){
            setInvalidName('text-red-500')
            return;
        }
        setInvalidName('')
        if(email  == ''){
            setInvalidEmail('text-red-500')
            return;
        }
        setInvalidEmail('')
        if(telefone  == ''){
            setInvalidTelefone('text-red-500')
            return;
        }
        setInvalidTelefone('')
        if(cpf  == ''){
            setInvalidcpf('text-red-500')
            return;
        }
        setInvalidcpf('')
        if(rg  == ''){
            setInvalidNRg('text-red-500')
            return;
        }
        setInvalidNRg('')
        if(dataNascimento  == ''){
            setInvalidDataNascimento('text-red-500')
            return;
        }
        setInvalidDataNascimento('')

        if(check == false){
            setInvalidTermo('text-red-500')
            return;
        }

        setInvalidTermo('')

        handleInformations()

        if(responseError == 'já existe email' || responseError == 'já existe rg' || responseError == 'já existe cpf' ){
            return;
        }

        hideElementAfterDelay()
        setNome('')
        setEmail('')
        setTelefone('')
        setCpf('')
        setRg('')
        setDataNascimento('')
    }

    return (
        <section 
         id="inscricao" 
         className="h-fit w-full flex max-[1200px]:justify-center min-[1200px]:justify-end min-[1200px]:px-20 items-center py-10"
         style={{ backgroundImage:`url(${bg})`}}>
         
            <div className="w-[500px] max-[1200px]:w-[380px] h-fit bg-custom-bg py-10 flex flex-col items-center justify-center">
                <strong className="text-3xl mb-6">
                    Inscrição gratuito!
                </strong>
                <form
                  onSubmit={handlesendForm} 
                  className={`flex flex-col px-5 py-2 w-full `}>
                    <label className={`${invalidName}`}>
                        Nome
                    </label>
                    <input 
                      className="border-[2px] border-black rounded-lg py-1 px-2 "
                      placeholder='Seu nome completo'
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      />
                    
                    <label className={`${invalidEmail} ${responseError == 'já existe email' ? 'text-red-500' :'' } `}>
                        E-mail
                    </label>
                    <input 
                      className="border-[2px] border-black rounded-lg py-1 px-2 "
                      placeholder='Seu E-mail'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      />

                    <label className={`${invalidTelefone}`}>
                        Telefone
                    </label>
                    <InputMask
                      className="border-[2px] border-black rounded-lg py-1 px-2 "
                      mask="(99) 99999-9999"
                      id="cellPhoneNumber"
                      name="cellPhoneNumber"
                      type="text"
                      placeholder="(00) 00000-0000"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                    />

                    <label className={`${invalidcpf} ${responseError == 'já existe cpf' ? 'text-red-500' :'' }`}>
                        CPF
                    </label>
                    <InputMask
                      className="border-[2px] border-black rounded-lg py-1 px-2 "
                      mask="999.999.999-99"
                      id="cpf"
                      name="cpf"
                      type="text"
                      placeholder="000.000.000-00"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    />

                    <label className={`${invalidNRg} ${responseError == 'já existe rg' ? 'text-red-500' :'' }`}>
                        RG
                    </label>
                    <InputMask
                      className="border-[2px] border-black rounded-lg py-1 px-2 "
                      mask="99.999.999-9"
                      id="rg"
                      name="rg"
                      type="text"
                      placeholder="00.000.000-0"
                      value={rg}
                      onChange={(e) => setRg(e.target.value)}
                    />

                    <label className={`${invalidDataNascimento}`}>
                        Data nascimento
                    </label>
                    <InputMask
                     className="border-[2px] border-black rounded-lg py-1 px-2 "
                      mask="99/99/9999"
                      id="birthDate"
                      name="birthDate"
                      type="text"
                      placeholder="dd/mm/aaaa"
                      value={dataNascimento}
                      onChange={(e) => setDataNascimento(e.target.value)}
                    />

                    <div className="flex gap-1 w-full h-fit justify-center py-2">
                        <input 
                          className="" 
                          type="checkbox" 
                          name="" 
                          id=""
                          checked={check} 
                          onChange={() => setCheck(!check)}
                        />
                        <span className={`mt-5 w-[400px] ${invalidTermo}`}>
                            Quero me inscrever para receber atualização por email veja os termos
                        </span>
                    </div>

                    <button 
                      type='submit'
                      className="mt-5 bg-custom-blue-01 w-fit m-auto px-5 py-3 text-xl font-bold text-white rounded-xl hover:bg-blue-800 active:bg-custom-blue-01"
                    >
                        INSCREVA-SE
                    </button>
                </form>
                <div className="">
                    {/* <strong className={`text-green-700 text-xl border-b-[3px] border-green-600 pb-2`}>
                        {responseError == 'mensagem enviado com sucesso' ? 'mensagem enviado com sucesso' : ' ' }
                    </strong> */}
                    <strong 
                      className={`${isVisible == true ? 'hidden':' '} ${responseError == 'já existe email' ? 'text-red-500' : responseError == 'já existe rg' ? 'text-red-500' : responseError == 'já existe cpf' ? 'text-red-500' : responseError == 'Endereço de e-mail não é válido!' ? 'text-red-500' : 'text-green-500'}`}
                    >
                        {responseError == 'já existe email' ? 'já existe email' : responseError == 'já existe rg' ? 'já existe rg' : responseError == 'já existe cpf' ? 'já existe cpf' : responseError == 'Endereço de e-mail não é válido!' ? 'Endereço de e-mail não é válido!' : 'mensagem enviado com sucesso'}
                    </strong>
                </div>
            </div>
        </section>
    )
}