import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, {opacity: disabled ? 0.3 : 1}]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

 const styles = StyleSheet.create({
   container: {
     paddingHorizontal: 16,
     paddingVertical: 8,
     backgroundColor: "purple",
     borderRadius: 8,
   },
   text: { color: "white" },
 });