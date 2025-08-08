"use client";
import React from "react";
import styled from "styled-components";
import VerticalNav from "../components/VerticalNav";

const hotels = [
  {
    id: 1,
    name: "Hôtel de Dakar",
    image: "/images/hotel1.jpg",
    prix: 100000,
  },
  {
    id: 2,
    name: "Hôtel des Almadies",
    image: "/images/hotel2.jpg",
    prix: 150000,
  },
  {
    id: 3,
    name: "Hôtel Saly Beach",
    image: "/images/hotel3.jpg",
    prix: 200000,
  },
];

export default function HotelsList() {
  return (
    <>
      <VerticalNav />
      <Container>
        <Header>
          <Title>Liste des hôtels</Title>
          <a href="addhotel"><AddButton >+ Ajouter un nouvel hôtel</AddButton></a>
        </Header>

        <HotelsWrapper>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id}>
              <HotelImage src={hotel.image} alt={hotel.name} />
              <HotelName>{hotel.name}</HotelName>
              <p>Prix: {hotel.prix} FCFA</p>
            </HotelCard>
          ))}
        </HotelsWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const AddButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0055aa;
  }
`;

const HotelsWrapper = styled.div`
  position: relative;
  left: 280px; /* pour laisser de l'espace pour la barre de navigation */
  position: fixed;
  display: flex;
  flex-wrap: wrap; /* permet d'aller à la ligne si ça dépasse */
  gap: 20px;
`;

const HotelCard = styled.div`
  width: 250px; /* largeur fixe pour l’affichage horizontal */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  background: white;
`;

const HotelImage = styled.img`
  width: 100%; /* prend toute la largeur de la carte */
  height: 150px;
  object-fit: cover;
`;

const HotelName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;
