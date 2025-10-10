import { useState } from 'react';

import './input-and-icon.scss';

interface InputAndIconProps {
  placeholder?: string;
  type?: string;
  childBefore?: React.ReactNode;
  childAfter?: React.ReactNode;
}

function InputAndIcon({ placeholder, type = 'text', childBefore, childAfter }: InputAndIconProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-and-icon-container ${isFocused ? 'focused' : ''}`}>
      <div className="icon-container child-before">{childBefore}</div>

      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <div className="icon-container child-after">{childAfter}</div>
    </div>
  );
}

export default InputAndIcon;
