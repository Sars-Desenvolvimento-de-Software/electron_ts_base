import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
  ping_tela_apresentacao: () => 'pong A',
  ping_tela_lista: () => 'pong B',
});