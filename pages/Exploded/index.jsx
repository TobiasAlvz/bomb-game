import {Container, FailedImg, Logo, Title} from './styles';
import logoImg from '../../assets/logoDark.png';
import failedImg from '../../assets/bomba_explodiu.png';
import {Vibration} from 'react-native';
import {router} from 'expo-router';
import {useEffect} from 'react';
import Button from '../../components/buttons';

export default function Exploded () {
  function handleNavToStart () {
    router.push ('/');
  }

  useEffect (() => {
    const timeout = setTimeout (() => {
      Vibration.vibrate (4000);
    }, 500);

    return () => clearTimeout (timeout);
  }, []);

  return (
    <Container>
      <Logo source={logoImg} style={{resizeMode: 'contain'}} />

      <Title>
        Você falhou, a {'\n'} bomba explodiu!
      </Title>

      <FailedImg source={failedImg} style={{resizeMode: 'contain'}} />

      <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
