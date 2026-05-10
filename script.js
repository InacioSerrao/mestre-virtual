// script.js

// ==========================================
// SISTEMA DE SALVAMENTO (MEMÓRIA PERSISTENTE)
// ==========================================

function saveData() {
    const dataToSave = { trackers, activeTrackerId };
    localStorage.setItem('dndTrackerData', JSON.stringify(dataToSave));
}

function loadData() {
    const saved = localStorage.getItem('dndTrackerData');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.trackers && parsed.trackers.length > 0) {
                trackers = parsed.trackers;
                activeTrackerId = parsed.activeTrackerId || trackers[0].id;
            }
        } catch (e) { console.error("Erro ao carregar dados do tracker.", e); }
    }
}

// ==========================================
// LÓGICA DO WIDGET FLUTUANTE (DADOS)
// ==========================================
const diceFloater = document.getElementById('dice-floater');
const diceHeader = document.getElementById('dice-header');

let isDragging = false;
let currentX, currentY, initialX, initialY;
let xOffset = 0, yOffset = 0;

diceHeader.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragEnd);
document.addEventListener('mousemove', drag);

function dragStart(e) {
    if (e.target.closest('#minimize-dice-btn')) return;

    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === diceHeader || diceHeader.contains(e.target)) {
        isDragging = true;
    }
}

function dragEnd(e) {
    if (isDragging) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, diceFloater);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

function toggleDiceMinimize() {
    const floater = document.getElementById('dice-floater');
    const btn = document.getElementById('minimize-dice-btn');
    const titleText = document.getElementById('dice-title-text');

    floater.classList.toggle('minimized');

    if (floater.classList.contains('minimized')) {
        btn.innerHTML = '□';
        titleText.innerText = 'Dados';

        floater.dataset.lastX = xOffset;
        floater.dataset.lastY = yOffset;
        xOffset = 0;
        yOffset = 0;
        setTranslate(0, 0, floater);
    } else {
        btn.innerHTML = '—';
        titleText.innerText = 'Rolagem de Dados';

        xOffset = parseFloat(floater.dataset.lastX) || 0;
        yOffset = parseFloat(floater.dataset.lastY) || 0;
        setTranslate(xOffset, yOffset, floater);
    }
}

function saveSessaoState() {
    const sessaoCards = document.querySelectorAll('#sessaoFichas .miniatura-ficha');
    const srcsNaSessao = Array.from(sessaoCards).map(img => img.src);

    const todosCartoes = document.querySelectorAll('.cartao-ficha');
    const nomesCartoes = Array.from(todosCartoes).map(cartao => {
        return {
            src: cartao.querySelector('.miniatura-ficha').src,
            nome: cartao.querySelector('.nome-personagem').value
        };
    });

    localStorage.setItem('dndSessaoState', JSON.stringify({ srcsNaSessao, nomesCartoes }));
}

function loadSessaoState() {
    const saved = localStorage.getItem('dndSessaoState');
    if (saved) {
        try {
            const { srcsNaSessao, nomesCartoes } = JSON.parse(saved);

            const todosCartoes = document.querySelectorAll('.cartao-ficha');
            todosCartoes.forEach(cartao => {
                const img = cartao.querySelector('.miniatura-ficha');
                const btn = cartao.querySelector('.btn-outline');
                const nomeInput = cartao.querySelector('.nome-personagem');

                const dadosSalvos = nomesCartoes.find(n => n.src === img.src);
                if (dadosSalvos) nomeInput.value = dadosSalvos.nome;

                if (srcsNaSessao.includes(img.src)) {
                    document.getElementById('sessaoFichas').appendChild(cartao);
                    btn.innerHTML = "Remover da Sessão";
                    btn.classList.add('btn-danger');
                }
            });
        } catch (e) { console.error("Erro ao carregar estado da sessão.", e); }
    }
}

function saveDiceLog() {
    const log = document.getElementById('dice-log').innerHTML;
    localStorage.setItem('dndDiceLog', log);
}

function loadDiceLog() {
    const savedLog = localStorage.getItem('dndDiceLog');
    if (savedLog) document.getElementById('dice-log').innerHTML = savedLog;
}

