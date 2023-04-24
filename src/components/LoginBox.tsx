// import { useState, FormEvent } from 'react';
// import { api } from '../services/api';

// interface IUser {
//   nome: string;
//   senha: string;
// }

// type IAuthResponse = {
//   token: string;
//   user: IUser;
// };

// export function LoginBox() {
//   const [nome, setNome] = useState('');
//   const [senha, setSenha] = useState('');
//   const [erro, setErro] = useState('');
//   const [consoleError, setConsoleError] = useState<any>(null);

//   async function signIn(nome: string, senha: string) {
//     try {
//       const response = await api.post<IAuthResponse>('/authenticate', {
//         nome: nome,
//         password: senha,
//       }).then(r => setConsoleError(r.data))
    
//       if(consoleError == 'usuário não encontrado'){
//         setErro('usuário não encontrado')
//         return;
//       }
//       if(consoleError == 'usuário não encontrado'){
//         setErro('usuário não encontrado')
//         return;
//       }


//       // localStorage.setItem('@famec:token', token);

//     } catch (error: unknown) {
      
//     }
//   }

//   function handleSendForm(e: FormEvent) {
//     e.preventDefault();
//     signIn(nome, senha);
//   }


//   return (
//     <div>
//       <form onSubmit={handleSendForm}>
//         <label>Nome</label>
//         <input
//           value={nome}
//           onChange={(e) => setNome(e.target.value)}
//           type="text"
//           placeholder="Nome"
//         />
//         <label>Senha</label>
//         <input
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)}
//           type="password"
//           name=""
//           id=""
//           placeholder="Senha"
//         />
//         <button type="submit">Login</button>
//         <p>{erro}</p>
//       </form>
//     </div>
//   );
// }