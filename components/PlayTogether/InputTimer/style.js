import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Timer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  margin: 0 5px;
`;

export const Input = styled.TextInput`
  background-color: #1e293b;
  width: 70px;
  height: 70px;
  text-align: center;
  font-size: 28px;
  border-radius: 16px;
  color: #ff8c42;
  font-weight: bold;
  border-width: 2px;
  border-color: #334155;
`;

export const TextTimer = styled.Text`
  font-size: 40px;
  color: #ff8c42;
  font-weight: bold;
  margin: 0 5px;
`;