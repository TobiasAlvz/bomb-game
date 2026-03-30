import { Container, Input, InputContainer, TipTitle } from "./style";

export default function TipInput({ started, question, setQuestion }) {
  return (
    <Container>
      <TipTitle>Dica de senha:</TipTitle>

      <InputContainer>
        <Input
          placeholder="Dica para a sua dupla"
          value={question}
          onChangeText={setQuestion}
          editable={!started}
        />
      </InputContainer>
    </Container>
  );
}