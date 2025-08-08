'use client';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  min-height: 100vh;
  background-color: #494C4F;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 450px;
  margin: 50px auto;
  padding: 30px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1d3557;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #1d3557;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  margin-top: 15px;
  width: 100%;

  &:hover {
    background-color: #0f2b4c;
  }
`;

const StyledLink = styled.a`
  display: block;
  margin-top: 15px;
  color: #457b9d;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ForgotPasswordPage() {
  return (
    <BackgroundWrapper>
      <Container>
        <Title>Mot de passe oublié ?</Title>
        <p>Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions pour réinitialiser votre mot de passe.</p>
        <form>
          <Input type="email" placeholder="Votre adresse e-mail" required />
          <Button type="submit">Envoyer le lien</Button>
        </form>
        <StyledLink href="/login">Retour à la connexion</StyledLink>
      </Container>
    </BackgroundWrapper>
  );
}
