import React from 'react';
import {Container, Logo} from './style';

import logoImg from '../../assets/logoDark.png';

export default function Disarmed () {
  return (
    <Container>
      <Logo source={logoImg} style={{resizeMode: 'contain'}} />
    </Container>
  );
}
