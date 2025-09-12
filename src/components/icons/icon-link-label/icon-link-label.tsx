import useLinkLabel from './use-link-label';
import './icon-link-label.scss';

interface IconLinkLabelProps {
    className?: string;
    icon?: string;
    label?: string;
    size?: number;
}

function IconLinkLabel({
    className,
    icon = '',
    label = 'My Folder',
    size = 64,
}: IconLinkLabelProps) {
    const { iconUrl, selectedIcons, selectIcons } = useLinkLabel({ icon });

    return (
        <div className={`icon-link-label ${selectedIcons ? 'selected' : ''}`}>
            <div className="icon-container" onClick={() => selectIcons()}>
                <img
                    src={iconUrl}
                    alt={`${label} Icon`}
                    style={{ width: `${size}px`, height: `${size}px` }}
                    className={`icon ${className || ''}`}
                />
            </div>
            <span className="label">{label}</span>
        </div>
    );
}

export default IconLinkLabel;
