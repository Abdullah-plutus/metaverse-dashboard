export interface ILoginProps {
  handleLogin: (
    username: string,
    email: string,
    password: string,
    setError: Function,
    reset: Function
  ) => void;
  isLoading: boolean;
}

export interface LoginFormType {
  username: string;
  email: string;
  password: string;
}
