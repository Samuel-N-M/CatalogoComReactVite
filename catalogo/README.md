# Projeto React + Vite

Este é um projeto desenvolvido com React utilizando Vite como ferramenta de build. Ele também inclui gerenciamento de rotas com React Router e bibliotecas de ícones para melhorar a interface.

## Pré-requisitos

Certifique-se de ter as ferramentas abaixo instaladas em seu ambiente:

- [Node.js](https://nodejs.org/) (recomendado LTS)
- [Git](https://git-scm.com/)

---

## Passo a passo para execução do projeto

### 1. Clonando o repositório

Abra o terminal e execute o comando abaixo para clonar o projeto para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Substitua seu-usuario/nome-do-repositorio pelo caminho correto do seu repositório no GitHub.

### 2. Acesse o diretório do projeto

Navegue até a pasta do projeto clonado:

### 3. Instale as dependências

Instale todas as dependências necessárias utilizando o gerenciador de pacotes npm ou yarn:

```bash
npm install
```

### 4. Executando o projeto em modo de desenvolvimento

Após instalar as dependências, inicie o servidor de desenvolvimento com o comando:

```bash
npm run dev
```

O terminal exibirá um link semelhante a este:

```bash
> Local: http://localhost:5173/
```

Abra o link em seu navegador para visualizar o projeto.

## Estrutura de pastas

```bash
src/
├── components/      # Componentes reutilizáveis
├── pages/           # Páginas para as rotas
├── routes/          # Configuração de rotas
├── assets/          # Imagens, estilos e outros recursos
├── App.jsx          # Componente principal
├── main.jsx         # Ponto de entrada do React
```

## Funcionalidades

1. Rotas: Utiliza o react-router-dom para navegação entre páginas.
2. Ícones: Inclui ícones das bibliotecas react-icons ou outra de sua escolha

## Adicionando Dependências ao Projeto

### React Router Dom

O React Router é utilizado para gerenciar a navegação entre páginas. Se necessário, instale-o novamente com:

```bash
npm install react-router-dom
```

### React Icons

Ícones são fornecidos pela biblioteca react-icons. Caso precise instalar:

```bash
npm install react-icons
```