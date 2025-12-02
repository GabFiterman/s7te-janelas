# Roadmap de Evolução

- **Versão Atual**:
  - `v1.0`
    - (MVP Estável) Transparência no desenvolvimento: Priorizo a entrega contínua de valor e a evolução incremental da arquitetura.

---

## 🚀 Core & Arquitetura

- [ ] Persistência de Sessão: Implementar salvamento de estado das janelas abertas e posição dos ícones via `IndexedDB` para manter a área de trabalho do usuário entre recarregamentos.
- [ ] Multitarefa Real: Refatorar o gerenciador de janelas para suportar Web Workers, permitindo processamento em segundo plano sem travar a UI principal.
- [ ] Sistema de Temas (Theming Engine): Migrar variáveis SCSS para CSS Variables dinâmicas, permitindo troca de temas em tempo real (Dark/Light/High Contrast).

## 📦 Aplicações & Features

- [ ] Terminal Emulator: Implementar um terminal interativo (bash-like) permitindo navegação pelo sistema de arquivos e execução de scripts via linha de comando.
- [ ] Media Center 2.0: Suporte a playlists persistentes e picture-in-picture global.
- [ ] Mecânica de Drag-and-Drop Global: Permitir arrastar arquivos do File Explorer para o Desktop ou para dentro de outras aplicações.

## 🛠️ DX & Qualidade

- [ ] Testes E2E (Cypress): Automatizar fluxos críticos (abrir janela, navegar pastas, fechar sistema).
- [ ] Bundle Splitting: Otimização agressiva do Vite para carregar o código das "Apps" apenas sob demanda (Lazy Loading real por rota/componente).
