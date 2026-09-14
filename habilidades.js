// ==========================================
// Banco de Dados de Habilidades
// ==========================================
// Este arquivo é INDEPENDENTE de magias.js.
// Funciona da mesma forma: basta adicionar novos objetos dentro do
// array `habilidadesData` abaixo — nenhuma outra parte do código
// precisa ser alterada (filtros, pesquisa, Consulta Rápida etc. já se
// adaptam automaticamente aos novos dados).
//
// ------------------------------------------------------------------
// ESTRUTURA DE CADA HABILIDADE
// ------------------------------------------------------------------
// {
//     id:             "IDENTIFICADOR ÚNICO. Ex: 'barbaro-furia',
//                      'clerigo-dominio-vida-discipulo-da-vida'.
//                      Usado para pesquisa, abertura e referência — não
//                      dependa do índice do array.",
//
//     nome:           "Nome da habilidade.",
//
//     origemTipo:     "DE ONDE a habilidade vem, em termos gerais.
//                      Valores esperados: 'Classe' | 'Raça' | 'Outro'
//                      (futuramente também 'Origem', para antecedentes).
//                      Estrutura genérica pensada para crescer sem
//                      precisar criar um campo novo para cada categoria.",
//
//     origem:         "A entidade principal dentro de `origemTipo`.
//                      Ex: 'Bárbaro', 'Clérigo', 'Druida' (quando
//                      origemTipo = 'Classe'); 'Anão', 'Elfo', 'Humano'
//                      (quando origemTipo = 'Raça').",
//
//     especializacao: "A especialização de `origem`, quando existir.
//                      Ex: 'Domínio da Vida', 'Círculo da Lua', 'Caminho
//                      do Berserker' (subclasses); 'Anão da Montanha',
//                      'Alto Elfo' (subraças). Use `null` quando a
//                      habilidade for geral da origem (não pertence a
//                      nenhuma especialização específica). Esse campo
//                      alimenta o filtro 'Subclasse / Arquétipo' do
//                      painel — basta preenchê-lo aqui.
//                      IMPORTANTE: a interface decide como CHAMAR esse
//                      campo (ex.: 'Subclasse' para Classe, 'Subraça'
//                      para Raça) de acordo com `origemTipo` — o dado
//                      em si continua genérico.",
//
//     nivel:          "Nível da classe em que ela é obtida (ex: '2',
//                      '5', '1º - 20º'). Use `null` quando não se
//                      aplicar (ex.: habilidades de Raça).",
//
//     tipo:           "O QUE a habilidade é — não confundir com
//                      `origemTipo` (DE ONDE ela vem). Valores
//                      esperados: 'Característica de Classe' |
//                      'Característica de Subclasse' | 'Traço Racial' |
//                      'Talento' | 'Característica de Origem' | 'Outro'.",
//
//     acao:           "QUAL TIPO DE AÇÃO a habilidade utiliza, quando isso
//                      for aplicável. Valores esperados: 'Ação' |
//                      'Ação Bônus' | 'Reação' | 'Passiva' | 'Sem Ação'.
//                      Use `null` quando a habilidade não tiver um tipo de
//                      ação claramente aplicável (não invente o valor
//                      nesse caso). É um campo ESTRUTURADO e independente
//                      do texto de `resumo`/`descricao` — alimenta o
//                      filtro 'Tipo de Ação' e a linha correspondente nos
//                      cards, sem alterar o texto corrido em nada.",
//
//     recurso:        "Se a habilidade DEPENDE de algum recurso, uso
//                      limitado ou custo para ser usada. Use `null` quando
//                      não houver recurso ou custo específico claramente
//                      presente no texto (não invente o valor nesse
//                      caso — `acao: 'Reação'`, por exemplo, NÃO implica
//                      automaticamente algum recurso limitado). Assim
//                      como `acao`, é um campo ESTRUTURADO e independente
//                      do texto de `resumo`/`descricao` (que continuam
//                      intactos) — alimenta a linha correspondente exibida
//                      no card e na Consulta Rápida do Combate.
//
//                      Formato ESTRUTURADO (recomendado para registros
//                      novos ou atualizados):
//                      {
//                          nome:         "OPCIONAL. Nome do recurso em si,
//                                         quando ele tiver um (ex.:
//                                         'Fúrias', 'Canalizar Divindade',
//                                         'Pontos de Cura'). Omita/null
//                                         quando o recurso não tiver nome
//                                         próprio (ex.: só 'espaço de
//                                         magia').",
//                          tipo:         "OPCIONAL. A unidade do recurso.
//                                         Ex.: 'Usos', 'Pontos', 'Espaços
//                                         de Magia'. Usado para compor a
//                                         quantidade (ex.: 2 + 'Usos' →
//                                         '2 usos').",
//                          quantidade:   "OPCIONAL. Quanto a habilidade
//                                         possui NO MOMENTO (sem
//                                         progressão), como número (ex.:
//                                         2) OU como texto quando o valor
//                                         depende de uma fórmula (ex.:
//                                         '5 × nível de paladino', '1 +
//                                         modificador de Carisma'). Não
//                                         use junto com `progressao` —
//                                         quando a quantidade MUDA com o
//                                         nível, use `progressao` no lugar.",
//                          recuperacao:  "OPCIONAL. Como o recurso é
//                                         recuperado. Ex.: 'Descanso
//                                         Longo', 'Descanso Curto ou
//                                         Longo', 'Diariamente'.",
//                          progressao:   "OPCIONAL. Use no lugar de
//                                         `quantidade` quando o valor do
//                                         recurso MUDA conforme o
//                                         personagem sobe de nível.
//                                         Objeto onde cada chave é um
//                                         nível (string) e o valor é o
//                                         valor do recurso a partir
//                                         daquele nível. NÃO se limita a
//                                         número — pode ser texto quando a
//                                         progressão alterar outro tipo de
//                                         valor. Ex.:
//                                         { '1': 2, '3': 3, '6': 4,
//                                           '12': 5, '17': 6 }
//                                         IMPORTANTE: isso é a progressão
//                                         DO RECURSO, não confundir com o
//                                         campo `nivel` da habilidade (que
//                                         é o nível em que ela é
//                                         ADQUIRIDA — uma habilidade
//                                         adquirida no nível 1 pode ter
//                                         `recurso.progressao` indo até o
//                                         nível 17 sem que `nivel` mude)."
//                      }
//                      Use `formatarRecursoHabilidade(hab.recurso)` (ver
//                      painel.html) para transformar isso em texto visual
//                      compacto — nunca formate `recurso` manualmente.
//
//                      COMPATIBILIDADE: registros antigos ainda podem ter
//                      `recurso` como STRING simples (ex.: '2 usos por
//                      descanso longo'). O sistema continua aceitando esse
//                      formato sem quebrar, mas todo registro NOVO ou
//                      ATUALIZADO deve usar a estrutura acima.",
//
//     resumo:         "OPCIONAL. Texto curto e rápido, sempre visível no
//                      card, para o Mestre bater o olho e já entender o
//                      que a habilidade faz. Se não existir, o card
//                      simplesmente não mostra essa área (nada é
//                      inventado no lugar).",
//
//     descricao:      "Texto completo da habilidade (aceita HTML: <p>,
//                      <strong>, <em>, <ul><li>, e até uma <table>
//                      embutida). Fica escondido até o jogador clicar em
//                      'Ler Texto do Livro'.",
//
//     tabela:         "OPCIONAL. Um <table>...</table> separado, para
//                      quando for mais organizado manter a tabela fora
//                      do texto corrido da descrição. Pode existir junto
//                      com uma tabela dentro de `descricao` — os dois
//                      formatos funcionam.",
//
//     fonte:          "OPCIONAL. Ex: 'Livro do Jogador'. Só aparece se
//                      existir."
// }
//
// Campos ausentes NUNCA quebram o sistema: `especializacao` (quando
// null), `nivel`, `resumo`, `tabela`, `fonte`, `acao` e `recurso` são
// todos opcionais/nulos, e o renderer trata a falta de qualquer um deles.
//
// ------------------------------------------------------------------
// EXEMPLO DE COMO ADICIONAR UMA NOVA HABILIDADE NO FUTURO
// ------------------------------------------------------------------
// Habilidade de classe geral:
// habilidadesData.push({
//     id: "guerreiro-acao-surto",
//     nome: "Surto de Ação",
//     origemTipo: "Classe",
//     origem: "Guerreiro",
//     especializacao: null,
//     nivel: "2",
//     tipo: "Característica de Classe",
//     acao: "Ação Bônus",
//     recurso: {
//         nome: null,
//         tipo: "Usos",
//         quantidade: 1,
//         recuperacao: "Descanso Curto ou Longo"
//     },
//     resumo: `<p>Resumo curto...</p>`,
//     descricao: `<p>Texto completo...</p>`,
//     tabela: null,
//     fonte: "Livro do Jogador"
// });
//
// Habilidade de subraça:
// habilidadesData.push({
//     id: "anao-montanha-treino",
//     nome: "Treinamento de Armaduras Anãs",
//     origemTipo: "Raça",
//     origem: "Anão",
//     especializacao: "Anão da Montanha",
//     nivel: null,
//     tipo: "Traço Racial",
//     acao: "Passiva",
//     recurso: null,
//     resumo: `<p>Resumo curto...</p>`,
//     descricao: `<p>Texto completo...</p>`,
//     tabela: null,
//     fonte: "Livro do Jogador"
// });
//
// Nenhum filtro, pesquisa ou renderização precisa ser tocado para isso
// funcionar — inclusive um novo valor em `especializacao` aparece
// sozinho como opção no filtro "Subclasse / Arquétipo".

