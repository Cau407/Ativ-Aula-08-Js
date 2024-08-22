const metros = document.getElementById('qtd-metros');
const unidades = document.getElementById('unidades');
const converterBtn = document.getElementById('converter');
const respostaDiv = document.getElementById('res');
var resposta;

function calcularUnidade() {
    const unidadeSelecionada = unidades.value;
    const metrosValor = parseFloat(metros.value);

    switch(unidadeSelecionada) {
        case 'pes':
            resposta = metrosValor * 3.281;
            break
        case 'jardas':
            resposta = metrosValor * 1.094;
            break
        case 'polegadas':
            resposta = metrosValor * 39.37;
            break
        case 'milhas':
            resposta = metrosValor * 0.000621;
            break
        default:
            alert('Unidade não aceita')
    };
    return resposta;
};

converterBtn.addEventListener('click', () => {
    calcularUnidade();
    
    const p = document.createElement('p');
    if(metros.value > 1){
        p.textContent = `${metros.value} metros são: ${resposta.toFixed(2)} ${unidades.value}`;
    }
    else if(metros.value <= 1){
        p.textContent = `${metros.value} metro é: ${resposta.toFixed(2)} ${unidades.value}`;
    }
    respostaDiv.innerHTML = '';
    respostaDiv.appendChild(p);
});