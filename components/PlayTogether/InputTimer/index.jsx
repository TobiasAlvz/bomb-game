import { ImageBackground } from "react-native"; // ← MUDE PARA react-native
import bombImg from "../../../assets/bomba.png";
import { Input, InputContainer, TextTimer, Timer } from "./style";
import { useRef } from "react";
import { Keyboard } from "react-native";

export default function InputTimer({ 
  hours, 
  minutes, 
  seconds, 
  setHours, 
  setMinutes, 
  setSeconds,
  started 
}) {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);

  return (
    <ImageBackground
      source={bombImg}
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
            value={hours}
            editable={!started}
            onChangeText={(value) => {
              setHours(value);
              if (value.length > 1) input2.current?.focus();
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
            value={minutes}
            editable={!started}
            onChangeText={(value) => {
              setMinutes(value);
              if (value.length > 1) input3.current?.focus();
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
            value={seconds}
            editable={!started}
            onChangeText={(value) => {
              setSeconds(value);
              if (value.length > 1) Keyboard.dismiss();
            }}
          />
        </InputContainer>
      </Timer>
    </ImageBackground>
  );
}