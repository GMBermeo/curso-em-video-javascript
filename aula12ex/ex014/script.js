function carregar() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/sunrise.jpg';
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'img/noon.jpg';
        document.body.style.background = '#e2cd9f'
    } else {
        // Boa noite
        img.src = 'img/sunset.jpg'
        document.body.style.background = '#995533'
    }
}



