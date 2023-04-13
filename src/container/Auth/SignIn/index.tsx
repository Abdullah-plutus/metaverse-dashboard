import React from "react";
import { CSignIn } from "../../../components";
import { useLogin } from "../../../queries";

function SignIn() {
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
      <CSignIn />
    </>
  );
}

export default SignIn;
