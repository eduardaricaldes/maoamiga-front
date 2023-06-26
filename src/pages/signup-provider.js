import styled from "styled-components";

import logodois from "../assets/logodois.png";
import { Link } from "react-router-dom";

export default function SignUpPageProvider() {
  return (
    <SignUpContainer>
      <SignUpLogoTitle>
        <div className="logo">
          <img src={logodois} alt="logo Init" />
        </div>
        <div className="title">
          <h1>Friendly Hands</h1>
        </div>
      </SignUpLogoTitle>
      <ContainerMainForms>
        <h2>Criar uma conta</h2>
        <p>Já tem uma conta?</p>
        <Link to={"/sign-in"}>
          <button>Entrar</button>
        </Link>
        <ContainerForms>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Endereço" />
            <input type="seach" placeholder="Categoria" list="" />
            <input type="password" placeholder="Senha" />
            <Link to={"/sign-in"}>
              <SignInButton type="submit">Vamos la!</SignInButton>
            </Link>
          </form>
        </ContainerForms>
      </ContainerMainForms>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  background-color: #3f55ad;
  height: 100vh;
  font-family: "Lato", sans-serif;
`;

const SignUpLogoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  font-weight: 600px;

  .logo {
    margin-right: 10px;
    width: 150px;

    img {
      width: 100%;
    }
  }
`;

const ContainerMainForms = styled.div`
  background-color: #fff;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  text-align: center;
  color: #ac7ae9;
  min-height: 100vh;
  height: auto;

  h2,
  p {
    font-size: 32px;
    font-weight: 600;
  }

  button,
  p {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.19);
    padding: 10px;
    border: none;
    cursor: pointer;
    color: #ac7ae9;
    font-size: 13px;
    font-weight: 800;
  }
`;

const ContainerForms = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 20px;
  align-items: center;
  cursor: pointer;

  input[type="email"],
  input[type="password"],
  input[type="text"],
  input[type="seach"] {
    display: block;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;

const SignInButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ac7ae9;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;
