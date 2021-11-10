
const pesoProdutos = [];

 const produtos = {
    500000:	'BARRA REDONDA 5/8 15,88 MM ',
    500001:	'BARRA REDONDA 3/8', 
    500004:	'BARRA REDONDA MEC 3/8 ',
    500005:	'BARRA REDONDA 1/2 ',
    500006:	'BARRA CHATA 1.1/4 X 1/4 - 6,00 M', 
    500008:	'BARRA REDONDA TREF 38,10 MM 1 1/2 (1045)'  ,
    500009:	'BARRA REDONDA 1/4 (ARAME CONCAVO)',
    500010:	'BARRA CHATA 1.1/4 X 3/16 (TALISCA E ELO) ',
    500012:	'BARRA CHATA 2 X 3/8 ',
    500013:	'BARRA CHATA 1,1/4 X 5/16 ',
    500014:	'BARRA CHATA 1 X 3/16 ',
    500015:	'BARRA CHATA 2 X 1/4',
    500016:	'BARRA REDONDA TREF 3/16 - 4,76MM ',
    500017:	'BARRA REDONDA 5/16' ,
    500020:	'BARRA CHATA 1,1/2 X 5/16 (CONCAVO)', 
    500021:	'BARRA CHATA 1,1/2 X 1/4 (CONCAVO)', 
    500022:	'BARRA TREFILADA 1/2 ',
    500023:	'BARRA TREFILADA 15,00MM  (5/8)' ,
    500025:	'BARRA REDONDA TREF 9/16 - 14,29MM ',
    500026:	'BARRA REDONDA TREF 1" - 25 MM ',
    500029:	'BARRA CHATA 3/8 X 1/2 (CONC MF)', 
    500030:	'BARRA CHATA 1,1/2 X 3/16 (CONC 1175)', 
    500031:	'BARRA QUADR TREF 1 1/2', 
    500034:	'BARRA CHATA 2 X 5/8 ',
    500036:	'TUBO 38 MM OU BARRA TREF 1,1/2', 
    500038:	'BARRA REDONDA TREF 1/2 (1045)' ,
    500039:	'BARRA CHATA 1 X 1/8 (PENEIRAS)', 
    500042:	'BARRA REDONDA TREF 5/8 (1045)' ,
    500043:	'BARRA CHATA 3 X 1/2 - 6,00 M - (1045) UNHA ',
    500045:	'BARRA CHATA 2 X 3/16 (BARRA FLUT) ',
    500050:	'BARRA CHATA 1/4 X 3/4 ',
    500052:	'BARRA CHATA 7/8 X 1/8 ',
    500054:	'BARRA TREF 30,00MM (1020) CONC 36/56/50' ,
    500056:	'BARRA REDONDA TREF 1 1/8 (1045) ',
    500063:	'BARRA RED TREF 1045  50,80 MM - 2 POL' ,
    500064:	'BARRA RED TREF 90 MM (1045) ',
    500069:	'BARRA RED TREF 1045 - 70 E/OU 80 MM' ,
    500071:	'BARRA RED LAM 1045 - 114,30 MM 4 1/2' ,
    500073:	'BARRA RED TREF 1045 - 6,35 MM 1/4' ,
    500074:	'BARRA REDONDA 1,1/2 ',
    500075:	'BARRA CHATA 1,1/2 X 1/2' ,
    500076:	'BARRA CHATA 1,1/4 X 1/8' ,
    500077:	'BARRA CHATA 1/4 X 7/8' ,
    500080:	'BARRA CHATA 5/8 X 1/8' ,
    500096:	'BARRA RED TREF 1045 45,00 MM' ,
    500102:	'BARRA CHATA 1 X 2, 1/2 ',
    500103:	'BARRA RED TREF 3/8 (1045) ' ,
    500106:	'BARRA REDONDA 1 1/4 ' ,
    500109:	'BARRA RED TREF 55 MM 2 1/8 (1045)' ,
    540016:	'BARRA REDONDA MEC 1 POL (CONCAVO DA CR) ',
    540042:	'BARRA REDONDA MEC 1 1/2 ',
    625008:	'BARRA ROSCADA 1M ',
    540003:	'CHAPA (8) - 3000 X 1200 X 4,25MM ',
    500084:	'CHAPA - 25 MM 1 POL ',
    540009:	'CHAPA - 3000 X 1200 X 4,75MM (1045)', 
    500093:	'CHAPA 0,50 (TESTE PALHETA) ',
    500107:	'CHAPA 12,50 MM ' ,
    500094:	'CHAPA 3,75 MM CH N 9 ',
    540010:	'CHAPA 3/4 - 19MM' ,
    500057:	'CHAPA 3/8 - 3000 X 1200 X 9,50 MM' ,
    540020:	'CHAPA 3000 X 1200 X 0,90 (20) ' ,
    540007:	'CHAPA 3000 X 1200 X 1,50MM ',
    540001:	'CHAPA 3000 X 1200 X 2.00MM' ,
    540014:	'CHAPA 3000 X 1200 X 2.65MM' ,
    540004:	'CHAPA 3000 X 1200 X 3,00MM' ,
    540013:	'CHAPA 3000 X 1200 X 3,35 MM ',
    540012:	'CHAPA 3000 X 1200 X 4,75MM - 3/16' ,
    540002:	'CHAPA 3000 X 1200 X 6,35MM - 1/4 ',
    500095:	'CHAPA 3000 X 1200 X 8,00MM (1045) 5/16' ,
    540005:	'CHAPA 3000 X 1200 X 8,00MM - 5/16', 
    540000:	'CHAPA 5/8 - 16,00MM - 1020 ',
    540011:	'CHAPA ALUMINIO 3 X 1250 X 2,00MM C/ PVC' ,
    500092:	'CHAPA GROSSA SAE 1020  22,23 MM 7/8 (ENGREN ESP) ',
    500053:	'CHAPA POLIETILENO DA 3426/3431', 
    540006:	'CHAPA QUADRADO 3/8', 
    500036:	'TUBO 38 MM OU BARRA TREF 1,1/2 ',
    525000:	'TUBO 2" 60,30 X 11,07 INTERNO DE 38,16' ,
    500068:	'TUBO 25 X 25 CH 2,00 MM ',
    675013:	'TUBO INT-10MM EXT-19MM COMP-53MM (HEISS)' ,
    675014:	'TUBO INT-41MM EXT-49MM COMP-650MM (INDEP)' ,
    500097:	'TUBO MEC 40 X 25 (40,60 X 7,90) CONCAVO (TUBO FURA)' ,
    500046:	'TUBO MEC TREF 36X25 (BUCHA CONC)' ,
    525002:	'TUBO MECANICO 134 L 138,00 X 98,00 MM ',
    525001:	'TUBO MECANICO 134L ',
    540021:	'TUBO MECANICO 40 X 20MM ',
    500047:	'TUBO QUADRADO 025 X 025 X 2,65 ',
    500082:	'TUBO QUADRADO 25 X 25 1,50 MM ',
    500104:	'TUBO RED 1 2,00 MM ' ,
    500105:	'TUBO RED 1 POL - 1,20 MM'  ,
    500091:	'TUBO RED 1 POL - 2,65 MM ',
    500108:	'TUBO RED 7/8 CH 2,00 MM ',
    500037:	'TUBO REDONDO 1 1/4' ,
    500067:	'TUBO REDONDO 127,00 X 6,35 (ROTOR) ',
    500024:	'TUBO REDONDO 2 1/2 X 4,75 MM' ,
    500086:	'TUBO REDONDO 8,00 X 1,50'  ,
    500098:	'TUBO REDONDO SCHEDULE (21,30 X 3,73)', 
    500088:	'TUBO RET 20 X 40 1,50 MM ' ,
    500070:	'TUBO RET 20 X 40 2,00 MM ',
    500079:	'TUBO RET 30 X 40 (1,50 OU 2,00 MM) (PENEIRAS) ',
    500049:	'TUBO RET 30 X 50 1,50 MM (PENEIRAS)', 
    500072:	'TUBO RET 30 X 50 2,00 MM (PENEIRA STS)' ,
    500065:	'TUBO RET 30 X 50 X 4,25 E 4,75 ',
    500032:	'TUBO RET 76,20 X 38,10 CH 5,60 MM ',
    500085:	'TUBO RETANGULAR 80 X 40 X 4,25' ,  
    500003:	'TUBO TREF 22 X 11 - (ROLETE)' ,
};

 var arredondaChapa;

