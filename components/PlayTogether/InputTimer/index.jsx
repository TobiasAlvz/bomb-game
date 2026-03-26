import { ImageBackground } from "expo-image";
import bombImg from "../../../assets/bomba.png";

export default function InputTimer() {
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
    ></ImageBackground>
  );
}
