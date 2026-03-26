import { Container, Input, InputContainer} from "./style";
export default function InputPassword() {
  return (
    <Container>
      <InputContainer>
        <Input keyboardType={"number-pad"} maxLength={1} />
      </InputContainer>
      <InputContainer>
        <Input keyboardType={"number-pad"} maxLength={1} />
      </InputContainer>
      <InputContainer>
        <Input keyboardType={"number-pad"} maxLength={1} />
      </InputContainer>
    </Container>
  );
}
