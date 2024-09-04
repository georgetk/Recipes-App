import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import Icon from 'react-native-vector-icons/Octicons';
import {APP_COLORS} from '../../constants';

type TInputFieldProps = {
  text?: string;
  placeholder?: string;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  isIconShown?: boolean;
  styling?: ViewStyle;
  textStyle?: TextStyle;
  keyboardType?: KeyboardTypeOptions | undefined;
};

const InputField: React.FC<TInputFieldProps> = ({
  text,
  placeholder,
  onChange,
  isIconShown = false,
  styling,
  textStyle,
  keyboardType,
}) => {
  const [borderColor, setBorderColor] = useState(APP_COLORS.BORDER_GREY);

  return (
    <View style={[styles.container, styling, {borderColor}]}>
      {isIconShown && (
        <Icon
          name="search"
          color={APP_COLORS.GREY}
          size={20}
          style={styles.iconStyle}
        />
      )}
      <TextInput
        keyboardType={keyboardType}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={APP_COLORS.GREY}
        style={[styles.textInput, textStyle]}
        onChange={onChange}
        onFocus={() => setBorderColor(APP_COLORS.PRIMARY_COLOR)}
        onBlur={() => setBorderColor(APP_COLORS.BORDER_GREY)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: getNormalizedVerticalSizeWithPlatformOffset(45),
    width: '100%',
    borderRadius: getNormalizedSizeWithPlatformOffset(12),
    borderWidth: getNormalizedSizeWithPlatformOffset(2),
    borderColor: APP_COLORS.BORDER_GREY,
    paddingHorizontal: getNormalizedSizeWithPlatformOffset(20),
    paddingVertical: getNormalizedVerticalSizeWithPlatformOffset(3),
    alignItems: 'center',
  },
  iconStyle: {marginRight: getNormalizedSizeWithPlatformOffset(10)},
  textInput: {
    fontSize: getNormalizedSizeWithPlatformOffset(14),
    lineHeight: getNormalizedVerticalSizeWithPlatformOffset(19.6),
    color: APP_COLORS.TEXT_COLOR,
    flex: 1,
    height: '100%',
  },
});

export default InputField;
