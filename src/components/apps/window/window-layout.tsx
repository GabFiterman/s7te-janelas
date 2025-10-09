import React from 'react';

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
                    <button onClick={handleMinimize} disabled>
                        _
                    </button>
                    <button onClick={handleMaximize}>▢</button>
                    <button className="close" onClick={handleClose}>
                        X
                    </button>
                </div>
            </div>
            <div className="content">{children}</div>
        </>
    );
}

export default WindowLayout;
