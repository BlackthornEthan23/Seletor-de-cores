function mudaCorFundo() {
    let btnMuda = document.querySelector("#muda-cor");
    let btnReset = document.querySelector("#reseta-cor");
    let caixaCor = document.querySelector("#caixa-cor");

    btnMuda.addEventListener('click', function () {

        // Gera 3 números aleatórios entre 0 e 255 (padrão RGB)
        let r = Math.floor(Math.random() * 256);

        let g = Math.floor(Math.random() * 256);

        let b = Math.floor(Math.random() * 256);


        // Aplica a cor na caixa
        caixaCor.style.background = `rgb(${r}, ${g}, ${b})`;

    });


    // 3. Clique para Resetar (volta para a cor original, ex: cinza escuro)
    btnReset.addEventListener('click', function () {
        caixaCor.style.background = 'rgb(75, 75, 75)'; // Coloque a cor original da sua foto aqui
    });


}

mudaCorFundo()