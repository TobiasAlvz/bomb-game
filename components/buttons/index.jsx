import React from "react";
import { Button, ButtonContent } from "./styles";
import { Text } from "react-native";

export default function ButtonComponent({ buttonText, handlePress }) {
  return (
    <Button activeOpacity={0.95} onPress={handlePress}>
      <Text>
        <ButtonContent>{buttonText}</ButtonContent>
      </Text>
    </Button>
  );
}
