import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Conta da ONG</C.Title>
      <div>
        <p>Bem-vindo</p>
    
      </div>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
