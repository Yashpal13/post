import { createContext, useContext, useReducer } from "react";

const AuthConext = createContext({});
const initialState = {
  showLogin: false,
  showSignUp: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "login":
      return { showLogin: action.payload, showSignUp: false };
    case "signup":
      return { showSignUp: action.payload, showLogin: false };
    case "close_auth":
      return { showSignUp: false, showLogin: false };
  }
}

const AuthContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthConext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthConext.Provider>
  );
};

export default AuthContextProvider;

export function useAuth() {
  return useContext(AuthConext);
}
