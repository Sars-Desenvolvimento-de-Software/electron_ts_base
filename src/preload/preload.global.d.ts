declare global {
  interface Window {
    api: {
      ping_tela_apresentacao: () => string;
      ping_tela_lista: () => string;
    };
  }
}
export {};
