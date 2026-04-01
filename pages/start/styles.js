import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #0f172a;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  min-height: 100%;
`;

export const IconWrapper = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #ff8c42;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const IconText = styled.Text`
  font-size: 48px;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 12px;
`;

export const Highlight = styled.Text`
  color: #ff8c42;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #94a3b8;
  margin-bottom: 48px;
  text-align: center;
`;

export const GameButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${props => props.primary ? '#ff8c42' : 'transparent'};
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 12px;
  align-items: center;
  border-width: ${props => props.primary ? 0 : 1.5}px;
  border-color: #ff8c42;
`;

export const ButtonText = styled.Text`
  color: ${props => props.primary ? '#0f172a' : '#ff8c42'};
  font-size: 18px;
  font-weight: 600;
`;

export const Rules = styled.TouchableOpacity`
  margin-top: 40px;
  padding: 8px;
`;

export const RulesText = styled.Text`
  color: #64748b;
  font-size: 14px;
`;