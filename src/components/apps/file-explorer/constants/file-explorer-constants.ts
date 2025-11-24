import {
  copyIcon,
  cutIcon,
  excludeIcon,
  flexBox1Icon,
  flexBox2Icon,
  galleryIcon,
  pasteIcon,
  questionIcon,
} from '@/assets';

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
    disabled: true,
    dropdown: true,
    label: 'Organizar',
    shortcut: null,
    value: 'organize',
    dropDownItems: [
      {
        disabled: true,
        iconSrc: cutIcon,
        label: 'Recortar',
        shortcut: null,
        value: 'cut',
      },
      {
        disabled: true,
        iconSrc: copyIcon,
        label: 'Copiar',
        shortcut: null,
        value: 'copy',
      },
      {
        disabled: true,
        iconSrc: pasteIcon,
        label: 'Colar',
        shortcut: null,
        value: 'paste',
      },
      {
        disabled: true,
        label: 'Desfazer',
        shortcut: null,
        value: 'undo',
      },
      {
        disabled: true,
        label: 'Refazer',
        shortcut: null,
        value: 'redo',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Selecionar tudo',
        shortcut: null,
        value: 'select-all',
      },
      separatorItem,
      {
        disabled: true,
        iconSrc: flexBox2Icon,
        label: 'Layout >',
        shortcut: null,
        value: 'layout',
      },
      {
        disabled: true,
        label: 'Opções de pasta e pesquisa',
        shortcut: null,
        value: 'paste-search-options',
      },
      separatorItem,
      {
        disabled: true,
        iconSrc: excludeIcon,
        label: 'Excluir',
        shortcut: null,
        value: 'delete',
      },
      {
        disabled: true,
        label: 'Renomear',
        shortcut: null,
        value: 'rename',
      },
      {
        disabled: true,
        label: 'Remover Propriedades',
        shortcut: null,
        value: 'remove-props',
      },
      {
        disabled: true,
        label: 'Propriedades',
        shortcut: null,
        value: 'props',
      },
      separatorItem,
      {
        disabled: true,
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
    disabled: true,
    dropdown: false,
    label: 'Nova pasta',
    shortcut: null,
    value: 'new-folder',
  },
];

export const actionItems: ActionItem[] = [
  {
    disabled: true,
    dropdown: true,
    iconSrc: galleryIcon,
    label: 'view icon',
    value: 'view',
  },
  {
    disabled: true,
    dropdown: false,
    iconSrc: flexBox1Icon,
    label: 'layout icon',
    value: 'layout',
  },
  {
    disabled: true,
    dropdown: false,
    iconSrc: questionIcon,
    label: 'help icon',
    value: 'help',
  },
];
