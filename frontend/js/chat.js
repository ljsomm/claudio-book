window.onload = () => {
    const nome = localStorage.getItem('nome');
    document.getElementById("greetings").innerHTML = `Bem vindo, ${nome}`;
}