import {
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
    label: 'Arquivo',
    shortcut: null,
    value: 'file',
    dropDownItems: [
      {
        disabled: true,
        label: 'Novo',
        shortcut: 'Ctrl+N',
        value: 'new',
      },
      {
        disabled: true,
        label: 'Abrir',
        shortcut: 'Ctrl+O',
        value: 'open',
      },
      {
        disabled: true,
        label: 'Salvar',
        shortcut: 'Ctrl+S',
        value: 'save',
      },
      {
        disabled: true,
        label: 'Salvar como...',
        shortcut: null,
        value: 'save-as',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Configurar Página...',
        shortcut: null,
        value: 'config-page',
      },
      {
        disabled: true,
        label: 'Imprimir...',
        shortcut: 'Ctrl+P',
        value: 'print',
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
    label: 'Editar',
    shortcut: null,
    value: 'edit',
    dropDownItems: [
      {
        disabled: true,
        label: 'Desfazer',
        shortcut: 'Ctrl+Z',
        value: 'undo',
      },
      {
        disabled: true,
        label: 'Refazer',
        shortcut: 'Ctrl+Shift+Z',
        value: 'redo',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Recortar',
        shortcut: 'Ctrl+X',
        value: 'cut',
      },
      {
        disabled: true,
        label: 'Colar',
        shortcut: 'Ctrl+C',
        value: 'paste',
      },
      {
        disabled: true,
        label: 'Excluir',
        shortcut: 'Del',
        value: 'delete',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Localizar...',
        shortcut: 'Ctrl+F',
        value: 'find',
      },
      {
        disabled: true,
        label: 'Localizar Próxima',
        shortcut: 'F3',
        value: 'find-next',
      },
      {
        disabled: true,
        label: 'Substituir',
        shortcut: 'Ctrl+H',
        value: 'replace',
      },
      {
        disabled: true,
        label: 'Ir para...',
        shortcut: 'Ctrl+G',
        value: 'go-to',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Selecionar Tudo',
        shortcut: 'Ctrl+A',
        value: 'select-all',
      },
      {
        disabled: true,
        label: 'Hora/data',
        shortcut: 'F5',
        value: 'date-time',
      },
    ],
  },
  {
    disabled: true,
    dropdown: true,
    label: 'Formatar',
    shortcut: null,
    value: 'format',
    dropDownItems: [
      {
        disabled: true,
        label: 'Quebra automática de linha',
        shortcut: null,
        value: 'line-break',
      },
      {
        disabled: true,
        label: 'Fonte...',
        shortcut: null,
        value: 'font',
      },
    ],
  },
  {
    disabled: true,
    dropdown: true,
    label: 'Exibir',
    shortcut: null,
    value: 'view',
    dropDownItems: [
      {
        disabled: true,
        label: 'Barra de status',
        shortcut: null,
        value: 'status-bar',
      },
    ],
  },
  {
    disabled: true,
    dropdown: true,
    label: 'Ajuda',
    shortcut: null,
    value: 'help',
    dropDownItems: [
      {
        disabled: true,
        label: 'Exibir Ajuda',
        shortcut: null,
        value: 'view-help',
      },
      separatorItem,
      {
        disabled: true,
        label: 'Sobre o Bloco de notas',
        shortcut: null,
        value: 'about-notepad',
      },
    ],
  },
];
