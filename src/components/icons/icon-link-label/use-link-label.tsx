import { useState } from 'react';
import folderIcon from '@/../public/icons/folder-1.ico';

// 1. Defina a interface das props do hook
interface UseLinkLabelProps {
    icon?: string;
}

// 2. O hook recebe as props como um único objeto
function useLinkLabel({ icon }: UseLinkLabelProps) {
    const [selectedIcons, setSelectedIcons] = useState(false);

    const selectIcons = () => {
        setSelectedIcons((prev) => !prev);
    };

    const iconUrl = icon || folderIcon;

    return {
        selectedIcons,
        selectIcons,
        iconUrl,
    };
}

export default useLinkLabel;
