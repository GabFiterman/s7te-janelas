import { type JSX } from 'react';

import './btn-icon-text-link.scss';

interface BtnIconTextLinkProps {
  text: string;
  icon: string | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  iconSize?: string;
  orientation?: 'vertical' | 'horizontal';
}

function BtnIconTextLink({ text, icon, className, style, iconSize, orientation = 'horizontal' }: BtnIconTextLinkProps) {
  return (
    <button className={`btn-icon-text-link ${orientation} ${className ? className : ''}`} style={style}>
      <picture className="icon">
        {typeof icon === 'string' ? <img src={icon} alt={text} style={{ width: iconSize, height: iconSize }} /> : icon}
      </picture>
      <span className="text">{text}</span>
    </button>
  );
}

export default BtnIconTextLink;
