# Pster Digital Republic - Code Interview 🔗

**Te peço encarecidamente, eu sei que tem bastante texto, mas leia com carinho, eu escrevi com muito carinho e dedicação, e eu sei que você vai gostar, e vai me ajudar muito, obrigado! 😊**

Olá pessoa maravilhosa, como você está? 🙂
Espero que esteja tudo bem contigo, eu sou o **Pster** e esse é um projeto que criei com bastante carinho e dedicação, se trata de um teste de entrevista, mas eu vou te explicar qual foi a intenção ao criar ele.

O **INK** como o nomeei, é um sistema de criação de formulários dinâmicos, aonde o usuário pode escolher os blocos e perguntas do formulário e gerar ele, o sistema suporta calculos matemáticos e gera uma página de resultado também baseado no que o usuário escolheu.

Aqui você verá somente o front-end, na visão do usuário, pois se eu fosse criar o back-end e o painel de criação, eu provávelmente demoraria um pouco mais, então eu decidi focar na tela do usuário, pois é o que vocês irão avaliar.

Você pode visualizar o projeto na [Vercel](https://digitalr-code-interview.vercel.app/)!
![Previsualização](https://i.imgur.com/fHZApFp.gif)
![Previsualização 2](https://i.imgur.com/gtjwODo.gif)

## 📝 Sobre o projeto

Veja meu [vídeo de introdução](https://www.youtube.com/watch?v=cRIQ4bvO9B0)!

O projeto foi desenvolvido com **ReactJS** e **Typescript** com **Vite**, todos os componentes e estilos foram criados por mim, para animações eu utilizei a biblioteca **Framer Motion**, para gerenciamento dos forms usei o **React Hook Form**.

### **Por quês?** 🤔

Vite foi escolhido para acelerar o desenvolvimento, pois ele é um bundler muito rápido, e com o ReactJS e Typescript, eu consegui criar o projeto com uma estrutura muito organizada e limpa, e com o React Hook Form, eu consegui criar os formulários de forma muito simples e rápida, controlando os inputs sem necessidade direta de criar dezenas de estados.

### **Estrutura de pastas escolhida** 📁

A estrutura que decidi usar foi a mesma do **Angular**, a separação em componentes, pages, shared, services e etc, facilita muito a organização do projeto, e a leitura do código, pois fica muito mais fácil de entender o que cada arquivo faz.

Ouvi falar por ai que a arquitetura MVVM e o WPF da Microsoft usam essa estrutura também, e que essa organização pode ser chamada de "domain-based-modules".

### **Tecnologias utilizadas** 🛠

- [ReactJS](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Cadê o back-end? 🤔

Como eu mencionei anteriormente, eu não criei o back-end pois a pasta `data` que está no repositório simula um, criar um back-end sem criar o painel de administrador não faria muito sentido, e criar o painel daria bastante trabalho.

### **Mas como eu criaria o back-end?**

Eu criaria uma API com **NodeJS** e **Express**, e usaria o **MongoDB** para armazenar os dados, e o **Redis** para armazenar os tokens de autenticação, e para o painel de administrador, eu usaria o ReactJS e Typescript, e usaria o Vite para acelerar o desenvolvimento.

A autenticação seria feita com JWT, e o painel de administrador teria um CRUD para gerenciar os formulários, e um CRUD para gerenciar os usuários, e um CRUD para gerenciar os blocos e perguntas.

## Qual o potencial escalável do projeto? 📈

Eu fiz o projeto pensando em concorrer com outras plataformas de formulário, que hoje não proveem formas tão dinâmicas de **criar perguntas e blocos**, e que não possuem uma **interface amigável** para o usuário.

É muito fácil de modularizar ainda mais as perguntas, chegando a um nível de modularização tão alto que seria possivel:

Criar os blocos de input -> Criar a estrutura do campo de pergunta mesclando vários blocos -> Criar a pergunta com as estrutura dela e definir operações matemáticas -> Criar o formulário com as perguntas estruturadas.

E depois, seria possível também criar os blocos de resultado, que também são modulares, e que também podem ser mesclados.

**Se finalizarmos com integrações a bancos de dados nativamente, envio de email, e até a plataformas como Notion e Airtable, o projeto pode se tornar uma plataforma de criação de formulários muito poderosa.**

# Como rodar o projeto? 🚀

## Com Docker 🐳

Pra garantir, primeiro rode um `npm install` na pasta raiz.

Você pode rodar o projeto com Docker, para isso, você precisa ter o Docker e o Docker Compose instalados na sua máquina, e depois, basta rodar o comando `npm run docker:up` na raiz do projeto, e o projeto irá rodar na porta 5173.

## Na sua máquina 🖥

Você pode rodar o projeto na sua máquina, para isso, você precisa ter o NodeJS instalado na sua máquina, rode o comando `npm install`, e depois, basta rodar o comando `npm run dev` na raiz do projeto, e o projeto irá rodar na porta 5173.

# E se fosse implementar testes? 🧪

Infelizmente eu não fiz testes para essa aplicação, **mas calma, não é que eu não queira**, mas que tomará mais tempo, e eu sei que vocês também estão com pressa, rsrs.

Porém, se eu fosse fazer os testes, eu usaria o **Jest** e o **React Testing Library** para os testes unitários, eu faria testes unitários nos componentes mais básicos, para garantir a integridade.

Mas também criaria testes pesados em cima dos services, principalmente o `calculadoras.service.ts` que é quem faz os cálculos matemáticos.

E eu usaria o **Cypress** para os testes de integração, para garantir que os fluxos estão funcionando corretamente.

# Organização no Jira 📋

Para aproveitar melhor o desenvolvimento e estar situado de tudo que eu precisava fazer, eu criei um quadro de KANBAN no Jira, e lá eu organizei tudo que eu precisava fazer, e o que eu já tinha feito.

Se fossemos escalar o projeto, certamente seria ideal usar **SCRUM**, não com todas as regras, mas com o necessário para agilidade.

Da uma olhadinha:
![Jira](https://i.imgur.com/eLIB5JY.png)