function hardResetMemory() {
    if (confirm("⚠️ ATENÇÃO: Isso apagará TODAS as fichas salvas, combates em andamento e históricos de dados.\n\nDeseja realmente limpar tudo?")) {
        localStorage.removeItem('dndTrackerData');
        localStorage.removeItem('dndSessaoState');
        localStorage.removeItem('dndDiceLog');
        location.reload();
    }
}

// ==========================================
// GERAL: NAVEGAÇÃO ENTRE ABAS
// ==========================================
function switchTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tabs .tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

// ==========================================
// LÓGICA DO ACERVO DE FICHAS
// ==========================================
const modal = document.getElementById('modalVisualizador');
const imgExpandida = document.getElementById('imagemExpandida');

function abrirModal(src) {
    modal.style.display = 'flex';
    imgExpandida.src = src;
}

function fecharModal() { modal.style.display = 'none'; }

function moverParaSessao(botao) {
    const cartao = botao.closest('.cartao-ficha');
    const acervo = document.getElementById('galeriaFichas');
    const sessao = document.getElementById('sessaoFichas');

    if (cartao.parentElement === acervo) {
        sessao.appendChild(cartao);
        botao.innerHTML = "Remover da Sessão";
        botao.classList.add('btn-danger');
    } else {
        acervo.appendChild(cartao);
        botao.innerHTML = "Mover p/ Sessão";
        botao.classList.remove('btn-danger');
    }
    saveSessaoState();
}

function enviarParaTracker(botao) {
    const cartao = botao.closest('.cartao-ficha');
    const nomeInput = cartao.querySelector('.nome-personagem').value;

    let tracker = getActiveTracker();
    tracker.creatures.push({ id: Date.now() + Math.random(), init: 0, name: nomeInput, hp: 0, maxHp: 0, ca: 10, effects: [], status: "", notes: "", acted: false });
    sortAndRender();

    const textoOriginal = botao.innerHTML;
    botao.innerHTML = "✅ Adicionado!";
    botao.style.borderColor = "var(--accent-green)";
    botao.style.color = "var(--accent-green)";
    setTimeout(() => {
        botao.innerHTML = textoOriginal;
        botao.style.borderColor = "var(--accent-gold)";
        botao.style.color = "var(--accent-gold)";
    }, 1500);
}

const campoBusca = document.getElementById('campoBusca');
campoBusca.addEventListener('input', function() {
    const termoBusca = campoBusca.value.toLowerCase();
    const todosOsCartoes = document.querySelectorAll('.cartao-ficha');

    todosOsCartoes.forEach(function(cartao) {
        const nomePersonagem = cartao.querySelector('.nome-personagem').value.toLowerCase();
        if (nomePersonagem.includes(termoBusca)) {
            cartao.style.display = 'flex';
        } else {
            cartao.style.display = 'none';
        }
    });
});

// ==========================================
// LÓGICA DO TRACKER DE INICIATIVA
// ==========================================
let trackers = [
    { id: Date.now(), name: "Combate Principal", creatures: [], currentTurnIndex: 0, roundCount: 1 }
];
let activeTrackerId = trackers[0].id;

const conditionOptions = [
    "Cego", "Encantado", "Surdo", "Exaustão", "Assustado",
    "Agarrado", "Incapacitado", "Invisível", "Paralisado", "Petrificado",
    "Envenenado", "Caído", "Contido", "Atordoado", "Inconsciente"
];

function getConditionClass(name) {
    const n = name.toLowerCase();
    if (n.includes('cego')) return 'tag-cego';
    if (n.includes('envenenado')) return 'tag-envenenado';
    if (n.includes('assustado')) return 'tag-assustado';
    if (n.includes('exaustão') || n.includes('inconsciente')) return 'tag-exaustao';
    if (n.includes('encantado') || n.includes('invisível')) return 'tag-encantado';
    return 'tag-default';
}

function getActiveTracker() { return trackers.find(t => t.id === activeTrackerId); }

function setActiveTracker(id) { activeTrackerId = id; renderTrackerTabs(); renderTable(); }

function createNewTracker() {
    const newId = Date.now();
    trackers.push({ id: newId, name: "Combate " + (trackers.length + 1), creatures: [], currentTurnIndex: 0, roundCount: 1 });
    activeTrackerId = newId; renderTrackerTabs(); renderTable();
}

