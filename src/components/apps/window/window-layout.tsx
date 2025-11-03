import React from 'react';
import { closeIcon } from '@/assets/icons';

interface WindowLayoutProps {
  children: React.ReactNode;
  iconSrc: string;
  title: string;

  handleClose: () => void;
  handleMaximize: () => void;
  handleMinimize: () => void;
  handleStartDrag: (event: React.PointerEvent) => void;
}

function WindowLayout({
  children,
  iconSrc,
  title,

  handleClose,
  handleMaximize,
  handleMinimize,
  handleStartDrag,
}: WindowLayoutProps) {
  return (
    <>
      <div className="title-bar" onPointerDown={handleStartDrag}>
        <span className="title">
          <img src={iconSrc} alt="." />
          {title}
        </span>
        <div className="controls">
          <button onClick={handleMinimize}>_</button>
          <button onClick={handleMaximize}>▢</button>
          <button className="close" onClick={handleClose}>
            <img src={closeIcon} alt="x" />
          </button>
        </div>
      </div>
      <div className="content">{children}</div>
    </>
  );
}

export default WindowLayout;
