document.getElementById("btn-redirecionamento").addEventListener("click", () => {
    alert(22);
    const nome = document.getElementById("nm-usuario").value;
    localStorage.setItem('nome', nome);
    window.location = "chat.html";
})