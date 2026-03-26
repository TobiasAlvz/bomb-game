import { ImageBackground } from "expo-image";
import bombImg from "../../../assets/bomba.png";
import { Input, InputContainer, TextTimer, Timer } from "./style";
import { useRef } from "react";
import { Keyboard } from "react-native";

export default function InputTimer() {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);

  const hoursInput = (value) => {};
  const minutesInput = (value) => {};
  const secondsInput = (value) => {};

  return (
    <ImageBackground
      source={bombImg}
      contentFit="cover"
      style={{
        marginTop: 50,
        minHeight: 130,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Timer>
        <InputContainer>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input1}
            onChangeText={(value) => {
              if (value.length > 1) input2.current?.focus();
              hoursInput(value);
            }}
          />
        </InputContainer>

        <TextTimer>:</TextTimer>

        <InputContainer>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input2}
            onChangeText={(value) => {
              if (value.length > 1) input3.current?.focus();
              minutesInput(value);
            }}
          />
        </InputContainer>

        <TextTimer>:</TextTimer>

        <InputContainer>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input3}
            onChangeText={(value) => {
              if (value.length > 1) Keyboard.dismiss();
              secondsInput(value);
            }}
          />
        </InputContainer>
      </Timer>
    </ImageBackground>
  );
}
