import styled from "styled-components";

import logodois from "../assets/logodois.png";

export default function SignInPage() {
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
        <h2>Entrar</h2>
        <p>Não tem uma conta?</p>
        <input type="button" value="Criar uma conta" />
        <ContainerForms>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="button" value="esqueceu a senha ?" />
            <SignInButton type="submit">Entrar</SignInButton>
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

  input,
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
  input[type="password"] {
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
