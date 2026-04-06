import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import {MaterialIcons} from '@expo/vector-icons';
import {ScrollView} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: ${getStatusBarHeight () + RFValue (20)}px;
  background-color: #0f0f1a;
`;

export const Icon = styled (MaterialIcons)`
  font-size: ${RFValue (28)}px;
  margin-bottom: ${RFValue (20)}px;
  color: #ff8c42;
`;

export const ScrollTextRules = styled (ScrollView)`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue (28)}px;
  font-weight: bold;
  margin-left: ${RFValue (10)}px;
  margin-bottom: ${RFValue (10)}px;
  color: #ffffff;
`;

export const Paragraph = styled.Text`
  font-size: ${RFValue (15)}px;
  font-weight: 400;
  margin-left: ${RFValue (10)}px;
  margin-top: ${RFValue (12)}px;
  margin-bottom: ${RFValue (8)}px;
  color: #94a3b8;
  line-height: 24px;
`;

export const NumberParagraph = styled.Text`
  font-weight: bold;
  color: #ff8c42;
  font-size: ${RFValue (15)}px;
`;
