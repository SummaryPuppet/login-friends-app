import { createContext } from "react";

interface User {
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
  friends?: User[];
}

interface NewUser extends User{
  password: string
}

interface DefaultState {
  login: boolean;
  user?: User;
  logIn?: (email: string, password: string) => Promise<void | {error: string}>;
  signIn?: (newUser: NewUser
  ) => Promise<void>;
  signOut?: () => void
}

export const defaultState = {
  login: false,
  user: {
    firstname: "",
    lastname: "",
    nickname: "",
    email: "",
    friends: []
  }
};

export const LoginContext = createContext<DefaultState>(defaultState);
