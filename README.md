# 🏦 TSBANK

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=orange) &nbsp;
![Yarn version](https://img.shields.io/static/v1?label=yarn&message=v1.22.21&color=yellow) &nbsp;
![Repository size](https://img.shields.io/github/repo-size/bush1D3v/tsbank_front?color=green) &nbsp;
![Pull request](https://img.shields.io/static/v1?label=PR&message=welcome&color=blue)

## 🔍 Sobre o Projeto

O **TSBank** é uma aplicação **bancária**, possuindo todas as funcionalidades existentes de um banco, como **saque**, **depósito**, **pix**, cartões de **crédito** e **débito**, **gerenciamento** de transações e informações do seu usuário, etc.

## 🛠️ Tecnologias e Ferramentas Utilizadas

<div align='center'>
   <img align='center' height='50' width='70' title='TypeScript' alt='typescript' src='https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg' />
   <img align='center' height='54' width='68' title='React' alt='react' src='https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg' />
   <img align='center' height='54' width='68' title='Vite' alt='vite' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/46570ed3-6e92-4ad2-b09b-d235cd142b3f' />
   <img align='center' height='54' width='68' title='Tailwindcss' alt='tailwindcss' src='https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg' />
   <img align='center' height='54' width='68' title='Node.js' alt='nodejs' src='https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg' />
   <img align='center' height='64' width='68' title='Sass' alt='sass' src='https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg' />
   <img align='center' height='68' width='72' title='Potcss' alt='potcss' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/85b7c73b-e181-4c95-b9de-a8e0ba0523d3' />
   <img align='center' height='65' width='80' title='StyledComponents' alt='styledcomponents' src='https://github.com/bush1D3v/tsbank_front/assets/133554156/5c78f0d4-45d6-407a-becc-fa25188d2491' />
   <img align='center' height='54' width='68' title='Jest' alt='jest' src='https://github.com/devicons/devicon/blob/master/icons/jest/jest-plain.svg' />
   <img align='center' height='70' width='50' title='Axios' alt='axios' src='https://github.com/bush1D3v/tsbank_front/assets/133554156/b9ff307f-3582-4635-ae6e-361215efc742' /> &nbsp;
   <img align='center' height='54' width='44' title='Vitest' alt='vitest' src='https://github.com/bush1D3v/tsbank_api/assets/133554156/74803ee6-3f6e-4335-9f56-cb887a4285ff' />  &nbsp;
   <img align='center' height='54' width='68' title='Html5' alt='html5' src='https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg' />
   <img align='center' height='50' width='70' title='JavaScript' alt='javascript' src='https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg' />
   <img align='center' height='58' width='80' title='Tailwindcss-animated' alt='tailwindcss-animated' src='https://github.com/bush1D3v/my_portfolio_html/assets/133554156/364156ca-f265-4478-bcc3-4a12830c46a7' /> &nbsp;
   <img align='center' height='49' width='49' title='Dotenv' alt='dotenv' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/432ec521-c94a-4f24-964e-f62658d04581' /> &nbsp; &nbsp;
   <img align='center' height='49' width='59' title='Zod' alt='zod' src='https://github.com/bush1D3v/tsbank_front/assets/133554156/5a769805-23e2-4f8b-904d-034b25a982a6' /> &nbsp; &nbsp;
   <img align='center' height='49' width='49' title='Crypto-js' alt='crypto-js' src='https://github.com/bush1D3v/tsbank_api/assets/133554156/303e55f6-c252-479d-9ce9-37cb33b07a12' /> &nbsp; &nbsp;
   <img align='center' height='54' width='44' title='Storybook-js' alt='storybook-js' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/213c8aa4-ce24-4b30-8e07-dceb476e8589' /> &nbsp;
   <img align='center' height='70' width='70' title='Docker' alt='docker' src='https://github.com/devicons/devicon/blob/master/icons/docker/docker-plain.svg' />
</div>

## 🏗 Estrutura e Arquitetura

O projeto segue os princípios da **arquitetura limpa** e o código foi organizado de acordo com os princípios de **modularidade**, **reutilização** e **responsabilidade única**.

## 📃 Documentação da Aplicação

A seguir, temos o link da documentação Front-end feita a partir do Storybook: https://tsbank-storybook.vercel.app/

## 🐳 Docker

Com a adição do Docker, você agora pode utilizar dos scripts fornecidos em `package.json` para poder construir a imagem docker e rodar os containers da aplicação, dos testes e da documentação.

Para isso, segue a lista de funções de cada script:

> `docker-build`: Constrói a imagem docker do projeto <br> `docker-start`: Sobe e roda/só roda o container tsbank_front <br> `docker-stop`: Para o container tsbank_front <br> `docker-test`: Sobe um container alternativo chamado tsbank_front_tests, roda os testes e exclui o container após a execução dos mesmos <br> `docker-stb`: Sobe um container alternativo chamado tsbank_front_stb, e após a documentação ser fechada pelo seu terminal VSCode com <u>ctrl + c</u>, o container é excluído

# 🖋️ Contribuindo para o TSBank

Agradecemos pelo seu interesse em contribuir para a **TSBank**. Sua ajuda é **valiosa** para melhorar e **expandir** nossa aplicação. Abaixo estão as **diretrizes** e os **passos** para contribuir com nosso projeto.

## 💻 Como Contribuir

### 🌳 Forkando o Repositório

Antes de começar, você **deverá** forkar o repositório do projeto para **seu perfil**.

### 🖨 Clonando seu Repositório

Após o Fork, você **precisará** clonar o repositório forkado para seu **ambiente de desenvolvimento local**:

```
git clone https://github.com/{seu-usuario}/tsbank_front.git
cd tsbank_front
```

### ⏬ Instalando Dependências

Certifique-se de ter Node.js instalado no seu sistema. Em seguida, instale as dependências necessárias:

```
npm install
```

ou

```
yarn install
```

ou

```
pnpm install
```

### 🆕 Criando uma Branch

Antes de iniciar qualquer trabalho, crie uma branch separada para a sua contribuição. Use um nome descritivo para a sua branch:

```
git checkout -b feature/nova-funcionalidade
```

### 🔨 Fazendo Alterações

Faça as alterações necessárias no código, adicione novos recursos ou correções de bugs.

### 🧪 Testando

Garanta que suas alterações não quebraram nenhum recurso existente. Execute os testes e certifique-se de que todos passam:

```
npm run test
```

ou

```
yarn test
```

ou

```
pnpm test
```

### 📝 Documentando

Mantenha a documentação atualizada. Se você adicionou novos recursos, adicione arquivos de documentação (caso necessário) e verifique se eles estão devidamente documentados no servidor StoryBook.

### 📊 Compromissos e Push

Após concluir suas alterações e testá-las, faça um commit das alterações:

```
git add .
git commit -m <tipo de alteração>(nomeDoArquivo): Nova funcionalidade
```

Em seguida, envie suas alterações para o repositório:

```
git push origin feature/nova-funcionalidade
```

### 📨 Solicitando um Pull Request (PR)

Vá para o repositório no GitHub e crie um Pull Request para que sua contribuição seja revisada. Certifique-se de descrever suas alterações e fornecer informações contextuais.

### 👁 Revisão e Fusão

Após criar um Pull Request, nossa equipe revisará suas alterações e fornecerá feedback. Uma vez aprovado, suas alterações serão mescladas no projeto principal.

## 💼 Diretrizes Gerais

- Mantenha o código limpo e legível.
- Siga as boas práticas de desenvolvimento.
- Respeite as convenções de nomenclatura existentes.
- Documente adequadamente as alterações, recursos ou correções.

#

**_Agradecemos pela sua contribuição e esperamos trabalhar juntos para tornar a TSBank ainda melhor. Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato conosco. Juntos, podemos criar uma aplicação mais robusta e eficiente._**
