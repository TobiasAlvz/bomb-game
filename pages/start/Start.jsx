import React from "react";
import { Container } from "./styles";
import { Logo } from "./styles";

export default function Start() {
  return (
    <Container>
      <Logo
        source={require("../../assets/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
    </Container>
  );
}
