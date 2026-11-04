# Portfólio Pessoal — Edson Barbarini

> **Developer in Progress** | Estudante de Técnico em Informática no Instituto Educacional Raphael Di Santo & Jovem Aprendiz na Azul Linhas Aéreas (Aeroporto Internacional de Viracopos - SESMT).

Portfólio moderno, tecnológico, responsivo e com identidade visual inspirada em sistemas de aviação, telemetria e painéis de controle, construído com **React**, **TypeScript**, **Vite** e **Tailwind CSS**.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** — Biblioteca para construção de interfaces reativas baseadas em componentes.
- **TypeScript** — Tipagem estática e segurança de código.
- **Vite** — Build tool ultra-rápido para desenvolvimento moderno.
- **Tailwind CSS** — Framework de estilização com paleta personalizada inspirada em sistemas de aviação.
- **Lucide React** — Conjunto de ícones consistentes e modernos.

---

## 🚀 Como Executar o Projeto Localmente

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

### 2. Instalação das dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse o endereço exibido no terminal (geralmente `http://localhost:5173`) no seu navegador.

### 4. Gerar a versão de produção (Build)
```bash
npm run build
```
Os arquivos otimizados para produção serão gerados na pasta `dist/`.

---

## 📁 Estrutura de Arquivos

```text
portifolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg              <- Foto de perfil do Edson (substituível)
│   │   ├── projeto-integramente.png <- Capa do projeto Integramente
│   │   ├── projeto-coffeebreak.png  <- Capa do projeto CoffeeBreak®
│   │   ├── projeto-frontcerto.png   <- Capa do projeto Front-Certo
│   │   └── projeto-redes.png        <- Capa do projeto DataSmart
│   └── radar-icon.svg               <- Favicon com ícone de radar
│
├── src/
│   ├── components/
│   │   ├── BackToTop.tsx            <- Botão flutuante para voltar ao topo
│   │   ├── Button.tsx               <- Botão reutilizável com estilos HUD
│   │   ├── Footer.tsx               <- Rodapé com telemetria e links
│   │   ├── Header.tsx               <- Menu fixo responsivo com tema e navegação
│   │   ├── ProjectCard.tsx          <- Card de projeto com fallback elegante
│   │   ├── RadarHud.tsx             <- Animação visual de radar e HUD de status
│   │   ├── SectionTitle.tsx         <- Títulos de seções com numeração SYS.0X
│   │   ├── SkillCard.tsx            <- Cartões de tecnologias com ícones
│   │   ├── Terminal.tsx             <- Terminal interativo (EDSON_TERMINAL)
│   │   └── ThemeToggle.tsx          <- Alternador de tema claro/escuro
│   │
│   ├── data/
│   │   ├── links.ts                 <- Onde editar links sociais e de contato
│   │   ├── projects.ts              <- Onde adicionar e editar projetos
│   │   └── skills.ts                <- Onde configurar habilidades e categorias
│   │
│   ├── hooks/
│   │   ├── useActiveSection.ts      <- Detecção de rolagem para menu ativo
│   │   └── useTheme.ts              <- Gerenciador de tema Dark/Light
│   │
│   ├── sections/
│   │   ├── About.tsx                <- Seção "Além do código"
│   │   ├── Contact.tsx              <- Formulário validado e canais diretos
│   │   ├── Experience.tsx           <- Linha do tempo na Azul e formação
│   │   ├── Hero.tsx                 <- Apresentação de impacto e radar
│   │   ├── Projects.tsx             <- Galeria de projetos e filtros
│   │   └── Skills.tsx               <- Grade categorizada de tecnologias
│   │
│   ├── styles/
│   │   └── global.css               <- Estilos globais e utilitários de HUD
│   │
│   ├── types/
│   │   └── index.ts                 <- Tipos e interfaces TypeScript
│   │
│   ├── App.tsx                      <- Componente principal da aplicação
│   └── main.tsx                     <- Ponto de entrada do React
│
├── index.html                       <- Estrutura HTML com SEO e fontes
├── package.json
├── tailwind.config.js               <- Configuração das cores e animações
├── tsconfig.json
└── vite.config.ts
```

---

## ✏️ Guia de Customização Rápida

### Onde alterar seus links e redes sociais?
Abra o arquivo [`src/data/links.ts`](file:///c:/Users/Casa/Desktop/Portifolio/src/data/links.ts) e insira os links reais do seu GitHub, LinkedIn, Instagram e seu e-mail de contato oficial.

### Onde adicionar ou alterar projetos?
Abra o arquivo [`src/data/projects.ts`](file:///c:/Users/Casa/Desktop/Portifolio/src/data/projects.ts). Todos os dados (nome, categoria, descrição, tecnologias, imagem, links e destaques) estão centralizados lá.

### Onde adicionar sua foto de perfil?
Basta salvar sua foto na pasta `public/images/` com o nome exato:
`public/images/profile.jpg`
Se a imagem não existir ou for removida, o site exibe automaticamente um avatar tecnológico elegante sem quebrar o layout.

---

## 🌐 Como Publicar na Vercel

1. Crie uma conta ou faça login em [vercel.com](https://vercel.com/).
2. Suba este projeto para o seu repositório no **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: portfólio Edson Barbarini completo"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/portifolio-edson.git
   git push -u origin main
   ```
3. No painel da Vercel, clique em **"Add New Project"** e importe o repositório do GitHub.
4. A Vercel detectará automaticamente o **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. Em poucos segundos seu site estará no ar com link público HTTPS!
