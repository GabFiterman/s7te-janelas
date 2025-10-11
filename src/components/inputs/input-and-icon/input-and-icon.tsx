import { useState } from 'react';

import './input-and-icon.scss';

interface InputAndIconProps {
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  value?: string | number;

  childBefore?: React.ReactNode;
  childAfter?: React.ReactNode;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function InputAndIcon({
  disabled,
  placeholder,
  type = 'text',
  value,

  onChange,
  onFocus,
  onBlur,
  onKeyDown,

  childBefore,
  childAfter,
}: InputAndIconProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocusChange(focused: boolean) {
    if (focused) {
      onFocus?.();
    } else {
      onBlur?.();
    }
    setIsFocused(focused);
  }

  return (
    <div className={`input-and-icon-container ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''}`}>
      <div className="icon-container child-before">{childBefore}</div>

      <input
        defaultValue={value}
        disabled={disabled}
        onBlur={() => handleFocusChange(false)}
        onChange={onChange}
        onFocus={() => handleFocusChange(true)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        type={type}
      />

      <div className="icon-container child-after">{childAfter}</div>
    </div>
  );
}

export default InputAndIcon;
