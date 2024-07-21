import Posts from "./pages/Posts/Posts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createContext, useContext, useReducer } from "react";
import Modal from "./components/Modal/Modal";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    children: [
      {
        path: "",
        element: (
          <div className="flex flex-col-vertical-center height-100">
            <div style={{ width: "50%", maxWidth: "450px" }}>
              <Login title="WELCOME BACK" description="Log into your account" />
            </div>
          </div>
        ),
      },
      { path: "post", element: <Posts /> },

      {
        path: "sign-up",
        element: (
          <div className="flex flex-col-vertical-center height-100">
            <div style={{ width: "50%", maxWidth: "450px" }}>
              <SignUp
                title="SIGN UP"
                description="Create an account to continue"
              />
            </div>
          </div>
        ),
      },
      {
        path: "*",
        element: (
          <div className="flex flex-col-vertical-center height-100">
            <div style={{ width: "50%", maxWidth: "450px" }}>
              <Login title="WELCOME BACK" description="Log into your account" />
            </div>
          </div>
        ),
      },
    ],
  },
]);
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

export function useAuth() {
  return useContext(AuthConext);
}

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onModalToggle = () => {
    dispatch({ type: "close_auth" });
  };

  return (
    <div className="height-100">
      <AuthConext.Provider value={{ state, dispatch }}>
        {state?.showLogin == true && (
          <Modal onToggle={onModalToggle}>
            <Login
              title="WELCOME BACK"
              description="Log into your account"
              isModal={true}
            />
          </Modal>
        )}
        {state?.showSignUp == true && (
          <Modal onToggle={onModalToggle}>
            <SignUp
              isModal={true}
              title="SIGN UP"
              description="Create an account to continue"
            />
          </Modal>
        )}
        <Outlet />
      </AuthConext.Provider>
    </div>
  );
}
