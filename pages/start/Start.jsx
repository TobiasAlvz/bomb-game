import React from "react";
import { Container, Rules } from "./styles";
import { Logo } from "./styles";
import { Title } from "./styles";
import { SubTitle } from "./styles";
import ButtonComponent from "../../components/buttons/index";
import { Alert } from "react-native";
import { useNavigation } from "expo-router";

export default function Start() {
  const navigation = useNavigation();
  function handleNavToPlayAlone() {
    Alert.alert("Botão clicado 1");
  }

  function handleNavToPlayTogether() {
    Alert.alert("Botão clicado 2");
  }

  function handleNavToRules() {
    navigation.navigate("Rules");
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
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
    </Container>
  );
}
