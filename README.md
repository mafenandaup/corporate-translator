# Corporate Translator

Alguma vez você já se sentiu como se seus colegas de trabalho estivessem falando uma língua iliterata, ou teve um pressentimento de que o seu chefe pensa que você nasceu ontem? Seus problemas acabaram! Com o Corporate Translator, você pode traduzir uma frase que normalmente diria em contexto informal, e fazer com que ela se adapte com facilidade ao contexto corporativo. Assim, você consegue entender melhor o que está dizendo (ou ouvindo).

## Features

- Tradução instantânea de frases informais para linguagem corporativa.
- Interface simples e intuitiva, desenvolvida com React e estilizada com animações usando Framer Motion.
- Backend (Node.js) e integração com a API do Gemini AI para traduções de alta qualidade.


## Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Git** (para clonar o repositório)
- **Vite** (ferramenta de build para o frontend)

## Dependências

Back-end (server-app)

- **Express (framework para construção de APIs)**
- **Dotenv (gerenciamento de variáveis de ambiente)**
- **Axios (integração com APIs externas)**
- **Nodemon (Inicialização automática de scripts)**
- **CORS (Permite que o Front-end acesse recursos do back)**

Front-end (client-app)

- **Framer Motion (Biblioteca de animações flúidas)**
- **FontAwesome (Biblioteca para ícones customizáveis)**
- **Axios (possibilita a execução de requisições HTTP)**

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contribuições 

Este projeto aceita contribuições diversas, como pull requests, conserto de bugs e feature requests. Caso deseja contribuir, é recomendável que leia as instruções de instalação abaixo:

### Instalação

Siga os passos abaixo para instalar e configurar o projeto:

 1. Clone o repositório
```bash
git clone https://github.com/mafenandaup/corporate-translator.git
cd corporate-translator
```

 2. Instale as dependências no back end:
```bash
cd server-app
npm install
```

 3. Instale as dependências no front end (caso desejar, abra um novo terminal para a instalação):
```bash
cd client-app
cd corptranslate-app
npm install
```
4. Inicialize o backend (certifique-se de estar na pasta server-app)
```bash
npm start
```
ou 
```bash
node --watch server.js
```
5. Inicialize o front-end  (certifique-se de estar na pasta corptranslate-app)

```bash
npm run dev
```
---

## Integração com a API do Gemini

Este projeto utiliza a API do Gemini AI para realizar traduções de frases do dia a dia para o contexto corporativo.

### Como funciona?
1. O backend envia uma requisição POST para a API do Gemini com o prompt e a frase do usuário.
2. A API do Gemini responde com a tradução formal e adaptada para o contexto corporativo.
3. O backend retorna a tradução ao frontend para exibição.

### Configuração
Você precisará de uma chave de API do Gemini AI. Siga os passos abaixo:

1. **Crie uma conta** no [Gemini AI](https://www.gemini-ai.com).
2. **Obtenha sua chave de API** no painel de controle do Gemini.
3. Selecione o seu projeto entre os disponíveis 

(caso necessário, crie uma conta no fire base e crie um projeto com a mesma conta que deseja obter a API KEY do gemini).

4. Em seguida, instale o seguinte pacote
```bash
npm i @google/genai
```

4. **Adicione a chave ao arquivo `.env` na pasta `server-app`**:

Nesse projeto, optei por usar o modelo Flash 2.0. Verifique se o modelo usado no seu projeto não possui custo adicional.

## Contato

Para tratar questões relacionadas a tratamento de erros ou em relação ao uso deste software, entre em contato via mariafernandapmaia@gmail.com .
