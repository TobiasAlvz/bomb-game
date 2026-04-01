import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: ${RFValue(30)}px ${RFValue(20)}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

export const InputContainer = styled.View`
  border-width: 2px;
  border-color: ${props => props.active ? '#ff8c42' : '#334155'};
  border-radius: 16px;
  background-color: #1e293b;
  overflow: hidden;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(32)}px;
  padding: ${RFValue(12)}px;
  color: #ff8c42;
  text-align: center;
  width: 70px;
  height: 70px;
  font-weight: bold;
`;