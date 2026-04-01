import { Container, Input, InputContainer, TipTitle } from "./style";

export default function TipInput({ started, question, setQuestion }) {
  return (
    <Container>
      <TipTitle>💡 DICA DE SENHA:</TipTitle>

      <InputContainer>
        <Input
          placeholder="Digite a dica para sua dupla..."
          value={question}
          onChangeText={setQuestion}
          editable={!started}
          placeholderTextColor="#64748b"
        />
      </InputContainer>
    </Container>
  );
}