function deleteTracker(id, event) {
    event.stopPropagation();
    if (trackers.length === 1) { alert("É necessário manter pelo menos um combate ativo."); return; }
    if (confirm("Encerrar este combate? Os dados serão perdidos.")) {
        trackers = trackers.filter(t => t.id !== id);
        if (activeTrackerId === id) activeTrackerId = trackers[0].id;
        renderTrackerTabs(); renderTable();
    }
}

function renderTrackerTabs() {
    const container = document.getElementById('tracker-tabs-container'); container.innerHTML = '';
    trackers.forEach(t => {
        const tab = document.createElement('div');
        tab.className = `tracker-tab ${t.id === activeTrackerId ? 'active' : ''}`;
        tab.onclick = () => setActiveTracker(t.id);
        tab.innerHTML = `${t.name} <span class="tracker-tab-close" onclick="deleteTracker(${t.id}, event)">×</span>`;
        container.appendChild(tab);
    });
    const addBtn = document.createElement('button'); addBtn.className = 'add-tracker-btn'; addBtn.innerText = '+ Novo';
    addBtn.onclick = createNewTracker; container.appendChild(addBtn);

    saveData();
}

function addCreature() {
    let tracker = getActiveTracker();
    tracker.creatures.push({ id: Date.now() + Math.random(), init: 0, name: "", hp: 0, maxHp: 0, ca: 10, effects: [], status: "", notes: "", acted: false });
    sortAndRender();
}

function removeCreature(id) {
    let tracker = getActiveTracker();
    tracker.creatures = tracker.creatures.filter(c => c.id !== id);
    if (tracker.currentTurnIndex >= tracker.creatures.length) tracker.currentTurnIndex = 0;
    sortAndRender();
}

function resetCombat() {
    let tracker = getActiveTracker();
    if (!confirm("Reiniciar as rodadas e os turnos deste combate?")) return;
    tracker.currentTurnIndex = 0; tracker.roundCount = 1;
    tracker.creatures.forEach(c => c.acted = false);
    renderTable();
}

function sortAndRender() {
    let tracker = getActiveTracker();
    let activeId = tracker.creatures[tracker.currentTurnIndex] ? tracker.creatures[tracker.currentTurnIndex].id : null;
    tracker.creatures.sort((a, b) => b.init - a.init);
    if (activeId !== null) {
        tracker.currentTurnIndex = tracker.creatures.findIndex(c => c.id === activeId);
        if (tracker.currentTurnIndex === -1) tracker.currentTurnIndex = 0;
    }
    renderTable();
}

function updateData(id, field, value) {
    let tracker = getActiveTracker(); let creature = tracker.creatures.find(c => c.id === id);
    if (!creature) return;
    if (field === 'init') { creature.init = parseInt(value) || 0; sortAndRender(); return; }
    if (field === 'hp' || field === 'maxHp' || field === 'ca') { creature[field] = parseInt(value) || 0; renderTable(); return; }
    creature[field] = value;
    if (field === 'acted') renderTable();
    saveData();
}

function addEffect(creatureId, effectName) {
    if (!effectName) return;
    let finalEffectName = effectName;
    if (effectName === "Outro/Magia") {
        let customName = prompt("Digite o nome do efeito/magia:");
        if (!customName || customName.trim() === "") return;
        finalEffectName = customName.trim();
    }
    let tracker = getActiveTracker(); let c = tracker.creatures.find(c => c.id === creatureId);
    c.effects.push({ name: finalEffectName, duration: "" });
    renderTable();
}

function updateEffectDuration(creatureId, effectIndex, val) {
    getActiveTracker().creatures.find(c => c.id === creatureId).effects[effectIndex].duration = val;
    saveData();
}

function removeEffect(creatureId, effectIndex) {
    getActiveTracker().creatures.find(c => c.id === creatureId).effects.splice(effectIndex, 1);
    renderTable();
}

function handleHPCalc(id, inputElement) {
    let val = inputElement.value.trim(); if (val === "") return;
    let creature = getActiveTracker().creatures.find(c => c.id === id);

    if (val.startsWith('-')) creature.hp -= parseInt(val.substring(1)) || 0;
    else if (val.startsWith('+')) creature.hp += parseInt(val.substring(1)) || 0;
    else { let pureNum = parseInt(val) || 0; if (creature.maxHp === 0) creature.maxHp = pureNum; creature.hp += pureNum; }

    if (creature.hp < 0) creature.hp = 0;
    inputElement.value = ""; renderTable();
}

