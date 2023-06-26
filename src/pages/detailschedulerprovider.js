import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logodois from "../assets/logodois.png";

// Componente de visualização de agendamento
const AppointmentCard = ({ appointment }) => {
  const scheduleDate = new Date(appointment.scheduleDate);
  const scheduleTime = new Date(appointment.scheduleTime);

  const formattedDate = scheduleDate.toLocaleDateString();
  const formattedTime = scheduleTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card>
      <>
        <h3>{appointment.title}</h3>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
        <ButtonContainer>
          <Link to={`/appointments/${appointment.id}`}>
            <button>Detalhes</button>
          </Link>
        </ButtonContainer>
      </>
    </Card>
  );
};

// Componente de detalhes do agendamento
const AppointmentDetails = ({ match }) => {
  const appointmentId = match.params.id; // Obtém o ID do agendamento da URL
  // Lógica para obter os detalhes do agendamento com base no ID

  return (
    <Container>
      <h2>Detalhes do Agendamento</h2>
      {/* Exibir os detalhes do agendamento aqui */}
      <Link to="/appointments">
        <button className="comeback">
          Voltar para a lista de agendamentos
        </button>
      </Link>
    </Container>
  );
};

export default function DatailProviderAppointments() {
  const providerAppointments = [
    {
      id: 1,
      title: "Agendamento 1",
      scheduleDate: "2023-06-25T09:00:00.000Z",
      scheduleTime: "2023-06-25T09:00:00.000Z",
    },
    {
      id: 2,
      title: "Agendamento 2",
      scheduleDate: "2023-06-26T14:30:00.000Z",
      scheduleTime: "2023-06-26T14:30:00.000Z",
    },
    {
      id: 3,
      title: "Agendamento 3",
      scheduleDate: "2023-06-27T11:15:00.000Z",
      scheduleTime: "2023-06-27T11:15:00.000Z",
    },
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
          <h2>Seus Agendamentos</h2>
          <Link to="/home">
            <button className="comeback">Voltar para a página inicial</button>
          </Link>
          <AppointmentList>
            {providerAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </AppointmentList>
        </ContainerScheduler>
      </Container>
    </>
  );
}

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
const ButtonContainer = styled.div``;