//Calcular o peso da chapa
function calcularPesoChapa(){
    let espessura = document.getElementById('chapa');
    let comprimento = document.getElementById('comprimento');
    let largura = document.getElementById('largura');
    let quantidadeChapa = document.getElementById('quantidadeChapa');
    let converte = parseFloat(1000000000);
    let densidade = parseFloat(7870);

    //Verifica se foi preenchido as inputs
    if(espessura.value.length == '' || comprimento.value.length == '' || largura.value.length == '' || quantidadeChapa.value.length == ''){
        alert('Adicione os Valores Necessários!')
    }else {
        //Converter em Números
        espessura = parseFloat(espessura.value);
        comprimento = parseFloat(comprimento.value);
        largura = parseFloat(largura.value);
        quantidadeChapa = parseFloat(quantidadeChapa.value);

        //Formula calculo
        let area = comprimento * largura;

        let pesoChapa = (((area * espessura)/ converte) * densidade) * quantidadeChapa;

        let arredondaChapa = parseFloat(pesoChapa.toFixed(3));
        
        document.getElementById('chapaTotal').value = arredondaChapa;

        console.log(arredondaChapa)

        //Adiciona no objeto pesoProduto
        adicionarChapa = `Chapa ${comprimento} x ${largura} x ${espessura}(mm) total de ${quantidadeChapa}(und) peso total de ${arredondaChapa}(kg)`;

        pesoProdutos.push(adicionarChapa);
        
        //Limpando as inputs das chapas.
        document.getElementById('chapa').value = '';
        document.getElementById('comprimento').value = '';
        document.getElementById('largura').value = '';
        document.getElementById('quantidadeChapa').value = '';  
        
    }    
}

