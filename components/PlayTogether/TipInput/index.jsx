import { Container, Input, InputContainer, TipTitle } from "./style";

export default function TipInput({ started, question, setQuestion }) {
  return (
    <Container>
      <TipTitle>Dica de senha:</TipTitle>
      <InputContainer>
        <Input
          value={question}
          onChangeText={setQuestion}
          editable={!started}
          placeholder="Dica"
        />
      </InputContainer>
    </Container>
  );
}