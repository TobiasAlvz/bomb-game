import React from "react";
import {
  Container,
  Logo,
  Title,
  SubTitle,
  Rules as RulesButton,
} from "./styles";
import ButtonComponent from "../../components/buttons";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Start() {
  const router = useRouter();

  function handleNavToPlayAlone() {
    Alert.alert("Modo solo");
  }

  function handleNavToPlayTogether() {
    Alert.alert("Modo dupla");
  }

  function handleNavToRules() {
    router.push("/rules");
  }

  return (
    <Container
      contentContainerStyle={{
        alignItems: "center",
        flexGrow: 1,
        paddingBottom: 40,
      }}
    >
      <Logo
        source={require("../../assets/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />

      <Title>Bem-vindo ao {"\n"} Bomb game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>

      <ButtonComponent
        buttonText={"Jogar Solo"}
        handlePress={handleNavToPlayAlone}
      />

      <ButtonComponent
        buttonText={"Jogar Em Dupla"}
        handlePress={handleNavToPlayTogether}
      />

      <RulesButton onPress={handleNavToRules}>
        Ver as regras do jogo
      </RulesButton>
       <RulesButton onPress={handleNavToRules}>
        Ver as regras do jogo
      </RulesButton>
       <RulesButton onPress={handleNavToRules}>
        Ver as regras do jogo
      </RulesButton>
    </Container>
  );
}