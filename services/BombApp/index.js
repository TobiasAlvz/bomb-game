import moment from 'moment';
import {router} from 'expo-router';

const BombService = {
  // ⏱️ CALCULAR TEMPO
  getDiffTime: ({hours, minutes, seconds}) => {
    const explodeTime = moment ();

    explodeTime
      .add (Number (seconds), 'seconds')
      .add (Number (minutes), 'minutes')
      .add (Number (hours), 'hours');

    const currentTime = moment ();

    return explodeTime.unix () - currentTime.unix ();
  },

  // 💣 CONTAGEM REGRESSIVA
  startCountdown: ({
    setSeconds,
    setMinutes,
    setHours,
    setStarted,
    diffTime,
    setIntervalId,
    intervalId,
  }) => {
    if (intervalId) {
      clearInterval (intervalId);
    }

    let duration = moment.duration (diffTime * 1000);
    const interval = 1000;

    if (diffTime <= 0) return;

    const id = setInterval (() => {
      duration = moment.duration (duration.asMilliseconds () - interval);

      const h = duration.hours ().toString ().padStart (2, '0');
      const m = duration.minutes ().toString ().padStart (2, '0');
      const s = duration.seconds ().toString ().padStart (2, '0');

      const timeEnded = h === '00' && m === '00' && s === '00';

      if (timeEnded) {
        clearInterval (id);
        router.push ('/exploded');
        return;
      }

      setHours (h);
      setMinutes (m);
      setSeconds (s);
    }, interval);

    setIntervalId (id);
  },

  // 🔐 DESARMAR SOLO
  disarmBomb: ({pin, answer, setStarted, intervalId, setPin}) => {
    if (pin.join ('') === answer) {
      clearInterval (intervalId);
      setStarted (false);
      router.push ('/disarmed');
      return;
    }

    setPin (['', '', '']);
  },

  // 🤝 MULTIPLAYER - START
  bombActivationTogether: ({
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
  }) => {
    if (question.length < 1) {
      setMessage ('Você precisa dar uma dica!');
      return;
    }

    if (pin.join ('').length < 3) {
      setMessage ('Senha invalida, complete ela');
      return;
    }

    let timeIsSet = false;

    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStarted (true);
      timeIsSet = true;
      setMessage ('');
      handleStartBomb ();
      setAnswer (pin.join (''));
      setPin (['', '', '']);
    }

    if (!timeIsSet) {
      setMessage ('Timer invalido, coloque um tempo');
      return;
    }
  },

  // 🤝 MULTIPLAYER - DESARMAR
  bombDisarmTogether: ({
    pin,
    answer,
    setStarted,
    intervalId,
    setPin,
    setAnswer,
  }) => {
    if (pin.join ('') === answer) {
      clearInterval (intervalId);
      setStarted (false);
      setAnswer ('');
      router.push ('/disarmed');
      return;
    }

    setPin (['', '', '']);
  },
};

export default BombService;
