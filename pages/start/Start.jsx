import React from 'react';
import {
  Container,
  Content,
  IconWrapper,
  IconText,
  Title,
  Highlight,
  SubTitle,
  GameButton,
  ButtonText,
  Rules,
  RulesText
} from './styles';
import { useRouter } from 'expo-router';

export default function Start() {
  const router = useRouter();

  function handleNavToPlayAlone() {
    router.push('/playAlone');
  }

  function handleNavToPlayTogether() {
    router.push('/playTogether');
  }

  function handleNavToRules() {
    router.push('/rules');
  }

  return (
    <Container contentContainerStyle={{ flexGrow: 1 }}>
      <Content>
        <IconWrapper>
          <IconText>💣</IconText>
        </IconWrapper>

        <Title>
          BOMB<Highlight>GAME</Highlight>
        </Title>
        
        <SubTitle>Escolha um modo de jogo.</SubTitle>

        <GameButton primary onPress={handleNavToPlayAlone}>
          <ButtonText primary>Jogar Solo</ButtonText>
        </GameButton>

        <GameButton onPress={handleNavToPlayTogether}>
          <ButtonText>Jogar Em Dupla</ButtonText>
        </GameButton>

        <Rules onPress={handleNavToRules}>
          <RulesText>Ver as regras do jogo</RulesText>
        </Rules>
      </Content>
    </Container>
  );
}