# Next Boilerplate

Configurações básicas e objetivas do boilerplate:

`Next` <br>
Framework base. [Conheça](https://nextjs.org/).

`Typescript` <br>
Linguagem (Superset Javascript) base. [Conheça](https://www.typescriptlang.org/).

`ESLint` <br>
Lib responsável por manter a padronização do código. [Conheça](https://eslint.org/).

`Jest e React Testing Library` <br>
Responsável pela criação e execução dos testes. [Conheça](https://testing-library.com/docs/react-testing-library/intro/).

`Tailwind CSS` <br>
Responsável pelas classes pré-definidas utilizadas na construção da aplicação. [Conheça](https://tailwindcss.com/).

`Hero Icons` <br>
Pacote de Ícones gratuitos. [Conheça](https://heroicons.com/).

<br>

# Estrutura de Arquivos

`src` <br>
Raiz da aplicação

`components` <br>
Responsável por organizar toda a estrutura de componentes reutilizáveis

`contexts`<br>
Responsável por organizar todos os contextos da aplicação

`domain` <br>
Responsável pelo Core da aplicação, podendo conter as seguintes subspastas (Mas não limitado à elas):

`domain/enums` <br>
Responsável pelos Enumerators

`domain/entities` <br>
Responsável pelas Entidades

`domain/interfaces` <br>
Responsável pelas Interfaces

`hooks` <br>
Responsável pelos Custom Hooks

`pages` <br>
Parte da estrutura básica do Next e responsável pelas páginas e roteamento da aplicação. [Leia a documentação](https://nextjs.org/docs/basic-features/pages) e entenda seu funcionamento.

`pages/api`
Parte da estrutura base do Next e responsável pelas API's. [Leia a documentação](https://nextjs.org/docs/api-routes/introduction) e entenda seu funcionamento.

`styles` <br>
Responsável por toda a questão de estilização da aplicação

<br>

# Comandos

`yarn dev` <br>
Executa localmente na porta 3000

`yarn build` <br>
Gera o build da aplicação

`yarn start` <br>
Starta a aplicação à partir do build

`yarn lint` <br>
Executa o Lint em busca de código fora do padrão definido

`yarn test` <br>
Roda todos os testes

`yarn test:coverage` <br>
Gera os testes e o relatório de cobertura

`yarn test:dev` <br>
Mantém os testes rodando e assistindo à qualquer modificação

`yarn test:preview` <br>
Inicia o Jest Preview para visualizar o componente que está sendo testado (Para mais detalhes, [veja a documentação](https://www.jest-preview.com/docs/getting-started/intro#how-to-use-jest-preview-with-only-2-lines-of-code))
