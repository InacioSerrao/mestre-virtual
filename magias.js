// Banco de Dados de Magias
const magiasData = [
{
    nome: "Disfarçar-se",
    nivel: "1° Círculo",
    escola: "Ilusão",
    classes: "Artífice, Bardo, Feiticeiro, Mago",
    tempo: "Uma Ação",
    alcance: "Pessoal",
    componentes: "V, S",
    duracao: "1 hora",
    resumo: `
        <p>Você altera magicamente sua aparência, incluindo <strong style="color:#CE93D8;">roupas, armadura, armas e pertences</strong>, podendo parecer até <strong style="color:#FFD54F;">30 cm mais baixo ou mais alto</strong> e mais magro ou gordo.</p>

        <p>A ilusão não resiste a uma <strong style="color:#EF9A9A;">inspeção física</strong>. Uma criatura pode usar uma ação para investigar seu disfarce e realizar um teste de <strong style="color:#81D4FA;">Inteligência (Investigação)</strong> contra a CD da sua magia.</p>
    `,
    descricao: "<p>Você faz com que você mesmo — incluindo suas roupas, armadura, armas e outros pertences no seu personagem — pareça diferente até a magia acabar ou até você usar sua ação para dispensá-la.</p><p>Você pode se parecer 30 centímetros mais baixo ou mais alto, e pode parecer magro, gordo ou entre ambos. Você não pode mudar o tipo do seu corpo, portanto, deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da sua ilusão cabe a você.</p><p>As mudanças criadas por essa magia não conseguem se sustentar perante uma inspeção física. Por exemplo, se você usar essa magia para adicionar um chapéu ao seu visual, objetos que passarem pelo chapéu e qualquer um que tocá-lo não sentirão nada ou sentirão sua cabeça e cabelo. Se você usar essa magia para aparentar ser mais magro do que é, a mão de alguém que a erguer para tocar em você irá esbarrar em você enquanto ele aparentemente está no ar.</p><p>Para perceber que você está disfarçado, uma criatura pode usar a ação dela para inspecionar sua aparência e deve ser bem-sucedida em um teste de Inteligência (Investigação) contra a CD da sua magia.</p>",
    fonte: ""
},
{
    nome: "Detectar o Bem e Mal",
    nivel: "1° Círculo",
    escola: "Adivinhação",
    classes: "Clérigo, Paladino",
    tempo: "Uma Ação",
    alcance: "Pessoal",
    componentes: "V, S",
    duracao: "Concentração, Até 10 minutos",
    resumo: `
        <p>Detecta a presença e localização de <strong style="color:#CE93D8;">aberrações, celestiais, corruptores, elementais, fadas e mortos-vivos</strong> a até 9m, além de locais ou objetos magicamente consagrados ou profanados.</p>
    `,
    descricao: "<p>Pela duração, você sabe se existe uma aberração, celestial, corruptor, elemental, fada ou morto-vivo, a até 9 metros de você, assim como onde a criatura está localizada. Similarmente, você sabe se existe um local ou objeto, a até 9 metros de você, que tenha sido consagrado ou profanado magicamente.</p><p>A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2,5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.</p>",
    fonte: ""
},
{
    nome: "Destruição Trovejante",
    nivel: "1° Círculo",
    escola: "Evocação",
    classes: "Paladino",
    tempo: "Uma Ação Bônus",
    alcance: "Pessoal",
    componentes: "V",
    duracao: "Concentração, Até 1 minuto",
    resumo: `
        <p>Seu próximo ataque corpo-a-corpo causa <strong style="color:#81D4FA;">2d6 de dano trovejante extra</strong> e pode <strong style="color:#FFD54F;">empurrar o alvo 3m e derrubá-lo</strong> se ele falhar em um TR de Força.</p>
    `,
    descricao: "<p>Da primeira vez que você atingir um ataque corpo-a-corpo com arma enquanto essa magia durar, sua arma é rodeada por trovões que são audíveis a até 90 metros de você e o ataque causa 2d6 de dano trovejante extra no alvo.</p><p>Além disso, se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força ou será empurrado 3 metros para longe de você e cairá no chão.</p>",
    fonte: ""
},
{
    nome: "Estrondo do Esqueleto",
    nivel: "1° Círculo",
    escola: "Evocação",
    classes: "Paladino",
    tempo: "Uma Ação",
    alcance: "raio de 4,5m",
    componentes: "V, S, M",
    duracao: "1 rodada",
    resumo: `
        <p>Emite uma <strong style="color:#81D4FA;">onda sonora intimidadora</strong>. Criaturas próximas fazem um TR de Constituição ou sofrem <strong style="color:#EF9A9A;">2d6 de dano trovejante</strong>, ficam <strong style="color:#FFD54F;">Surdas</strong>.</p>
    `,
    descricao: "<p>Você bate contra seu escudo repetidas vezes, emitindo uma onda de som rítmica, absurdamente alta e intimidadora. Cada criatura num raio de 4,5 metros de você deve fazer um TR de Constituição.</p><p>Num fracasso, a criatura sofre 2d6 de dano trovejante, fica <strong>Surda</strong> e tem desvantagem no próximo ataque que fizer contra qualquer criatura que não seja você até o fim da próxima rodada.</p>",
    fonte: ""
},
{
    nome: "Comando",
    nivel: "1° Círculo",
    escola: "Encantamento",
    classes: "Clérigo, Paladino",
    tempo: "Uma Ação",
    alcance: "18m",
    componentes: "V",
    duracao: "1 rodada",
    resumo: `
        <p>Força uma criatura a obedecer a um <strong style="color:#FFD54F;">comando simples</strong> no próximo turno se falhar em um teste de Sabedoria. O comando não pode ser diretamente nocivo.</p>
    `,
    descricao: "<p>Você pronuncia uma palavra de comando para uma criatura que você possa ver dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou seguirá seu comando no próximo turno dele. A magia não tem efeito se o alvo for um morto-vivo, se ele não entender seu idioma ou se o comando for diretamente nocivo a ele.</p><p>Alguns comandos típicos incluem: <strong>Aproxime-se.</strong> O alvo se move para próximo de você o máximo que puder pela rota mais direta, terminando seu turno se chegar a até 1,5 metro de você. <strong>Largue.</strong> O alvo larga o que estiver segurando e termina seu turno. <strong>Fuja.</strong> O alvo gasta seu turno se movendo para longe de você da forma mais rápida que puder. <strong>Deite-se.</strong> O alvo se deita no chão e termina seu turno. <strong>Parado.</strong> O alvo não se move e não realiza nenhuma ação. Uma criatura voadora continua no alto, movendo-se apenas o necessário para permanecer no ar.</p><p>Você pode proferir um comando diferente dos descritos. Se o fizer, o Mestre determina como o alvo reage. Se o alvo não puder cumprir o comando, a magia termina.</p><p><strong>Em Níveis Superiores.</strong> Ao conjurar essa magia usando um espaço de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível acima do 1°. As criaturas devem estar a até 9 metros umas das outras.</p>",
    fonte: ""
},
{
    nome: "Auxílio Divino",
    nivel: "1° Círculo",
    escola: "Evocação",
    classes: "Paladino",
    tempo: "Uma Ação Bônus",
    alcance: "Pessoal",
    componentes: "V, S",
    duracao: "Concentração, Até 1 minuto",
    resumo: `
        <p>Fortalece seus ataques com <strong style="color:#FFD54F;">1d4 de dano radiante extra</strong> até o fim da magia.</p>
    `,
    descricao: "<p>Sua oração fortalece você com radiação divina. Até o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra ao atingirem.</p>",
    fonte: ""
},
{
    nome: "Rajada Mística",
    nivel: "Truque",
    escola: "Evocação",
    classes: "Bruxo",
    tempo: "Uma Ação",
    alcance: "36m",
    componentes: "V, S",
    duracao: "Instantânea",
    resumo: `
        <p>Dispara um feixe de energia, causando <strong style="color:#EF9A9A;">1d10 de dano de energia</strong> se acertar. Em níveis superiores, cria mais feixes, cada um com uma jogada de ataque separada.</p>
    `,
    descricao: "<p>Um feixe de energia crepitante vai em direção a uma criatura dentro do alcance. Realize uma jogada de ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de energia.</p><p>A magia cria mais de um feixe quando você alcança níveis elevados: dois feixes no 5° nível, três feixes no 11° nível e quatro feixes no 17° nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Realize jogadas de ataque separadas para cada feixe.</p>",
    fonte: ""
},
{
    nome: "Sono",
    nivel: "1° Círculo",
    escola: "Encantamento",
    classes: "Bardo, Feiticeiro, Mago, Bruxo Subclassse",
    tempo: "Uma Ação",
    alcance: "36m",
    componentes: "V, S, M (um punhado de areia fina, pétalas de rosas ou um grilo)",
    duracao: "Até 1 minuto",
    resumo: `
        <p>Coloca criaturas em <strong style="color:#81D4FA;">sono mágico</strong> dentro de uma área de 6m, começando pelas que têm menos pontos de vida. Jogue <strong style="color:#FFD54F;">5d8</strong> para determinar quantos PV podem ser afetados.</p>
    `,
    descricao: "<p>Essa magia põem as criaturas num entorpecimento mágico. Jogue 5d8; o total é a quantidade de pontos de vida de criaturas afetados pela magia. As criaturas numa área de 6 metros de raio, centrada no ponto escolhido, dentro do alcance, são afetadas em ordem ascendente dos pontos de vida atuais delas, ignorando criaturas inconscientes.</p><p>Começando com as criaturas com menos pontos de vida atuais, cada criatura afetada por essa magia cai inconsciente até a magia acabar, sofrer dano ou alguém usar sua ação para sacudi-la ou esbofeteá-la até acordar. Subtraia os pontos de vida de cada criatura do total antes de seguir para a próxima criatura com menos pontos de vida atuais. Os pontos de vida atuais da criatura devem ser iguais ou menores que o valor restante para que a criatura possa ser afetada.</p><p>Mortos-vivos e criaturas imunes a serem enfeitiçadas não são afetadas por essa magia.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, jogue 2d8 adicionais para cada nível do espaço acima do 1°.</p>",
    fonte: ""
},

    {
    nome: "Bruxaria",
    nivel: "1° Círculo",
    escola: "Encantamento",
    classes: "Bruxo",
    tempo: "Uma Ação Bônus",
    alcance: "18m",
    componentes: "V, S, M (o olho petrificado de um tritão)",
    duracao: "Concentração, Até 1 hora",
    resumo: `
    <p>Amaldiçoa uma criatura, causando <strong style="color:#EF9A9A;">1d6 de dano necrótico extra</strong> ao acertá-la e dando <span style="color:#FFD54F;">desvantagem</span> em testes de uma habilidade escolhida. Se o Alvo cair antes do fim da magia, você pode usar uma ação bônus para amaldiçoar outra criatura </p>
`,
    descricao: "<p>Você coloca uma maldição em uma criatura que você possa ver, dentro do alcance. Até a magia acabar, você causa 1d6 de dano necrótico extra no alvo sempre que atingi-lo com um ataque. Além disso, escolha uma habilidade quando você conjurar a magia. O alvo tem desvantagem em testes de habilidade feitos com a habilidade escolhida.</p><p>Se o alvo cair a 0 pontos de vida antes da magia acabar, você pode usar uma ação bônus, em um turno subsequente, para amaldiçoar outra criatura.</p><p>Uma magia remover maldição conjurada no alvo acaba com a magia prematuramente.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 3° ou 4° nível, você poderá manter sua concentração na magia por até 8 horas. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas.</p>",
    fonte: ""
},


    {
        nome: "Acalmar Emoções",
        nivel: "2° Círculo",
        escola: "Encantamento",
        classes: "Bardo, Clérigo",
        tempo: "Uma Ação",
        alcance: "18m",
        componentes: "V, S",
        duracao: "Concentração, Até 1 minuto",
        resumo: `
            <p>Humanoides em uma esfera de <span style="color:#4FC3F7;">6 m de raio</span> fazem um <span style="color:#FFD54F;">teste de Carisma</span> (podem falhar voluntariamente). Em caso de falha, escolha:</p>

<p><strong style="color:#81C784;">Suprimir:</strong> remove temporariamente <span style="color:#CE93D8;">medo ou encantamento</span>. O efeito retorna ao fim da magia, se ainda durar.</p>

<p><strong style="color:#81C784;">Indiferença:</strong> fica indiferente a criaturas hostis escolhidas. Termina se for <span style="color:#EF9A9A;">atacado, ferido por magia ou vir um aliado ser ferido</span>. Ao fim, volta a ser hostil, salvo decisão do Mestre.</p>
        `,
        descricao: "<p>Você tenta suprimir emoções fortes em um grupo de pessoas. Cada humanoide em uma esfera de 6 metros de raio, centrada em um ponto que você escolher dentro do alcance, deve realizar um teste de resistência de Carisma;uma criatura pode escolher falhar nesse teste, se desejar.Se uma criatura falhar na resistência, escolha um dentre os dois efeitos a seguir.</p><p>Você pode suprimir qualquer efeito que esteja deixando a criatura enfeitiçada ou amedrontada. Quando essa magia terminar, qualquer efeito suprimido volta a funcionar, considerando que sua duração não tenha acabado nesse meio tempo.</p><p>Alternativamente, você pode tornar um alvo indiferente às criaturas que você escolher que forem hostis a ele. Essa indiferença acaba se o alvo for atacado ou ferido por uma magia ou se ele testemunhar qualquer dos seus amigos sendo ferido. Quando a magia terminar, a criatura se tornará hostil novamente, a não ser que o Mestre diga o contrário.</p>",
        fonte: "Livro do Jogador p. 215"
    },
    {
nome: "Adivinhação",
nivel: "4° Círculo (ritual)",
escola: "Adivinhação",
classes: "Clérigo",
tempo: "1 ação",
alcance: "Pessoal",
componentes: "V, S, M (incenso e oferenda de 25 po, consumidos)",
duracao: "Instantânea",
resumo: `
    <p>Faça uma pergunta para um deus ou servo divino sobre um objetivo, evento ou atividade que ocorrerá em até <span style="color:#4FC3F7;">7 dias</span>. O Mestre fornece uma resposta confiável, em <span style="color:#FFD54F;">frase curta, rima enigmática ou presságio</span>.</p>
    <p>Se conjurada novamente antes do próximo descanso longo, cada uso após o primeiro tem <span style="color:#EF9A9A;">25% de chance cumulativa</span> de produzir um resultado aleatório.</p>
    `,
descricao: "<p>Sua magia e uma oferenda colocam você em contato com um deus ou servo divino. Você faz uma única pergunta a respeito de um objetivo, evento ou atividade específico que irá ocorrer dentro de 7 dias. O Mestre oferece uma resposta confiável. A resposta deve ser uma frase curta, uma rima enigmática ou um presságio.</p><p>A magia não leva em consideração qualquer possível circunstância que possa mudar o que está por vir, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro.</p><p>Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente</p>",
fonte: ""
},
{
nome: "Escudo da Fé",
nivel: "1° círculo",
escola: "Abjuração",
classes: "Clérigo, Paladino",
tempo: "1 ação bônus",
alcance: "18 metros",
componentes: "V, S, M (um pequeno pergaminho com textos sagrados)",
duracao: "Concentração, até 10 minutos",
resumo: `
    <p>Uma criatura à sua escolha recebe <span style="color:#4FC3F7;">+2 de bônus na CA</span> pela duração.</p>
    `,
descricao: "<p>Um campo cintilante aparece ao redor de uma criatura, à sua escolha, dentro do alcance, concedendo +2 de bônus na CA pela duração.</p>",
fonte: ""
},
{
nome: "Raio de Gelo",
nivel: "Truque",
escola: "Evocação",
classes: "Artífice, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "18 metros",
componentes: "V, S",
duracao: "Instantânea",
resumo: `
    <p>Faça um <span style="color:#FFD54F;">ataque mágico à distância</span>. Se atingir, causa <span style="color:#81D4FA;">1d8 de dano de frio</span> e reduz o deslocamento do alvo em <span style="color:#4FC3F7;">3 m</span> até o início do seu próximo turno.</p>
    <p>O dano aumenta para <span style="color:#81D4FA;">2d8</span> no 5° nível, <span style="color:#81D4FA;">3d8</span> no 11° e <span style="color:#81D4FA;">4d8</span> no 17°.</p>
    `,
descricao: "<p>Um raio frígido de luz azul-clara parte em direção de uma criatura dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, ele sofre 1d8 de dano de frio e seu deslocamento é reduzido em 3 metros até o começo do seu próximo turno.</p><p>O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).</p>",
fonte: ""
},

{
nome: "Raio de Bruxa",
nivel: "1° círculo",
escola: "Evocação",
classes: "Bruxo, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V, S, M (galho de árvore atingida por um relâmpago)",
duracao: "Concentração, até 1 minuto",
resumo: `
    <p>Faça um <span style="color:#FFD54F;">ataque mágico à distância</span>. Se atingir, causa <span style="color:#81D4FA;">1d12 de dano elétrico</span> e você pode usar sua ação a cada turno para causar mais 1d12 automaticamente.</p>
    <p>A magia termina se usar sua ação para outra coisa, se o alvo sair do alcance ou tiver <span style="color:#EF9A9A;">cobertura total</span>. Em círculos superiores, o <span style="color:#81D4FA;">dano inicial</span> aumenta em 1d12 por círculo acima do 1°.</p>
    `,
descricao: "<p>Um raio crepitante de energia azul é arremessado em uma criatura dentro do alcance, formando um arco elétrico contínuo entre você e o alvo. Faça um ataque à distância com magia contra a criatura. Se atingir, o alvo sofrerá 1d12 de dano elétrico e, em cada um dos seus turnos, pela duração, você pode usar sua ação para causar 1d12 de dano elétrico ao alvo, automaticamente.</p><p>A magia acaba se você usar sua ação para fazer qualquer outra coisa. A magia também acaba se o alvo estiver fora do alcance da magia ou se você tiver cobertura total para ele.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano inicial aumenta em 1d12 para cada nível do espaço acima do 1°.</p>",
fonte: ""
},

{
nome: "Chicote de Espinhos",
nivel: "Truque",
escola: "Transmutação",
classes: "Artífice, Druida",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V, S, M (muda de uma planta com espinhos)",
duracao: "Instantânea",
resumo: `
    <p>Faça um <span style="color:#FFD54F;">ataque mágico corpo a corpo</span>. Se atingir, causa <span style="color:#81C784;">1d6 de dano perfurante</span> e, se o alvo for <span style="color:#4FC3F7;">Grande ou menor</span>, puxa-o até <span style="color:#4FC3F7;">3 m</span> para perto de você.</p>
    <p>O dano aumenta para <span style="color:#81C784;">2d6</span> no 5° nível, <span style="color:#81C784;">3d6</span> no 11° e <span style="color:#81C784;">4d6</span> no 17°.</p>
    `,
descricao: "<p>Você cria um longo chicote de vinhas coberto por espinhos que chicoteia, ao seu comando, em direção de uma criatura dentro do alcance. Realize um ataque corpo a corpo com magia contra o alvo. Se o ataque atingir, a criatura sofrerá 1d6 de dano perfurante e, se a criatura for Grande ou menor, você a puxa até 3 metros para perto de você.</p><p>O dano dessa magia aumenta em 1d6 quando você alcança o 5° nível (2d6), 11° nível (3d6) e 17° nível (4d6).</p>",
fonte: ""
},
{
nome: "Curar Ferimentos",
nivel: "1° círculo",
escola: "Evocação",
classes: "Artífice, Bardo, Clérigo, Druida, Guardião, Paladino",
tempo: "1 ação",
alcance: "Toque",
componentes: "V, S",
duracao: "Instantânea",
resumo: `
    <p>Uma criatura tocada recupera <span style="color:#81C784;">1d8 + seu modificador de conjuração</span> em pontos de vida. Não afeta <span style="color:#EF9A9A;">mortos-vivos ou constructos</span>.</p>
    <p>Em círculos superiores, a cura aumenta em <span style="color:#81C784;">1d8</span> por círculo acima do 1°.</p>
    `,
descricao: "<p>Uma criatura que você tocar recupera uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjuração. Essa magia não produz efeito em mortos-vivos ou constructos.</p><p><strong>Em Níveis Superiores.</strong> Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 1°.</p>",
fonte: ""
},
{
nome: "Bom Fruto",
nivel: "1° círculo",
escola: "Transmutação",
classes: "Druida, Guardião",
tempo: "1 ação",
alcance: "Toque",
componentes: "V, S, M (um raminho de visco)",
duracao: "Instantânea",
resumo: `
    <p>Cria até <span style="color:#81C784;">10 frutos</span>. Cada fruto consumido com uma ação <span style="color:#FFD54F;">restaura 1 PV</span> e fornece nutrientes para sustentar uma criatura por <span style="color:#4FC3F7;">1 dia</span>.</p>
    <p>Os frutos perdem a magia após <span style="color:#EF9A9A;">24 horas</span>.</p>
    `,
descricao: "<p>Até dez frutos aparecem na sua mão e são infundidos com magia pela duração. Uma criatura pode usar sua ação para comer um fruto. Comer um fruto restaura 1 ponto de vida e um fruto produz nutrientes suficientes para sustentar uma criatura por um dia. Os frutos perdem seu potencial se não forem consumidos dentro de 24 horas da conjuração dessa magia.</p>",
fonte: ""
},
{
nome: "Toque Arrepiante",
nivel: "Truque",
escola: "Necromancia",
classes: "Bruxo, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "36 metros",
componentes: "V, S",
duracao: "1 rodada",
resumo: `
    <p>Faça um <span style="color:#FFD54F;">ataque mágico à distância</span>. Se atingir, causa <span style="color:#CE93D8;">1d8 de dano necrótico</span> e impede o alvo de recuperar PV até o início do seu próximo turno.</p>
    <p>Contra <span style="color:#CE93D8;">mortos-vivos</span>, o alvo também tem <span style="color:#EF9A9A;">desvantagem nos ataques contra você</span> até o fim do seu próximo turno. O dano aumenta para <span style="color:#CE93D8;">2d8</span> no 5°, <span style="color:#CE93D8;">3d8</span> no 11° e <span style="color:#CE93D8;">4d8</span> no 17° nível.</p>
    `,
descricao: "<p>Você cria uma mão esquelética fantasmagórica no espaço de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra a criatura para afetá-la com o frio sepulcral. Se atingir, a criatura sofre 1d8 de dano necrótico e não poderá recuperar pontos de vida até o início do seu próximo turno. Até lá, a mão ficará presa ao alvo.</p><p>Se você atingir um alvo morto-vivo, ele terá desvantagem nas jogadas de ataque contra você até o final do seu próximo turno.</p><p>O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).</p>",
fonte: ""
},
{
nome: "Vitalidade Falsa",
nivel: "1° círculo",
escola: "Necromancia",
classes: "Artífice, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "Pessoal",
componentes: "V, S, M (pequena quantidade de álcool ou bebida destilada)",
duracao: "1 hora",
resumo: `
    <p>Você ganha <span style="color:#CE93D8;">1d4 + 4 PV temporários</span> por 1 hora.</p>
    <p>Em círculos superiores, ganha <span style="color:#CE93D8;">+5 PV temporários</span> por círculo acima do 1°.</p>
    `,
descricao: "<p>Reforçando-se com uma vitalidade necromântica ilusória, você ganha 1d4 + 4 pontos de vida temporários pela duração.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você ganha 5 pontos de vida temporários adicionais para cada nível do espaço de magia acima do 1°.</p>",
fonte: ""
},
{
nome: "Taumaturgia",
nivel: "Truque",
escola: "Transmutação",
classes: "Clérigo",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V",
duracao: "Até 1 minuto",
resumo: `
    <p>Crie uma <span style="color:#FFD54F;">pequena manifestação sobrenatural</span> dentro do alcance:</p>
    <p>• <span style="color:#4FC3F7;">Voz:</span> triplica o volume por 1 minuto.</p>
    <p>• <span style="color:#4FC3F7;">Tremor:</span> causa tremores inofensivos no solo por 1 minuto.</p>
    <p>• <span style="color:#4FC3F7;">Som:</span> cria instantaneamente um som em um ponto escolhido.</p>
    <p>• <span style="color:#4FC3F7;">Porta/janela:</span> abre ou fecha instantaneamente se estiver destrancada.</p>
    <p>• <span style="color:#4FC3F7;">Olhos:</span> altera a aparência por 1 minuto.</p>
    <p>Você pode manter até <span style="color:#81C784;">3 efeitos de 1 minuto</span> ativos simultaneamente e dissipar um deles com uma ação.</p>
    `,
descricao: "<p>Você manifesta pequenas maravilhas, um sinal de poder sobrenatural, dentro do alcance. Você cria um dos seguintes efeitos mágicos dentro do alcance:</p><p>• Sua voz ressoa com o triplo do volume normal por 1 minuto.</p><p>• Você provoca tremores inofensivos no solo por 1 minuto.</p><p>• Você cria, instantaneamente, um som que se origina de um ponto, à sua escolha, dentro do alcance, como o barulho de um trovão, o gralhar de um corvo ou sussurros sinistros.</p><p>• Você, instantaneamente, faz uma porta ou janela destrancada se abrir ou se fechar.</p><p>• Você altera a aparência dos seus olhos por 1 minuto.</p><p>Se você conjurar essa magia diversas vezes, você pode ter até três dos efeitos de 1 minuto ativos por vez, e você pode dissipar um desses efeitos com uma ação.</p>",
fonte: ""
},
{
nome: "Resistência",
nivel: "Truque",
escola: "Abjuração",
classes: "Artífice, Clérigo, Druida",
tempo: "1 ação",
alcance: "Toque",
componentes: "V, S, M (um manto em miniatura)",
duracao: "Concentração, até 1 minuto",
resumo: `
    <p>Uma criatura voluntária pode, uma vez antes do fim da magia, adicionar <span style="color:#81C784;">1d4</span> a um <span style="color:#FFD54F;">teste de resistência</span>. Pode rolar o d4 antes ou depois do teste. Após isso, a magia termina.</p>
    `,
descricao: "<p>Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o valor jogado a um teste de resistência de sua escolha. Ele pode rolar o dado antes ou depois de realizar o teste de resistência. Então, a magia termina.</p>",
fonte: ""
},
{
nome: "Criar ou Destruir Água",
nivel: "1° círculo",
escola: "Transmutação",
classes: "Clérigo, Druida",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V, S, M (uma gota de água ou alguns grãos de areia)",
duracao: "Instantânea",
resumo: `
    <p><strong style="color:#4FC3F7;">Criar:</strong> cria <span style="color:#81C784;">30 L de água</span> em recipiente aberto ou faz chover em um cubo de 9 m, extinguindo chamas expostas.</p>
    <p><strong style="color:#EF9A9A;">Destruir:</strong> remove até <span style="color:#81C784;">30 L de água</span> de um recipiente ou um nevoeiro em um cubo de 9 m.</p>
    <p>Em círculos superiores, adiciona <span style="color:#81C784;">30 L</span> ou <span style="color:#4FC3F7;">1,5 m ao cubo</span> por círculo acima do 1°.</p>
    `,
descricao: "<p>Você pode tanto criar quanto destruir água.</p><p><strong>Criar Água.</strong> Você cria 30 litros de água limpa dentro do alcance, em um recipiente aberto. Alternativamente, a água pode cair como chuva em um cubo de 9 metros dentro do alcance, extinguindo chamas expostas na área.</p><p><strong>Destruir Água.</strong> Você destrói até 30 litros de água de um recipiente aberto dentro do alcance. Alternativamente, você pode destruir um nevoeiro em um cubo de 9 metros dentro do alcance.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode criar ou destruir 30 litros de água adicionais, ou o tamanho do cubo aumenta em 1,5 metro, para cada nível do espaço acima do 1°.</p>",
fonte: ""
},
{
nome: "Detectar Magia",
nivel: "1° círculo (ritual)",
escola: "Adivinhação",
classes: "Artífice, Bardo, Clérigo, Druida, Feiticeiro, Guardião, Mago, Paladino",
tempo: "1 ação",
alcance: "Pessoal",
componentes: "V, S",
duracao: "Concentração, até 10 minutos",
resumo: `
    <p>Sente a presença de <span style="color:#CE93D8;">magia a até 9 m</span>. Com uma ação, pode ver uma <span style="color:#FFD54F;">aura mágica</span> em criaturas ou objetos visíveis e descobrir a escola da magia, se houver.</p>
    <p>É bloqueada por <span style="color:#EF9A9A;">30 cm de rocha, 2,5 cm de metal comum, uma fina camada de chumbo ou 90 cm de madeira/terra</span>.</p>
    `,
descricao: "<p>Pela duração, você sente a presença de magia a até 9 metros de você. Se você sentir magia dessa forma, você pode usar sua ação para ver uma aura suave em volta de qualquer criatura ou objeto visível, na área que carrega magia, e você descobre a escola de magia, se houver uma.</p><p>A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2,5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.</p>",
fonte: ""
},
{
nome: "Detectar Veneno e Doença",
nivel: "1° círculo (ritual)",
escola: "Adivinhação",
classes: "Clérigo, Druida, Guardião, Paladino",
tempo: "1 ação",
alcance: "Pessoal",
componentes: "V, S, M (uma folha de teixo)",
duracao: "Concentração, até 10 minutos",
resumo: `
    <p>Detecta a <span style="color:#EF9A9A;">presença e localização</span> de venenos, criaturas venenosas e doenças a até <span style="color:#4FC3F7;">9 m</span>, identificando o tipo de cada um.</p>
    <p>É bloqueada por <span style="color:#EF9A9A;">30 cm de rocha, 2,5 cm de metal comum, uma fina camada de chumbo ou 90 cm de madeira/terra</span>.</p>
    `,
descricao: "<p>Pela duração, você sente a presença e localização de venenos, criaturas venenosas e doenças a até 9 metros de você. Você também identifica o tipo de veneno, criatura venenosa ou doença em cada caso.</p><p>A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2,5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.</p>",
fonte: ""
},
{
nome: "Constrição",
nivel: "1° círculo",
escola: "Conjuração",
classes: "Druida",
tempo: "1 ação",
alcance: "27 metros",
componentes: "V, S",
duracao: "Concentração, até 1 minuto",
resumo: `
    <p>Cria plantas em um <span style="color:#81C784;">quadrado de 6 m</span>, tornando a área <span style="color:#FFD54F;">terreno difícil</span>.</p>
    <p>Criaturas na área fazem um <span style="color:#FFD54F;">teste de Força</span>. Em caso de falha, ficam <span style="color:#EF9A9A;">impedidas</span>. Podem usar uma ação para repetir o teste e se libertar.</p>
    `,
descricao: "<p>Ervas e vinhas poderosas brotam do solo num quadrado de 6 metros a partir de um ponto dentro do alcance. Pela duração, essas plantas transformam o solo na área em terreno difícil. Uma criatura na área quando você conjurar a magia deve ser bem sucedida num teste de resistência de Força ou ficará impedida pelo emaranhado de plantas, até a magia acabar. Uma criatura impedida pelas plantas pode usar sua ação para realizar um teste de Força, contra a CD da magia. Se for bem sucedido, irá se libertar. Quando a magia termina, as plantas conjuradas murcharão.</p>",
fonte: ""
},
{
nome: "Enfeitiçar Pessoa",
nivel: "1° círculo",
escola: "Encantamento",
classes: "Bardo, Bruxo, Druida, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V, S",
duracao: "1 hora",
resumo: `
    <p>Um humanoide faz um <span style="color:#FFD54F;">TR de SAB</span>. Em caso de falha, fica <span style="color:#CE93D8;">enfeitiçado</span> por 1 hora, a menos que você ou aliados façam algo nocivo contra ele.</p>
    <p>Enquanto enfeitiçado, considera você um <span style="color:#81C784;">conhecido amigável</span>. Ao fim, sabe que foi enfeitiçado. Em círculos superiores, afeta <span style="color:#4FC3F7;">+1 criatura por círculo</span>, a até 9 m umas das outras.</p>
    `,
descricao: "<p>Você tenta enfeitiçar um humanoide que você possa ver dentro do alcance. Ele deve realizar um teste de resistência de Sabedoria, e recebe vantagem nesse teste se você ou seus companheiros estiverem lutando com ele. Se ele falhar, ficará enfeitiçado por você até a magia acabar ou até você ou seus companheiros fizerem qualquer coisa nociva contra ele. A criatura enfeitiçada reconhece você como um conhecido amigável. Quando a magia acabar, a criatura saberá que foi enfeitiçada por você.</p><p><strong>Em Níveis Superiores.</strong> Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a até 9 metros umas das outras quando você for afeta-las.</p>",
fonte: ""
},
{
nome: "Falar com Animais",
nivel: "1° círculo (ritual)",
escola: "Adivinhação",
classes: "Bardo, Druida, Guardião",
tempo: "1 ação",
alcance: "Pessoal",
componentes: "V, S",
duracao: "10 minutos",
resumo: `
    <p>Você pode <span style="color:#4FC3F7;">compreender e se comunicar</span> verbalmente com bestas.</p>
    <p>Bestas podem informar sobre <span style="color:#81C784;">locais e monstros próximos</span>, incluindo o que perceberam no dia anterior. Você pode tentar <span style="color:#FFD54F;">persuadir uma besta a prestar um favor</span>, a critério do Mestre.</p>
    `,
descricao: "<p>Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração. O conhecimento e consciência de muitas bestas é limitado pela inteligência delas mas, no mínimo, as bestas poderão dar informações a você sobre os locais e monstros próximos, incluindo tudo que eles possam perceber ou tenham percebido no dia anterior. Você pode tentar persuadir uma besta a lhe prestar um favor, à critério do Mestre.</p>",
fonte: ""
},
{
nome: "Fogo das Fadas",
nivel: "1° círculo",
escola: "Evocação",
classes: "Artífice, Bardo, Druida",
tempo: "1 ação",
alcance: "18 metros",
componentes: "V",
duracao: "Concentração, até 1 minuto",
resumo: `
    <p>Objetos em um <span style="color:#4FC3F7;">cubo de 6 m</span> e criaturas que falharem em um <span style="color:#FFD54F;">teste de Destreza</span> ficam delineados por luz.</p>
    <p>Alvos afetados emitem <span style="color:#CE93D8;">penumbra em 3 m</span>. Ataques contra eles têm <span style="color:#81C784;">vantagem</span>, e eles não recebem benefícios de <span style="color:#EF9A9A;">invisibilidade</span>.</p>
    `,
descricao: "<p>Cada objeto num cubo de 6 metros dentro do alcance fica delineado com luz azul, verde ou violeta (à sua escolha). Qualquer criatura na área, quando a magia é conjurada, também fica delineada com luz, se falhar num teste de resistência de Destreza. Pela duração, os objetos e criaturas afetadas emitem penumbra num raio de 3 metros. Qualquer jogada de ataque contra uma criatura afetada ou objeto tem vantagem, se o atacante puder ver o alvo e, a criatura afetada ou objeto não recebe benefício por estar invisível.</p>",
fonte: ""
},
{
nome: "Onda Trovejante",
nivel: "1° círculo",
escola: "Evocação",
classes: "Bardo, Druida, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "Pessoal (cubo de 4,5 m)",
componentes: "V, S",
duracao: "Instantânea",
resumo: `
    <p>Criaturas em um <span style="color:#4FC3F7;">cubo de 4,5 m</span> fazem um <span style="color:#FFD54F;">teste de Constituição</span>.</p>
    <p><strong style="color:#EF9A9A;">Falha:</strong> <span style="color:#EF9A9A;">2d8 de dano trovejante</span> e empurra 3 m. <strong style="color:#81C784;">Sucesso:</strong> metade do dano e não é empurrada.</p>
    <p>Objetos soltos são empurrados 3 m. O som pode ser ouvido a até <span style="color:#4FC3F7;">90 m</span>. Em círculos superiores, causa <span style="color:#EF9A9A;">+1d8</span> por círculo acima do 1°.</p>
    `,
descricao: "<p>Uma onda de força trovejante varre tudo a partir de você. Cada criatura num cubo de 4,5 metros originado em você deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 2d8 de dano trovejante e será empurrada 3 metros para longe de você. Se obtiver sucesso na resistência, a criatura sofrerá metade desse dano e não será empurrada.</p><p>Além disso, objetos soltos que estiverem completamente dentro da área de efeito serão automaticamente empurrados 3 metros para longe de você pelo efeito da magia e a magia emitirá um ressonante barulho de trovão audível a até 90 metros.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d8 para cada nível acima do 1°.</p>",
fonte: ""
},
{
nome: "Palavra Curativa",
nivel: "1° círculo",
escola: "Evocação",
classes: "Bardo, Clérigo, Druida",
tempo: "1 ação bônus",
alcance: "18 metros",
componentes: "V",
duracao: "Instantânea",
resumo: `
    <p>Uma criatura visível recupera <span style="color:#81C784;">1d4 + seu modificador de conjuração</span> PV. Não afeta <span style="color:#EF9A9A;">mortos-vivos ou constructos</span>.</p>
    <p>Em círculos superiores, a cura aumenta em <span style="color:#81C784;">1d4</span> por círculo acima do 1°.</p>
    `,
descricao: "<p>Uma criatura, à sua escolha, que você possa ver dentro do alcance recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não tem efeito em mortos-vivos ou constructos.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 1°.</p>",
fonte: ""
},
{
nome: "Druidismo",
nivel: "Truque",
escola: "Transmutação",
classes: "Druida",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V, S",
duracao: "Instantânea",
resumo: `
    <p>Crie um dos seguintes efeitos naturais:</p>
    <p>• <strong style="color:#4FC3F7;">Previsão do clima:</strong> indica o clima das próximas 24 horas por 1 rodada.</p>
    <p>• <strong style="color:#81C784;">Plantas:</strong> faz uma flor florescer, semente brotar ou folha amadurecer.</p>
    <p>• <strong style="color:#FFD54F;">Efeito sensorial:</strong> cria um efeito inofensivo em um cubo de 1,5 m.</p>
    <p>• <strong style="color:#EF9A9A;">Fogo:</strong> acende ou apaga instantaneamente uma vela, tocha ou pequena fogueira.</p>
    `,
descricao: "<p>Sussurrando para os espíritos da natureza, você cria um dos seguintes efeitos, dentro do alcance:</p><p>• Você cria um efeito sensorial minúsculo e inofensivo que prevê como será o clima na sua localização pelas próximas 24 horas. O efeito deve se manifestar como um globo dourado para céu claro, uma nuvem para chuva, flocos de neve para nevasca e assim por diante. Esse efeito persiste por 1 rodada.</p><p>• Você faz uma flor florescer, uma semente brotar ou uma folha amadurecer, instantaneamente.</p><p>• Você cria um efeito sensorial inofensivo instantâneo, como folhas caindo, um sopro de vento, o som de um pequeno animal ou o suave odor de um repolho. O efeito deve caber num cubo de 1,5 metro.</p><p>• Você, instantaneamente, acende ou apaga uma vela, tocha ou fogueira pequena.</p>",
fonte: ""
},
{
nome: "Bordão Místico",
nivel: "Truque",
escola: "Transmutação",
classes: "Druida",
tempo: "1 ação bônus",
alcance: "Toque",
componentes: "V, S, M (visco, folha de trevo e clava ou bordão)",
duracao: "1 minuto",
resumo: `
    <p>Uma clava ou bordão que você segura se torna <span style="color:#81C784;">mágico</span> e passa a usar seu <span style="color:#FFD54F;">modificador de conjuração</span> nas jogadas de ataque e dano corpo a corpo.</p>
    <p>O dano da arma se torna <span style="color:#4FC3F7;">1d8</span>. A magia termina se você conjurá-la novamente ou soltar a arma.</p>
    `,
descricao: "<p>A madeira de uma clava ou bordão, que você esteja segurando, é imbuída com o poder da natureza. Pela duração, você pode usar sua habilidade de conjuração ao invés da sua Força para as jogadas de ataque e dano corpo-a-corpo usando essa arma, e o dado de dano da arma se torna um d8. A arma também se torna mágica, se ela já não for. A magia acaba se você conjura-la novamente ou se você soltar a arma.</p>",
fonte: ""
},
{
nome: "Criar Chamas",
nivel: "Truque",
escola: "Conjuração",
classes: "Druida",
tempo: "1 ação",
alcance: "Pessoal",
componentes: "V, S",
duracao: "10 minutos",
resumo: `
    <p>Cria uma chama na mão, iluminando <span style="color:#FFD54F;">3 m com luz plena</span> e <span style="color:#B0BEC5;">3 m adicionais com penumbra</span>. Não causa dano.</p>
    <p>Com uma ação, arremesse-a a até <span style="color:#4FC3F7;">9 m</span> com um ataque mágico, causando <span style="color:#EF9A9A;">1d8 de dano de fogo</span> ao atingir. O dano aumenta para <span style="color:#EF9A9A;">2d8</span> no 5°, <span style="color:#EF9A9A;">3d8</span> no 11° e <span style="color:#EF9A9A;">4d8</span> no 17° nível.</p>
    <p>A magia termina se a chama for arremessada, dissipada ou se você conjurá-la novamente.</p>
    `,
descricao: "<p>Uma chama tremulante aparece na sua mão. A chama permanece aí pela duração e não machuca nem você nem seu equipamento. A chama emite luz plena num raio de 3 metros e penumbra por 3 metros adicionais. A magia acaba se você dissipá-la usando uma ação ou se conjurá-la novamente. Você pode, também, atacar com a chama, no entanto, fazer isso acaba com a magia. Quando você conjura essa magia ou com uma ação em um turno posterior, você pode arremessar a chama numa criatura a até 9 metros de você. Faça um ataque à distância com magia. Se atingir, o alvo sofre 1d8 de dano de fogo.</p><p>O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).</p>",
fonte: ""
},
{
nome: "Orientação",
nivel: "Truque",
escola: "Adivinhação",
classes: "Artífice, Clérigo, Druida",
tempo: "1 ação",
alcance: "Toque",
componentes: "V, S",
duracao: "Concentração, até 1 minuto",
resumo: `
    <p>Uma criatura voluntária pode adicionar <span style="color:#81C784;">1d4</span> a um <span style="color:#FFD54F;">teste de habilidade</span> uma vez antes do fim da magia. Pode rolar o dado antes ou depois do teste. Após isso, a magia termina.</p>
    `,
descricao: "<p>Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o número rolado a um teste de habilidade à escolha dele. Ele pode rolar o dado antes ou depois de realizar o teste de habilidade. Após isso, a magia termina.</p>",
fonte: ""
},
{
nome: "Rajada de Veneno",
nivel: "Truque",
escola: "Conjuração",
classes: "Artífice, Bruxo, Druida, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "3 metros",
componentes: "V, S",
duracao: "Instantânea",
resumo: `
    <p>Uma criatura faz um <span style="color:#FFD54F;">teste de Constituição</span>. Se falhar, sofre <span style="color:#81C784;">1d12 de dano de veneno</span>.</p>
    <p>O dano aumenta para <span style="color:#81C784;">2d12</span> no 5°, <span style="color:#81C784;">3d12</span> no 11° e <span style="color:#81C784;">4d12</span> no 17° nível.</p>
    `,
descricao: "<p>Você ergue sua mão em direção de uma criatura que você possa ver, dentro do alcance, e projeta um sopro de gás tóxico da sua palma. A criatura deve ser bem sucedida num teste de resistência de Constituição ou sofrerá 1d12 de dano de veneno.</p><p>O dano dessa magia aumenta em 1d12 quando você alcança o 5° nível (2d12), 11° nível (3d12) e 17° nível (4d12).</p>",
fonte: ""
},
{
nome: "Amizade Animal",
nivel: "1° círculo",
escola: "Encantamento",
classes: "Bardo, Druida, Guardião",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V, S, M (um punhado de comida)",
duracao: "24 horas",
resumo: `
    <p>Uma besta com <span style="color:#4FC3F7;">Inteligência menor que 4</span> faz um <span style="color:#FFD54F;">teste de Sabedoria</span>. Se falhar, fica <span style="color:#CE93D8;">enfeitiçada</span> por 24 horas.</p>
    <p>A magia termina se você ou um aliado <span style="color:#EF9A9A;">ferir o alvo</span>. Em círculos superiores, afeta <span style="color:#81C784;">+1 besta por círculo</span> acima do 1°.</p>
    `,
descricao: "<p>Essa magia deixa você convencer uma besta que você não quer prejudicar. Escolha uma besta que você possa ver dentro do alcance. Ela deve ver e ouvir você. Se a Inteligência da besta for 4 ou maior, a magia falha. Do contrário, a besta deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração da magia. Se você ou um dos seus companheiros ferir o alvo, a magia termina.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma besta adicional para cada nível do espaço acima do 1°.</p>",
fonte: ""
},
{
nome: "Imobilizar Pessoa",
nivel: "2° círculo",
escola: "Encantamento",
classes: "Bardo, Bruxo, Clérigo, Druida, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "18 metros",
componentes: "V, S, M (uma pequena peça de ferro reta)",
duracao: "Concentração, até 1 minuto",
resumo: `
    <p>Um humanoide faz um <span style="color:#FFD54F;">teste de Sabedoria</span>. Se falhar, fica <span style="color:#EF9A9A;">paralisado</span>. Mortos-vivos são imunes.</p>
    <p>O alvo repete o teste no fim de cada turno. Em caso de sucesso, a magia termina. Em círculos superiores, afeta <span style="color:#81C784;">+1 humanoide por círculo</span> acima do 2°, desde que estejam a até 9 m entre si.</p>
    `,
descricao: "<p>Escolha um humanoide que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou ficará paralisado pela duração. Essa magia não tem efeito em mortos-vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina no alvo.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um humanoide adicional para cada nível de magia acima do 2°. Os humanoides devem estar a 9 metros entre si para serem afetados.</p>",
fonte: ""
},
{
nome: "Lâmina Flamejante",
nivel: "2° círculo",
escola: "Evocação",
classes: "Druida",
tempo: "1 ação bônus",
alcance: "Pessoal",
componentes: "V, S, M (folha de sumagre)",
duracao: "Concentração, até 10 minutos",
resumo: `
    <p>Cria uma <span style="color:#EF9A9A;">lâmina flamejante</span> semelhante a uma cimitarra. Com uma ação, faça um <span style="color:#FFD54F;">ataque mágico corpo a corpo</span> que causa <span style="color:#EF9A9A;">3d6 de dano de fogo</span>.</p>
    <p>A lâmina emite <span style="color:#FFD54F;">luz plena por 3 m</span> e <span style="color:#B0BEC5;">penumbra por mais 3 m</span>. Se soltá-la, desaparece, mas pode ser recriada com uma ação bônus. Em círculos superiores, causa <span style="color:#EF9A9A;">+1d6 a cada 2 círculos</span> acima do 2°.</p>
    `,
descricao: "<p>Você evoca uma lâmina ardente em sua mão livre. A lâmina é similar em tamanho e formato a uma cimitarra e ela permanece pela duração. Se você soltar a lâmina, ela desaparece, mas você pode evocar a lâmina novamente com uma ação bônus. Você pode usar sua ação para realizar ataques corpo a corpo com magia com a lâmina ardente. Se atingir, o alvo sofrerá 3d6 de dano de fogo. A lâmina flamejante emite luz plena a 3 metros de raio e penumbra por mais 3 metros adicionais.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada dois níveis do espaço acima do 2°.</p>",
fonte: ""
},
{
nome: "Proteção Contra Veneno",
nivel: "2° círculo",
escola: "Abjuração",
classes: "Artífice, Clérigo, Druida, Guardião, Paladino",
tempo: "1 ação",
alcance: "Toque",
componentes: "V, S",
duracao: "1 hora",
resumo: `
    <p>Neutraliza <span style="color:#81C784;">1 veneno</span> que afete a criatura tocada. Se houver vários, você pode escolher um que saiba estar presente ou neutralizar um aleatoriamente.</p>
    <p>Por 1 hora, o alvo tem <span style="color:#FFD54F;">vantagem contra envenenamento</span> e <span style="color:#4FC3F7;">resistência a dano de veneno</span>.</p>
    `,
descricao: "<p>Você toca uma criatura. Se ela estiver envenenada, você neutraliza o veneno. Se mais de um veneno estiver afligindo o alvo, você neutraliza um veneno, que você saiba estar presente, ou neutraliza um aleatório.</p><p>Pela duração, o alvo terá vantagem em testes de resistência para não ser envenenado e terá resistência a dano de veneno.</p>",
fonte: ""
},
{
nome: "Passo Nebuloso",
nivel: "2° círculo",
escola: "Conjuração",
classes: "Bruxo, Feiticeiro, Mago",
tempo: "1 ação bônus",
alcance: "Pessoal",
componentes: "V",
duracao: "Instantânea",
resumo: `
    <p>Você se <span style="color:#CE93D8;">teletransporta até 9 m</span> para um espaço desocupado que possa ver.</p>
    `,
descricao: "<p>Brevemente envolto por uma neblina prateada, você se teletransporta a até 9 metros para um espaço desocupado que você possa ver.</p>",
fonte: ""
},
{
nome: "Ilusão Menor",
nivel: "Truque",
escola: "Ilusão",
classes: "Bardo, Bruxo, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V, M (um pouco de lã)",
duracao: "1 minuto",
resumo: `
    <p>Crie um <span style="color:#CE93D8;">som</span> ou uma <span style="color:#CE93D8;">imagem de objeto</span> de até 1,5 m³.</p>
    <p><strong style="color:#4FC3F7;">Som:</strong> pode variar de sussurro a grito e permanecer ou mudar durante a duração.</p>
    <p><strong style="color:#81C784;">Imagem:</strong> não produz som, luz, cheiro ou outros efeitos. Interação física revela a ilusão. Examiná-la exige <span style="color:#FFD54F;">Investigação contra a CD da magia</span>.</p>
    <p>A ilusão termina se dissipada com uma ação ou se a magia for conjurada novamente.</p>
    `,
descricao: "<p>Você cria um som ou uma imagem de um objeto, dentro do alcance, que permanece pela duração. A ilusão também termina se você dissipá-la usando uma ação ou conjurar essa magia novamente.</p><p>Se você criar um som, seu volume pode variar entre um sussurro até um grito. Pode ser a sua voz, a voz de outrem, o rugido de um leão, batidas de tambor ou qualquer outro som que você quiser. O som permanece no mesmo volume durante toda duração ou você pode fazer sons distintos em momentos diferentes, antes da magia acabar.</p><p>Se você criar uma imagem de um objeto – como uma cadeira, pegadas de lama ou um pequeno baú – ela não pode ter mais de 1,5 metro cúbico. A imagem não pode produzir som, luz, cheiro ou qualquer outro efeito sensorial. Interação física com a imagem revelará que ela é uma ilusão, já que as coisas podem atravessá-la. Se uma criatura usar sua ação para examinar a imagem, ela pode determinar que ela é uma ilusão se obtiver sucesso num teste de Inteligência (Investigação) contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a ilusão se tornará suave para a criatura.</p>",
fonte: ""
},
{
nome: "Luz",
nivel: "Truque",
escola: "Evocação",
classes: "Artífice, Bardo, Clérigo, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "Toque",
componentes: "V, M (um vaga-lume ou musgo fosforescente)",
duracao: "1 hora",
resumo: `
    <p>Um objeto de até <span style="color:#4FC3F7;">3 m em qualquer dimensão</span> emite <span style="color:#FFD54F;">luz plena por 6 m</span> e <span style="color:#B0BEC5;">penumbra por mais 6 m</span>.</p>
    <p>Cobrir o objeto com algo opaco bloqueia a luz. A magia termina se for dissipada, conjurada novamente ou se o alvo for um objeto vestido ou segurado por uma criatura hostil que passar em um <span style="color:#FFD54F;">teste de Destreza</span>.</p>
    `,
descricao: "<p>Você toca um objeto que não tenha mais de 3 metros em qualquer dimensão. Até a magia acabar, o objeto emite luz plena num raio de 6 metros e penumbra por 6 metros adicionais. Cobrir o objeto completamente com alguma coisa opaca bloqueará a luz. A magia termina se você conjurá-la novamente ou dissipá-la com uma ação. Se você tentar afetar um objeto segurado ou vestido por uma criatura hostil, a criatura deve ser bem-sucedida num teste de Destreza para evitar a magia.</p>",
fonte: ""
},
{
nome: "Passos sem Pegadas",
nivel: "2° círculo",
escola: "Abjuração",
classes: "Druida, Guardião",
tempo: "1 ação",
alcance: "Pessoal",
componentes: "V, S, M (cinzas de folha de visco queimada e ramo de pinheiro)",
duracao: "Concentração, até 1 hora",
resumo: `
    <p>Criaturas escolhidas a até <span style="color:#4FC3F7;">9 m</span> recebem <span style="color:#81C784;">+10 em Furtividade</span> e não podem ser rastreadas, exceto por meios mágicos.</p>
    <p>Alvos afetados não deixam <span style="color:#FFD54F;">pegadas ou outros vestígios</span> da passagem.</p>
    `,
descricao: "<p>Um véu de sombras e silêncio irradia de você, encobrindo você e seus companheiros contra detecção. Pela duração, cada criatura, à sua escolha, a até 9 metros de você (incluindo você) recebe +10 de bônus em testes de Destreza (Furtividade) e não pode ser rastreada, exceto por meios mágicos. Uma criatura que receber esse bônus não deixa quaisquer pegadas ou outros vestígios da sua passagem.</p>",
fonte: ""
},
{
nome: "Pele de Árvore",
nivel: "2° círculo",
escola: "Transmutação",
classes: "Druida, Guardião",
tempo: "1 ação",
alcance: "Toque",
componentes: "V, S, M (um pedaço de casca de carvalho)",
duracao: "Concentração, até 1 hora",
resumo: `
    <p>Uma criatura voluntária recebe <span style="color:#81C784;">CA mínima 16</span> pela duração, independentemente da armadura que estiver usando.</p>
    `,
descricao: "<p>Você toca uma criatura voluntária. Até o fim da magia, a pele da criatura fica rígida, similar a casca de um carvalho, e a CA do alvo não pode ser inferior a 16, independentemente do tipo de armadura que ela esteja vestindo.</p>",
fonte: ""
},
{
nome: "Mãos Mágicas",
nivel: "Truque",
escola: "Conjuração",
classes: "Artífice, Bardo, Bruxo, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "9 metros",
componentes: "V, S",
duracao: "1 minuto",
resumo: `
    <p>Cria uma <span style="color:#CE93D8;">mão espectral</span> que pode manipular objetos, abrir portas ou recipientes destrancados, pegar ou guardar itens e derramar líquidos.</p>
    <p>Pode ser movida até <span style="color:#4FC3F7;">9 m</span> por ação. Não pode <span style="color:#EF9A9A;">atacar, ativar itens mágicos ou carregar mais de 5 kg</span>. Desaparece se ficar a mais de 9 m de você ou se for dissipada/conjurada novamente.</p>
    `,
descricao: "<p>Uma mão espectral flutuante aparece num ponto, à sua escolha, dentro do alcance. A mão permanece pela duração ou até você dissipá-la com uma ação. A mão some se estiver a mais de 9 metros de você ou se você conjurar essa magia novamente. Você pode usar sua ação para controlar a mão. Você pode usar a mão para manipular um objeto, abrir uma porta ou recipiente destrancado, guardar ou pegar um item de um recipiente aberto ou derramar o conteúdo de um frasco. Você pode mover a mão até 9 metros a cada vez que a usa. A mão não pode atacar, ativar itens mágicos ou carregar mais de 5 quilos.</p>",
fonte: ""
},
{
nome: "Mensagem",
nivel: "Truque",
escola: "Transmutação",
classes: "Artífice, Bardo, Feiticeiro, Mago",
tempo: "1 ação",
alcance: "36 metros",
componentes: "V, S, M (um pedaço curto de fio de cobre)",
duracao: "1 rodada",
resumo: `
    <p>Envie uma <span style="color:#4FC3F7;">mensagem sussurrada</span> a uma criatura a até 36 m. Apenas ela ouve e pode responder, também em sussurro.</p>
    <p>Pode atravessar objetos sólidos se você conhecer o alvo, mas é bloqueada por <span style="color:#EF9A9A;">silêncio mágico, 30 cm de rocha, 2,5 cm de metal, chumbo, ou 90 cm de madeira/terra</span>. Não precisa seguir linha reta.</p>
    `,
descricao: "<p>Você aponta seu dedo para uma criatura dentro do alcance e sussurra uma mensagem. O alvo (e apenas ele) ouve a mensagem e pode responder com um sussurro que apenas você pode ouvir. Você pode conjurar essa magia através de objetos sólidos se você tiver familiaridade com o alvo. Silêncio mágico, 30 centímetros de rocha, 2,5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra bloqueiam a magia. A magia não precisa seguir uma linha reta e pode viajar livremente, dobrando esquinas ou através de aberturas.</p>",
fonte: ""
},
{
nome: "Área Escorregadia",
nivel: "1° círculo",
escola: "Conjuração",
classes: "Artífice, Mago",
tempo: "1 ação",
alcance: "18 metros",
componentes: "V, S, M (um pouco de pele de porco ou manteiga)",
duracao: "1 minuto",
resumo: `
    <p>Cobre um <span style="color:#4FC3F7;">quadrado de 3 m</span> com graxa, tornando-o <span style="color:#FFD54F;">terreno difícil</span>.</p>
    <p>Criaturas na área fazem um <span style="color:#FFD54F;">teste de Destreza</span> ou <span style="color:#EF9A9A;">caem no chão</span>. Quem entrar ou terminar o turno na área também deve repetir o teste.</p>
    `,
descricao: "<p>Graxa escorregadia cobre o solo em um quadrado de 3 metros centrado em um ponto, dentro do alcance, tornando essa área em terreno difícil pela duração. Quando a graxa aparece, cada criatura de pé na área deve ser bem-sucedida num teste de resistência de Destreza ou cairá no chão. Uma criatura que entre na área ou termine seu turno nela deve ser bem-sucedida num teste de resistência de Destreza ou cairá no chão.</p>",
fonte: ""
},
{
nome: "Névoa Obscurecente",
nivel: "1° círculo",
escola: "Conjuração",
classes: "Druida, Feiticeiro, Guardião, Mago",
tempo: "1 ação",
alcance: "36 metros",
componentes: "V, S",
duracao: "Concentração, até 1 hora",
resumo: `
    <p>Cria uma esfera de <span style="color:#B0BEC5;">névoa de 6 m de raio</span> que gera <span style="color:#212121;">escuridão densa</span> e pode contornar esquinas.</p>
    <p>Permanece até o fim da duração ou ser dispersada por <span style="color:#4FC3F7;">vento de pelo menos 15 km/h</span>. Em círculos superiores, o raio aumenta em <span style="color:#B0BEC5;">6 m por círculo</span> acima do 1°.</p>
    `,
descricao: "<p>Você cria uma esfera de 6 metros de raio de névoa, centrada num ponto, dentro do alcance. A esfera se espalha, dobrando esquinas, e a área dela é de escuridão densa. Ela permanece pela duração ou até um vento moderado ou mais rápido (pelo menos 15 quilômetros por hora) dispersá-la.</p><p><strong>Em Níveis Superiores.</strong> Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o raio da névoa aumenta em 6 metros para cada nível do espaço acima do 1°.</p>",
fonte: ""
},
{
nome: "Chama Sagrada",
nivel: "Truque",
escola: "Evocação",
classes: "Clérigo",
tempo: "1 ação",
alcance: "18 metros",
componentes: "V, S",
duracao: "Instantânea",
resumo: `
    <p>O alvo faz um <span style="color:#FFD54F;">teste de Destreza</span>, sem benefício de cobertura. Se falhar, sofre <span style="color:#F4D03F;">1d8 de dano radiante</span>.</p>
    <p>O dano aumenta para <span style="color:#F4D03F;">2d8</span> no 5°, <span style="color:#F4D03F;">3d8</span> no 11° e <span style="color:#F4D03F;">4d8</span> no 17° nível.</p>
    `,
descricao: "<p>Radiação similar a uma chama desce sobre uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem-sucedido num teste de resistência de Destreza ou sofrerá 1d8 de dano radiante. O alvo não recebe qualquer benefício de cobertura contra esse teste de resistência.</p><p>O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).</p>",
fonte: ""
}











    // COLE AQUI AS PRÓXIMAS MAGIAS (Lembre-se da vírgula antes de colar um novo bloco!)
];

