//Adiciona no select o valor da chapa
function adicionarChapaSelect(){
    let chapat = document.getElementById('chapaTotal');
    if(chapat.value.length == ''){
        alert('Adicione um valor para visualizalo!')
    }else {
            let recebe = document.getElementById('recebe');
            let option = document.createElement('option');
            option.text = adicionarChapa;
            recebe.appendChild(option);
            document.getElementById('chapaTotal').value = '';
    }
}


//Calcular o peso da chapa
function calcularPesoRedondas(){
    let barraRedondaDiametro = document.getElementById('barraRedondaDiametro');
    let barraRedondaparede = document.getElementById('barraRedondaparede');
    let barraRedondaComprimento = document.getElementById('barraRedondaComprimento');
    let barraRedondaQuantidade = document.getElementById('barraRedondaQuantidade');
    let pesoEspecificado = parseFloat(0.00785);
    let dividir = parseFloat(1000);

    //Verifica se foi preenchido as inputs
    if(barraRedondaDiametro.value.length == '' || barraRedondaparede.value.length == '' || barraRedondaComprimento.value.length == '' || barraRedondaQuantidade.value.length == ''){
        alert('Adicione os Valores Necessários!')
    }else {
        //Converter em Números
        barraRedondaDiametro = parseFloat(barraRedondaDiametro.value);
        barraRedondaparede = parseFloat(barraRedondaparede.value);
        barraRedondaComprimento = parseFloat(barraRedondaComprimento.value);
        barraRedondaQuantidade = parseFloat(barraRedondaQuantidade.value);

        //Formula calculo
        let peso = (barraRedondaparede * Math.PI * (barraRedondaDiametro - barraRedondaparede)* barraRedondaComprimento * pesoEspecificado) / dividir;

        let arredondaBarraRedonda = parseFloat(peso.toFixed(3));
        document.getElementById('recebeBarraRedonda').value = arredondaBarraRedonda;
        
        //Adiciona no objeto pesoProduto
        adicionarTextoBarraRedonda = `Barra redonda ${barraRedondaDiametro} x ${barraRedondaparede} x ${barraRedondaComprimento}(mm) total de ${barraRedondaQuantidade}(und) peso total de ${arredondaBarraRedonda}(kg)`;

        pesoProdutos.push(adicionarTextoBarraRedonda);
        
        //Limpando as inputs das chapas.
        document.getElementById('barraRedondaDiametro').value = '';
        document.getElementById('barraRedondaparede').value = '';
        document.getElementById('barraRedondaComprimento').value = '';
        document.getElementById('barraRedondaQuantidade').value = ''; 
        
    }    
}

