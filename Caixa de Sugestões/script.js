document.getElementById("form_sugestao").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = {
        mensagem: document.getElementById("mensagem").value
    }

    const btn_enviar = document.getElementById("btn_enviar")
    btn_enviar.textContent = "Enviando..."

    emailjs.send("service_zalsebs","template_nte64qb", formData)
    .then(() => {
        alert("Enviado com Sucesso!!!")
    })
    .catch((error) => {
        console.error("Erro no Envio.", error)
    })
    .finally(() => {
        btn_enviar.textContent = "Enviar"
    })
})