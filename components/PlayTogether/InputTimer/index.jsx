import { ImageBackground } from "expo-image";
import bombImg from "../../../assets/bomba.png";
import { Input, InputContainer, TextTimer, Timer } from "./style";
import { useRef } from "react";

export default function InputTimer() {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  return (
    <ImageBackground
      source={bombImg}
      resizeMode="cover"
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
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
          />
        </InputContainer>
        <TextTimer>:</TextTimer>
        <InputContainer>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
          />
        </InputContainer>
        <TextTimer>:</TextTimer>
        <InputContainer>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
          />
        </InputContainer>
      </Timer>
    </ImageBackground>
  );
}
