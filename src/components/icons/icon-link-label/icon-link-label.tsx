import { motion, useAnimation } from 'motion/react';
import type { PanInfo } from 'motion/react';

import useUIStore from '@/store/uiStore';

import './icon-link-label.scss';

interface IconLinkLabelProps {
    id: string;
    className?: string;
    icon?: string;
    label?: string;
    size?: number;
}

const GRID_SIZE = 80;

function IconLinkLabel({
    id,
    className,
    // icon = '',
    label = 'My Folder',
    size = 64,
}: IconLinkLabelProps) {
    const controls = useAnimation();
    const updateIconPosition = useUIStore((state) => state.updateIconPosition);

    const currentIcon = useUIStore((state) =>
        state.icons.find((i) => i.id === id),
    );
    if (!currentIcon) return null;

    const formatOnGrid = (value: number) => {
        if (value < GRID_SIZE) return value;
        return Math.round(value / GRID_SIZE) * GRID_SIZE;
    };

    const handlePan = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        controls.set({
            x: currentIcon.x + info.offset.x,
            y: currentIcon.y + info.offset.y,
        });
    };

    const handlePanEnd = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        const newX = formatOnGrid(currentIcon.x + info.offset.x);
        const newY = formatOnGrid(currentIcon.y + info.offset.y);
        updateIconPosition(id, newX, newY);
    };


    return (
        <motion.div
            className={`icon-link-label`}
            animate={controls}
            onPan={handlePan}
            onPanEnd={handlePanEnd}
            style={{
                x: currentIcon.x,
                y: currentIcon.y,
                touchAction: 'none',
                userSelect: 'none',
            }}
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
