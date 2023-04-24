import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import jwt from 'jsonwebtoken';

interface IAuthProvider {
  children: ReactNode;
}

interface IUser {
  nome: string;
  senha: string;
}

interface IAuthContextData {
  user: IUser | null;
  signIn: (nome: string, senha: string) => Promise<void>;
  signOut: () => void;
}

type IAuthResponse = {
  token: string;
  user: IUser;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider(props: IAuthProvider) {

  const [user, setUser] = useState<IUser | null>(null);

  async function signIn(nome: string, senha: string) {
    const response = await api.post<IAuthResponse>('/authenticate', {
      nome: nome,
      senha: senha
    })
    const { token, user } = response.data
    localStorage.setItem('@famec:token', token)
    setUser(user)
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@famec:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@famec:token');
    if (token) {
      try {
        const decodedToken = jwt.verify(token, import.meta.env.VITE_SECRET_KEY_JWT) as IUser; // converter o decodedToken para tipo IUser
        setUser(decodedToken);
      } catch (err) {
        console.log(err);
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signOut, signIn}}>
      {props.children}
    </AuthContext.Provider>
  )
}