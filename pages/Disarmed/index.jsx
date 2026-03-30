import {Container, Logo, SucessImg, Title} from './style';

import logoImg from '../../assets/logoDark.png';
import sucessImg from '../../assets/bomba_cortada_matrix.png';
import {router} from 'expo-router';
import Button from '../../components/buttons'; //

export default function Disarmed () {
  function handleNavToStart () {
    router.push ('/');
  }

  return (
    <Container>
      <Logo source={logoImg} style={{resizeMode: 'contain'}} />

      <Title>
        Parabéns!!!{'\n'}Você desarmou
      </Title>

      <SucessImg source={sucessImg} style={{resizeMode: 'contain'}} />

      <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
