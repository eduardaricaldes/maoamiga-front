import styled from "styled-components";

import logo from "../assets/logoinit.png";

export default function InitPage() {
  return (
    <InitContainer>
      <InitLogoTitle>
        <div className="logo">
          <img src={logo} alt="logo Init" />
        </div>
        <div className="title">
          <h1>Friendly Hands</h1>
        </div>
      </InitLogoTitle>
      <ContainerBottom>
        <div className="subtitleone">
          <p>Todos os serviços que você precisa nas palmas das suas mãos</p>
        </div>
        <div className="subtitletwo">
          <p>
            para limpar, construção, encanamento e tudo mais. Nós ajudamos você
            a encontrar perto da sua residência.
          </p>
        </div>
        <div className="butom">
          <input type="button" value="Criar uma conta" />
          <input type="submit" value="Já tem uma conta? Login" />
        </div>
      </ContainerBottom>
    </InitContainer>
  );
}

const InitContainer = styled.div`
  background-color: #3f55ad;
  height: 100vh;
  font-family: "Lato", sans-serif;
`;
const InitLogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .logo {
    width: 361px;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .title {
    h1 {
      color: #fff;
      font-size: 48px;
      font-weight: 400px;
    }
  }
`;
const ContainerBottom = styled.div`
  background-color: #fff;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  .subtitleone {
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 100;
    padding: 0px 30px 10px 0px;
  }

  .subtitletwo {
    margin-bottom: 20px;
    font-size: 13px;
    font-weight: 300;
  }

  .butom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    input[type="button"],
    input[type="button"] {
      padding: 10px 20px;
      border: none;
      border-radius: 16px;
      background-color: #ac7ae9;
      color: #fff;
      font-weight: bold;
      width: 359px;
      cursor: pointer;
    }
  }
`;
