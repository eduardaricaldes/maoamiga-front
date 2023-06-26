import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import logodois from "../assets/logodois.png";

// Componente de visualização de agendamento

const AppointmentCard = ({ appointment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(appointment.title);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Lógica para salvar as alterações
    setIsEditing(false);
    // ...
  };

  const handleCancel = () => {
    // Lógica para cancelar a edição
    setIsEditing(false);
    setEditedTitle(appointment.title);
  };

  return (
    <Card>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <ButtonContainer>
            <button onClick={handleSave}>Salvar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <h3>{appointment.title}</h3>
          <p>{appointment.date}</p>
          <p>{appointment.time}</p>
          <ButtonContainer>
            <button onClick={handleEdit}>Editar</button>
            <button>Detalhes</button>
          </ButtonContainer>
        </>
      )}
    </Card>
  );
};
export default function AppointmentsPageUser() {
  // Dados fictícios de agendamentos
  const appointments = [
    { id: 1, title: "Agendamento 1", date: "2023-06-25", time: "09:00" },
    { id: 2, title: "Agendamento 2", date: "2023-06-26", time: "14:30" },
    { id: 3, title: "Agendamento 3", date: "2023-06-27", time: "11:15" },
    { id: 3, title: "Agendamento 3", date: "2023-06-27", time: "11:15" },
  ];

  return (
    <>
      <Container>
        <SchedulerLogoTitle>
          <div className="logo">
            <img src={logodois} alt="logo Init" />
          </div>
          <div className="title">
            <h1>Friendly Hands</h1>
          </div>
        </SchedulerLogoTitle>
        <ContainerScheduler>
          <h2>Agendamentos</h2>
          <Link to="/home">
            <button className="comeback">Voltar para a página inicial</button>
          </Link>
          <AppointmentList>
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </AppointmentList>
        </ContainerScheduler>
      </Container>
    </>
  );
}

// Estilos
const Container = styled.div`
  padding: 20px;
  font-family: "Lato", sans-serif;
  background-color: #3f55ad;
  min-height: 100vh;
  height: 100%;
`;

const SchedulerLogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;

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
`;
const ContainerScheduler = styled.div`
  .comeback {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #f4f4f4;
    color: #000;
    cursor: pointer;
    margin-top: 20px;
    button {
    }
  }
  h2 {
    color: white;
    font-size: 32px;
  }
`;

const AppointmentList = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #3f55ad;
    color: #fff;
    cursor: pointer;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin: 8px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #3f55ad;
    color: #fff;
    cursor: pointer;
  }
`;
