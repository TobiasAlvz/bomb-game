import { Button, ButtonContent } from "./styles";

export default function ButtonComponent({ buttonText, handlePress }) {
  return (
    <Button onPress={handlePress}>
      <ButtonContent>{buttonText}</ButtonContent>
    </Button>
  );
}