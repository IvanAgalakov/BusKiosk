export interface Language {
    code: string;
    name: string;
    flag: string;
  }
  
  export const languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      flag: '🇬🇧'
    },
    {
      code: 'fr',
      name: 'Français',
      flag: '🇫🇷'
    },
    {
      code: 'es',
      name: 'Español',
      flag: '🇪🇸'
    },
    {
      code: 'de',
      name: 'Deutsch',
      flag: '🇩🇪'
    },
    {
      code: 'it',
      name: 'Italiano',
      flag: '🇮🇹'
    },
    {
      code: 'pt',
      name: 'Português',
      flag: '🇵🇹'
    },
    {
      code: 'zh',
      name: '中文',
      flag: '🇨🇳'
    },
    {
      code: 'ja',
      name: '日本語',
      flag: '🇯🇵'
    }
  ];