// Adiciona as barras redondas no Select
function adicionarBarraRedondaSelect(){
    let brtotal = document.getElementById('recebeBarraRedonda');
    if(brtotal.value.length == ''){
        alert('Adicione um valor para visualizalo!')
    }else {
            let recebe = document.getElementById('recebe');
            let option = document.createElement('option');
            option.text = adicionarTextoBarraRedonda;
            recebe.appendChild(option);
            document.getElementById('recebeBarraRedonda').value = ''; 
    }
}

// Calculo tubos quadrados
function calculoTubosQuadrados(){
    let tubosQuadradosBitola = document.getElementById('tubosQuadradosBitola');
    let tubosQuadradosParede = document.getElementById('tubosQuadradosParede');
    let tubosQuandradosComprimento = document.getElementById('tubosQuandradosComprimento');
    let tubosQuadradosQuantdade = document.getElementById('tubosQuadradosQuantdade');
    let pesoEspecifico = 0.00715;
    let dividir = 1000;

//Verificação
    if(tubosQuadradosBitola.value.length == '' || tubosQuadradosParede.value.length == '' || tubosQuandradosComprimento.value.length == '' || tubosQuadradosQuantdade.value.length == ''){
        alert('Adicione os Valores necessarios')
    }else {
        tubosQuadradosBitola = parseFloat(tubosQuadradosBitola.value);
        tubosQuadradosParede = parseFloat(tubosQuadradosParede.value);
        tubosQuandradosComprimento = parseFloat(tubosQuandradosComprimento.value);
        tubosQuadradosQuantdade = parseFloat(tubosQuadradosQuantdade.value);

        let pesoQuad = ((  2 * tubosQuadradosParede * ((tubosQuadradosBitola * 2) - 2 * tubosQuadradosParede) * tubosQuandradosComprimento * pesoEspecifico) / dividir) * tubosQuadradosQuantdade;

        arredonPesoTubosQuadrados = parseFloat(pesoQuad.toFixed(3));
        console.log(typeof(tubosQuadradosBitola), typeof(tubosQuadradosBitola), typeof(tubosQuadradosParede), typeof(tubosQuandradosComprimento), typeof(tubosQuadradosQuantdade));
        

        adicionaTextBarraQuad = `Barra Quadrada ${tubosQuadradosBitola} x ${tubosQuadradosBitola}(mm) espessura ${tubosQuadradosParede} comprimento ${tubosQuandradosComprimento} quantidade ${tubosQuadradosQuantdade}(und) peso total de ${arredonPesoTubosQuadrados}`;
        
        console.log(adicionaTextBarraQuad);

        document.getElementById('totalTuboQuadrado').value = arredonPesoTubosQuadrados;

        pesoProdutos.push(adicionaTextBarraQuad);

        document.getElementById('tubosQuadradosBitola').value = '';
        document.getElementById('tubosQuadradosParede').value = '';
        document.getElementById('tubosQuandradosComprimento').value = '';
        document.getElementById('tubosQuadradosQuantdade').value = '';
    }
}

function adicionarTubosQuadradosSelect(){
    let totalQ = document.getElementById('totalTuboQuadrado');
    if(totalQ.value.length == ''){
        alert('Adicione um valor para visualizalo!');
    }else {
        let recebe = document.getElementById('recebe');
        let option = document.createElement('option');
        option.text = adicionaTextBarraQuad;
        recebe.appendChild(option);
        document.getElementById('totalTuboQuadrado').value = '';
    }
}

