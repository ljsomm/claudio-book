window.onload = () => {
    const nome = localStorage.getItem('nome');
    document.getElementById("greetings").innerHTML = `Bem vindo, ${nome}`;
}


const client = new WebSocket('ws://localhost:3030');


document.getElementById("chat-form").addEventListener("submit", function(e){
    e.preventDefault();
    client.send(JSON.stringify({name: localStorage.getItem("nome"), msg: document.getElementById("inp-message").value}));
})


client.onmessage = (msg) => {
    document.getElementById("chatz").innerHTML =  document.getElementById("chatz").innerHTML + `<p><b>${JSON.parse(msg.data).name}:</b><span>${JSON.parse(msg.data).msg}</span></p>`;
} 