class Lancamento {
    constructor(id, descricao, valor, data, tipo) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.data = data;
        this.tipo = tipo;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamento(...lancamentos) { //... significa que é um array, recebe varios parametros
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento('salario', 'Salario', 45000, '01/10/2018', 'receita');
const contaLuz = new Lancamento('luz', 'Luz', -220, '01/10/2018', 'despesa');
const contaInternet = new Lancamento('internet', 'Internet', -200, '01/10/2018', 'despesa');

const contas = new CicloFinanceiro(10, 2018);
contas.addLancamento(salario, contaLuz, contaInternet);
console.log(contas.sumario());