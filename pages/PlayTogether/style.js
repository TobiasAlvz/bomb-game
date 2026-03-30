import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const BombMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.error || 'red'};
  margin: 10px;
`;