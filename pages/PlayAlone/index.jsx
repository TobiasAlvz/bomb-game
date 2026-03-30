import React, {useState} from 'react';
import {
  Container,
  TextTimer,
  Timer,
  TipContainer,
  TipText,
  TipTitle,
  Title,
} from './styles';
import {ImageBackground} from 'expo-image';
import bombImg from '../../assets/bomba.png';
import PasswordInput from '../../components/PasswordInput';
import {Alert, Button} from 'react-native';
import {router, useNavigation} from 'expo-router';
import moment from 'moment';

export default function PlayAlone () {
  const [started, setStarted] = useState (false);
  const [pin, setPin] = useState (['', '', '']);
  const [hours, setHours] = useState ('00');
  const [minutes, setMinutes] = useState ('03');
  const [seconds, setSeconds] = useState ('00');
  const [intervalId, setIntervalId] = useState (null);

  const navigation = useNavigation ();

  function handleNavToStart () {
    router.push ('/');
  }

  function handleStartGame () {
    handleStartBomb ();
  }

  function getDiffTime({hours, minutes, seconds}) {
    const explodeTime = moment ();

    explodeTime
      .add (Number (seconds), 'seconds')
      .add (Number (minutes), 'minutes')
      .add (Number (hours), 'hours');

    const currentTime = moment ();

    return explodeTime.unix () - currentTime.unix ();
  }

  function handleStartBomb () {
    const diffTime = getDiffTime ({hours, minutes, seconds});

    startCountdown ({
      diffTime,
    });
  }

  function startCountdown({diffTime}) {
    let duration = moment.duration (diffTime * 1000);
    const interval = 1000;

    if (diffTime <= 0) return;

    setStarted (true);

    const id = setInterval (() => {
    
      duration = moment.duration (duration.asMilliseconds () - interval);

      const h = String (duration.hours ()).padStart (2, '0');
      const m = String (duration.minutes ()).padStart (2, '0');
      const s = String (duration.seconds ()).padStart (2, '0');

      setHours (h);
      setMinutes (m);
      setSeconds (s);

      if (duration.asMilliseconds () <= 0) {
        clearInterval (id);
        setStarted (false);
        Alert.alert ('💥 BOOM! Tempo esgotado!');
      }
    }, interval);

    setIntervalId (id);
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
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Timer>
          <TextTimer>
            {`${hours} : ${minutes} : ${seconds}`}
          </TextTimer>
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
