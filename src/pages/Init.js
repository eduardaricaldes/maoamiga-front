import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <ContainerInitfooter>
        <ContainerTitlesSubtitles>
          <div className="subtitleone">
            <p>Todos os serviços que você precisa nas palmas das suas mãos</p>
          </div>
          <div className="subtitletwo">
            <p>
              para limpar, construção, encanamento e tudo mais. Nós ajudamos
              você a encontrar perto da sua residência.
            </p>
          </div>
        </ContainerTitlesSubtitles>
        <ContainerBottom>
          <div className="buttons">
            <Link to="/category">
              <input type="button" value="Criar uma conta" />
            </Link>
            <Link to="/sign-in">
              <input type="button" value="Já tem uma conta? Login" />
            </Link>
          </div>
        </ContainerBottom>
      </ContainerInitfooter>
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
const ContainerInitfooter = styled.div`
  background-color: #fff;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
const ContainerTitlesSubtitles = styled.div`
  .subtitleone {
    margin-bottom: 10px;
    font-size: 30px;
    font-style: italic;
    font-weight: 200px;
  }

  .subtitletwo {
    margin-bottom: 20px;
    font-size: 13px;
    font-style: italic;
    font-weight: 300px;
  }
`;
const ContainerBottom = styled.div`
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input[type="button"],
    input[type="button"] {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #ac7ae9;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      .buttons {
        flex-direction: row;
        flex-wrap: wrap;

        input[type="button"],
        input[type="submit"] {
          flex: 1 0 100%;
        }
      }
    }
    @media (max-width: 1280px) and (max-height: 800px) {
      .buttons {
        flex-direction: column;

        input[type="button"],
        input[type="submit"] {
          width: 100%;
        }
      }
    }
  }
`;
