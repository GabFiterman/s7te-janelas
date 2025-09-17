import { useState } from 'react';

import folderIcon from '@/assets/icons/folder-1.webp';

interface UseLinkLabelProps {
    icon?: string;
}

function useLinkLabel({ icon }: UseLinkLabelProps) {
    const [selectedIcons, setSelectedIcons] = useState(false);
    const iconUrl = icon || folderIcon;

    const selectIcons = () => {
        setSelectedIcons((prev) => !prev);
    };

    return {
        iconUrl,
        selectedIcons,
        selectIcons,
    };
}

export default useLinkLabel;
