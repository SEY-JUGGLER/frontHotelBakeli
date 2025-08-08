"use client"; // ✅ Toujours tout en haut

import { useState } from "react";
import styled from "styled-components";
import VerticalNav from "../components/VerticalNav";

export default function AddHotel() {
  const [hotelData, setHotelData] = useState({
    nom: "",
    lieu: "",
    prix: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setHotelData({
      ...hotelData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données soumises :", hotelData);
    alert("Hôtel ajouté avec succès !");
    // Ici, tu pourras envoyer les données au backend avec fetch() ou axios
  };

  return (
    <Container>
      <VerticalNav />
      <Main>
        <Title>Ajouter un hôtel</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Nom de l'hôtel</Label>
          <Input
            type="text"
            name="nom"
            value={hotelData.nom}
            onChange={handleChange}
            placeholder="Ex: Hôtel de la Plage"
            required
          />

          <Label>Lieu</Label>
          <Input
            type="text"
            name="lieu"
            value={hotelData.lieu}
            onChange={handleChange}
            placeholder="Ex: Dakar, Sénégal"
            required
          />

          <Label>Prix par nuit (FCFA)</Label>
          <Input
            type="number"
            name="prix"
            value={hotelData.prix}
            onChange={handleChange}
            placeholder="Ex: 12000"
            required
          />

          <Label>Photo</Label>
          <Input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            required
          />

          <Button type="submit">Ajouter l'hôtel</Button>
        </Form>
      </Main>
    </Container>
  );
}

/* 📌 STYLED COMPONENTS */
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f9f9f9;
`;

const Main = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Form = styled.form`
    position: relative;
    left: 35%;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 500px;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  outline: none;
  &:focus {
    border-color: #0070f3;
  }
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.8rem 1.2rem;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #005bb5;
  }
`;
