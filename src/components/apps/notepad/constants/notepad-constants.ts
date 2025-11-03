import {
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
    label: 'Arquivo',
    shortcut: null,
    value: 'file',
    dropDownItems: [
      {
        disabled: false,
        label: 'Novo',
        shortcut: 'Ctrl+N',
        value: 'new',
      },
      {
        disabled: false,
        label: 'Abrir',
        shortcut: 'Ctrl+O',
        value: 'open',
      },
      {
        disabled: false,
        label: 'Salvar',
        shortcut: 'Ctrl+S',
        value: 'save',
      },
      {
        disabled: false,
        label: 'Salvar como...',
        shortcut: null,
        value: 'save-as',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Configurar Página...',
        shortcut: null,
        value: 'config-page',
      },
      {
        disabled: false,
        label: 'Imprimir...',
        shortcut: 'Ctrl+P',
        value: 'print',
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
    label: 'Editar',
    shortcut: null,
    value: 'edit',
    dropDownItems: [
      {
        disabled: false,
        label: 'Desfazer',
        shortcut: 'Ctrl+Z',
        value: 'undo',
      },
      {
        disabled: false,
        label: 'Refazer',
        shortcut: 'Ctrl+Shift+Z',
        value: 'redo',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Recortar',
        shortcut: 'Ctrl+X',
        value: 'cut',
      },
      {
        disabled: false,
        label: 'Colar',
        shortcut: 'Ctrl+C',
        value: 'paste',
      },
      {
        disabled: false,
        label: 'Excluir',
        shortcut: 'Del',
        value: 'delete',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Localizar...',
        shortcut: 'Ctrl+F',
        value: 'find',
      },
      {
        disabled: false,
        label: 'Localizar Próxima',
        shortcut: 'F3',
        value: 'find-next',
      },
      {
        disabled: false,
        label: 'Substituir',
        shortcut: 'Ctrl+H',
        value: 'replace',
      },
      {
        disabled: false,
        label: 'Ir para...',
        shortcut: 'Ctrl+G',
        value: 'go-to',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Selecionar Tudo',
        shortcut: 'Ctrl+A',
        value: 'select-all',
      },
      {
        disabled: false,
        label: 'Hora/data',
        shortcut: 'F5',
        value: 'date-time',
      },
    ],
  },
  {
    disabled: false,
    dropdown: true,
    label: 'Formatar',
    shortcut: null,
    value: 'format',
    dropDownItems: [
      {
        disabled: false,
        label: 'Quebra automática de linha',
        shortcut: null,
        value: 'line-break',
      },
      {
        disabled: false,
        label: 'Fonte...',
        shortcut: null,
        value: 'font',
      },
    ],
  },
  {
    disabled: false,
    dropdown: true,
    label: 'Exibir',
    shortcut: null,
    value: 'view',
    dropDownItems: [
      {
        disabled: false,
        label: 'Barra de status',
        shortcut: null,
        value: 'status-bar',
      },
    ],
  },
  {
    disabled: false,
    dropdown: true,
    label: 'Ajuda',
    shortcut: null,
    value: 'help',
    dropDownItems: [
      {
        disabled: false,
        label: 'Exibir Ajuda',
        shortcut: null,
        value: 'view-help',
      },
      separatorItem,
      {
        disabled: false,
        label: 'Sobre o Bloco de notas',
        shortcut: null,
        value: 'about-notepad',
      },
    ],
  },
];
