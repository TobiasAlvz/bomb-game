import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
  background-color: #131313;

`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  margin: 0 auto;
`;