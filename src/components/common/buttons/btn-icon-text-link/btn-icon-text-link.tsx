import { type JSX } from 'react';

import './btn-icon-text-link.scss';

interface BtnIconTextLinkProps {
  className?: string;
  icon: string | JSX.Element;
  iconSize?: string;
  orientation?: 'vertical' | 'horizontal';
  selected?: boolean;
  style?: React.CSSProperties;
  text: string;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function BtnIconTextLink({
  className,
  icon,
  iconSize,
  orientation = 'horizontal',
  selected,
  style,
  text,

  onClick,
  onDoubleClick,
}: BtnIconTextLinkProps) {
  return (
    <button
      className={`btn-icon-text-link ${orientation} ${className ? className : ''} ${selected ? 'selected' : ''}`}
      style={style}
      onClick={(e) => onClick && onClick(e)}
      onDoubleClick={(e) => onDoubleClick && onDoubleClick(e)}
    >
      <picture className="icon">
        {typeof icon === 'string' ? <img src={icon} alt={text} style={{ width: iconSize, height: iconSize }} /> : icon}
      </picture>
      <span className="text">{text}</span>
    </button>
  );
}

export default BtnIconTextLink;
