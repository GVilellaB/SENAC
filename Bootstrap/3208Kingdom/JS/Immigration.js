document.querySelector('#send').addEventListener('click', () =>{
    document.querySelector('#UserID').value;
    document.querySelector('#Nick').value;
    document.querySelector('#DiscordName').value;
    document.location.href = `mailto:mail@mail.com?subject=Assunto&body=${conteudo}`;
})