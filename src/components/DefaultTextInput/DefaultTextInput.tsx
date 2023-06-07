import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {colors} from '../../styles/colors';

export function DefaultTextInput(props: TextInputProps) {
  return (
    <TextInput
      autoCapitalize="none"
      placeholderTextColor="#fff"
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: colors.onBackground,
    paddingHorizontal: 8,
    color: colors.onBackground,
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginBottom: 16,
  },
});
