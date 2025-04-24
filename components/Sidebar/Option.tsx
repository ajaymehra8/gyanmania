import React, { ReactNode } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface OptionType {
  name: string;
  icon: ReactNode; // For any JSX icon like <Icon />
  onClick: (event: GestureResponderEvent) => void;
}
interface props {
  option: OptionType;
}
const Option: React.FC<props> = ({option}) => {
  return (
    <TouchableOpacity
      onPress={option.onClick}
      style={styles.option}
      activeOpacity={1}>
{option.icon}
      <Text style={styles.optionText}>{option.name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    marginTop: 30,
  },
  optionText: {
    color: 'gray',
    fontSize: 20,
  },
});
export default Option;