//Calculo dos tubos Retangulares
function calculoTubosRetangulares(){
    let tubosRetangularesMaior = document.getElementById('tubosRetangularesMaior');
    let tubosRetangularesMenor = document.getElementById('tubosRetangularesMenor');
    let tubosRetangularesParede = document.getElementById('tubosRetangularesParede');
    let tubosRetangularesComprimento = document.getElementById('tubosRetangularesComprimento');
    let tubosRetangularesQuantidade = document.getElementById('tubosRetangularesQuantidade');
    let pesoEspecifico = 0.00785;
    let dividir = 1000;

    if(tubosRetangularesMaior.value.length == '' || tubosRetangularesMenor.value.length == '' || tubosRetangularesParede.value.length == '' || tubosRetangularesComprimento.value.length == '' || tubosRetangularesQuantidade.value.length == ''){
        alert('Adicione os Valores necessarios');
    }else {
        tubosRetangularesMaior = parseFloat(tubosRetangularesMaior.value);
        tubosRetangularesMenor = parseFloat(tubosRetangularesMenor.value);
        tubosRetangularesParede = parseFloat(tubosRetangularesParede.value);
        tubosRetangularesComprimento = parseFloat(tubosRetangularesComprimento.value);
        tubosRetangularesQuantidade = parseFloat(tubosRetangularesQuantidade.value);

        //formula do peso do tubo retangular
        let pesoRetangular = ((2 * tubosRetangularesParede * (tubosRetangularesMaior * tubosRetangularesMenor) - tubosRetangularesParede * tubosRetangularesComprimento * pesoEspecifico) / dividir) * tubosRetangularesQuantidade;

        arredondaTuboRetangular = parseFloat(pesoRetangular.toFixed(3));

        document.getElementById('tubosRetangularesTotal').value = arredondaTuboRetangular;

        adicionarTextRetamgular = `Tubos retangulares ${tubosRetangularesMaior} x ${tubosRetangularesMenor} x ${tubosRetangularesParede}(mm), com ${tubosRetangularesQuantidade}, no total de ${arredondaTuboRetangular}(kg).`

        pesoProdutos.push(adicionarTextRetamgular);
        //Limpar os inputs
        document.getElementById('tubosRetangularesMaior').value = '';
        document.getElementById('tubosRetangularesMenor').value = '';
        document.getElementById('tubosRetangularesParede').value = '';
        document.getElementById('tubosRetangularesComprimento').value = '';
        document.getElementById('tubosRetangularesQuantidade').value = '';
    }
}

//Adicionando valor no select
function adicionarRetanguloSelect(){
    let totalRetamgulo = document.getElementById('tubosRetangularesTotal');
    if(totalRetamgulo.value.length == ''){
        alert('Adicione os valores necessarios para visualizaçao!')
    }else {
        let recebe = document.getElementById('recebe');
        let option = document.createElement('option');
        option.text = adicionarTextRetamgular;
        recebe.appendChild(option);
        document.getElementById('tubosRetangularesTotal').value = '';
    }
}

function calculoBarrasChatas(){
    let barraChatasLargura = document.getElementById('barraChatasLargura');
    let barrasChatasEspessura = document.getElementById('barrasChatasEspessura');
    let barrasChatasComprimento = document.getElementById('barrasChatasComprimento');
    let barrasChatasQuantidade = document.getElementById('barrasChatasQuantidade');
    let pesoEspecificado = 7.85;
    let divide = 1000000;

    //Verificação 
    if(barraChatasLargura.value.length == '' || barrasChatasEspessura.value.length == '' || barrasChatasComprimento.value.length == '' || barrasChatasQuantidade.value.length == ''){
        alert('Adicione os Valores necessarios');
    }else {
        //Converte para real
        barraChatasLargura = parseFloat(barraChatasLargura.value);
        barrasChatasEspessura = parseFloat(barrasChatasEspessura.value);
        barrasChatasComprimento = parseFloat(barrasChatasComprimento.value);
        barrasChatasQuantidade = parseFloat(barrasChatasQuantidade.value);

        //Calculo
        let pesoBarraChata = (((barraChatasLargura * barrasChatasEspessura * pesoEspecificado)* barrasChatasComprimento)/ divide) * barrasChatasQuantidade;

        arredondaBarraChata = parseFloat(pesoBarraChata.toFixed(3));

        console.log(arredondaBarraChata);

        document.getElementById('barrasChatasTotal').value = arredondaChapa;

        adicionarTextBarraChata =  `Barra chata ${barraChatasLargura} x ${barrasChatasEspessura}(mm) total de ${barrasChatasQuantidade}(und) pesando ${arredondaBarraChata}(kg)`;
        
        pesoProdutos.push(adicionarTextBarraChata);

        document.getElementById('barrasChatasTotal').value = arredondaBarraChata;

        //limpar inputs
        document.getElementById('barraChatasLargura').value = '';
        document.getElementById('barrasChatasEspessura').value = '';
        document.getElementById('barrasChatasComprimento').value = '';
        document.getElementById('barrasChatasQuantidade').value = '';
    }
}

