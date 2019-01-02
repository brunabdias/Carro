// Cria o objeto carro.
var carro = {
    modelo: 'HB20',
    placa: 'MMM-0978',
    ano: '2016',
    cor: 'Branco',
    marca: 'Hyundai',
    acessorios: new Array('Ar-condicionado', 'Vidro elétrico', 'Câmbio automático', 
            'Controle bluetooth', 'Teto Solar'),

    // Exibe todos os atributos do objeto carro.
    exibeAtributos:function() {
        console.log('-----Veículo-----')
        console.log('Modelo: ' + this.modelo);
        console.log('Placa: ' + this.placa);
        console.log('Ano: ' + this.ano);
        console.log('Cor: ' + this.cor);
        console.log('Marca: ' + this.marca);
        console.log('Acessórios: ' + this.acessorios);
        console.log('----------------');
    },
    /*
        Calcula o consumo médio do carro.

        O cálculo da média de consumo é realizado
        dividindo os quilômetros rodados desde o último abastecimento
        pelos litros usados para completar o tanque no segundo abastecimento.
    */
    calculaCosumo:function() {
        var kmRodados = 550;
        var litros = 30;

        var consumo = kmRodados / litros;
        console.log('O consumo do veículo é: ' + consumo);

        if (consumo >= 15) {
            console.log('Parabéns, seu carro é econômico!');
        } if (consumo < 10) {
            console.log('Seu carro consome muito combustível.');
        }
    },
    /*
        Verifica o vencimento do carro (de acordo com o último
        dígito da placa).
    */
    verificaVencimento:function() {
        var stringPlaca = this.placa;
        var lastDigit = stringPlaca.slice(-1);
        var mes = 11;

        if (lastDigit == 8 && mes == 10) {
            console.log('Seu documento vencerá este mês');
        } else if (lastDigit == 8 && mes < 10) {
            console.log('Seu documento vencerá em outubro');
        } else {
            console.log('Seu documento está vencido');
        }
    },
    // Calcula a depreciação mensal do veículo.
    calculaDeprecicao:function() {
        var valor = 25000;
        var deprec = 1.66;

        var novoValor = valor - deprec;

        console.log('O valor depreciado do seu carro este mês é: ' + novoValor);
        console.log('O valor depreciado do seu carro no próximo mês será: '
                    + (novoValor - deprec));
    },
    // Verifica se o veículo possui teto solar.
    verificaTeto:function() {
        for (var i = 0; i <= 4; i++) {
            if (carro.acessorios[i] == 'Teto Solar') {
                console.log('O carro possui teto solar');
            }
        }
    }
}
