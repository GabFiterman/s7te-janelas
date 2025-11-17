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
    disabled: false,
    dropdown: true,
    label: 'Arquivo',
    shortcut: null,
    value: 'file',
    dropDownItems: [
      {
        disabled: false,
        iconSrc: excludeIcon,
        label: 'Excluir',
        shortcut: 'Del',
        value: 'delete',
      },
      {
        disabled: false,
        label: 'Criar Cópia...',
        shortcut: null,
        value: 'create_copy',
      },
      separatorItem,
      {
        disabled: false,
        iconSrc: copyIcon,
        label: 'Copiar',
        shortcut: null,
        value: 'copy',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Propriedades',
        shortcut: 'Alt+Enter',
        value: 'close',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Sair',
        shortcut: null,
        value: 'close',
      },
    ],
  },
  {
    disabled: false,
    dropdown: true,
    label: 'Imprimir',
    shortcut: null,
    value: 'print',
    dropDownItems: [
      {
        disabled: false,
        iconSrc: printerIcon,
        label: 'Imprimir',
        shortcut: 'Ctrl+]',
        value: 'print',
      },
      {
        disabled: false,
        // TODO: Atualizar icon
        iconSrc: blocksIcon,
        label: 'Encomendar Cópias',
        value: 'print',
      },
    ],
  },
  {
    disabled: false,
    dropdown: false,
    label: 'Email',
    shortcut: null,
    value: 'email',
  },
  {
    disabled: false,
    dropdown: true,
    label: 'Gravar',
    shortcut: null,
    value: 'record',
    dropDownItems: [
      {
        disabled: false,
        label: 'Disco de Dados...',
        shortcut: null,
        value: 'data-disk',
      },
      {
        disabled: false,
        label: 'DVD de Vídeo...',
        shortcut: null,
        value: 'dvd-video',
      },
    ],
  },
  {
    disabled: false,
    dropdown: true,
    label: 'Abrir',
    shortcut: null,
    value: 'open',
    dropDownItems: [
      {
        disabled: false,
        // TODO: Atualizar icon
        iconSrc: blocksIcon,
        label: 'Paint',
        shortcut: null,
        value: 'open-paint',
      },
      {
        disabled: false,
        // TODO: Atualizar icon
        iconSrc: blocksIcon,
        label: 'Firefox',
        shortcut: null,
        value: 'open-firefox',
      },
      {
        disabled: false,
        // TODO: Atualizar icon
        iconSrc: blocksIcon,
        label: 'Windows Media Center',
        shortcut: null,
        value: 'oepn-windows-media-center',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Escolher programa...',
        shortcut: null,
        value: 'open-choose-program',
      },
    ],
  },
];
