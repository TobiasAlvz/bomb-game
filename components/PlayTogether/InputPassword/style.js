import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: 24px 0;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

export const InputContainer = styled.View`
  background-color: #1e293b;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: #334155;
  width: 70px;
  height: 70px;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(32)}px;
  color: #ff8c42;
  text-align: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
`;