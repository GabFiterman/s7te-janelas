import {
  type ControllerItem,
  type SeparatorItem,
} from '@/components/common/widgets/app-controller-widget/app-controller-widget';

import { blocksIcon, copyIcon, excludeIcon, printerIcon } from '@/assets';

export const separatorItem: SeparatorItem = {
  value: 'separator',
};

export const controllerItems: ControllerItem[] = [
  {
    disabled: true,
    dropdown: true,
    label: 'Arquivo',
    shortcut: null,
    value: 'file',
    dropDownItems: [
      {
        disabled: true,
        iconSrc: excludeIcon,
        label: 'Excluir',
        shortcut: 'Del',
        value: 'delete',
      },
      {
        disabled: true,
        label: 'Criar Cópia...',
        shortcut: null,
        value: 'create_copy',
      },
      separatorItem,
      {
        disabled: true,
        iconSrc: copyIcon,
        label: 'Copiar',
        shortcut: null,
        value: 'copy',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Propriedades',
        shortcut: 'Alt+Enter',
        value: 'close',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Sair',
        shortcut: null,
        value: 'close',
      },
    ],
  },
  {
    disabled: true,
    dropdown: true,
    label: 'Imprimir',
    shortcut: null,
    value: 'print',
    dropDownItems: [
      {
        disabled: true,
        iconSrc: printerIcon,
        label: 'Imprimir',
        shortcut: 'Ctrl+]',
        value: 'print',
      },
      {
        disabled: true,
        // TODO: Atualizar icon
        iconSrc: blocksIcon,
        label: 'Encomendar Cópias',
        value: 'print',
      },
    ],
  },
  {
    disabled: true,
    dropdown: false,
    label: 'Email',
    shortcut: null,
    value: 'email',
  },
  {
    disabled: true,
    dropdown: true,
    label: 'Gravar',
    shortcut: null,
    value: 'record',
    dropDownItems: [
      {
        disabled: true,
        label: 'Disco de Dados...',
        shortcut: null,
        value: 'data-disk',
      },
      {
        disabled: true,
        label: 'DVD de Vídeo...',
        shortcut: null,
        value: 'dvd-video',
      },
    ],
  },
  {
    disabled: true,
    dropdown: true,
    label: 'Abrir',
    shortcut: null,
    value: 'open',
    dropDownItems: [
      {
        disabled: true,
        // TODO: Atualizar icon
        iconSrc: blocksIcon,
        label: 'Paint',
        shortcut: null,
        value: 'open-paint',
      },
      {
        disabled: true,
        // TODO: Atualizar icon
        iconSrc: blocksIcon,
        label: 'Firefox',
        shortcut: null,
        value: 'open-firefox',
      },
      {
        disabled: true,
        // TODO: Atualizar icon
        iconSrc: blocksIcon,
        label: 'Windows Media Center',
        shortcut: null,
        value: 'oepn-windows-media-center',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Escolher programa...',
        shortcut: null,
        value: 'open-choose-program',
      },
    ],
  },
];