//Adiciona valor na select
function adicionarBarraChataSelect(){
    let totalBarraChata = document.getElementById('barrasChatasTotal');
    if(totalBarraChata.value.length == ''){
        alert('Adicione os valores necessarios para visualizaçao!') 
    }else {
        let recebe = document.getElementById('recebe');
        let option = document.createElement('option');
        option.text = adicionarTextBarraChata;
        recebe.appendChild(option);
        document.getElementById('barrasChatasTotal').value = '';
    }
}

function calculoCantoneiras(){
    let larguraCantoneira = document.getElementById('larguraCantoneira');
    let espessuraCantoneira = document.getElementById('espessuraCantoneira');
    let comprimentoCantoneira = document.getElementById('comprimentoCantoneira');
    let quantidadeCantoneira = document.getElementById('quantidadeCantoneira');
    let pesoEspecificado = 8;
    let divide = 100000;

    //Verificação 
    if(larguraCantoneira.value.length == '' || espessuraCantoneira.value.length == '' || comprimentoCantoneira.value.length == '' || quantidadeCantoneira.value.length == ''){
        alert('Adicione os Valores necessarios');
    }else {
        //Converte para real
        larguraCantoneira = parseFloat(larguraCantoneira.value);
        espessuraCantoneira = parseFloat(espessuraCantoneira.value);
        comprimentoCantoneira = parseFloat(comprimentoCantoneira.value);
        quantidadeCantoneira = parseFloat(quantidadeCantoneira.value);

        //Calculo
        let pesoCantoneira =(((((larguraCantoneira + larguraCantoneira)* espessuraCantoneira)- espessuraCantoneira * pesoEspecificado)* comprimentoCantoneira)/ divide)* quantidadeCantoneira;

        arredondaBarraChata = parseFloat(pesoCantoneira.toFixed(3));

        console.log(arredondaBarraChata);

        document.getElementById('totalCantoneira').value = arredondaBarraChata;

        adicionarTextCantoneira =  `Cantoneira ${larguraCantoneira} x ${espessuraCantoneira}(mm) total de ${quantidadeCantoneira}(und) pesando ${arredondaBarraChata}(kg)`;
        
        pesoProdutos.push(adicionarTextCantoneira);

        //limpar inputs
        document.getElementById('larguraCantoneira').value = '';
        document.getElementById('espessuraCantoneira').value = '';
        document.getElementById('comprimentoCantoneira').value = '';
        document.getElementById('quantidadeCantoneira').value = '';
    }
}

//Adiciona valor na select
function adicionarCantoneiraSelect(){
    let totalCant = document.getElementById('totalCantoneira');
    if(totalCant.value.length == ''){
        alert('Adicione os valores necessarios para visualizaçao!') 
    }else {
        let recebe = document.getElementById('recebe');
        let option = document.createElement('option');
        option.text = adicionarTextCantoneira;
        recebe.appendChild(option);
        document.getElementById('totalCantoneira').value = '';
    }
}

let janela, nome, local;

function imprimirPdf(){
    let nome1 = document.getElementById('nomeEmpresa');
    //Verificação 
    if(nome1.value.length == ''){
        alert('Adicione o nome!!!');
    }else {
        let name = document.getElementById('nomeEmpresa').value;
        let ender = document.getElementById('endere').value;
        let tel = document.getElementById('t').value;

        sessionStorage.canal = name;
        sessionStorage.ender = ender;
        sessionStorage.telefone = JSON.stringify(tel);

        sessionStorage.produtos = JSON.stringify(pesoProdutos);

        janela = window.open('./src/pdf.html', '_blank', 'width=1500, heigth=800'); 
        
    }  
}
