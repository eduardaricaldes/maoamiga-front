import styled from "styled-components";
import { Link } from "react-router-dom";

import logodois from "../assets/logodois.png";
import logouser from "../assets/logo-user.png";
import logouprovider from "../assets/logo-provider.png";

export default function CategoryPage() {
  return (
    <CategoryContainer>
      <CategoryLogoTitle>
        <div className="logo">
          <img src={logodois} alt="logo Init" />
        </div>
        <div className="title">
          <h1>Friendly Hands</h1>
        </div>
      </CategoryLogoTitle>
      <ContainerButtons>
        <ButtonUser>
          <Link to="/sign-up-user">
            <input type="button" />
            <img src={logouser} alt="logouser" />
            <div className="button-text">usuario</div>
          </Link>
        </ButtonUser>
        <ButtonProvider>
          <Link to="/sign-up-provider">
            <input type="button" />
            <img src={logouprovider} alt="logouprovider" />
            <div className="button-text">Prestador de serviços</div>
          </Link>
        </ButtonProvider>
      </ContainerButtons>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  background-color: #3f55ad;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
`;

const CategoryLogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  .logo {
    width: 200px;
    max-width: 100%;
    img {
      width: 100%;
    }
  }

  .title {
    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .logo {
      margin-right: 20px;
      margin-bottom: 0;
    }

    .title {
      h1 {
        font-size: 48px;
      }
    }
  }
`;

const ButtonUser = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  input[type="button"] {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 200;
  }
  .button-text {
    color: #000;
    text-align: center;
    font-size: 13px;
    font-weight: 400px;
  }

  label {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;

const ButtonProvider = styled(ButtonUser)``;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
