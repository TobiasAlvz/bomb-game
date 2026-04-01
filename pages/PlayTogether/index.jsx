import React, {useState} from 'react';
import {
  Container,
  Content,
  Header,
  Title,
  TitleHighlight,
  BombWrapper,
  Timer,
  TimerText,
  TimerLabel,
  TipContainer,
  TipTitle,
  TipText,
  ActionButton,
  ButtonText,
  SecondaryButton,
  SecondaryButtonText,
  Decoration,
  ErrorMessage,
} from './style';
import {ImageBackground} from 'expo-image';
import bombImg from '../../assets/bomba.png';
import PasswordInput from '../../components/PasswordInput';
import TipInput from '../../components/PlayTogether/TipInput';
import InputTimer from '../../components/PlayTogether/InputTimer';
import {router} from 'expo-router';
import BombService from '../../services/BombApp';

export default function PlayTogether () {
  const [pin, setPin] = useState (['', '', '']);
  const [started, setStarted] = useState (false);
  const [hours, setHours] = useState ('00');
  const [minutes, setMinutes] = useState ('03');
  const [seconds, setSeconds] = useState ('00');
  const [message, setMessage] = useState ('');
  const [question, setQuestion] = useState ('');
  const [answer, setAnswer] = useState ('');
  const [intervalId, setIntervalId] = useState (null);

  function handleNavToStart () {
    router.push ('/');
  }

  function handleStartBomb () {
    const diffTime = BombService.getDiffTime ({hours, seconds, minutes});
    BombService.startCountdown ({
      setSeconds,
      setMinutes,
      setHours,
      setStarted,
      diffTime,
      setIntervalId,
      intervalId,
    });
  }

  function handleStartGame () {
    BombService.bombActivationTogether ({
      question,
      pin,
      hours,
      minutes,
      seconds,
      setMessage,
      setStarted,
      setPin,
      handleStartBomb,
      setAnswer,
    });
  }

  function handleDisarmBomb () {
    BombService.bombDisarmTogether ({
      pin,
      answer,
      setStarted,
      intervalId,
      setPin,
      setAnswer,
    });
  }

  return (
    <Container>
      <Decoration />
      <Content showsVerticalScrollIndicator={false}>
        <Header>
          <Title>
            BOMB<TitleHighlight>DUO</TitleHighlight>
          </Title>
        </Header>

        <BombWrapper>
          <ImageBackground
            source={bombImg}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 280,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Timer>
              <TimerLabel>TEMPO RESTANTE</TimerLabel>
              <TimerText>
                {hours}:{minutes}:{seconds}
              </TimerText>
            </Timer>
          </ImageBackground>
        </BombWrapper>

        {message ? <ErrorMessage>{message}</ErrorMessage> : null}

        {started &&
          <TipContainer>
            <TipTitle>💡 DICA DO DESARMAMENTO</TipTitle>
            <TipText>{question || 'Aguardando dica...'}</TipText>
          </TipContainer>}

        <TipInput
          started={started}
          question={question}
          setQuestion={setQuestion}
        />

        <InputTimer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          started={started}
        />

        <PasswordInput pin={pin} setPin={setPin} />

        {!started
          ? <ActionButton onPress={handleStartGame} activeOpacity={0.8}>
              <ButtonText>INICIAR MISSÃO</ButtonText>
            </ActionButton>
          : <ActionButton danger onPress={handleDisarmBomb} activeOpacity={0.8}>
              <ButtonText>DESARMAR BOMBA</ButtonText>
            </ActionButton>}

        <SecondaryButton onPress={handleNavToStart} activeOpacity={0.7}>
          <SecondaryButtonText>VOLTAR PARA INÍCIO</SecondaryButtonText>
        </SecondaryButton>
      </Content>
    </Container>
  );
}