function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 23
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 5 && hora < 12) {
        img.src = 'foto-manha.jpg'
        document.querySelector('div#foto').innerHTML += 'Bom Dia!'
        document.body.style.background = '#b994d2'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto-tarde.jpg'
        document.querySelector('div#foto').innerHTML += 'Boa Tarde!'
        document.body.style.background = '#f89485'
    } else if (hora >= 18 && hora < 23) {
        img.src = 'foto-noite.jpg'
        document.querySelector('div#foto').innerHTML += 'Boa Noite!'
        document.body.style.background = '#045ca4'
    } else {
        img.src = 'madrugada.jpg'
        document.querySelector('div#foto').innerHTML += 'Boa Madrugada, A mimir!'
        document.body.style.background = '#586880'
    }
}
