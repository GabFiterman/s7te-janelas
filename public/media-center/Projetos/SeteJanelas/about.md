# Sete Janelas: O Sistema Operacional Web

## A Visão

Mais do que um portfólio, o Sete Janelas é uma simulação de sistema operacional via web, projetada para quebrar a barreira entre a navegação passiva e a interação funcional. É a prova viva da minha tese central: Engenharia robusta e Design intuitivo são indissociáveis. Aqui, cada "janela" é um microuniverso de funcionalidade, gerenciado por um kernel simulado no navegador.

## Arquitetura e Decisões Técnicas

O projeto foi arquitetado para demonstrar domínio completo sobre o ciclo de vida do React e gerenciamento de estados complexos.

- **Gerenciamento de Estado Global (Zustand)**: Implementação de uma Store centralizada que atua como o "Kernel" do sistema, orquestrando janelas, processos (z-index, foco, minimização) e o sistema de arquivos virtual (VFS) sem prop drilling.
- **Virtual File System (VFS)**: Arquitetura de dados baseada em grafos/árvores para simular diretórios, permitindo navegação real, histórico e mapeamento de assets estáticos e dinâmicos, com persistência via LocalStorage.
- **Performance & Race Conditions**: Tratamento rigoroso de mount/unmount de componentes pesados (mídia) utilizando `refs` e cleanup functions para evitar memory leaks e condições de corrida em operações assíncronas.
- **Componentização Atômica**: Uso de Atomic Design para criar um Design System proprietário e escalável, garantindo consistência visual do Boot ao Shutdown.
