import React from "react";
import { Container } from "./styles";
import { Logo } from "./styles";
import { Title } from "./styles";
import { SubTitle } from "./styles";

export default function Start() {
  return (
    <Container>
      <Logo
        source={require("../../assets/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-vindo ao {"\n"} Bomb game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
    </Container>
  );
}
