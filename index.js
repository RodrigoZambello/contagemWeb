
const pesoProdutos = [];

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

/*
function checkObject(){
    if ()
}*/
