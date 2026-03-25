import React from "react";
import {
  Container,
  Icon,
  NumberParagraph,
  Paragraph,
  ScrollTextRules,
  Title,
} from "./styles";
import { useRouter } from "expo-router";

export default function Rules() {
  const router = useRouter();

  function handleNavToStart() {
    router.push("/");
  }

  return (
    <Container>
      <Icon name="arrow-back-ios" onPress={handleNavToStart} />

      <ScrollTextRules showsVerticalScrollIndicator={false}>
        <Title>Jogando Solo</Title>

        <Paragraph>
          <NumberParagraph>1 - </NumberParagraph>
          Você vai receber uma dica da senha, que será uma conta matemática,
          tendo um tempo fixo de 5 minutos para resolver e desarmar a bomba.
        </Paragraph>

        <Paragraph>
          <NumberParagraph>2 - </NumberParagraph>
          Toda vez que você errar, o seu aparelho vai vibrar e os campos de
          senha serão limpos. Se você acertar, será enviado para uma página de
          sucesso, se errar, será enviado para uma página de falha.
        </Paragraph>

        <Title style={{ marginTop: 30 }}>Jogando em Dupla</Title>

        <Paragraph>
          <NumberParagraph>1 - </NumberParagraph>
          Para jogar esse jogo, precisa de um parceiro. A pessoa 01 vai definir:
          o tempo da bomba, uma dica de senha e a senha.
        </Paragraph>

        <Paragraph>
          <NumberParagraph>2 - </NumberParagraph>
          Após preencher tudo, deve clicar em iniciar. A contagem começa e, se
          errar, o celular vibra indicando o erro.
        </Paragraph>

        <Paragraph style={{ marginBottom: 20 }}>
          <NumberParagraph>3 - </NumberParagraph>
          Se acertar, você será enviado para uma página de sucesso. Se errar,
          será enviado para uma página de fracasso, encerrando o jogo.
        </Paragraph>
      </ScrollTextRules>
    </Container>
  );
}