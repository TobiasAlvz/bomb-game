import React from "react";
import { Container, Title } from "./style";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import PasswordInput from "../../components/PasswordInput";
import { router } from "expo-router";
import { Alert, Button } from "react-native";

export default function PlayTogether() {
  function handleNavToStart() {
    router.push("/");
  }

  function handleStartGame() {
    Alert.alert("Jogo começou!");
  }
  return (
    <Container>
      <Title>Bomb Game Dupla</Title>
      <InputTimer />
      {/* <BombMessage>Mensagem temporária de erro</BombMessage> */}
      <TipInput />
      <PasswordInput />
      <Button title="Iniciar" onPress={handleStartGame} />

      <Button title="Página Inicial" onPress={handleNavToStart} />
    </Container>
  );
}
