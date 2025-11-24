import { create } from 'zustand';

export const INITIAL_URL = '/home';

interface IEState {
  currentUrl: string;
  history: string[];
  historyIndex: number;
  inputUrl: string;
  isUrlInputFocused: boolean;
  reload: number;

  setFocus: (isFocused: boolean) => void;
  setInputUrl: (url: string) => void;

  goBack: () => void;
  goForward: () => void;
  handleReload: () => void;
  navigateToUrl: (newUrl: string) => void;
}

const useInternetExplorerStore = create<IEState>((set, get) => ({
  currentUrl: INITIAL_URL,
  history: [INITIAL_URL],
  historyIndex: 0,
  inputUrl: INITIAL_URL,
  isUrlInputFocused: false,
  reload: 0,

  setFocus: (isFocused) => set({ isUrlInputFocused: isFocused }),
  setInputUrl: (url) => set({ inputUrl: url }),

  goBack: () => {
    const { history, historyIndex } = get();
    const newIndex = historyIndex - 1;
    if (newIndex >= 0) {
      const newUrl = history[newIndex];
      set({
        currentUrl: newUrl,
        inputUrl: newUrl,
        historyIndex: newIndex,
      });
    }
  },

  goForward: () => {
    const { history, historyIndex } = get();
    const newIndex = historyIndex + 1;
    if (newIndex < history.length) {
      const newUrl = history[newIndex];
      set({
        currentUrl: newUrl,
        inputUrl: newUrl,
        historyIndex: newIndex,
      });
    }
  },

  handleReload: () => {
    set((state) => ({ reload: state.reload + 1 }));
  },

  navigateToUrl: (newUrl) => {
    const { currentUrl, history, historyIndex, inputUrl } = get();
    if (newUrl === currentUrl) return;

    if (newUrl === INITIAL_URL) {
      const newHistory = [...history, INITIAL_URL];
      set({
        currentUrl: INITIAL_URL,
        inputUrl: INITIAL_URL,
        history: newHistory,
        historyIndex: newHistory.length - 1,
      });
      return;
    }

    const urlToNavigate = newUrl || inputUrl;
    let finalUrl = urlToNavigate;

    if (!urlToNavigate.startsWith('http') && urlToNavigate !== INITIAL_URL) {
      finalUrl = `https://${urlToNavigate}`;
    }

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(finalUrl);

    set({
      currentUrl: finalUrl,
      history: newHistory,
      historyIndex: newHistory.length - 1,
      inputUrl: urlToNavigate,
    });
  },
}));

export function useInternetExplorer() {
  const {
    currentUrl,
    goBack,
    goForward,
    handleReload,
    history,
    historyIndex,
    inputUrl,
    isUrlInputFocused,
    navigateToUrl,
    reload,
    setFocus,
    setInputUrl,
  } = useInternetExplorerStore();

  return {
    currentUrl,
    history,
    historyIndex,
    inputUrl,
    isUrlInputFocused,
    reload,
    goBack,
    goForward,
    handleReload,
    navigateToUrl,
    setFocus,
    setInputUrl,
  };
}
