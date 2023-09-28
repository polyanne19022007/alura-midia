    function tocaSom (seletorAUDIO) {
        const elemento = document.querySELECTOR(seletorAUDIO)

        if (elemento && elemento.localNAMe === 'audio') {
            elemento.play();
        }
        else{
             //alert('elemento não encontrado');
             console.log('elemento não encontrado ou eletor inválido')
        }
        
    }
