function moedaImoveis(valor, id) {
    valor = valor.replace(/^0+/g, '');
    var valorFormatado = (parseFloat(valor.replace(/\D/g, '')) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById(id).value = valorFormatado;
}

// Veículos
function moedaVeiculos(valor, id) {
    valor = valor.replace(/^0+/g, '');
    var valorFormatado = (parseFloat(valor.replace(/\D/g, '')) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById(id).value = valorFormatado;
}

// Equipamentos
function formatarMoeda(valor, id) {
    valor = valor.replace(/^0+/g, '');
    var valorFormatado = (parseFloat(valor.replace(/\D/g, '')) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById(id).value = valorFormatado;
}

function calcularEquipamento() {
    var valorEquipamentos = document.getElementById("valorEquipamentos").value.replace(/[^\d,]/g, '').replace(',', '.');
    valorEquipamentos = parseFloat(valorEquipamentos);

    var parcelasEquipamentos = parseInt(document.getElementById("parcelasEquipamentos").value);
    var valorJurosEquipamentos = valorEquipamentos + (valorEquipamentos * parcelasEquipamentos / 100);
    var valorParcelasEquipamentos = valorJurosEquipamentos / parcelasEquipamentos;

    var resultadoEquipamentos = document.getElementById("resultadoEquipamentos");

    resultadoEquipamentos.innerHTML =
        "<h1 id='valorParcelaEquipamentos'>Valor parcelas: <br>" +
        parcelasEquipamentos +
        "x " +
        valorParcelasEquipamentos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +
        "</h1><br>" +
        "<h1 id='valorTotalEquipamentos'>Valor total: <br>" +
        valorJurosEquipamentos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +
        "</h1>" +
        "<button id='btnEquipamentos' onclick='btnMensagemEquipamentos()'>Solicitar Orçamento</button>" 
        + "<h2 id=mensagemOrcamento></h2>";
}

function btnMensagemEquipamentos() {
    var mensagemOrcamento = document.getElementById("mensagemOrcamento");
    mensagemOrcamento.innerHTML = "Orçamento enviado";
    mensagemOrcamento.style.color = '#ffffff';
}

// Imóveis
function calcularImoveis() {
    var valorImoveis = document.getElementById("valorImoveis").value.replace(/[^\d,]/g, '').replace(',', '.');
    valorImoveis = parseFloat(valorImoveis);

    var parcelasImoveis = parseInt(document.getElementById("parcelasImoveis").value);
    var valorJurosImoveis = valorImoveis + (valorImoveis * parcelasImoveis * 2 / 100);
    var valorParcelasImoveis = valorJurosImoveis / parcelasImoveis;

    var resultadoImoveis = document.getElementById("resultadoImoveis");

    resultadoImoveis.innerHTML =
        "<h1 id='valorParcelaImoveis'>Valor parcelas: <br>" +
        parcelasImoveis +
        "x " +
        valorParcelasImoveis.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +
        "</h1><br>" +
        "<h1 id='valorTotalImoveis'>Valor total: <br>" +
        valorJurosImoveis.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +
        "</h1>" +
        "<button id='btnImoveis' onclick='btnMensagemImoveis()'>Solicitar Orçamento</button>" 
        + "<h2 id=mensagemOrcamentoImoveis></h2>";
}

function btnMensagemImoveis() {
    var mensagemOrcamentoImoveis = document.getElementById("mensagemOrcamentoImoveis");
    mensagemOrcamentoImoveis.innerHTML = "Orçamento enviado";
    mensagemOrcamentoImoveis.style.color = '#ffffff';
}

// Veículos
function calcularVeiculos() {
    var valorVeiculos = document.getElementById("valorVeiculos").value.replace(/[^\d,]/g, '').replace(',', '.');
    valorVeiculos = parseFloat(valorVeiculos);

    var parcelasVeiculos = parseInt(document.getElementById("parcelasVeiculos").value);
    var valorJurosVeiculos = valorVeiculos + (valorVeiculos * parcelasVeiculos * 1.5 / 100);
    var valorParcelasVeiculos = valorJurosVeiculos / parcelasVeiculos;

    var resultadoVeiculos = document.getElementById("resultadoVeiculos");

    resultadoVeiculos.innerHTML =
        "<h1 id='valorParcelaVeiculos'>Valor parcelas: <br>" +
        parcelasVeiculos +
        "x " +
        valorParcelasVeiculos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +
        "</h1><br>" +
        "<h1 id='valorTotalVeiculos'>Valor total: <br>" +
        valorJurosVeiculos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +
        "</h1>" +
        "<button id='btnVeiculos' onclick='btnMensagemVeiculos()'>Solicitar Orçamento</button>" 
        + "<h2 id=mensagemOrcamentoVeiculos></h2>";
}

function btnMensagemVeiculos() {
    var mensagemOrcamentoVeiculos = document.getElementById("mensagemOrcamentoVeiculos");
    mensagemOrcamentoVeiculos.innerHTML = "Orçamento enviado";
    mensagemOrcamentoVeiculos.style.color = '#ffffff';
}