function nextTurn() {
    let tracker = getActiveTracker(); if (tracker.creatures.length === 0) return;
    tracker.creatures[tracker.currentTurnIndex].acted = true;
    tracker.currentTurnIndex++;

    if (tracker.currentTurnIndex >= tracker.creatures.length) {
        tracker.currentTurnIndex = 0; tracker.roundCount++;
        tracker.creatures.forEach(c => {
            c.acted = false;
            c.effects.forEach(eff => {
                let d = parseInt(eff.duration);
                if (!isNaN(d) && d > 0) eff.duration = d - 1;
            });
            c.effects = c.effects.filter(eff => {
                let d = parseInt(eff.duration);
                return isNaN(d) || d > 0;
            });
        });
    }
    renderTable();
}

function renderTable() {
    let tracker = getActiveTracker();
    document.getElementById('round-display').innerText = tracker.roundCount;
    const tbody = document.getElementById('initiative-body'); tbody.innerHTML = '';

    tracker.creatures.forEach((c, index) => {
        const tr = document.createElement('tr');
        if (index === tracker.currentTurnIndex) tr.classList.add('active-turn');

        let hpPercent = 0;
        if (c.maxHp > 0) hpPercent = Math.max(0, Math.min(100, (c.hp / c.maxHp) * 100));
        else if (c.hp > 0) hpPercent = 100;
        let barColor = hpPercent > 50 ? 'var(--accent-blue)' : (hpPercent > 20 ? 'var(--accent-gold)' : 'var(--accent-red)');

        let effectsHTML = c.effects.map((eff, i) => `
            <div class="effect-tag ${getConditionClass(eff.name)}">
                <span>${eff.name}</span>
                <input type="number" class="eff-dur" value="${eff.duration}" placeholder="∞" title="Rodadas" onchange="updateEffectDuration(${c.id}, ${i}, this.value)">
                <button class="effect-remove" onclick="removeEffect(${c.id}, ${i})" title="Remover">✕</button>
            </div>
        `).join('');

        let condSelectHTML = `<option value="" disabled selected>+ Adicionar...</option>`;
        conditionOptions.forEach(opt => { condSelectHTML += `<option value="${opt}">${opt}</option>`; });

        tr.innerHTML = `
            <td><input type="number" class="init-input" value="${c.init}" onchange="updateData(${c.id}, 'init', this.value)"></td>
            <td><input type="text" value="${c.name}" onchange="updateData(${c.id}, 'name', this.value)" placeholder="Nome"></td>
            <td>
                <div class="hp-container">
                    <div class="hp-manual-row">
                        <input type="number" class="hp-val" value="${c.hp}" onchange="updateData(${c.id}, 'hp', this.value)">
                        <span>/</span>
                        <input type="number" class="hp-val" value="${c.maxHp}" onchange="updateData(${c.id}, 'maxHp', this.value)">
                    </div>
                    <input type="text" class="hp-calc" placeholder="+ cura | - dano" onchange="handleHPCalc(${c.id}, this)">
                    <div class="hp-bar-bg"><div class="hp-bar-fill" style="width: ${hpPercent}%; background-color: ${barColor};"></div></div>
                </div>
            </td>
            <td><input type="number" class="ca-input" value="${c.ca}" onchange="updateData(${c.id}, 'ca', this.value)"></td>
            <td>
                <div class="effects-container">
                    <div class="effects-list">${effectsHTML}</div>
                    <select class="effect-select" onchange="addEffect(${c.id}, this.value); this.value=''">
                        ${condSelectHTML}
                        <option value="Outro/Magia">Outro (Magia/Buff)...</option>
                    </select>
                </div>
            </td>
            <td><input type="text" value="${c.status}" onchange="updateData(${c.id}, 'status', this.value)" placeholder="..."></td>
            <td><input type="text" value="${c.notes}" onchange="updateData(${c.id}, 'notes', this.value)" placeholder="..."></td>
            <td><input type="checkbox" ${c.acted ? 'checked' : ''} onchange="updateData(${c.id}, 'acted', this.checked)"></td>
            <td class="td-center"><button class="delete-btn" onclick="removeCreature(${c.id})" title="Deletar">✕</button></td>
        `;
        tbody.appendChild(tr);
    });

    saveData();
}

