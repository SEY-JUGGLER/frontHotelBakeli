'use client';
import styled from 'styled-components';
import Link from 'next/link'; // ✅ Importer Link de Next.js
import React from 'react';

const BackgroundWrapper = styled.div`
  min-height: 100vh;  
  background-color: #494C4F;
  display: flex;
  justify-content: center;  
`;

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #eeeeeeff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #292727ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #5d0000ff;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #ffe310ff;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  color: #e1e10eff;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #1d3557;
  }
`;

export default function LoginPage() {
  return (
    <BackgroundWrapper>
      <div>
        <Title>RED product</Title>
        <Container>
          <Form>
            <h2>Connectez-vous en tant que Admin</h2>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Mot de passe" />
            <Button>Se connecter</Button>
            <label>
              <input type="checkbox" /> Gardez-moi connecté
            </label>
          </Form>

          {/* ✅ Utilisation de next/link */}
          <StyledLink href="/forgot-password">Mot de passe oublié ?</StyledLink>
          <br />
          Vous n'avez pas de compte ?{' '}
          <Link href="/register">S'inscrire</Link>
        </Container>
      </div>
    </BackgroundWrapper>
  );
}
