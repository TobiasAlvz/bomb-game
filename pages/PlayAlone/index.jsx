import React, {useState, useEffect, useRef} from 'react';
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
} from './styles';
import {ImageBackground} from 'expo-image';
import bombImg from '../../assets/bomba.png';
import PasswordInput from '../../components/PasswordInput';
import {Alert, Vibration} from 'react-native';
import {router} from 'expo-router';
import api from '../../services/api/api';

export default function PlayAlone () {
  const [started, setStarted] = useState (false);
  const [pin, setPin] = useState (['', '', '']);
  const [timeLeft, setTimeLeft] = useState (180);
  const [question, setQuestion] = useState ('');
  const [answer, setAnswer] = useState ('');
  const intervalRef = useRef (null);

  function handleNavToStart () {
    router.push ('/');
  }

  function formatTime (seconds) {
    const mins = Math.floor (seconds / 60);
    const secs = seconds % 60;
    return {
      hours: '00',
      minutes: mins.toString ().padStart (2, '0'),
      seconds: secs.toString ().padStart (2, '0'),
    };
  }

  function startCountdown () {
    if (intervalRef.current) clearInterval (intervalRef.current);

    intervalRef.current = setInterval (() => {
      setTimeLeft (prev => {
        if (prev <= 1) {
          clearInterval (intervalRef.current);
          router.push ('/exploded');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  function handleStartGame () {
    if (timeLeft > 0) {
      setStarted (true);
      startCountdown ();
    } else {
      Alert.alert ('Defina um tempo maior que zero!');
    }
  }

  function handleDisarmBomb () {
    if (pin.join ('') === String (answer)) {
      clearInterval (intervalRef.current);
      setStarted (false);
      router.push ('/disarmed');
      return;
    }
    setPin (['', '', '']);
    Vibration.vibrate (1000);
    Alert.alert ('Código errado!', 'A bomba vai explodir!');
  }

  async function fetchQuestion () {
    try {
      const {data} = await api.get ('questions');
      if (!data || data.length === 0) {
        setQuestion ('Sem perguntas disponíveis');
        return;
      }
      const randomIndex = Math.floor (Math.random () * data.length);
      const randomQuestion = data[randomIndex];
      setQuestion (randomQuestion.pergunta);
      setAnswer (String (randomQuestion.resp));
    } catch (error) {
      console.log ('ERRO API:', error.message);
      setQuestion ('Erro ao carregar pergunta');
    }
  }

  useEffect (() => {
    fetchQuestion ();
  }, []);

  useEffect (() => {
    return () => {
      if (intervalRef.current) {
        clearInterval (intervalRef.current);
      }
    };
  }, []);

  const {hours, minutes, seconds} = formatTime (timeLeft);

  return (
    <Container>
      <Decoration />
      <Content showsVerticalScrollIndicator={false}>
        <Header>
          <Title>
            BOMB<TitleHighlight>GAME</TitleHighlight>
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
                {hours.padStart (2, '0')}
                :
                {minutes.padStart (2, '0')}
                :
                {seconds.padStart (2, '0')}
              </TimerText>
            </Timer>
          </ImageBackground>
        </BombWrapper>

        {started &&
          <TipContainer>
            <TipTitle>💡 DICA DO DESARMAMENTO</TipTitle>
            <TipText>{question || 'Carregando...'}</TipText>
          </TipContainer>}

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
