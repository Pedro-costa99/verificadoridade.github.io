function verificar (){
    //window.alert ('Funcionou!')//testa partes do programa
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById ('res')
    var res = document.querySelector ('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //window.alert ('tudo ok')
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <= 10){//ok
                //criança
                img.setAttribute ('src', 'foto-bebe-m.png')

            } else if (idade >10 && idade <= 21){
                //jovem
                img.setAttribute ('src', 'foto-jovem-m.png')

            } else if (idade > 21 && idade <= 60){ //ok
                //adulto
                img.setAttribute ('src', 'foto-adulto-m.png')

            } else{//ok
                //idoso
                img.setAttribute ('src', 'foto-idoso-m.png')
            }            
            

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <= 10){//ok
                //criança
                img.setAttribute ('src', 'foto-bebe-f.png')

            } else if (idade >10 && idade <= 21){
                //jovem
                img.setAttribute ('src', 'foto-jovem-f.png')

            } else if (idade > 21 && idade <= 60){ //ok
                //adulto
                img.setAttribute ('src', 'foto-adulto-f.png')

            } else{//ok
                //idoso
                img.setAttribute ('src', 'foto-idosa-f.png')
            }
        
    }

    res.style.textAlign = 'center'    
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild (img)
    

}

}