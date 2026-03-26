import React from "react";
import { Container, TextTimer, Timer, Title } from "./styles";
import { ImageBackground } from "expo-image";
import bombImg from "../../assets/bomba.png";

export default function PlayAlone() {
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
    </Container>
  );
}
