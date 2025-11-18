import { create } from 'zustand';

export const INITIAL_URL = '/home';

interface IEState {
  currentUrl: string;
  inputUrl: string;
  isUrlInputFocused: boolean;

  setFocus: (isFocused: boolean) => void;
  setInputUrl: (url: string) => void;

  navigateToUrl: (newUrl: string) => void;
}

const useInternetExplorerStore = create<IEState>((set, get) => ({
  currentUrl: INITIAL_URL,
  inputUrl: INITIAL_URL,
  isUrlInputFocused: false,

  setFocus: (isFocused) => set({ isUrlInputFocused: isFocused }),
  setInputUrl: (url) => set({ inputUrl: url }),

  navigateToUrl: (newUrl) => {
    if (newUrl === INITIAL_URL) return set({ currentUrl: INITIAL_URL, inputUrl: INITIAL_URL });
    const urlToNavigate = newUrl || get().inputUrl;
    let finalUrl = urlToNavigate;

    if (!urlToNavigate.startsWith('http') && urlToNavigate !== INITIAL_URL) {
      finalUrl = `https://${urlToNavigate}`;
    }

    set({ currentUrl: finalUrl });
    if (get().inputUrl !== urlToNavigate) {
      set({ inputUrl: urlToNavigate });
    }
  },
}));

export function useInternetExplorer() {
  const { currentUrl, inputUrl, isUrlInputFocused, navigateToUrl, setFocus, setInputUrl } = useInternetExplorerStore();

  return {
    currentUrl,
    inputUrl,
    isUrlInputFocused,
    navigateToUrl,
    setFocus,
    setInputUrl,
  };
}
