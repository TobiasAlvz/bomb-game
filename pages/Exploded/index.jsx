import {Container, FailedImg, Logo, Title} from './styles';
import logoImg from '../../assets/logoDark.png';
import failedImg from '../../assets/bomba_explodiu.png';

export default function Exploded () {
  return (
    <Container>
      <Logo source={logoImg} style={{resizeMode: 'contain'}} />
      <Title>Você falhou, a {'\n'} bomba explodiu!</Title>
      <FailedImg source={failedImg} style={{resizeMode: 'contain'}} />
    </Container>
  );
}
