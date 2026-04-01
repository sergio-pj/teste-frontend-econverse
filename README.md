# Econverse Store

Vitrine de produtos desenvolvida em React, TypeScript, Vite e SCSS com base no layout de referencia enviado. A aplicacao consome a API JSON da Econverse, renderiza cards de produto, possui tratamento de loading e erro, e abre um modal com os detalhes do item selecionado.

## Tecnologias

- React
- TypeScript
- Vite
- Sass (SCSS Modules)

## Funcionalidades

- Consumo da API remota de produtos
- Tipagem forte para os dados da camada de dominio
- Estrutura organizada por responsabilidade
- Modal de produto com fechamento por botao, clique fora e tecla Escape
- Loading state durante busca da API
- Tratamento de erro de requisicao
- Imagens com lazy loading
- Layout responsivo com adaptacao para celular
- HTML semantico e componentizacao

## Estrutura de pastas

```text
src/
  components/
  pages/
  services/
  styles/
  types/
```

## Arquitetura

- `src/services/api.ts`: acesso e normalizacao dos dados da API.
- `src/types/product.ts`: contratos de tipagem para a resposta e para o produto normalizado.
- `src/components/ProductList.tsx`: busca os produtos, controla loading, erro, produto selecionado e modal.
- `src/components/ProductCard.tsx`: renderiza o resumo visual de cada item com props tipadas.
- `src/components/ProductModal.tsx`: mostra os detalhes do produto selecionado e controla interacoes de fechamento.
- `src/pages/HomePage.tsx`: compoe as secoes da pagina.

## Como rodar

### Pre-requisitos

- Node.js 20+
- npm 10+

### Instalar dependencias

```bash
npm install
```

### Rodar em desenvolvimento

```bash
npm run dev
```

### Gerar build

```bash
npm run build
```

### Pre-visualizar build

```bash
npm run preview
```

## Deploy

O projeto ficou preparado para deploy automatico no GitHub Pages.

### Como publicar

1. Suba este projeto para um repositorio no seu GitHub.
2. Garanta que a branch principal seja `main` ou `master`.
3. No GitHub, abra `Settings > Pages`.
4. Em `Build and deployment`, selecione `GitHub Actions` como source.
5. Faça push para a branch principal.

O workflow criado em `.github/workflows/deploy.yml` vai:

- instalar as dependencias
- gerar o build com Vite
- publicar a pasta `dist` no GitHub Pages

### URL esperada

Se o seu perfil e `sergio-pj`, a URL final tende a ficar assim:

```text
https://sergio-pj.github.io/NOME-DO-REPOSITORIO/
```

Se o repositorio se chamar `sergio-pj.github.io`, a publicacao ficara na raiz do dominio:

```text
https://sergio-pj.github.io/
```

## Observacao sobre este ambiente

Neste workspace o build do projeto ja foi validado localmente com sucesso.
