function functionMain() {

    const form = document.querySelector("#form");

    const result = document.querySelector('#result')

    function recebeEventoform(evento) {
        evento.preventDefault();

        let rNome = form.querySelector('#name');
        let rAltura = form.querySelector('#heigth');
        let rPeso = form.querySelector('#kilos');
        
        console.log('peso', rPeso, typeof rPeso);
        console.log('Altura', rAltura, typeof rAltura);
        console.log('nome', rNome, typeof rNome);

        let imc = Number(rPeso.value) / Number(rAltura.value) ** 2;
        let resultIMC;

        let enter = form.querySelector('#enter');

        if (imc <= 18.5) {
            resultIMC = ` ${imc.toFixed(1)} IMC Abaixo do peso!`;
        } else if (imc <= 24.9) {
            resultIMC = ` ${imc.toFixed(1)} IMC Peso normal!`
        } else if (imc <= 29.9) {
            resultIMC = ` ${imc.toFixed(1)} IMC Sobrepeso`
        } else if (imc <= 34.9) {
            resultIMC = ` ${imc.toFixed(1)} IMC Obesidade grau |`
        } else if (imc <= 39.9) {
            resultIMC = ` ${imc.toFixed(1)} IMC Obesidade grau ||`
        } else if (imc >= 40){
            resultIMC = 'Obesidade grau |||'
        } else {
            resultIMC = ` [${imc}] Erro: valor invalido`
        }
        console.log(resultIMC);
        result.innerHTML = `<section class="container"><h2>Resultado</h2><br><strong>Nome:</strong> ${rNome.value} | <strong>Peso</strong>: ${rPeso.value} | <strong>Altura</strong>: ${rAltura.value} | <strong>Seu IMC:${resultIMC}</strong></section>`;
    };

    form.addEventListener('submit', recebeEventoform);

};
functionMain()
