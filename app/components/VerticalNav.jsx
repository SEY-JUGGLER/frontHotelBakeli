"use client";
import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.nav`
  width: 220px;
  height: 100vh;
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
  position: fixed;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 12px 0;
  font-size: 1rem;
  transition: color 0.3s;
  &:hover {
    color: #1abc9c;
  }
`;

export default function VerticalNav() {
  return (
    <NavContainer>
        <h1>RED PRODUCT</h1>
      <h6>principal</h6>
      <NavItem href="/hotels">Liste Hôtels</NavItem>
      <NavItem href="/dashbord">Dashbord</NavItem>
    </NavContainer>
  );
}
