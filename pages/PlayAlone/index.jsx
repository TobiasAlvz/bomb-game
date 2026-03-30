import React, {useState, useEffect} from 'react';
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
import {Alert, Button, Vibration} from 'react-native';
import {router, useNavigation} from 'expo-router';
import moment from 'moment';
import api from '../../services/api/api';

export default function PlayAlone () {
  const [started, setStarted] = useState(false);
  const [pin, setPin] = useState(['', '', '']);
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('03');
  const [seconds, setSeconds] = useState('00');
  const [intervalId, setIntervalId] = useState(null);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const navigation = useNavigation();

  function handleNavToStart () {
    router.push('/');
  }

  function getDiffTime({hours, minutes, seconds}) {
    const explodeTime = moment();

    explodeTime
      .add(Number(seconds), 'seconds')
      .add(Number(minutes), 'minutes')
      .add(Number(hours), 'hours');

    const currentTime = moment();

    return explodeTime.unix() - currentTime.unix();
  }

  function startCountdown({ diffTime }) {
    let duration = moment.duration(diffTime * 1000);
    const interval = 1000;

    if (diffTime <= 0) return;

    const id = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - interval);

      const hoursDigits = duration.hours().toString().padStart(2, "0");
      const minutesDigits = duration.minutes().toString().padStart(2, "0");
      const secondsDigits = duration.seconds().toString().padStart(2, "0");

      const timeEnded =
        hoursDigits === "00" &&
        minutesDigits === "00" &&
        secondsDigits === "00";

      if (timeEnded) {
        clearInterval(id);
        setStarted(false);
        navigation.navigate("Exploded");
      }

      setHours(hoursDigits);
      setMinutes(minutesDigits);
      setSeconds(secondsDigits);
    }, interval);

    setIntervalId(id);
  }

  function handleStartBomb() {
    const diffTime = getDiffTime({ hours, seconds, minutes });

    startCountdown({ diffTime });
  }

  function handleStartGame() {
    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStarted(true);
    }
  }

  function handleDisarmBomb() {
    if (pin.join("") === answer) {
      clearInterval(intervalId);
      setStarted(false);
      navigation.navigate("Disarmed");
      return;
    }

    setPin(["", "", ""]);
    Vibration.vibrate(1000);
  }

  async function fetchQuestion() {
    try {
      const randomNumber = Math.floor(Math.random() * 10 + 1);

      const { data } = await api.get(`questions/${randomNumber}`);

      setQuestion(data?.pergunta);
      setAnswer(data?.resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

  useEffect(() => {
    if (started) {
      handleStartBomb();
    }
  }, [started]);

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
            {hours} : {minutes} : {seconds}
          </TextTimer>
        </Timer>
      </ImageBackground>

      {!started ? null : (
        <TipContainer>
          <TipTitle>Sua dica:</TipTitle>
          <TipText>{question}</TipText>
        </TipContainer>
      )}

      <PasswordInput pin={pin} setPin={setPin} />

      {!started ? (
        <Button title="Iniciar" onPress={handleStartGame} />
      ) : (
        <Button title="Desarmar" onPress={handleDisarmBomb} />
      )}

      <Button title="Página Inicial" onPress={handleNavToStart} />
    </Container>
  );
}
