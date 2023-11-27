function formatarMoeda(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length === 0) {
        input.value = 'R$0,00';
        return;
    }

    valor = parseFloat(valor) / 100;
    input.value = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function obterDataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    return `${ano}-${mes}-${dia}`;
}

function boleto() {
    criarInputs('Valor ', 'Saldo ', 'Chave ', 'Mensagem ', 'Data ', 'bi-upc');
}

function depositar() {
    criarInputs('Valor ', 'Saldo ', 'Chave ', 'Mensagem ', 'Data ', 'bi-cash-stack');
}

function pix() {
    criarInputs('Valor ', 'Saldo ', 'Chave ', 'Mensagem ', 'Data ', 'bi-qr-code');
}

function transfe() {
    criarInputs('Valor ', 'Saldo ', 'Chave ', 'Mensagem ', 'Data ', 'bi-arrow-left-right');
}

function criarInputs(labelValor, labelSaldo, labelChave, labelMensagem, labelData, icone) {
    const inputMain = document.getElementById('inputMain');
    if (!inputMain) {
        console.error('Elemento inputMain não encontrado.');
        return;
    }

    // Limpa qualquer conteúdo anterior
    inputMain.innerHTML = '';

    const iconeElement = document.createElement('i');
    iconeElement.classList.add('bi', icone, 'menu-icon');

    const buttonIconElement = document.createElement('span');
    buttonIconElement.classList.add('menu-icon');
    buttonIconElement.appendChild(iconeElement);
    inputMain.appendChild(buttonIconElement);

    // 1. Label e Input para Valor
    criarInput(inputMain, 'Valor', 'text', 'valor', 'formatarMoeda(this)', false, 'R$0,00');

    // 2. Label e Input para Saldo
    criarInput(inputMain, labelSaldo, 'text', 'saldo', null, true, 'INDISPONÍVEL');

    // 3. Label e Input para Chave
    criarInput(inputMain, labelChave, 'text', 'chave');

    // 4. Label e Input para Mensagem
    criarInput(inputMain, labelMensagem, 'text', 'mensagem');

    // 5. Label e Input para Data
    criarInput(inputMain, labelData, 'date', 'data', null, false, obterDataAtual());

    // Botão Concluir
    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.classList.add('btn-concluir');
    botaoConcluir.addEventListener('click', concluir);
    inputMain.appendChild(botaoConcluir);

    // Adiciona evento de input para atualizar o botão "Concluir"
    const inputs = inputMain.querySelectorAll('.dynamic-input');
    inputs.forEach(input => {
        input.addEventListener('input', atualizarBotaoConcluir);
    });
}

function criarInput(container, label, type, id, onchange, readonly = false, placeholder = '') {
    // Label
    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.classList.add('dynamic-label');

    // Input
    const inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.id = id;
    inputElement.classList.add('dynamic-input');
    inputElement.addEventListener('input', function () {
        if (onchange) {
            eval(onchange);
        }
    });
    inputElement.readOnly = readonly;
    inputElement.placeholder = placeholder;

    // Se for um campo de data, preenche com a data atual
    if (type === 'date') {
        inputElement.value = obterDataAtual();
    }

    // Adiciona ao container
    container.appendChild(labelElement);
    container.appendChild(inputElement);
}

function concluir() {
    // Pega os valores das inputs
    const valor = document.getElementById('valor').value;
    const saldo = document.getElementById('saldo').value;
    const chave = document.getElementById('chave').value;
    const mensagem = document.getElementById('mensagem').value;
    const data = document.getElementById('data').value;

    // Verifica se todos os campos, exceto o saldo, estão preenchidos
    if (valor && chave && mensagem && data) {
        // Exibe um alerta com os dados
        alert(`Valor: ${valor}\nSaldo: ${saldo}\nChave: ${chave}\nMensagem: ${mensagem}\nData: ${data}`);
    } else {
        alert('Preencha todos os campos antes de concluir.');
    }
}

function atualizarBotaoConcluir() {
    const valor = document.getElementById('valor').value;
    const chave = document.getElementById('chave').value;
    const mensagem = document.getElementById('mensagem').value;
    const data = document.getElementById('data').value;

    const botaoConcluir = document.querySelector('#inputMain button');
    if (valor && chave && mensagem && data) {
        botaoConcluir.disabled = false;
    } else {
        botaoConcluir.disabled = true;
    }
}
