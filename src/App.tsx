import Post from "./pages/Post/Post";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import ContainerAuth from "./components/ContainerAuth/ContainerAuth";
import AuthContextProvider, { useAuth } from "./context/AuthContextProvider";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    children: [
      {
        path: "",
        element: (
          <ContainerAuth>
            <Login title="WELCOME BACK" description="Log into your account" />
          </ContainerAuth>
        ),
      },
      { path: "post", element: <Post /> },
      {
        path: "sign-up",
        element: (
          <ContainerAuth>
            <SignUp
              title="SIGN UP"
              description="Create an account to continue"
            />
          </ContainerAuth>
        ),
      },
      {
        path: "*",
        element: (
          <ContainerAuth>
            <Login title="WELCOME BACK" description="Log into your account" />
          </ContainerAuth>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />{" "}
    </AuthContextProvider>
  );
}

function Root() {
  const context: any = useAuth();
  const onModalToggle = () => {
    context.dispatch({ type: "close_auth" });
  };

  return (
    <div className="height-100">
      {context.state?.showLogin == true && (
        <Modal onToggle={onModalToggle}>
          <Login
            title="WELCOME BACK"
            description="Log into your account"
            isModal={true}
          />
        </Modal>
      )}
      {context.state?.showSignUp == true && (
        <Modal onToggle={onModalToggle}>
          <SignUp
            title="SIGN UP"
            description="Create an account to continue"
            isModal={true}
          />
        </Modal>
      )}
      <Outlet />
    </div>
  );
}
