function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    }

    function comprarPista(qtd) {
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if (qtd > qtdPista) {
            alert('Quantidade indisponível para tipo pista');
        } else {
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!');
            limparCampo ()
        }
    }

    if (tipo.value == 'superior') {
        comprarCadeiraSuperior(qtd);
    }
    function comprarCadeiraSuperior(qtd) {
        let qtdCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if (qtd > qtdCadeiraSuperior) {
            alert('Quantidade indisponível para tipo Cadeira superior');
        } else {
            qtdCadeiraSuperior = qtdCadeiraSuperior - qtd;
            document.getElementById('qtd-superior').textContent = qtdCadeiraSuperior;
            alert('Compra realizada com sucesso!');
            limparCampo ()
        }
    }

    if (tipo.value == 'inferior') {
        comprarCadeiraInferior(qtd);
    }
    function comprarCadeiraInferior(qtd) {
        let qtdCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if (qtd > qtdCadeiraInferior) {
            alert('Quantidade indisponível para tipo Cadeira Inferior');
        } else {
            qtdCadeiraInferior = qtdCadeiraInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdCadeiraInferior;
            alert('Compra realizada com sucesso!');
            limparCampo ()
        }
    }
}
 function limparCampo (){
    qtd = document.querySelector('input');
    qtd.value='';
 }



