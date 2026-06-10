function mostrarMensagem() {
    alert("O futuro sustentável depende das escolhas que fazemos hoje!");
}

function novaMensagem() {

    const mensagens = [
        "🌱 Produzir e preservar podem caminhar juntos.",
        "💧 Cada gota de água economizada faz diferença.",
        "🌳 Preservar hoje é garantir o amanhã.",
        "♻️ Sustentabilidade é responsabilidade de todos.",
        "🚜 Agro forte, meio ambiente protegido."
    ];

    const sorteio = Math.floor(Math.random() * mensagens.length);

    document.getElementById("mensagem").innerHTML =
    mensagens[sorteio];
}