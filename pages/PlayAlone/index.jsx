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
import BombService from '../../services/BombApp';

export default function PlayAlone () {
  function handleNavToStart () {
    router.push ('/');
  }

  function handleStartGame () {
    Alert.alert ('Jogo começou!');
  }
  function handleStartBomb () {
    const diffTime = BombService.getDiffTime ({hours, seconds, minutes});
  }

  const [started, setStarted] = useState (false);
  const [pin, setPin] = useState (['', '', '']);
  const [hours, setHours] = useState ('00');
  const [minutes, setMinutes] = useState ('03');
  const [seconds, setSeconds] = useState ('00');


  const navigation = useNavigation();

  function getDiffTime({hours, minutes, seconds}) {
    const explodeTime = moment ();

    let secondsMoment = seconds.length >= 1 ? seconds : 0;
    let minutesMoment = minutes.length >= 1 ? minutes : 0;
    let hoursMoment = hours.length >= 1 ? hours : 0;

    explodeTime
      .add (secondsMoment, 'seconds')
      .add (minutesMoment, 'minutes')
      .add (hoursMoment, 'hours');

    const currentTime = moment ();

    return explodeTime.unix () - currentTime.unix ();
  }

  const [question, setQuestion] = useState ('');
  const [answer, setAnswer] = useState ('');
  const [intervalId, duration ] = useState ();



  startCountdown: ({
    setSeconds,
    setMinutes,
    setHours,
    setStarted,
    diffTime,
    setIntervalId,
    intervalId,
    navigation,
  }) => {};
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
          <TextTimer> {'00 : 05 : 00'}</TextTimer>
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
