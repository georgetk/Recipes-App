import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
  ViewStyle,
} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import Icon from 'react-native-vector-icons/Octicons';
import { APP_COLORS } from '../../constants';

type TInputField = {
  text?: string;
  placeholder?: string;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => {};
  isIconShown: boolean;
  styling?: ViewStyle;
};

const InputField: React.FC<TInputField> = ({
  text,
  onChange,
  placeholder,
  isIconShown,
  styling,
}) => {
  return (
    <View style={[styles.container, styling]}>
      {isIconShown ? (
        <Icon
          name="search"
          color={APP_COLORS.GREY}
          size={20}
          style={styles.iconStyle}
        />
      ) : null}
      <TextInput
        value={text}
        placeholder={placeholder}
        placeholderTextColor={APP_COLORS.GREY}
        style={styles.textInput}
        onChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: getNormalizedVerticalSizeWithPlatformOffset(45),
    width: '100%',
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    borderWidth: getNormalizedSizeWithPlatformOffset(2),
    borderColor: APP_COLORS.GREY,
    paddingHorizontal: getNormalizedSizeWithPlatformOffset(20),
    paddingVertical: getNormalizedVerticalSizeWithPlatformOffset(3),
    alignItems: 'center',
  },
  iconStyle: {marginRight: getNormalizedSizeWithPlatformOffset(10)},
  textInput: {
    fontSize: getNormalizedSizeWithPlatformOffset(14),
    lineHeight: getNormalizedVerticalSizeWithPlatformOffset(19.6),
    color: APP_COLORS.TEXT_COLOR,
  },
});

export default InputField;
