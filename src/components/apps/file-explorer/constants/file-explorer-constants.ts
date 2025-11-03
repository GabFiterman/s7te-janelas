import { flexBox1Icon, galleryIcon, questionIcon } from '@/assets/icons';

import {
  type ActionItem,
  type ControllerItem,
  type SeparatorItem,
} from '@/components/common/widgets/app-controller-widget/app-controller-widget';

export const separatorItem: SeparatorItem = {
  value: 'separator',
};

export const controllerItems: ControllerItem[] = [
  {
    disabled: false,
    dropdown: true,
    label: 'Organizar',
    shortcut: null,
    value: 'organize',
    dropDownItems: [
      {
        disabled: false,
        label: 'Recortar',
        shortcut: null,
        value: 'cut',
      },
      {
        disabled: false,
        label: 'Copiar',
        shortcut: null,
        value: 'copy',
      },
      {
        disabled: false,
        label: 'Colar',
        shortcut: null,
        value: 'paste',
      },
      {
        disabled: false,
        label: 'Desfazer',
        shortcut: null,
        value: 'undo',
      },
      {
        disabled: false,
        label: 'Refazer',
        shortcut: null,
        value: 'redo',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Selecionar tudo',
        shortcut: null,
        value: 'select-all',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Layout >',
        shortcut: null,
        value: 'layout',
      },
      {
        disabled: false,
        label: 'Opções de pasta e pesquisa',
        shortcut: null,
        value: 'paste-search-options',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Excluir',
        shortcut: null,
        value: 'delete',
      },
      {
        disabled: false,
        label: 'Renomear',
        shortcut: null,
        value: 'rename',
      },
      {
        disabled: false,
        label: 'Remover Propriedades',
        shortcut: null,
        value: 'remove-props',
      },
      {
        disabled: false,
        label: 'Propriedades',
        shortcut: null,
        value: 'props',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Fechar',
        shortcut: null,
        value: 'close',
      },
    ],
  },
  // {
  //   title: 'include-library',
  //   name: 'Incluir na biblioteca',
  //   dropdown: true,
  // },
  // {
  //   title: 'share',
  //   name: 'Compartilhar com',
  //   dropdown: true,
  // },
  {
    disabled: false,
    dropdown: false,
    label: 'Nova pasta',
    shortcut: null,
    value: 'new-folder',
  },
];

export const actionItems: ActionItem[] = [
  {
    disabled: false,
    dropdown: true,
    iconSrc: galleryIcon,
    label: 'view icon',
    value: 'view',
  },
  {
    disabled: false,
    dropdown: false,
    iconSrc: flexBox1Icon,
    label: 'layout icon',
    value: 'layout',
  },
  {
    disabled: false,
    dropdown: false,
    iconSrc: questionIcon,
    label: 'help icon',
    value: 'help',
  },
];
