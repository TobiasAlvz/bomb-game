import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin-bottom: 24px;
`;

export const TipTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: #ff8c42;
  margin-bottom: 12px;
  letter-spacing: 1px;
`;

export const InputContainer = styled.View`
  background-color: #1e293b;
  border-radius: 16px;
  padding: 4px 16px;
  border-width: 1px;
  border-color: #334155;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(16)}px;
  color: #e2e8f0;
  padding: 14px 0;
  font-weight: 500;
`;