// ==========================================
// LÓGICA DE DADOS
// ==========================================
function roll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function addToLog(formula, result, details) {
    const log = document.getElementById('dice-log');
    if (log.innerHTML.includes('Sua mesa está limpa')) log.innerHTML = '';

    const entry = document.createElement('div');
    entry.className = 'log-entry';

    entry.innerHTML = `
        <div class="log-formula">Rolagem: ${formula}</div>
        <div class="log-total">${result}</div>
        <div class="log-details">[ ${details} ]</div>
    `;
    log.prepend(entry);
    saveDiceLog();
}

function quickRoll(sides) {
    const res = roll(sides);
    addToLog(`1d${sides}`, res, res);
}

function notationRoll() {
    const inputEl = document.getElementById('dice-notation');
    const input = inputEl.value.toLowerCase().replace(/\s+/g, '');
    if (!input) return;

    try {
        const parts = input.match(/([+-]?\d*d\d+|[+-]?\d+)/g);
        if (!parts) throw "Inválido";

        let total = 0;
        let detailsArray = [];

        parts.forEach((part) => {
            if (part.includes('d')) {
                let [qtyStr, sidesStr] = part.split('d');
                let isNegative = qtyStr.startsWith('-');
                let qty = Math.abs(parseInt(qtyStr)) || 1;
                if (qtyStr === "" || qtyStr === "+") qty = 1;
                if (qtyStr === "-") qty = 1;
                let sides = parseInt(sidesStr);

                let rolls = [];
                for (let i = 0; i < qty; i++) {
                    let r = roll(sides);
                    rolls.push(r);
                    total += isNegative ? -r : r;
                }

                let sign = isNegative ? '-' : '+';
                detailsArray.push(`${sign}(${rolls.join('+')})`);
            } else {
                let val = parseInt(part);
                total += val;
                let sign = val >= 0 ? '+' : '';
                detailsArray.push(`${sign}${val}`);
            }
        });

        let finalDetails = detailsArray.join(' ').replace(/^\+/, '').trim();
        addToLog(inputEl.value, total, finalDetails);

        inputEl.value = '';
        inputEl.focus();
    } catch (e) {
        alert("Expressão inválida. Digite algo como '2d8 + 4' ou '1d20'.");
    }
}

function clearLog() {
    document.getElementById('dice-log').innerHTML = `
        <div class="log-empty-msg">
            Sua mesa está limpa. Jogue os dados!
        </div>
    `;
    saveDiceLog();
}

// ==========================================
// LÓGICA DE BUSCA DAS REGRAS
// ==========================================
let categoriaFiltroAtivo = 'todas';

function filtrarCategoria(cat, btn) {
    categoriaFiltroAtivo = cat;
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filtrarRegras();
}

function filtrarRegras() {
    const termoBusca = document.getElementById('buscaRegras').value.toLowerCase();
    const cardsRegras = document.querySelectorAll('.regra-card');

    cardsRegras.forEach(card => {
        const titulo = card.querySelector('.regra-titulo').innerText.toLowerCase();
        const conteudo = card.innerText.toLowerCase();
        const categoriaCard = card.dataset.categoria || 'condicao';

        const textoMatch = !termoBusca || titulo.includes(termoBusca) || conteudo.includes(termoBusca);
        const categoriaMatch = categoriaFiltroAtivo === 'todas' || categoriaCard === categoriaFiltroAtivo;

        card.style.display = (textoMatch && categoriaMatch) ? 'block' : 'none';
    });
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================
window.onload = () => {
    loadSessaoState();
    loadDiceLog();
    loadData();

    document.querySelectorAll('.nome-personagem').forEach(input => {
        input.addEventListener('change', saveSessaoState);
    });

    let isTotallyEmpty = trackers.length === 1 && trackers[0].creatures.length === 0;
    if (isTotallyEmpty) {
        addCreature();
    } else {
        renderTrackerTabs();
        renderTable();
    }
};
