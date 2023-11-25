import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
};

export const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  text,
  disabled = false,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text_P>{text}</Text_P>
    </Container>
    // <TouchableOpacity
    //   onPress={onPress}
    //   disabled={disabled}
    //   style={[styles.container, {opacity: disabled ? 0.3 : 1}]}
    // >
    //   <Text style={styles.text}>{text}</Text>
    // </TouchableOpacity>
  );
};

const Container = styled.TouchableOpacity`
  padding: 8px 16px;
  background-color: purple;
  border-radius: 8px;
  color: white;

`;

const Text_P = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
