import axios from "axios";
import { useContext, ReactElement, FC, useState } from "react";
import { defaultState, LoginContext } from "./LoginContext";

export const useLogin = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("useLogin must be within LoginContext");
  }

  return context;
};

type Props = {
  children?: ReactElement;
};

interface User {
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
  friends?: User[];
}

interface NewUser extends User {
  password: string;
}

interface CustomError extends Error {
  response: {
    data: {
      error: string;
    };
  };
}

const baseUrl = "http://localhost:5000";

export const LoginContextProvider: FC<Props> = ({ children }) => {
  const [login, setLogin] = useState(defaultState.login);
  const [user, setUser] = useState<User>();

  const logIn = async (
    email: string,
    password: string
  ): Promise<void | { error: string }> => {
    try {
      const res = await axios.post(`${baseUrl}/login`, { email, password });

      if (res.status === 401) {
        console.log(res.data);
        return res.data;
      }

      const { firstname, lastname, nickname, friends, token } = res.data;
      localStorage.setItem("contactsAppToken", token);

      setUser({ firstname, lastname, nickname, email, friends });
      setLogin(true);
    } catch (error) {
      const msg = error.response.data;

      if (msg === undefined) return { error: "Not connection" };

      return msg;
    }
  };

  const signIn = async (newUser: NewUser) => {
    try {
      const res = await axios.post(`${baseUrl}/signin`, newUser);

      setUser(res.data);
    } catch (error) {
      console.error(error)
    }
  };

  const signOut = () => {
    setUser(defaultState.user);
    setLogin(false);
  };

  return (
    <LoginContext.Provider value={{ login, logIn, user, signIn, signOut }}>
      {children}
    </LoginContext.Provider>
  );
};
