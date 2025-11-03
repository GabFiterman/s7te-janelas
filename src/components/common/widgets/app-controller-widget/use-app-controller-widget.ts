import { type ControllerItem, type AppControllerWidgetProps, type DropdownItem } from './app-controller-widget';

import { useState, useEffect, useRef } from 'react';

function useAppControllerWidget({
  controllerItems,
  onClickControllerDropdownItem,
  onClickControllerItem,
}: {
  controllerItems: ControllerItem[];
  onClickControllerDropdownItem: AppControllerWidgetProps['onClickControllerDropdownItem'];
  onClickControllerItem: AppControllerWidgetProps['onClickControllerItem'];
}) {
  const [openDropdownValue, setOpenDropdownValue] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (event: React.MouseEvent<HTMLButtonElement>, item: ControllerItem) => {
    event.stopPropagation();

    if (!item.dropdown) {
      if (onClickControllerItem) onClickControllerItem(event, item);
      return;
    }

    setOpenDropdownValue((prev) => {
      if (prev === item.value) {
        return null;
      }
      return item.value;
    });

    if (onClickControllerItem) onClickControllerItem(event, item);
  };

  const handleItemMouseEnter = (item: ControllerItem) => {
    if (openDropdownValue !== null && item.dropdown) {
      setOpenDropdownValue(item.value);
    }
  };

  const handleDropdownItemClick = (event: React.MouseEvent<HTMLDivElement>, item: DropdownItem) => {
    event.stopPropagation();
    if (onClickControllerDropdownItem) onClickControllerDropdownItem(event, item);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (openDropdownValue !== null) {
        setOpenDropdownValue(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdownValue]);

  const activeItem = controllerItems?.find((item) => item.value === openDropdownValue);

  return {
    openDropdownValue,
    setOpenDropdownValue,
    menuRef,
    handleDropdownItemClick,
    handleItemClick,
    handleItemMouseEnter,
    activeItem,
  };
}

export default useAppControllerWidget;
