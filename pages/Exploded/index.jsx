import {Container, FailedImg, Logo, Title} from './styles';
import logoImg from '../../assets/logoDark.png';
import failedImg from '../../assets/bomba_explodiu.png';
import {Button, Vibration} from 'react-native';
import {router} from 'expo-router';

export default function Exploded () {
  function handleNavToStart () {
    router.push ('/');
  }

  setTimeout (function () {
    Vibration.vibrate (4 * 1000);
  }, 500);

  return (
    <Container>
      <Logo source={logoImg} style={{resizeMode: 'contain'}} />
      <Title>Você falhou, a {'\n'} bomba explodiu!</Title>
      <FailedImg source={failedImg} style={{resizeMode: 'contain'}} />
      <Button buttonText={'Página incial'} handlePress={handleNavToStart} />
    </Container>
  );
}
