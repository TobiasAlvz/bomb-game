import React from 'react';
import {Button, ButtonContent} from './styles';

export default function ButtonComponent({buttonText, handlePress}) {
  return (
    <Button activeOpacity={0.95} onPress={handlePress}>
      <ButtonContent>{buttonText}</ButtonContent>
    </Button>
  );
}
