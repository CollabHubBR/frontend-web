# CollabHubBR - Front-End Web

![GitHub License](https://img.shields.io/github/license/CollabHubBR/frontend-web?labelColor=101010)

<!-- ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/CollabHubBR/frontend-web/testing.yml?style=flat&labelColor=101010) -->

Este repositório contém o código-fonte do **Front-End Web** do **CollabHubBR**, a plataforma brasileira de coordenação e organização de projetos de código-aberto. Construído com **React** e **Vite** para uma experiência de desenvolvimento rápida e eficiente, esta aplicação oferece uma interface intuitiva e responsível para os usuários interagirem com os projetos, participarem de enquetes, acompanharem roadmaps e visualizarem métricas importantes.

Utilizamos **WebSockets** para notificações em tempo real, garantindo que você esteja sempre atualizado sobre as novidades do seu projeto. Seja uma nova enquete, uma milestone alcançada ou um comentário em uma discussão, as notificações chegam instantaneamente. Além disso, o **Recharts** é integrado para criar dashboards visuais e interativos, transformando dados complexos em insights claros e acionáveis, auxiliando na tomada de decisões **driven-by-community**. Nosso objetivo é proporcionar uma experiência fluida e colaborativa, fortalecendo o engajamento e a participação da comunidade em projetos Open Source.

## Stack

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?style=for-the-badge&logo=TypeScript&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/react-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Vitest](https://img.shields.io/badge/Vitest-%236E9F18?style=for-the-badge&logo=Vitest&logoColor=%23fcd703)

<!-- ![Vercel](https://img.shields.io/badge/vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white) -->
<!-- ![Netlify](https://img.shields.io/badge/netlify-000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) -->

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

<!-- ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) -->

![GitHub](https://img.shields.io/badge/GitHub-fff?style=for-the-badge&logo=github&logoColor=181717)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088ff?style=for-the-badge&logo=github-actions&logoColor=fff)

## Arquitetura

A arquitetura do Front-End Web do CollabHubBR segue os princípios do React, priorizando a **componetização**, a **reusabilidade** e a **manutenibilidade** do código. Adotamos uma estrutura de pastas modular para organizar nossos componentes, hooks, contextos e utilitários.

```mermaid
graph TD
    A[App] --> B(Router)
    B --> C{Pages}
    C --> D[Home Page]
    C --> E[Project Page]
    C --> F[Dashboard Page]
    D --> G(Components)
    E --> G
    F --> G
    G --> H[Atoms]
    G --> I[Molecules]
    G --> J[Organisms]
    K[Contexts] --> A
    L[Hooks] --> G
    M[Services] --> A
    N[Utils] --> G
    O[WebSockets] --> A
    P[Recharts] --> F
```

### Estrutura de Pastas

Abaixo, descrevemos a organização principal das pastas do projeto:

-   `src/`: Contém todo o código-fonte da aplicação.
    -   `assets/`: Imagens, ícones, fontes e outros recursos estáticos.
    -   `components/`: Componentes React reutilizáveis, divididos por nível de complexidade (Atoms, Molecules, Organisms).
    -   `contexts/`: Contextos React para gerenciamento de estado global (autenticação, tema, etc.).
    -   `hooks/`: Hooks personalizados para lógica reutilizável.
    -   `pages/`: Componentes de página, representando as diferentes rotas da aplicação.
    -   `services/`: Módulos para integração com APIs externas e serviços de backend (e.g., comunicação com WebSockets).
    -   `styles/`: Arquivos de estilos globais ou temas.
    -   `utils/`: Funções utilitárias e helpers.
    -   `App.tsx`: Componente principal da aplicação.
    -   `main.tsx`: Ponto de entrada da aplicação.

### Instalação de Dependências

```bash
npm install
```

### Servidor Local

```bash
npm run dev
```

### Build de Produção

```bash
npm run build
```

### Execução de Testes

```bash
npm test
```

### Linter

```bash
npm run lint
```

## To-Do List

Confira a [To-Do List aqui](https://github.com/CollabHubBR/frontend-web/blob/main/.github/TODO.md)

## Contrib

Antes de contribuir ativamente com o projeto é **fortemente recomendada** a leitura dos documentos abaixo:

-   [Código de Conduta](https://github.com/CollabHubBR/.github/blob/main/CODE_OF_CONDUCT.md)
-   [Contribuindo](https://github.com/CollabHubBR/.github/blob/main/CONTRIBUTING.md)
-   [Segurança](https://github.com/CollabHubBR/.github/blob/main/SECURITY.md)
-   [Suporte](https://github.com/CollabHubBR/.github/blob/main/SUPPORT.md)

## Licença

This project is under [MIT - Massachusetts Institute of Technology](https://choosealicense.com/licenses/mit/). A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
