const abas = document.querySelectorAll(".aba")

abas.forEach(aba=>{
    aba.addEventListener("click",function(){
        if(aba.classList.contains("selecionado")){
            return;
        }
        selecionarAba(aba)

        selecionarInformacao(aba)

    });


});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado")
}

function selecionarInformacao(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado"); 
        informacaoSelecionada.classList.remove("selecionado");

        idDoElementoInformacoesDaAba = `informacao-${aba.id}`

        const informacaoSerMostrada = document.getElementById(idDoElementoInformacoesDaAba)
        informacaoSerMostrada.classList.add("selecionado")
}