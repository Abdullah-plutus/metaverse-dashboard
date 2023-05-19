import React, { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLogin } from "../../../components";
import { useLogin } from "../../../queries";
import { emailValidator } from "../../../utils";
import { RootState, useAppDispatch } from "../../../slices";
import { setCurrentUser } from "../../../slices/app";

function Login() {
  const { currentUser } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (currentUser?.isAuthorized) {
      navigate("/");
    }
  }, [currentUser]);

  const { mutate, isLoading } = useLogin();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = (
    username: string,
    email: string,
    password: string,
    setError: Function,
    reset: Function
  ) => {
    if (email) {
      if (!emailValidator(email)) {
        setError("email", {
          type: "custom",
          message: "Please Enter a valid email",
          error: true,
        });
      }
      return;
    }

    if (!username && !email) {
      setError("username", {
        type: "custom",
        message: "Username or Email is required",
      });
      setError("email", {
        type: "custom",
        message: "Email or Username is required",
      });

      return;
    }
    mutate(
      { username, email, password },
      {
        onSuccess: (res) => {
          console.log("Login Success");
          reset();
          localStorage.setItem("authToken", res.headers["x-auth"]);
          dispatch(setCurrentUser(res.data));
          navigate("/dashboard");
          toast({
            position: "top-right",
            title: "Login Successfully",
            isClosable: true,
            duration: 4000,
            status: "success",
          });
        },
        onError: (error: any) => {
          toast({
            position: "top-right",
            title: "Login Error",
            description: error.response.data.message,
            isClosable: true,
            duration: 4000,
            status: "error",
          });
        },
      }
    );
  };

  return (
    <>
      <CLogin handleLogin={handleLogin} isLoading={isLoading} />
    </>
  );
}

export default Login;
