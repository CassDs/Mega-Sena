# 🎰 Mega Conferência - Conferidor de Bilhetes da Mega Sena

Sistema interativo e intuitivo para conferir bilhetes da Mega Sena com três modos de operação diferentes, desenvolvido com React, TypeScript e Vite.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Modos de Operação](#modos-de-operação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Funciona](#como-funciona)

---

## 🎯 Sobre o Projeto

O **Mega Conferência** é uma aplicação web desenvolvida para facilitar a conferência de bilhetes da Mega Sena. O sistema permite verificar se seus bilhetes foram premiados através de três modos diferentes de entrada de números, oferecendo uma experiência visual atrativa com feedback em tempo real.

### Principais Características:

- ✅ **Interface moderna e responsiva** - Funciona perfeitamente em desktop e mobile
- ✅ **Três modos de operação** - Ao Vivo, Completo e Bingo
- ✅ **Feedback visual em tempo real** - Os bilhetes destacam os números acertados conforme você digita
- ✅ **Sistema de ordenação inteligente** - Bilhetes com mais acertos aparecem primeiro
- ✅ **Animações celebratórias** - Mensagens personalizadas baseadas nos resultados
- ✅ **Suporte a diferentes tipos de bilhetes** - 7, 9, 10 ou 13 números

---

## ⚡ Funcionalidades

### 1. **Modo Ao Vivo** 🔴
- Selecione os 6 números do sorteio manualmente
- Visualização em tempo real dos acertos em cada bilhete
- Ordenação automática: bilhetes com mais acertos aparecem no topo
- Ao completar os 6 números, uma tela de resultado é exibida automaticamente

### 2. **Modo Completo** ⌨️
- Selecione os 6 números e verifique o resultado quando quiser
- Botão "Conferir Resultado" para controle total do processo
- Ideal para conferir bilhetes com calma

### 3. **Modo Bingo** 🎲
- Sorteio automático e animado dos 6 números
- Números aparecem um por um com efeito de máquina de bingo
- Ótimo para demonstrações e entretenimento
- Ao completar os 6 números, os resultados são exibidos

### Resultados Possíveis:
- **🎊 Sena** - Acertou todos os 6 números
- **🎉 Quina** - Acertou 5 números
- **✨ Quadra** - Acertou 4 números
- **😢 Nenhum prêmio** - Menos de 4 acertos

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** `v19.2.3` - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** `v5.8.2` - Superset tipado do JavaScript
- **[Vite](https://vite.dev/)** `v6.2.0` - Build tool e dev server ultra-rápido
- **[Lucide React](https://lucide.dev/)** `v0.562.0` - Biblioteca de ícones moderna e leve
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first (configurado via CDN ou PostCSS)

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** - Versão 18.x ou superior
- **[npm](https://www.npmjs.com/)** - Gerenciador de pacotes (incluído com Node.js)

### Verificar instalação:

```bash
node --version
npm --version
```

---

## 🚀 Instalação

### 1. Clone ou acesse o diretório do projeto:

```bash
cd "c:\Projetos\Mega Sena"
```

### 2. Instale as dependências:

```bash
npm install
```

Este comando irá instalar todas as dependências listadas no `package.json`:
- React e React-DOM
- Lucide React (ícones)
- Vite e plugins
- TypeScript e tipos

---

## ▶️ Como Executar

### Modo Desenvolvimento:

```bash
npm run dev
```

Este comando irá:
1. Iniciar o servidor de desenvolvimento do Vite
2. Abrir automaticamente a aplicação no navegador
3. Habilitar Hot Module Replacement (HMR) - alterações no código são refletidas instantaneamente

**URL padrão:** `http://localhost:5173`

### Build para Produção:

```bash
npm run build
```

Gera uma versão otimizada na pasta `dist/` pronta para deploy.

### Pré-visualizar Build:

```bash
npm run preview
```

Inicia um servidor local para testar a build de produção.

---

## 🎮 Modos de Operação

### 🔴 Modo Ao Vivo

**Ideal para:** Conferir bilhetes durante o sorteio ao vivo ou logo após conhecer o resultado.

**Como usar:**
1. Clique no botão "Ao Vivo" no topo da página
2. Selecione os 6 números sorteados clicando nos botões numéricos (1-60)
3. Conforme você seleciona, os bilhetes são atualizados em tempo real
4. Bilhetes com mais acertos aparecem automaticamente no topo
5. Ao completar os 6 números, uma tela de resultado aparece após 0,5 segundos

**Destaque:** Feedback instantâneo - você vê os acertos crescendo enquanto digita!

---

### ⌨️ Modo Completo

**Ideal para:** Conferir com calma, ideal se você já tem todos os 6 números anotados.

**Como usar:**
1. Clique no botão "Completo" no topo da página
2. Selecione os 6 números sorteados
3. Clique no botão verde "CONFERIR RESULTADO" quando estiver pronto
4. A tela de resultado mostra todos os acertos de uma vez

**Destaque:** Você controla quando ver o resultado!

---

### 🎲 Modo Bingo

**Ideal para:** Demonstrações, diversão ou simular um sorteio.

**Como usar:**
1. Clique no botão "Bingo" no topo da página
2. Clique em "INICIAR SORTEIO"
3. Os números são sorteados automaticamente um por um
4. Animação de máquina de bingo com efeito de "embaralhamento"
5. Após o 6º número, aguarda 1 segundo e exibe os resultados

**Destaque:** Experiência visual envolvente com sorteio automático!

---

## 📁 Estrutura do Projeto

```
c:\Projetos\Mega Sena\
│
├── components/                 # Componentes React reutilizáveis
│   ├── BingoMachine.tsx       # Componente do sorteio automático (Modo Bingo)
│   ├── CelebrationModal.tsx   # Modal de resultados com animações
│   ├── NumberSelector.tsx     # Seletor de números (1-60)
│   └── TicketCard.tsx         # Card de exibição de bilhete com acertos
│
├── App.tsx                    # Componente principal da aplicação
├── index.tsx                  # Ponto de entrada da aplicação React
├── index.html                 # HTML base
│
├── types.ts                   # Definições de tipos TypeScript
├── constants.ts               # Constantes e dados dos bilhetes
│
├── package.json               # Dependências e scripts npm
├── tsconfig.json              # Configuração do TypeScript
├── vite.config.ts             # Configuração do Vite
│
└── README.md                  # Este arquivo
```

### Detalhamento dos Arquivos Principais:

**`App.tsx`**
- Gerencia o estado global da aplicação
- Controla os três modos de operação
- Lógica de conferência e ordenação de bilhetes
- Calcula resultados (Quadra, Quina, Sena)

**`constants.ts`**
- Contém a lista de todos os 20 bilhetes
- Define grupos: "Squad Seguros" e "Neurotech"
- Cada bilhete tem: ID, números, tipo (quantidade de números) e grupo

**`types.ts`**
- Define a estrutura de dados TypeScript
- Tipos: `TicketData`, `GameMode`, `MatchResult`

**`components/NumberSelector.tsx`**
- Grid com 60 botões (números de 1 a 60)
- Indica visualmente quais números foram selecionados
- Limita a seleção a 6 números

**`components/TicketCard.tsx`**
- Exibe um bilhete com seus números
- Destaca os números acertados
- Mostra badges de premiação (Quadra, Quina, Sena)
- Animação de pulsação para bilhetes premiados

**`components/BingoMachine.tsx`**
- Animação de sorteio automático
- Efeito de "máquina de bingo" com números girando
- Exibe progresso dos 6 números sorteados

**`components/CelebrationModal.tsx`**
- Tela de resultado final
- Mensagens personalizadas baseadas nos resultados
- Lista todos os bilhetes com seus respectivos acertos

---

## 🎯 Como Funciona

### Fluxo de Dados:

1. **Seleção de Números**
   - Usuário seleciona números (manualmente ou via Bingo)
   - Estado `selectedNumbers` é atualizado
   - Máximo de 6 números permitido

2. **Cálculo de Acertos**
   - Sistema compara `selectedNumbers` com números de cada bilhete
   - Calcula quantidade de acertos para cada bilhete
   - Identifica: Quadra (4), Quina (5), Sena (6)

3. **Ordenação Inteligente**
   - Bilhetes são ordenados por número de acertos (maior → menor)
   - Atualização em tempo real (Modo Ao Vivo)

4. **Feedback Visual**
   - Números acertados destacados em verde nos bilhetes
   - Badges de premiação aparecem automaticamente
   - Animações de pulsação para bilhetes premiados

5. **Tela de Resultado**
   - Exibida automaticamente no Modo Ao Vivo (6 números)
   - Exibida ao clicar "Conferir" no Modo Completo
   - Exibida após sorteio no Modo Bingo
   - Mostra estatísticas completas e mensagem personalizada

### Tipos de Bilhetes:

O sistema suporta bilhetes com diferentes quantidades de números:
- **7 números** - Maioria dos bilhetes
- **9 números** - Bilhetes com mais chances
- **10 números** - Bolão pequeno
- **13 números** - Bolão grande

---

## 🎨 Personalização

### Adicionar Novos Bilhetes:

Edite o arquivo `constants.ts` e adicione novos objetos ao array `TICKETS`:

```typescript
{
  id: 21,
  numbers: [5, 12, 18, 25, 33, 47, 54],
  type: 7,
  group: 'Meu Grupo'
}
```

### Alterar Cores e Estilos:

O projeto usa **Tailwind CSS**. Ajuste as classes nos componentes `.tsx`:
- `bg-emerald-*` - Cores de fundo (verde esmeralda)
- `text-*` - Cores de texto
- `rounded-*` - Bordas arredondadas

---

## 🐛 Solução de Problemas

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 5173 já em uso
O Vite tentará automaticamente a próxima porta disponível (5174, 5175...). Ou especifique uma porta:
```bash
npm run dev -- --port 3000
```

### Build não funciona
Verifique se há erros de TypeScript:
```bash
npx tsc --noEmit
```

---

## 📄 Licença

Este projeto é privado e destinado ao uso interno.

---

## 👥 Grupos de Bilhetes

O sistema gerencia 20 bilhetes divididos em dois grupos:

- **Bilhetes da Squad Seguros** - 14 bilhetes (IDs 1-14)
- **Bilhetes Neurotech** - 6 bilhetes (IDs 15-20)

---

## 🎊 Mensagens de Resultado

O sistema exibe mensagens personalizadas baseadas nos resultados:

- **Sena** → "🎉 SENA! 🎊 FELIZ 2026! 🎊"
- **Quina** → "🎉 QUINA! 🎊 FELIZ 2026! 🎊"
- **Quadra** → "✨ QUADRA! 🎊 FELIZ 2026! 🎊"
- **Nenhum prêmio** → "😢 Não foi dessa vez... 😢 Mas FELIZ 2026! 🎊"

---

## 🙋 Suporte

Para problemas ou dúvidas sobre o projeto, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com 💚 para conferência de bilhetes da Mega Sena da Virada 2026**
