# Painel do Mestre Virtual - D&D 5e

Acesse a aplicação online clicando aqui: [Painel do Mestre Virtual](https://inacioserrao.github.io/mestre-virtual/)

Bem-vindo ao **Painel do Mestre Virtual**, uma ferramenta completa, leve e executada diretamente no navegador para auxiliar Mestres de Jogo (DMs) a narrarem suas sessões de Dungeons & Dragons 5ª Edição com muito mais agilidade e organização. 

O painel foi construído com foco em **design visual moderno (Dark Mode)**, agilidade no combate e consulta rápida de regras, eliminando a necessidade de dezenas de abas abertas ou pilhas de papéis.

---

## Funcionalidades Principais

O painel é dividido em módulos de fácil acesso (Abas), garantindo que você tenha o controle total da mesa em uma única tela.

### 1. Acervo de Fichas (Bestiário Visual)
* **Cards com Imagens:** Todos os monstros e NPCs são apresentados em um formato de galeria com cartões. Todos os cards possuem suporte a imagens para facilitar a imersão visual da sua mesa.
* **Separação Inteligente:** Mova monstros do "Acervo Completo" para a "Área da Sessão Atual" com um clique, mantendo apenas os inimigos do encontro atual em foco.
* **Fichas de Status (Statblocks):** Visualize atributos, HP, CA, ataques e habilidades em um modal estilizado idêntico ao do livro oficial, sem sair da tela.

### 2. Combates Ativos (Tracker de Iniciativa)
* **Drag & Drop:** Reordene a iniciativa arrastando e soltando as linhas da tabela.
* **Gestão de HP Avançada:** Calcule danos e curas diretamente pela barra (+ cura ou - dano). O painel emite alertas automáticos para **Testes de Concentração** quando um conjurador recebe dano.
* **Efeitos e Condições:** Adicione tags visuais (Envenenado, Caído, Cego) aos personagens com controle de duração (turnos).
* **Alertas Sonoros:** Áudios suaves indicam a passagem de turno e um alarme visual pisca caso o grupo esqueça o combate parado por muito tempo.
* **Múltiplos Combates:** Crie abas internas para gerenciar vários combates ou encontros diferentes simultaneamente.

### 3. Grimório (Magias e Habilidades)
* Banco de dados completo de magias e habilidades estruturado em cartões detalhados.
* **Filtros Poderosos:** Busque magias por Classe, Nível, Escola, Tempo de Conjuração (Ação, Ritual) ou Componentes (V, S, M).
* Habilidades de Raças e Classes separadas de forma orgânica, com opções para expandir o texto do livro apenas quando necessário.

### 4. Painel do Grupo (Party Tracker)
* Acompanhe em tempo real as informações cruciais dos aventureiros: CA, Percepção Passiva (PP), Intuição Passiva (PI) e Testes de Resistência.
* Botão ágil para importar todos os jogadores instantaneamente para a aba de Combate Ativo.

### 5. Sistema de Perseguição
* Tracker exclusivo para cenas de perseguição dinâmicas.
* Acompanhe Presas vs. Perseguidores, contagem de Sucessos (Vitória) e Falhas, regras de distância e ações especiais, tudo automatizado e documentado.

### 6. Regras Rápidas e Backup
* Esqueceu como funciona "Cobertura Média" ou a condição "Agarrado"? Um painel lateral de consulta rápida de regras e maestrias de armas está sempre disponível.
* **Sistema de Backup:** Salve o estado atual da sua sessão (combates, hp, jogadores e monstros em cena) em um arquivo `.json` no seu computador e carregue-o na próxima semana.

---

## Tecnologias Utilizadas

Este projeto não depende de servidores ou bancos de dados complexos, rodando 100% no cliente:
* **HTML5:** Estruturação semântica.
* **CSS3:** Variáveis nativas, Flexbox, CSS Grid, animações fluidas e UI/UX refinada (Dark Mode Clean).
* **Vanilla JavaScript (ES6+):** Lógica de combate, manipulação de DOM, cálculos de dados e persistência de estado via `localStorage`.

---

## Como Executar o Projeto

Como o projeto é estático (apenas arquivos Front-end), usá-lo é incrivelmente simples:

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/seu-usuario/painel-do-mestre-virtual.git](https://github.com/seu-usuario/painel-do-mestre-virtual.git)
