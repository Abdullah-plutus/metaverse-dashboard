import React from "react";
import { CLogin } from "../../../components";
import { useLogin } from "../../../queries";

function Login() {
  const { mutate, isLoading } = useLogin();

  const handleLogin = (
    username: string,
    email: string,
    password: string,
    setError: Function
  ) => {
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
    mutate({ username, email, password });
  };

  return (
    <>
      <CLogin handleLogin={handleLogin} isLoading={isLoading} />
    </>
  );
}

export default Login;
