import React from 'react';
import { Container, Input, InputContainer } from './style';

export default function PasswordInput({ pin, setPin }) {
  const inputsRef = [];

  const handleChange = (text, index) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text && index < 2) {
      inputsRef[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !pin[index] && index > 0) {
      inputsRef[index - 1]?.focus();
    }
  };

  return (
    <Container>
      {pin.map((value, index) => (
        <InputContainer key={index}>
          <Input
            ref={ref => inputsRef[index] = ref}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        </InputContainer>
      ))}
    </Container>
  );
}