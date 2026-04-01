import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background-color: #0f0f1a;
`;

export const Decoration = styled(LinearGradient).attrs({
  colors: ['#ff8c42', '#ff6b6b'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  position: absolute;
  top: -50%;
  right: -30%;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  opacity: 0.1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: ${getStatusBarHeight() + RFValue(30)}px 24px 40px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const TitleHighlight = styled.Text`
  color: #ff8c42;
  text-shadow: 0px 0px 10px rgba(255, 140, 66, 0.5);
`;

export const BombWrapper = styled.View`
  margin-bottom: 32px;
  border-radius: 32px;
  overflow: hidden;
  background-color: #1e1e2a;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  elevation: 10;
`;

export const Timer = styled.View`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 20px 40px;
  border-radius: 60px;
  align-items: center;
  border-width: 1px;
  border-color: rgba(255, 140, 66, 0.3);
  min-width: 280px;
`;
export const TimerLabel = styled.Text`
  font-size: ${RFValue(10)}px;
  color: #ff8c42;
  letter-spacing: 2px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TimerText = styled.Text`
  font-size: ${RFValue(48)}px;
  font-weight: bold;
  color: #ff8c42;
  font-family: monospace;
  letter-spacing: 6px;
  text-shadow: 0px 0px 15px rgba(255, 140, 66, 0.8);
`;
export const TipContainer = styled.View`
  background-color: #1a1a2a;
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 24px;
  border-left-width: 4px;
  border-left-color: #ff8c42;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  elevation: 5;
`;

export const TipTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: #ff8c42;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
`;

export const TipText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #e2e8f0;
  line-height: 26px;
  font-weight: 500;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: ${props => props.danger ? '#dc2626' : '#ff8c42'};
  padding: 18px;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 0px 6px 15px rgba(255, 140, 66, 0.3);
  elevation: 8;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  padding: 14px;
  align-items: center;
`;

export const SecondaryButtonText = styled.Text`
  color: #6b6b8a;
  font-size: ${RFValue(13)}px;
  font-weight: 500;
`;