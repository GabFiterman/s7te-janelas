import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { useDraggableElement, useWindowSize } from '@/hooks';
import useUIStore from '@/store/uiStore';

import './icon-link-label.scss';

interface IconLinkLabelProps {
    id: string;
    className?: string;
    icon?: string;
    label?: string;
    size?: number;
}

function IconLinkLabel({
    id,
    className,
    // icon = '', // TODO: Implementar recebimento de ícone externo;
    label = 'My Folder',
    size = 64,
}: IconLinkLabelProps) {
    const viewportSize = useWindowSize();
    const { dragProps } = useDraggableElement(id, 'icon');
    const currentIcon = useUIStore((state) =>
        state.workspaceIcons.find((i) => i.id === id),
    );

    const iconRef = useRef<HTMLDivElement>(null);
    const [iconDimensions, setIconDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (iconRef.current && iconDimensions.width === 0) {
            const { offsetWidth, offsetHeight } = iconRef.current;
            setIconDimensions({ width: offsetWidth, height: offsetHeight });
        }
    }, [iconDimensions.width]);

    if (!currentIcon) return null;
    const { x: currentX, y: currentY } = currentIcon;

    const iconWidth = iconDimensions.width || size * 1.5;
    const iconHeight = iconDimensions.height || size * 1.5;
    const FIXED_MENU_HEIGHT = 60;

    const dragConstraints = {
        left: -currentX,
        top: -currentY,
        right: viewportSize.width - iconWidth - currentX,
        bottom: viewportSize.height - FIXED_MENU_HEIGHT - iconHeight - currentY,
    };

    return (
        <motion.div
            className={`icon-link-label`}
            dragConstraints={dragConstraints}
            style={{
                x: currentIcon.x,
                y: currentIcon.y,
                touchAction: 'none',
                userSelect: 'none',
            }}
            ref={iconRef}
            {...dragProps}
        >
            <div className="icon-container">
                <div className="icon-image">
                    <img
                        src={currentIcon.iconUrl}
                        alt={`${label} Icon`}
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                        className={`icon ${className || ''}`}
                        draggable={false}
                    />
                </div>
                <span
                    className="label"
                    onDoubleClick={() => console.log('double click')}
                >
                    {currentIcon.label}
                </span>
            </div>
        </motion.div>
    );
}

export default IconLinkLabel;
