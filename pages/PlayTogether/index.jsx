import React from "react";
import { Container, Title } from "./style";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";

export default function PlayTogether() {
  return (
    <Container>
      <Title>Bomb Game Dupla</Title>
      <InputTimer />
      <BombMessage>Mensagem de erro temporária!</BombMessage>
      <TipInput />
    </Container>
  );
}
