import React, {useState} from 'react';
import {Container, Title, BombMessage} from './style';

import PasswordInput from '../../components/PasswordInput';
import TipInput from '../../components/PlayTogether/TipInput';
import Button from '../../components/buttons';

import BombService from '../../services/BombApp';
import InputTimer from '../../components/PlayTogether/InputTimer';

export default function PlayTogether () {
  const [pin, setPin] = useState (['', '', '']);
  const [started, setStarted] = useState (false);
  const [hours, setHours] = useState ('');
  const [minutes, setMinutes] = useState ('');
  const [seconds, setSeconds] = useState ('');
  const [message, setMessage] = useState ('');
  const [question, setQuestion] = useState ('');
  const [answer, setAnswer] = useState ('');
  const [intervalId, setIntervalId] = useState (null);

  // 🔥 START CONTAGEM
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

  // 🚀 INICIAR JOGO
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

  // 🔐 DESARMAR
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
      <Title>Modo Multiplayer</Title>

      {/* 🔥 MENSAGEM DE ERRO */}
      {message ? <BombMessage>{message}</BombMessage> : null}

      {/* 🧠 INPUT DA DICA */}
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

      {/* 🔐 PIN */}
      <PasswordInput pin={pin} setPin={setPin} />

      {/* 🔘 BOTÕES */}
      {!started
        ? <Button buttonText="Iniciar" handlePress={handleStartGame} />
        : <Button buttonText="Desarmar" handlePress={handleDisarmBomb} />}
    </Container>
  );
}
