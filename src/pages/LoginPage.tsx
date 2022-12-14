import React, { FC, useContext } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../components/Enterence/LoginForm";
import { LoginFormProps } from "../components/Enterence/LoginForm/LoginForm.types";
import {
  LoginContext,
  useLoginContext,
} from "../contexts/LoginContext/LoginContext";
import { auth } from "../services/http/patika/endpoints/auth";
export type LoginPageProps = {};
const LoginPage: FC<LoginPageProps> = (props) => {
  const navigate = useNavigate();
  const { login } = useLoginContext();

  const handleLogin: LoginFormProps["onLogin"] = (values) => {
    auth.login(values).then(({ data }) => {
      login(data.token, data.username);
      navigate("/");
    });
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
