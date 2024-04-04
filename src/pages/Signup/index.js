import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeOng, setNomeOng] = useState("");
  const [tipoOng, setTipoOng] = useState("");
  const [cnpjOng, setCnpjOng] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async () => {
    if (!email || !emailConf || !senha || !nomeOng || !tipoOng || !cnpjOng) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = await signup(email, senha, nomeOng, tipoOng, cnpjOng);

    if (res.error) {
      setError(res.error);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>CADASTRE SUA ONG</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Nome da ONG"
          value={nomeOng}
          onChange={(e) => [setNomeOng(e.target.value), setError("")]}
        />
        <C.Select
          value={tipoOng}
          onChange={(e) => [setTipoOng(e.target.value), setError("")]}
        >
          <C.Option value="">Selecione o tipo de ONG</C.Option>
          <C.Option value="assistencia-social">Assistência Social</C.Option>
          <C.Option value="cultura">Cultura</C.Option>
          <C.Option value="saude">Saúde</C.Option>
          <C.Option value="educacao">Educação</C.Option>
          <C.Option value="meio-ambiente">Meio ambiente</C.Option>
          <C.Option value="Animal">Animal</C.Option>
          <C.Option value="direitos">Desenvolvimento e defesa de direitos</C.Option>
        </C.Select>

        <Input
          type="text"
          placeholder="CNPJ"
          value={cnpjOng}
          onChange={(e) => [setCnpjOng(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?{" "}
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
