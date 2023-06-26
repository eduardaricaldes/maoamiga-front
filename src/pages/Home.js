import React from "react";
import styled from "styled-components";

import imgprovider from "../assets/imgprovider/10.jpg";
import imgdoisprovider from "../assets/imgprovider/13.jpg";
import logodois from "../assets/logodois.png";
import schedulerlogo from "../assets/scheduler.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container>
      <Navbar>
        <div className="logo">
          <img src={logodois} alt="logo" />
          <div className="title">
            <h1>Friendly Hands</h1>
          </div>
        </div>
      </Navbar>
      <CategorySection>
        <h2>Escolha uma categoria</h2>
        <CategoryCards>
          <CategoryCard>
            <div className="category">
              <img src={imgprovider} alt="category" />
            </div>
            <div className="name">freelace de programação</div>
          </CategoryCard>
          <CategoryCard>
            <div className="category">
              <img src={imgdoisprovider} alt="category" />
            </div>
            <div className="name">pets</div>
          </CategoryCard>
        </CategoryCards>
      </CategorySection>
      <Footer>
        <ScheduleButton>
          <Link to="/schedulerPage">
            <div className="schedulerimg">
              <input type="button" />
              <img src={schedulerlogo} alt="schedulerlogo" />
              <div className="button-text">scheduler</div>
            </div>
          </Link>
        </ScheduleButton>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background: #fff;
  height: 100vh;
  font-family: "Lato", sans-serif;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ac7ae9;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: -1;
  }

  .logo {
    display: flex; /* Exibe os elementos em linha */
    align-items: center; /* Alinha verticalmente ao centro */
    gap: 10px; /* Espaçamento entre o logo e o título */
  }

  img {
    width: 120px;
    border-radius: 16px;
    overflow: hidden;
  }

  .title {
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin: 0;
      color: #fff;
    }
  }
`;

const CategorySection = styled.section`
  text-align: center;
  padding: 40px;
  margin-bottom: 50px;
  color: #333;
  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;

const CategoryCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 19px;
  background: rgba(63, 85, 173, 0.33);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  width: 130px;

  .category {
    border-radius: 50%;
    img {
      width: 100%;
      border-radius: 20%;
    }
  }
  .name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 16px;
    color: #333;
    word-break: break-all;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ac7ae9;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: -1;
  }
`;

const ScheduleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  .schedulerimg {
    width: 65px;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;