const habilidadesData = [
{
id: "barbaro-ataque-descuidado",
nome: "Ataque Descuidado",
origemTipo: "Classe",
origem: "Bárbaro",
especializacao: null,
nivel: "2",
tipo: "Característica de Classe",
acao: "Sem Ação",
recurso: null,
resumo: "<p>Ao fazer seu <strong>primeiro ataque do turno</strong>, você pode escolher atacar descuidadamente: ganha <strong>vantagem</strong> nos ataques corpo a corpo com Força durante o turno, mas os ataques contra você têm <strong>vantagem</strong> até o início do seu próximo turno.</p>",
descricao: "<p><strong>ATAQUE DESCUIDADO</strong></p><p>A partir do 2° nível, você pode desistir de toda preocupação com sua defesa para atacar com um desespero feroz. Quando você fizer o seu primeiro ataque no turno, você pode decidir atacar descuidadamente. Fazer isso lhe concede vantagem nas jogadas de ataque com armas corpo-a-corpo usando Força durante seu turno, porém, as jogadas de ataques feitas contra você possuem vantagem até o início do seu próximo turno.</p>",
tabela: null,
fonte: "Livro do Jogador"
},
{
id: "barbaro-defesa-sem-armadura",
nome: "Defesa sem Armadura",
origemTipo: "Classe",
origem: "Bárbaro",
especializacao: null,
nivel: "1",
tipo: "Característica de Classe",
acao: "Passiva",
recurso: null,
resumo: "<p>Sem armadura, sua <strong>CA = 10 + modificador de Destreza + modificador de Constituição</strong>. Você pode usar um <strong>escudo</strong> e manter esse benefício.</p>",
descricao: "<p><strong>DEFESA SEM ARMADURA</strong></p><p>Quando você não estiver vestindo qualquer armadura, sua Classe de Armadura será 10 + seu modificador de Destreza + seu modificador de Constituição. Você pode usar um escudo e continuar a receber esse benefício.</p>",
tabela: null,
fonte: "Livro do Jogador"
},
{
id: "ladino-maos-rapidas",
nome: "Mãos Rápidas",
origemTipo: "Classe",
origem: "Ladino",
especializacao: "Ladrão",
nivel: "3",
tipo: "Característica de Subclasse",
acao: "Ação Bônus",
recurso: null,
resumo: "<p>Use a <strong>ação bônus da Ação Ardilosa</strong> para fazer um teste de <strong>Prestidigitação</strong>, usar ferramentas de ladrão para <strong>desarmar armadilhas ou abrir fechaduras</strong>, ou realizar a ação de <strong>Usar um Objeto</strong>.</p>",
descricao: "<p><strong>MÃOS RÁPIDAS</strong></p><p>A partir do 3º nível, você pode usar a sua ação bônus concedida pela Ação Ardilosa para fazer um teste de Destreza (Prestidigitação), usar suas ferramentas de ladrão para desarmar uma armadilha ou abrir uma fechadura, ou realizar a ação de Usar um Objeto.</p>",
tabela: null,
fonte: "Livro do Jogador"
},
{
id: "ladino-proficiência-adicional",
nome: "Proficiência Adicional",
origemTipo: "Classe",
origem: "Ladino",
especializacao: "Assassino",
nivel: "3",
tipo: "Característica de Subclasse",
acao: "Passiva",
recurso: null,
resumo: "<p>Você ganha proficiência com <strong>kit de disfarce</strong> e <strong>kit de venenos</strong>.</p>",
descricao: "<p><strong>PROFICIÊNCIA ADICIONAL</strong></p><p>Quando você escolhe esse arquétipo, no 3° nível, você ganha proficiência com kit de disfarce e kit de venenos.</p>",
tabela: null,
fonte: "Livro do Jogador"
},
{
id: "ladino-maos-magicas-malabaristas",
nome: "Mãos Mágicas Malabaristas",
origemTipo: "Classe",
origem: "Ladino",
especializacao: "Trapaceiro Arcano",
nivel: "3",
tipo: "Característica de Subclasse",
acao: null,
recurso: null,
resumo: "<p>Ao conjurar <strong>Mãos Mágicas</strong>, você pode torná-la invisível e usá-la para <strong>guardar ou recuperar objetos</strong> de recipientes carregados por outras criaturas e <strong>usar ferramentas de ladrão à distância</strong>. Pode fazer isso sem ser notado com um teste de <strong>Prestidigitação</strong> contra <strong>Percepção</strong>. Além disso, pode controlar a mão usando a <strong>ação bônus da Ação Ardilosa</strong>.</p>",
descricao: "<p><strong>MÃOS MÁGICAS MALABARISTAS</strong></p><p>A partir do 3° nível, quando você conjurar mãos mágicas, você pode fazer a mão espectral ficar invisível e poderá realizar as seguintes tarefas adicionais:</p><ul><li>Você pode guardar um objeto que a mão estiver segurando em um recipiente vestido ou carregado por outra criatura.</li><li>Você pode recuperar um objeto guardado em um recipiente vestido ou carregado por outra criatura.</li><li>Você pode usar ferramentas de ladrão para abrir fechaduras ou desarmar armadilhas à distância.</li></ul><p>Você pode realizar qualquer dessas tarefas sem ser notado por uma criatura se for bem sucedido num teste de Destreza (Prestidigitação) resistido por um teste de Sabedoria (Percepção) da criatura.</p><p>Além disso, você pode usar a ação bônus concedida por sua Ação Ardilosa para controlar a mão.</p>",
tabela: null,
fonte: "Livro do Jogador"
},

{
id: "druida-formas-de-circulo",
nome: "Formas de Círculo",
origemTipo: "Classe",
origem: "Druida",
especializacao: "Círculo da Lua",
nivel: "2",
tipo: "Característica de Subclasse",
acao: "Passiva",
recurso: null,
resumo: "<p>Sua Forma Selvagem pode assumir <strong>bestas de ND até 1</strong>. A partir do <strong>6º nível</strong>, o ND máximo passa a ser <strong>1/3 do seu nível de druida</strong>, arredondado para baixo.</p>",
descricao: "<p><strong>FORMAS DE CÍRCULO</strong></p><p>Os ritos do seu círculo garantem a você a habilidade de se transformar em formas animais mais poderosas.</p><p>A partir do 2° nível, você pode usar sua Forma Selvagem para se transformar em uma besta com nível de desafio até 1 (você ignora a coluna ND Max da tabela Formas de Besta, mas ainda deve acatar as limitações descritas lá).</p><p>A partir do 6° nível, você pode se transformar em uma besta com nível de desafio tão alto quanto seu nível de druida dividido por 3, arredondado para baixo.</p>",
tabela: null,
fonte: "Livro do Jogador"
},
{
id: "druida-forma-selvagem-de-combate",
nome: "Forma Selvagem de Combate",
origemTipo: "Classe",
origem: "Druida",
especializacao: "Círculo da Lua",
nivel: "2",
tipo: "Característica de Subclasse",
acao: "Ação Bônus",
recurso: null,
resumo: "<p>Você pode usar <strong>Forma Selvagem como ação bônus</strong>. Enquanto estiver transformado, pode gastar uma <strong>ação bônus e um espaço de magia</strong> para recuperar <strong>1d8 PV por nível do espaço gasto</strong>.</p>",
descricao: "<p><strong>FORMA SELVAGEM DE COMBATE</strong></p><p>Quando você escolhe esse círculo, no 2° nível, você recebe a habilidade de usar sua Forma Selvagem no seu turno com uma ação bônus, ao invés de com uma ação.</p><p>Além disso, enquanto você estiver transformando pela sua Forma Selvagem, você pode usar uma ação bônus para gastar uma espaço de magia e ganhar 1d8 pontos de vida por nível do espaço de magia gasto.</p>",
tabela: null,
fonte: "Livro do Jogador"
},
{
    id: "elfo-treinamento-elfico-com-armas",
    nome: "Treinamento Élfico com Armas",

    origemTipo: "Raça",
    origem: "Elfo",
    especializacao: "Alto Elfo",

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você ganha proficiência com <strong>espadas longas, espadas curtas, arcos longos</strong> e <strong>arcos curtos</strong>.</p>",

    descricao: "<p><strong>TREINAMENTO ÉLFICO COM ARMAS</strong></p><p>Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "elfo-transe",
    nome: "Transe",

    origemTipo: "Raça",
    origem: "Elfo",
    especializacao: null,

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você não precisa dormir. Em vez disso, pode <strong>meditar por 4 horas</strong> em um estado de transe para obter os mesmos benefícios que <strong>8 horas de sono</strong>.</p>",

    descricao: "<p><strong>TRANSE</strong></p><p>Elfos não precisam dormir. Ao invés disso, eles meditam profundamente, permanecendo semiconscientes, durante 4 horas por dia. (A palavra em idioma comum para tal meditação é “transe”.)</p><p>Enquanto medita, um elfo é capaz de sonhar de certo modo. Esses sonhos na verdade são exercícios mentais que se tornam reflexos através de anos de prática.</p><p>Depois de descansar dessa forma, você ganha os mesmos benefícios que um humano depois de 8 horas de sono.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "elfo-ancestral-feerico",
    nome: "Ancestral Feérico",

    origemTipo: "Raça",
    origem: "Elfo",
    especializacao: null,

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você tem <strong>vantagem</strong> em testes de resistência contra ser <strong>enfeitiçado</strong> e não pode ser colocado para <strong>dormir por magias</strong>.</p>",

    descricao: "<p><strong>ANCESTRAL FEÉRICO</strong></p><p>Você tem vantagem nos testes de resistência para resistir a ser enfeitiçado e magias não podem colocá-lo para dormir.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "elfo-sentidos-agucados",
    nome: "Sentidos Aguçados",

    origemTipo: "Raça",
    origem: "Elfo",
    especializacao: null,

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você ganha <strong>proficiência em Percepção</strong>.</p>",

    descricao: "<p><strong>SENTIDOS AGUÇADOS</strong></p><p>Você tem proficiência na perícia Percepção.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "visao-no-escuro",
    nome: "Visão no Escuro",

    origemTipo: "Raça",
    origem: ["Anão", "Elfo", "Tiefling", "Meio-Orc", "Gnomo"],
    especializacao: null,

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você enxerga na <strong>penumbra até 18 m</strong> como luz plena e no <strong>escuro</strong> como penumbra, mas vê apenas <strong>tons de cinza</strong> no escuro.</p>",

    descricao: "<p><strong>VISÃO NO ESCURO</strong></p><p>Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "anao-treinamento-anao-com-armaduras",
    nome: "Treinamento Anão com Armaduras",

    origemTipo: "Raça",
    origem: "Anão",
    especializacao: "Anão da Montanha",

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você ganha proficiência com <strong>armaduras leves e médias</strong>.</p>",

    descricao: "<p><strong>TREINAMENTO ANÃO COM ARMADURAS</strong></p><p>Você adquire proficiência em armaduras leves e médias.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "anao-tenacidade-ana",
    nome: "Tenacidade Anã",

    origemTipo: "Raça",
    origem: "Anão",
    especializacao: "Anão da Colina",

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Seu máximo de <strong>pontos de vida aumenta em 1</strong>. A cada nível que você ganha, seu máximo de pontos de vida aumenta em <strong>1 ponto adicional</strong>.</p>",

    descricao: "<p><strong>TENACIDADE ANÃ</strong></p><p>Seu máximo de pontos de vida aumentam em 1, e cada vez que o anão da colina sobe um nível, ele recebe 1 ponto de vida adicional.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "anao-especializacao-em-rochas",
    nome: "Especialização em Rochas",

    origemTipo: "Raça",
    origem: "Anão",
    especializacao: null,

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Em testes de <strong>Inteligência (História)</strong> sobre a origem de trabalhos em pedra, você é considerado proficiente e adiciona <strong>o dobro do bônus de proficiência</strong>.</p>",

    descricao: "<p><strong>ESPECIALIZAÇÃO EM ROCHAS</strong></p><p>Sempre que você realizar um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "anao-treinamento-anao-em-combate",
    nome: "Treinamento Anão em Combate",

    origemTipo: "Raça",
    origem: "Anão",
    especializacao: null,

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você ganha proficiência com <strong>machados de batalha, machadinhas, martelos leves</strong> e <strong>martelos de guerra</strong>.</p>",

    descricao: "<p><strong>TREINAMENTO ANÃO EM COMBATE</strong></p><p>Você tem proficiência com machados de batalha, machadinhas, martelos leves e martelos de guerra.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "anao-resiliencia-ana",
    nome: "Resiliência Anã",

    origemTipo: "Raça",
    origem: "Anão",
    especializacao: null,

    nivel: null,
    tipo: "Traço Racial",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você tem <strong>vantagem</strong> em testes de resistência contra <strong>veneno</strong> e <strong>resistência a dano de veneno</strong>.</p>",

    descricao: "<p><strong>RESILIÊNCIA ANÃ</strong></p><p>Você possui vantagem em testes de resistência contra venenos e resistência contra dano de veneno.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "paladino-saude-divina",
    nome: "Saúde Divina",

    origemTipo: "Classe",
    origem: "Paladino",
    especializacao: null,

    nivel: "3",
    tipo: "Característica de Classe",
    acao: "Passiva",
    recurso: null,

    resumo: "<p>Você se torna <strong>imune a doenças</strong>.</p>",

    descricao: "<p><strong>SAÚDE DIVINA</strong></p><p>No 3° nível, a magia divina flui através de você tornando você imune a doenças.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "paladino-destruicao-divina",
    nome: "Destruição Divina",

    origemTipo: "Classe",
    origem: "Paladino",
    especializacao: null,

    nivel: "2",
    tipo: "Característica de Classe",
    acao: "Sem Ação",
    recurso: {
        nome: "Espaço de Magia",
        tipo: null,
        quantidade: 1,
        recuperacao: null
    },

    resumo: "<p>Ao acertar um ataque corpo a corpo com arma, você pode gastar um <strong>espaço de magia</strong> para causar <strong>dano radiante extra</strong>: 2d8 com espaço de 1º nível, +1d8 por nível acima do 1º, até 5d8. Contra <strong>corruptores ou mortos-vivos</strong>, causa +1d8.</p>",

    descricao: "<p><strong>DESTRUIÇÃO DIVINA</strong></p><p>A partir do 2° nível, quando você atingir uma criatura com um ataque corpo-a-corpo com arma, você pode gastar um espaço de magia de qualquer classe para causar dano radiante no alvo, além do dano normal da arma.</p><p>O dano extra é de 2d8 para um espaço de magia de 1° nível, mais 1d8 para cada espaço de magia acima do 1°, até o máximo de 5d8.</p><p>O dano aumenta em 1d8 se o alvo for um corruptor ou um morto-vivo.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "paladino-estilo-de-luta",
    nome: "Estilo de Luta",

    origemTipo: "Classe",
    origem: ["Paladino", "Guerreiro"],
    especializacao: null,

    nivel: "2, 1",
    tipo: "Característica de Classe",
    acao: null,
    recurso: null,

    resumo: "<p>Escolha <strong>um Estilo de Luta</strong>. Você não pode escolher o mesmo estilo mais de uma vez. Opções: <strong>Combate com Armas Grandes, Defesa, Duelismo</strong> ou <strong>Proteção</strong>.</p>",

    descricao: "<p><strong>ESTILO DE LUTA</strong></p><p>No 2° nível, você adota um estilo de combate particular que será sua especialidade. Escolha uma das opções a seguir. Você não pode escolher o mesmo Estilo de Combate mais de uma vez, mesmo se puder escolher de novo.</p><p><strong>COMBATE COM ARMAS GRANDES</strong></p><p>Quando você rolar um 1 ou um 2 num dado de dano de um ataque com arma corpo-a-corpo que você esteja empunhando com duas mãos, você pode rolar o dado novamente e usar a nova rolagem, mesmo que resulte em 1 ou 2. A arma deve ter a propriedade duas mãos ou versátil para ganhar esse benefício.</p><p><strong>DEFESA</strong></p><p>Enquanto estiver usando armadura, você ganha +1 de bônus em sua CA.</p><p><strong>DUELISMO</strong></p><p>Quando você empunhar uma arma de ataque corpo-a-corpo em uma mão e nenhuma outra arma, você ganha +2 de bônus nas jogadas de dano com essa arma.</p><p><strong>PROTEÇÃO</strong></p><p>Quando uma criatura que você possa ver atacar um alvo que esteja a até 1,5 metro de você, você pode usar sua reação para impor desvantagem nas jogadas de ataque da criatura. Você deve estar empunhando um escudo.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "paladino-cura-pelas-maos",
    nome: "Cura pelas Mãos",

    origemTipo: "Classe",
    origem: "Paladino",
    especializacao: null,

    nivel: "1",
    tipo: "Característica de Classe",
    acao: "Ação",
    recurso: {
        nome: "Pontos de Cura",
        tipo: null,
        quantidade: "5 × nível de paladino",
        recuperacao: "Descanso Longo"
    },

    resumo: "<p>Possui um poço com <strong>5 × seu nível de paladino</strong> PV, recuperado após um <strong>descanso longo</strong>. Com uma <strong>ação</strong>, toque uma criatura para gastar pontos do poço e restaurar PV. Também pode gastar <strong>5 pontos</strong> para curar uma doença ou neutralizar um veneno. Não afeta <strong>mortos-vivos ou constructos</strong>.</p>",

    descricao: "<p><strong>CURA PELAS MÃOS</strong></p><p>Seu toque abençoado pode curar ferimentos. Você tem um poço de poder curativo que se enche quando você realiza um descanso longo.</p><p>Com esse poço, você pode restaurar um número total de pontos de vida igual ao seu nível de paladino x 5.</p><p>Com uma ação, você pode tocar uma criatura e sugar poder do seu poço para restaurar um número de pontos de vida da criatura, até o máximo de pontos restantes no poço.</p><p>Alternativamente, você pode gastar 5 pontos de cura do seu poço de cura para curar o alvo de uma doença ou neutralizar um veneno que o esteja afetando. Você pode curar múltiplas doenças e neutralizar múltiplos venenos com um único uso de Cura pelas Mãos, gastando pontos de vida separadamente para cada um.</p><p>Essa característica não gera nenhum efeito em mortos-vivos e constructos.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "paladino-sentido-divino",
    nome: "Sentido Divino",

    origemTipo: "Classe",
    origem: "Paladino",
    especializacao: null,

    nivel: "1",
    tipo: "Característica de Classe",
    acao: "Ação",
    recurso: {
        nome: null,
        tipo: "Usos",
        quantidade: "1 + modificador de Carisma",
        recuperacao: "Descanso Longo"
    },

    resumo: "<p><strong>Ação:</strong> detecta <strong>celestiais, corruptores e mortos-vivos</strong> a até 18 m, além de locais ou objetos consagrados ou conspurcados, até o final do seu próximo turno. Você sabe o <strong>tipo</strong> da criatura, mas não sua identidade. Usos: <strong>1 + modificador de Carisma</strong> por descanso longo.</p>",

    descricao: "<p><strong>SENTIDO DIVINO</strong></p><p>A presença de um mal poderoso é registrada nos seus sentidos como um odor nocivo e o bem poderoso badala como música celestial nos seus ouvidos.</p><p>Com uma ação, você pode expandir sua consciência para detectar tais forças. Até o final do seu próximo turno, você sabe a localização de qualquer celestial, corruptor ou morto-vivo a 18 metros de você que não esteja com cobertura total.</p><p>Você sabe o tipo (celestial, corruptor ou morto-vivo) de qualquer ser cuja presença você sentiu, mas não sua identidade (o vampiro Conde Strahd von Zarovish, por exemplo).</p><p>Dentro do mesmo raio, você também detecta a presença de qualquer lugar ou objeto que tenha sido consagrado ou conspurcado, como pela magia consagrar.</p><p>Você pode usar essa característica um número de vezes igual a 1 + seu modificador de Carisma. Quando você concluir um descanso longo, você recupera todos os usos gastos.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "mago-colheita-sinistra",
    nome: "Colheita Sinistra",

    origemTipo: "Classe",
    origem: "Mago",
    especializacao: "Escola de Necromancia",

    nivel: "2",
    tipo: "Característica de Subclasse",
    acao: "Sem Ação",
    recurso: null,

    resumo: "<p>Uma vez por turno, ao matar uma ou mais criaturas com uma <strong>magia de 1º nível ou superior</strong>, recupere PV iguais ao <strong>dobro do nível da magia</strong>. Se a magia for de <strong>Necromancia</strong>, recupere o <strong>triplo do nível da magia</strong>. Não funciona contra <strong>constructos ou mortos-vivos</strong>.</p>",

    descricao: "<p><strong>COLHEITA SINISTRA</strong></p><p>A partir do 2° nível, você ganha a habilidade de ceifar a energia vital das criaturas que você mata com suas magias.</p><p>Uma vez por turno, quando você matar uma ou mais criaturas com uma magia de 1° nível ou superior, você recupera uma quantidade de pontos de vida igual ao dobro do nível da magia ou o triplo do seu nível, se a magia pertencer a Escola de Necromancia.</p><p>Você não recebe esse benefício por matar constructos ou mortos-vivos.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "mago-escola-necromancia-necromancia-instruida",
    nome: "Necromancia Instruída",

    origemTipo: "Classe",
    origem: "Mago",
    especializacao: "Escola de Necromancia",

    nivel: "2º",
    tipo: "Característica de Subclasse",
    acao: "Passiva",
    recurso: null,

    resumo: `
        <p>Copiar magias de Necromancia para seu grimório custa <strong>metade do ouro e do tempo</strong> normalmente necessários.</p>
    `,

    descricao: `
        <p><strong>NECROMANCIA INSTRUÍDA</strong></p>

        <p>Quando você escolhe essa escola no 2º nível, o ouro e o tempo que você precisa gastar para copiar uma magia da escola de necromancia em seu grimório é reduzido à metade.</p>
    `,

    tabela: null,

    fonte: ""
},

{
    id: "mago-recuperacao-arcana",
    nome: "Recuperação Arcana",

    origemTipo: "Classe",
    origem: "Mago",
    especializacao: null,

    nivel: "1",
    tipo: "Característica de Classe",
    acao: "Sem Ação",
    recurso: {
        nome: null,
        tipo: "Usos",
        quantidade: 1,
        recuperacao: "Diariamente"
    },

    resumo: "<p>Uma vez por dia, ao terminar um <strong>descanso curto</strong>, recupere espaços de magia gastos cuja soma de níveis seja de até <strong>metade do seu nível de mago, arredondado para cima</strong>. Nenhum espaço recuperado pode ser de <strong>6º nível ou superior</strong>.</p>",

    descricao: "<p><strong>RECUPERAÇÃO ARCANA</strong></p><p>Você aprendeu como recuperar um pouco de sua energia mágica estudando seu grimório.</p><p>Uma vez por dia, quando você terminar um descanso curto, você pode escolher espaços de magia gastos para recuperá-los. Os espaços gastos a serem recuperados podem ser de qualquer combinação de níveis de magia, desde que sejam iguais ou inferiores a metade de seu nível de mago (arredondado para cima) e nenhum deles seja de 6º ou superior.</p><p>Por exemplo, se você é um mago de 4º nível, você pode recuperar até 2 espaços de magia gastos. Você pode recuperar o espaço de uma magia de 2º nível ou os espaços de duas magias de 1º nível.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "ladino-acao-ardilosa",
    nome: "Ação Ardilosa",

    origemTipo: "Classe",
    origem: "Ladino",
    especializacao: null,

    nivel: "2",
    tipo: "Característica de Classe",
    acao: "Ação Bônus",
    recurso: null,

    resumo: "<p>Use uma <strong>ação bônus</strong> para <strong>Disparada, Desengajar ou Esconder</strong>.</p>",

    descricao: "<p><strong>AÇÃO ARDILOSA</strong></p><p>A partir do 2º nível, seu pensamento rápido e agilidade faz você se mover e agir rapidamente.</p><p>Você pode usar uma ação bônus durante cada um de seus turnos em combate. Esta ação pode ser usada somente para Disparada, Desengajar ou Esconder.</p>",

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "ladino-ataque-furtivo",
    nome: "Ataque Furtivo",

    origemTipo: "Classe",
    origem: "Ladino",
    especializacao: null,

    nivel: "1",
    tipo: "Característica de Classe",
    acao: "Sem Ação",
    recurso: null,

    resumo: "<p>Uma vez por turno, ao acertar um ataque com <strong>arma de acuidade ou à distância</strong>, você causa <strong>1(1-10)d6</strong> se tiver vantagem. Também pode causar esse dano sem vantagem se outro inimigo do alvo estiver a até <strong>1,5 m</strong> dele, não estiver incapacitado e você não tiver desvantagem. O dano extra aumenta conforme seu nível de ladino.</p>",

    descricao: "<p><strong>ATAQUE FURTIVO</strong></p><p>A partir do 1º nível, você sabe como atacar sutilmente e explorar a distração de seus inimigos.</p><p>Uma vez por turno, você pode adicionar 1d6 nas jogadas de dano contra qualquer criatura que acertar, desde que tenha vantagem nas jogadas de ataque. O ataque deve ser com uma arma de acuidade ou à distância.</p><p>Você não precisa ter vantagem nas jogadas de ataque se outro inimigo do seu alvo estiver a 1,5 metro de distância dele, desde que este inimigo não esteja incapacitado e você não tenha desvantagem nas jogadas de ataque.</p><p>A quantidade de dano extra aumenta conforme você ganha níveis nessa classe, como mostrado na tabela abaixo.</p>",

    tabela: "<table><thead><tr><th>Nível de Ladino</th><th>Dano de Ataque Furtivo</th></tr></thead><tbody><tr><td>1º</td><td>1d6</td></tr><tr><td>2º</td><td>1d6</td></tr><tr><td>3º</td><td>2d6</td></tr><tr><td>4º</td><td>2d6</td></tr><tr><td>5º</td><td>3d6</td></tr><tr><td>6º</td><td>3d6</td></tr><tr><td>7º</td><td>4d6</td></tr><tr><td>8º</td><td>4d6</td></tr><tr><td>9º</td><td>5d6</td></tr><tr><td>10º</td><td>5d6</td></tr><tr><td>11º</td><td>6d6</td></tr><tr><td>12º</td><td>6d6</td></tr><tr><td>13º</td><td>7d6</td></tr><tr><td>14º</td><td>7d6</td></tr><tr><td>15º</td><td>8d6</td></tr><tr><td>16º</td><td>8d6</td></tr><tr><td>17º</td><td>9d6</td></tr><tr><td>18º</td><td>9d6</td></tr><tr><td>19º</td><td>10d6</td></tr><tr><td>20º</td><td>10d6</td></tr></tbody></table>",

    fonte: "Livro do Jogador"
},

{
    id: "guerreiro-surto-de-acao",
    nome: "Surto de Ação",

    origemTipo: "Classe",
    origem: "Guerreiro",
    especializacao: null,

    nivel: "2",
    tipo: "Característica de Classe",
    acao: "Sem Ação",
    recurso: {
        nome: null,
        tipo: "Usos",
        quantidade: 1,
        recuperacao: "Descanso Curto ou Longo"
    },

    resumo: `
    <p>Você pode realizar <strong>uma ação adicional</strong> no seu turno. Uso: <strong>1 vez</strong> por descanso curto ou longo. A partir do 17º nível, pode usar <strong>2 vezes</strong> por descanso, mas apenas uma vez por turno.</p>
`,

    descricao: `
    <p><strong>SURTO DE AÇÃO</strong></p>

    <p>A partir do 2º nível, você pode forçar o seu limite para além do normal por um momento.</p>

    <p>Durante o seu turno, você pode realizar uma ação adicional juntamente com sua ação e possível ação bônus.</p>

    <p>Uma vez que você use essa característica, você precisa terminar um descanso curto ou longo para usá-la de novo.</p>

    <p>A partir do 17º nível, você pode usá-la duas vezes antes do descanso, porém somente uma vez por turno.</p>
`,

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "guerreiro-retomar-o-folego",
    nome: "Retomar o Fôlego",

    origemTipo: "Classe",
    origem: "Guerreiro",
    especializacao: null,

    nivel: "1",
    tipo: "Característica de Classe",
    acao: "Ação Bônus",
    recurso: {
        nome: null,
        tipo: "Usos",
        quantidade: 1,
        recuperacao: "Descanso Curto ou Longo"
    },

    resumo: `
    <p><strong>Ação bônus:</strong> você recupera <strong>1d10 + seu nível de guerreiro</strong> pontos de vida. Depois de usar, precisa terminar um <strong>descanso curto ou longo</strong> para usar novamente.</p>
`,

    descricao: `
    <p><strong>RETOMAR O FÔLEGO</strong></p>

    <p>Você possui uma reserva de estamina e pode usá-la para proteger a si mesmo contra danos.</p>

    <p>No seu turno, você pode usar uma ação bônus para recuperar pontos de vida igual a <strong>1d10 + seu nível de guerreiro</strong>.</p>

    <p>Uma vez que você use essa característica, você precisa terminar um descanso curto ou longo para usá-la de novo.</p>
`,

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "druida-circulo-terra-truque-adicional",
    nome: "Truque Adicional",

    origemTipo: "Classe",
    origem: "Druida",
    especializacao: "Círculo da Terra",

    nivel: "2º",
    tipo: "Característica de Subclasse",
    acao: "Passiva",
    recurso: null,

    resumo: `
            <p>Você aprende <strong>um truque de druida adicional</strong> à sua escolha.</p>
        `,

    descricao: `
            <p><strong>TRUQUE ADICIONAL</strong></p>

            <p>Quando você escolhe esse círculo no 2° nível, você aprende um truque de druida adicional, à sua escolha.</p>
        `,

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "druida-forma-selvagem",
    nome: "Forma Selvagem",

    origemTipo: "Classe",
    origem: "Druida",
    especializacao: null,

    nivel: "2º",
    tipo: "Característica de Classe",
    acao: "Ação",
    recurso: {
        nome: null,
        tipo: "Usos",
        quantidade: 2,
        recuperacao: "Descanso Curto ou Longo"
    },

    resumo: `
            <p><strong>Ação:</strong> você pode se transformar magicamente em uma <strong>besta que já tenha visto</strong>. Você pode usar essa característica <strong>2 vezes</strong> e recupera os usos ao terminar um descanso curto ou longo. A forma dura por até <strong>metade do seu nível de druida em horas</strong> e pode ser encerrada com uma ação bônus. No 2º nível, pode assumir formas de <strong>ND 1/4 ou inferior</strong>, sem deslocamento de voo ou natação.</p>

            <p>Ao se transformar, você usa as estatísticas da besta, mas mantém sua tendência, personalidade e valores de Inteligência, Sabedoria e Carisma. Você assume os pontos de vida e Dados de Vida da besta e retorna aos seus pontos de vida anteriores ao reverter. Você não pode conjurar magias nem falar, salvo se a forma permitir, mas mantém sua concentração e características que a nova forma seja capaz de usar.</p>
        `,

    descricao: `
            <p><strong>FORMA SELVAGEM</strong></p>

            <p>A partir do 2° nível, você pode usar sua ação para assumir magicamente a forma de uma besta que você já tenha visto antes.</p>

            <p>Você pode usar essa característica duas vezes. Você recupera os usos quando termina um descanso curto ou longo.</p>

            <p>Seu nível de druida determina as bestas em que você pode se transformar, como mostrado na tabela <strong>Formas de Besta</strong>.</p>

            <p>Você pode continuar na forma de besta por um número de horas igual à metade do seu nível de druida (arredondado para baixo). Então, você volta a sua forma original, a não ser que você gaste outro uso dessa característica.</p>

            <p>Você pode reverter a sua forma normal prematuramente usando uma ação bônus no seu turno. Você reverte automaticamente se cair inconsciente, cair a 0 pontos de vida ou morrer.</p>

            <p>Enquanto estiver transformado, as seguintes regras se aplicam:</p>

            <ul>
                <li>Suas estatísticas de jogo são substituídas pelas estatísticas da besta, mas você mantém sua tendência, personalidade e valores de Inteligência, Sabedoria e Carisma.</li>

                <li>Você mantém suas proficiências em todas as suas perícias e testes de resistência, além de receber as proficiências da criatura. Se a criatura possuir a mesma proficiência que você e o bônus no bloco de estatística dela for maior que o seu, você usará o bônus da criatura no lugar do seu.</li>

                <li>Se a criatura possuir qualquer ação lendária ou de covil, você não pode usá-las.</li>

                <li>Quando você se transforma, você assume os pontos de vida e Dados de Vida da criatura. Quando você reverte a sua forma normal, você retorna ao número de pontos de vida que tinha antes de se transformar.</li>

                <li>Se você reverter como resultado de ter caído a 0 pontos de vida, todo o dano excedente será transferido para a sua forma normal. Por exemplo, se você sofrer 10 pontos de dano em forma animal e tiver apenas 1 ponto de vida restante, você reverte e sofre 9 de dano.</li>

                <li>Você não pode conjurar magias e sua capacidade de fala ou de realizar qualquer ação que requeira mãos são limitadas pelas capacidades da forma da besta que você assumiu.</li>

                <li>Transformar-se não interrompe sua concentração em uma magia que você já tenha conjurado, nem previne você de realizar ações que são parte da conjuração, como convocar relâmpagos que você já tenha conjurado.</li>

                <li>Você mantém os benefícios de todas as características de classe, raça ou outras fontes, e pode usá-las caso a nova forma seja fisicamente capaz de fazê-lo.</li>

                <li>Você não pode usar qualquer dos seus sentidos especiais, como visão no escuro, a não ser que a sua nova forma também tenha esse sentido.</li>

                <li>Você pode escolher se o seu equipamento cai no chão no seu espaço, é assimilado a sua nova forma ou é usado por ela. Equipamentos vestidos e carregados funcionam normalmente, mas o Mestre decide qual equipamento é viável para a nova forma vestir ou usar, baseado na forma e tamanho da criatura.</li>

                <li>O seu equipamento não muda de forma ou tamanho para se adaptar à nova forma. Qualquer equipamento que a nova forma não possa vestir deve cair no chão ou ser assimilado por ela. Equipamentos assimilados não terão efeito até você deixar a forma.</li>
            </ul>
        `,

    tabela: `
            <table>
                <thead>
                    <tr>
                        <th>Nível</th>
                        <th>ND Máx.</th>
                        <th>Limitações</th>
                        <th>Exemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2°</td>
                        <td>1/4</td>
                        <td>Sem deslocamento de voo ou natação</td>
                        <td>Lobo</td>
                    </tr>
                    <tr>
                        <td>4°</td>
                        <td>1/2</td>
                        <td>Sem deslocamento de voo</td>
                        <td>Crocodilo</td>
                    </tr>
                    <tr>
                        <td>8°</td>
                        <td>1</td>
                        <td>—</td>
                        <td>Águia gigante</td>
                    </tr>
                </tbody>
            </table>
        `,

    fonte: "Livro do Jogador"
},

{
    id: "clerigo-dominio-vida-canalizar-divindade-preservar-a-vida",
    nome: "Canalizar Divindade: Preservar a Vida",

    origemTipo: "Classe",
    origem: "Clérigo",
    especializacao: "Domínio da Vida",

    nivel: "2º",
    tipo: "Característica de Subclasse",
    acao: "Ação",
    recurso: {
        nome: "Canalizar Divindade",
        tipo: null,
        quantidade: null,
        recuperacao: null
    },

    resumo: `
            <p><strong>Ação:</strong> escolha quaisquer criaturas a até 9 metros de você e distribua entre elas um total de pontos de vida igual a <strong>5 × seu nível de clérigo</strong>. Cada criatura só pode ser curada até atingir <strong>metade do máximo de seus pontos de vida</strong>. Não afeta <strong>mortos-vivos ou constructos</strong>.</p>
        `,

    descricao: `
            <p><strong>CANALIZAR DIVINDADE: PRESERVAR A VIDA</strong></p>

            <p>A partir do 2º nível, você pode usar seu Canalizar Divindade para curar os feridos.</p>

            <p>Como uma ação, você usa seu símbolo sagrado para invocar energia que pode recuperar um total de <strong>5 vezes seu nível de clérigo</strong> em pontos de vida.</p>

            <p>Você escolhe quaisquer criaturas a até 9 metros de você e divide esses pontos entre elas.</p>

            <p>Essa característica só pode curar as criaturas a até metade de seu máximo de pontos de vida.</p>

            <p>Você não pode usar essa característica em um morto-vivo ou constructo.</p>
        `,

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "clerigo-dominio-vida-discipulo-da-vida",
    nome: "Discípulo da Vida",

    origemTipo: "Classe",
    origem: "Clérigo",
    especializacao: "Domínio da Vida",

    nivel: "1º",
    tipo: "Característica de Subclasse",
    acao: "Passiva",
    recurso: null,

    resumo: `
            <p>Sempre que você conjurar uma <strong>magia de cura</strong> que recupere pontos de vida, o alvo recupera <strong>2 + o nível da magia</strong> pontos de vida adicionais.</p>
        `,

    descricao: `
            <p><strong>DISCÍPULO DA VIDA</strong></p>

            <p>Também no 1º nível, suas magias de cura são mais efetivas.</p>

            <p>Sempre que você conjurar uma magia de cura para recuperar pontos de vida, o alvo daquela magia recupera pontos de vida adicionais iguais a <strong>2 + nível da magia</strong>.</p>
        `,

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "clerigo-dominio-vida-proficiencia-adicional",
    nome: "Proficiência Adicional",

    origemTipo: "Classe",
    origem: "Clérigo",
    especializacao: "Domínio da Vida",

    nivel: "1º",
    tipo: "Característica de Subclasse",
    acao: "Passiva",
    recurso: null,

    resumo: `
            <p>Você ganha <strong>proficiência com armaduras pesadas</strong>.</p>
        `,

    descricao: `
            <p><strong>PROFICIÊNCIA ADICIONAL</strong></p>

            <p>Quando você escolhe este domínio no 1º nível, você ganha proficiência com armaduras pesadas.</p>
        `,

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "clerigo-canalizar-divindade-expulsar-mortos-vivos",
    nome: "Canalizar Divindade: Expulsar Mortos-Vivos",

    origemTipo: "Classe",
    origem: "Clérigo",
    especializacao: null,

    nivel: "2º",
    tipo: "Característica de Classe",
    acao: "Ação",
    recurso: {
        nome: "Canalizar Divindade",
        tipo: null,
        quantidade: null,
        recuperacao: null
    },

    resumo: `
            <p><strong>Ação:</strong> cada morto-vivo que possa ver ou ouvir você em um raio de 9 metros deve realizar um teste de resistência de Sabedoria. Em uma falha, a criatura fica <strong>expulsa por 1 minuto</strong> ou até sofrer dano. Enquanto estiver expulsa, ela deve fugir, não pode se aproximar voluntariamente a menos de 9 metros de você, não pode usar reações e só pode realizar <strong>Disparada</strong>, tentar escapar de um efeito que impeça seu movimento ou, se não puder fugir, <strong>Esquivar</strong>.</p>
        `,

    descricao: `
            <p><strong>CANALIZAR DIVINDADE: EXPULSAR MORTOS-VIVOS</strong></p>

            <p>Usando uma ação, você levanta seu símbolo sagrado e murmura uma prece repreendendo os mortos-vivos.</p>

            <p>Cada morto-vivo que puder ver ou ouvir você em um raio de 9 metros a partir de você, deve fazer um teste de resistência de Sabedoria. Se falhar, a criatura está expulsa por 1 minuto ou até sofrer algum dano.</p>

            <p>Uma criatura expulsa deve usar seu turno para fugir da melhor forma possível e de forma alguma pode aproximar-se a mais de 9 metros de você por vontade própria. Ela também não pode usar reações.</p>

            <p>Como uma ação, a criatura pode apenas realizar uma Disparada ou tentar escapar de um efeito que a impeça de se mover. Se não há lugar para ir, a criatura pode usar a ação Esquivar.</p>
        `,

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "bruxo-patrono-arquifada-presenca-feerica",
    nome: "Presença Feérica",

    origemTipo: "Classe",
    origem: "Bruxo",
    especializacao: "Patrono Arquifada",

    nivel: "1º",
    tipo: "Característica de Subclasse",
    acao: "Ação",
    recurso: {
        nome: null,
        tipo: "Usos",
        quantidade: 1,
        recuperacao: "Descanso Curto ou Longo"
    },

    resumo: `
            <p><strong>Ação:</strong> cada criatura à sua escolha em um cubo de 3 metros centrado em você deve realizar um teste de resistência de Sabedoria contra a CD das suas magias de bruxo. Em uma falha, você escolhe se a criatura fica <strong>enfeitiçada</strong> ou <strong>amedrontada</strong> por você até o início do seu próximo turno. Depois de usar, você precisa terminar um <strong>descanso curto ou longo</strong> para usar novamente.</p>
        `,

    descricao: `
            <p><strong>PRESENÇA FEÉRICA</strong></p>

            <p>A partir do 1° nível, seu patrono concede a você a habilidade de projetar a sedução e temeridade da presença da fada.</p>

            <p>Com uma ação, você pode fazer com que cada criatura num cubo de 3 metros centrado em você, faça um teste de resistência de Sabedoria com uma CD igual a de sua magia de bruxo.</p>

            <p>As criaturas que falharem no teste ficaram <strong>enfeitiçadas</strong> ou <strong>amedrontadas</strong> por você (à sua escolha) até o início do seu próximo turno.</p>

            <p>Quando você usar essa característica, você não poderá utilizá-la novamente antes de realizar um descanso curto ou longo.</p>
        `,

    tabela: null,

    fonte: "Livro do Jogador"
},

{
    id: "barbaro-furia",
    nome: "Fúria",

    origemTipo: "Classe",
    origem: "Bárbaro",
    especializacao: null,

    nivel: "1º - 20º",
    tipo: "Característica de Classe",
    acao: "Ação Bônus",
    recurso: {
        nome: "Fúrias",
        tipo: "Usos",
        recuperacao: "Descanso Longo",
        progressao: {
            "1": 2,
            "3": 3,
            "6": 4,
            "12": 5,
            "17": 6
        }
    },

    resumo: `
            <p>Você entra em uma fúria primitiva como ação bônus, recebendo vantagem em testes e resistências de Força, bônus de dano com ataques corpo a corpo usando Força e resistência a dano de concussão, cortante e perfurante.</p>
        `,

    descricao: `
            <p><strong>FÚRIA</strong></p>

            <p>Em batalha, você luta com uma ferocidade primitiva. No seu turno, você pode entrar em fúria com uma ação bônus.</p>

            <p>Enquanto estiver em fúria, você recebe os seguintes benefícios se você não estiver vestindo uma armadura pesada:</p>

            <ul>
                <li>Você tem vantagem em testes de Força e testes de resistência de Força.</li>

                <li>Quando você desferir um ataque com arma corpo a corpo usando Força, você recebe um bônus nas jogadas de dano que aumenta à medida que você adquire níveis de bárbaro, como mostrado na coluna <strong>Dano de Fúria</strong> na tabela abaixo.</li>

                <li>Você possui resistência contra dano de concussão, cortante e perfurante.</li>
            </ul>

            <p>Se você for capaz de conjurar magias, você não poderá conjurá-las ou se concentrar nelas enquanto estiver em fúria.</p>

            <p>Sua fúria dura por 1 minuto. Ela termina prematuramente se você cair inconsciente ou se seu turno acabar e você não tiver atacado nenhuma criatura hostil desde seu último turno ou não tiver sofrido dano nesse período.</p>

            <p>Você também pode terminar sua fúria no seu turno com uma ação bônus.</p>

            <p>Quando você tiver usado a quantidade de fúrias mostrada para o seu nível de bárbaro na coluna <strong>Fúrias</strong> da tabela abaixo, você precisará terminar um descanso longo antes de poder entrar em fúria novamente.</p>
        `,

    tabela: `
            <table>
                <thead>
                    <tr>
                        <th>Nível de Bárbaro</th>
                        <th>Fúrias</th>
                        <th>Dano de Fúria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1°</td><td>2</td><td>+2</td></tr>
                    <tr><td>2°</td><td>2</td><td>+2</td></tr>
                    <tr><td>3°</td><td>3</td><td>+2</td></tr>
                    <tr><td>4°</td><td>3</td><td>+2</td></tr>
                    <tr><td>5°</td><td>3</td><td>+2</td></tr>
                    <tr><td>6°</td><td>4</td><td>+2</td></tr>
                    <tr><td>7°</td><td>4</td><td>+2</td></tr>
                    <tr><td>8°</td><td>4</td><td>+2</td></tr>
                    <tr><td>9°</td><td>4</td><td>+3</td></tr>
                    <tr><td>10°</td><td>4</td><td>+3</td></tr>
                    <tr><td>11°</td><td>4</td><td>+3</td></tr>
                    <tr><td>12°</td><td>5</td><td>+3</td></tr>
                    <tr><td>13°</td><td>5</td><td>+3</td></tr>
                    <tr><td>14°</td><td>5</td><td>+3</td></tr>
                    <tr><td>15°</td><td>5</td><td>+3</td></tr>
                    <tr><td>16°</td><td>5</td><td>+4</td></tr>
                    <tr><td>17°</td><td>6</td><td>+4</td></tr>
                    <tr><td>18°</td><td>6</td><td>+4</td></tr>
                    <tr><td>19°</td><td>6</td><td>+4</td></tr>
                    <tr><td>20°</td><td>6</td><td>+4</td></tr>
                </tbody>
            </table>
        `,

    fonte: "Livro do Jogador"
},

{
    id: "bardo-inspiracao-de-bardo",
    nome: "Inspiração de Bardo",

    origemTipo: "Classe",
    origem: "Bardo",
    especializacao: null,

    nivel: "1º - 20º",
    tipo: "Característica de Classe",
    acao: "Ação Bônus",
    recurso: {
        nome: null,
        tipo: "Usos",
        quantidade: "Modificador de Carisma, mínimo 1",
        recuperacao: "Descanso Longo"
    },

    resumo: `
            <p>Você pode inspirar uma criatura que possa ouvi-lo, concedendo um dado de Inspiração de Bardo (d6) que pode ser adicionado a um teste de habilidade, jogada de ataque ou teste de resistência.</p>
        `,

    descricao: `
            <p><strong>INSPIRAÇÃO DE BARDO</strong></p>

            <p>Você pode inspirar os outros através de palavras animadoras ou música. Para tanto, você usa uma ação bônus no seu turno para escolher uma outra criatura, que não seja você mesmo, a até 18 metros de você que possa ouvi-lo. Essa criatura ganha um dado de Inspiração de Bardo, um d6.</p>

            <p>Uma vez, nos próximos 10 minutos, a criatura poderá rolar o dado e adicionar o valor rolado a um teste de habilidade, jogada de ataque ou teste de resistência que ela fizer. A criatura pode esperar até rolar o d20 antes de decidir usar o dado de Inspiração de Bardo, mas deve decidir antes do Mestre dizer se a rolagem foi bem ou mal sucedida.</p>

            <p>Quando o dado de Inspiração de Bardo for rolado, ele é gasto. Uma criatura pode ter apenas um dado de Inspiração de Bardo por vez.</p>

            <p>Você pode usar essa característica um número de vezes igual ao seu modificador de Carisma (no mínimo uma vez). Você recupera todos os usos quando termina um descanso longo.</p>

            <p>Seu dado de Inspiração de Bardo muda quando você atinge certos níveis na classe. O dado se torna um d8 no 5° nível, um d10 no 10° nível e um d12 no 15° nível.</p>
        `,

    tabela: `
            <table>
                <thead>
                    <tr>
                        <th>Nível de Bardo</th>
                        <th>Dado de Inspiração</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1°–4°</td><td>d6</td></tr>
                    <tr><td>5°–9°</td><td>d8</td></tr>
                    <tr><td>10°–14°</td><td>d10</td></tr>
                    <tr><td>15°–20°</td><td>d12</td></tr>
                </tbody>
            </table>
        `,

    fonte: "Livro do Jogador"
},

{
    id: "teste-exemplo-sistema",
    nome: "Exemplo de Teste do Sistema",

    origemTipo: "Outro",
    origem: "Teste",
    especializacao: null,

    nivel: "—",
    tipo: "Outro",
    acao: null,
    recurso: null,

    resumo: `
            <p>Este é o resumo curto: aparece sempre visível no card, antes de abrir o texto completo.</p>
        `,

    descricao: `
            <p>Este é o texto completo (a "descrição"), escondido por padrão e revelado ao clicar em "Ler Texto do Livro 🔽".</p>
            <p>Ele aceita <strong>negrito</strong>, <em>itálico</em> e listas:</p>
            <ul>
                <li>Primeiro ponto de exemplo.</li>
                <li>Segundo ponto de exemplo.</li>
            </ul>
        `,

    tabela: `
            <table>
                <thead>
                    <tr><th>Coluna A</th><th>Coluna B</th></tr>
                </thead>
                <tbody>
                    <tr><td>Linha 1</td><td>+2</td></tr>
                    <tr><td>Linha 2</td><td>+4</td></tr>
                </tbody>
            </table>
        `,

    fonte: "Dado de Teste — Gerado pelo Sistema"
}
];
