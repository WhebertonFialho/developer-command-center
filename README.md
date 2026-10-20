#  Developer Command Center — Wheberton Fialho Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-00f0ff?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)

> **Single Page Application (SPA)** de apresentação profissional desenvolvida com uma estética futurista **Cyberpunk / Sci-Fi HUD**, destacando trajetória de carreira, projetos full-stack, aplicativos publicados e competências técnicas.

---

## Sobre o Projeto

O **Developer Command Center** é um projeto de portfólio interativo construído para consolidar e apresentar visualmente a trajetória profissional de **Wheberton Fialho**. 

O site foi desenvolvido do zero como um **repositório público open-source** para demonstrar boas práticas de arquitetura frontend moderna, componentização limpa, tipagem estática e integração de design responsivo de alta performance.

---

##  Concept & UI/UX

* **Estética Cyberpunk / Sci-Fi HUD:** Inspirado em painéis de comando e interfaces de diagnóstico técnico, utilizando um contraste neon de alta visibilidade (**Cyan `#00f0ff`** & **Crimson `#ff0055`**) sobre fundo escuro slate (**`#0a0d14`**).
* **Terminal Status Bar:** Cabeçalho persistente com indicadores de estado de sistema e navegação rápida.
* **Linha do Tempo Interativa (`LINHA_DO_TEMPO.log`):** Filtros dinâmicos por categoria (*Projetos*, *Carreira*, *Formação Acadêmica*) para rápida leitura dos recrutadores.
* **Google Play Hub:** Seção dedicada para exibição e direcionamento de aplicativos mobile (ex: *Meu Financeiro*) com status de distribuição e tags das tecnologias utilizadas.

---

##  Tecnologias Utilizadas

* **Core:** [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/), PostCSS
* **Animações & Ícones:** [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)


---

##  Estrutura de Pastas

```text
developer-command-center/
├── public/
│   └── data.json                 # Fonte de dados centralizada (Timeline & Apps)
├── src/
│   ├── components/               # Componentes modulares
│   │   ├── Navbar.tsx            # Terminal Status Bar
│   │   ├── Hero.tsx              # Apresentação Principal
│   │   ├── Timeline.tsx          # Linha do tempo interativa com filtros
│   │   ├── AppHub.tsx            # Hub de Aplicativos Mobile
│   │   ├── TechStack.tsx         # Grid de tecnologias por segmento
│   │   └── Footer.tsx            # Rodapé institucional
│   ├── types/                    # Definições e interfaces TypeScript
│   ├── App.tsx                   # Layout principal
│   ├── index.css                 # Importações e utilitários do Tailwind v4
│   └── main.tsx
├── package.json
├── vite.config.ts                # Configuração do Vite + Plugin Tailwind
└── README.md