import React, {useRef} from 'react';
import {Keyboard} from 'react-native';
import {Container, Input, InputContainer} from './style';

export default function PasswordInput({pin, setPin}) {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  function handleChange(value, index) {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  }

  return (
    <Container>
      <InputContainer active={pin[0] !== ''}>
        <Input
          keyboardType="number-pad"
          maxLength={1}
          ref={input1}
          value={pin[0]}
          onChangeText={value => {
            handleChange(value, 0);
            if (value) input2.current.focus();
          }}
        />
      </InputContainer>

      <InputContainer active={pin[1] !== ''}>
        <Input
          keyboardType="number-pad"
          maxLength={1}
          ref={input2}
          value={pin[1]}
          onChangeText={value => {
            handleChange(value, 1);
            if (value) input3.current.focus();
          }}
        />
      </InputContainer>

      <InputContainer active={pin[2] !== ''}>
        <Input
          keyboardType="number-pad"
          maxLength={1}
          ref={input3}
          value={pin[2]}
          onChangeText={value => {
            handleChange(value, 2);
            if (value) Keyboard.dismiss();
          }}
        />
      </InputContainer>
    </Container>
  );
}