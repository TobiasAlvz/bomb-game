import React from "react";
import {
  Container,
  TextTimer,
  Timer,
  TipContainer,
  TipText,
  TipTitle,
  Title,
} from "./styles";
import { ImageBackground } from "expo-image";
import bombImg from "../../assets/bomba.png";
import PasswordInput from "../../components/PasswordInput";
import { Alert, Button } from "react-native";
import { router } from "expo-router";

export default function PlayAlone() {
  function handleNavToStart() {
    router.push("/");
  }

  function handleStartGame() {
    Alert.alert("Jogo começou!");
  }
  return (
    <Container>
      <Title>Bomb Game Solo</Title>
      <ImageBackground
        source={bombImg}
        resizeMode="cover"
        style={{
          marginTop: 50,
          minHeight: 130,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Timer>
          <TextTimer> {"00 : 05 : 00"}</TextTimer>
        </Timer>
      </ImageBackground>
      <TipContainer>
        <TipTitle>Sua dica:</TipTitle>
        <TipText>Dica vai estar aqui!</TipText>
      </TipContainer>
      <PasswordInput />
      <Button title="Iniciar" onPress={handleStartGame} />

      <Button title="Página Inicial" onPress={handleNavToStart} />
    </Container>
  );
}
