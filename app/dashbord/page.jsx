"use client";

import styled from "styled-components";
import VerticalNav from "../components/VerticalNav"; // Ton menu latéral
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    forms: 0,
    hotels: 0,
    messages: 0,
    mails: 0,
    users: 0,
    entities: 0
  });

  useEffect(() => {
    // Simulation de récupération API
    // Tu remplacerais ça par un fetch("/api/stats")
    setTimeout(() => {
      setStats({
        forms: 120,
        hotels: 15,
        messages: 48,
        mails: 32,
        users: 210,
        entities: 8
      });
    }, 1000);
  }, []);

  return (
    <DashboardContainer>
      <VerticalNav />
      <MainContent>
        <Title>Tableau de Bord</Title>
        <StatsGrid>
          <StatCard>
            <StatNumber>{stats.forms}</StatNumber>
            <StatLabel>Formulaires soumis</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{stats.hotels}</StatNumber>
            <StatLabel>Hôtels</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{stats.messages}</StatNumber>
            <StatLabel>Messages</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{stats.mails}</StatNumber>
            <StatLabel>Mails</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{stats.users}</StatNumber>
            <StatLabel>Utilisateurs</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{stats.entities}</StatNumber>
            <StatLabel>Entités</StatLabel>
          </StatCard>
        </StatsGrid>
      </MainContent>
    </DashboardContainer>
  );
}

// 📌 Styles avec styled-components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const StatCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0070f3;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #555;
`;
