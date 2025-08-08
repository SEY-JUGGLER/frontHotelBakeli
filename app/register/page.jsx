'use client';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
 background-color: #494C4F;
  `

const Container = styled.div`
  max-width: 450px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f9f9f9;
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
  background-color: #1d3557;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0f2b4c;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #1d3557;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  color: #457b9d;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function RegisterPage() {
  return (
    <BackgroundWrapper>
    <Container>
      <Title>RED PRODUCT</Title>
      <Form>
        <h2>Inscrivez-vous en tant que Admin</h2>
        <Input type="text" placeholder="Nom complet" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Mot de passe" />
        <Input type="password" placeholder="Confirmer le mot de passe" />
        <span><input type="checkbox"/> Accepter les termes et la polique</span>
        <Button>S'inscrire</Button>
      </Form>
      <p>
        Vous avez déjà un compte ? <a href="/login">Se connecter</a>
      </p>
    </Container>
    </BackgroundWrapper>
  );
}
